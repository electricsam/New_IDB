import React from 'react';
import {Link} from 'react-router-dom';

import store from '../store';
import {tsunamiEventColumnDefinitions as tseColDefs } from "../components/Tsunami/TsunamiEventDataDisplay/TsunamiDataConstants";
import {earthquakeColumnDefinitions as eqColDefs} from "../components/Earthquakes/EarthquakeDataDisplay/EarthquakeDataConstants";
import {RunupColumnDefinitions as rnpColDefs} from "../components/Tsunami/TsunamiRunupDataDisplay/RunupDataConstants";
import TableHeader from "../components/TableHeader/TableHeader";
import {VolcanoEventColumnDefinitions as veColDefs} from "../components/Volcanoes/VolcanoDataDisplay/VolcanoEventConstants";
import {VolcanoLocColumnDefinitions as volLocColDefs } from "../components/Volcanoes/VolcanoLocDataDisplay/VolcanoLocConstants";
import InfoLink from "../components/InfoLink/InfoLink";

const CryptoJS = require('crypto-js');

const action = obj => store.dispatch(obj);

const hashPass = 'lockunlock';


/**
 * converts a string from camelCase to pascal case AKA upper CamelCase
 *
 * @param string
 * @returns {string}
 */
const camelToPascal = (string) => {
  if (typeof string !== 'string') return 'error in camelToPascal';
  return string.split(/(?=[A-Z])/).map((e, i, a) => (
    a[i] = e.charAt(0).toUpperCase() + e.slice(1)
  )).join(' ');
};

/**
 * dispatches an action OPEN_MODAL to open the DefinitionModal component that holds all definitions of columns. Its
 * payload contains all all necessary info for modal, scraped from the passed object (node)
 *
 * @param node
 */
const openModal = (node) => {
  if(node){
    console.log(node);
    action({
      type: 'OPEN_MODAL',
      payload: {
        data: node.data,
        validValues: node.validValues,
        title: node.title,
        secondaryData: node.secondaryData,
        component: node.component
      }
    })
  }
};

//Object for mapping incoming tsunami data column names to new names for display purposes. Key is old name, Value is new
// name.
const tsTranslateValue = {
  locationName: 'Name',
  causeCode: 'Code',
  eventValidity: 'Val',
  tsIntensity: 'Tsu Int',
  tsMtAbe: 'Abe',
  tsMtIi: 'Iida',
  eqMagnitude: 'Earthquake Mag',
  maxEventRunup: 'Max Water Height',
  second: 'Sec',
  minute:'Min',
  hour:'Hr',
  month: 'Mo',
  day: 'Dy',
  missingAmountOrder: "Missing Description",
  injuriesAmountOrder: "Injuries Description",
  deathsAmountOrder: "Deaths Description",
  housesAmountOrder: "Houses Destroyed Description",
  housesDamagedAmountOrder: "Houses Damaged Description",
  damageAmountOrder: "Damage Description",
  missingAmountOrderTotal: "Total Missing Description",
  injuriesAmountOrderTotal: "Total Injuries Description",
  deathsAmountOrderTotal: "Total Deaths Description",
  housesAmountOrderTotal: "Total Houses Destroyed Description",
  housesDamAmountOrderTotal: "Total Houses Damaged Description",
  damageAmountOrderTotal: "Total Damage Description",
};

/**
 * Function for mapping incoming Tsunami Event data to the Header Accessor structure
 * {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to note that the arr param given is
 * data provided by the api call and is an array of JavaScript Objects where keys are column names and values are
 * associated data (if anny exists).  Keys are the exact same for every object in the array. An array of Objects is
 * returned containing Headers and accessors for the data, based on a schema devised by {@link https://react-table.js.org/#/story/readme ReactTable}.
 * The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display the data.
 * Additional Headers and accessors are added for new columns that are generated outside of the api (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToTsunamiEventTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: () => <TableHeader title="Earthquake Mag" accessor={e} handleClick={() => openModal(tseColDefs[e])}/>,
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
            {props.value}
          </Link>
        })
      }else if(e === 'id' || e === "comments" ){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false
        })
      }else if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'numRunup'){
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
              accessor: e,
            Cell: props => <Link
            to={`/tsunami/runup/data?${encodeQueryString(JSON.stringify({eventid: props.original.id + ""}))}`}>
          {props.value}
        </Link>
      })
      }else if(tsTranslateValue[e]){
        result.push({
          Header: () => <TableHeader
              title={tsTranslateValue[e]}
              accessor={e}
              handleClick={() => openModal(tseColDefs[e])}
          />,
          accessor: e });
      } else{
        result.push({
          Header: () => (
              <TableHeader
                  title={camelToPascal(e)}
                  accessor={e}
                  handleClick={() => openModal(tseColDefs[e])}
              />),
          accessor: e });
      }
    });
    result.splice(10, 0, {
      Header: () => (
          <TableHeader
            title="More Info"
            accessor="moreInfo"
            handleClick={() => openModal(tseColDefs['moreInfo'])}
          />),
      accessor: 'moreInfo',
      Cell: props => <InfoLink to={`/tsunami/event/moreinfo/${props.original.id}`}/>
    });
    result.splice(10, 0, {
      Header: () => (
          <TableHeader
              title="Related Volcano"
              accessor="relatedVolcano"
              handleClick={() => openModal(tseColDefs['relatedVolcano'])}
          />),
      accessor: 'realatedVolcano',
      Cell: props => <Link style={{color: "blue"}}
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
        Vol
      </Link>
    })
  }
  return result;
};

/**
 * Function for mapping incoming Tsunami Event data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToTsunamiEventMoreInfo = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if (e === 'eqMagnitude') {
        result.push({
          Header: () => <TableHeader title="Earthquake Mag" accessor={e} handleClick={() => openModal(tseColDefs[e])}/>,
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
            {props.value}
          </Link>
        })
      } else if (e === 'id' || e === "comments") {
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false
        })
      } else if (e === "latitude" || e === "longitude") {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      } else if (e === 'numRunup') {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e,
          Cell: props => <Link
              to={`/tsunami/runup/data?${encodeQueryString(JSON.stringify({eventid: props.original.id + ""}))}`}>
            {props.value}
          </Link>
        })
      } else if (tsTranslateValue[e]) {
        result.push({
          Header: () => (
              <TableHeader title={tsTranslateValue[e]} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e
        });
      } else {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e
        });
      }
    });
  }
  return result;
};

/**
 * Function for mapping incoming Tsunami Event data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToTsunamiEventMoreInfoRunup = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if (e === 'id') {
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false
        })
      } else if (e === "latitude" || e === "longitude") {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      } else if (e === 'numRunup') {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e,
          Cell: props => <Link
              to={`/tsunami/runup/data?${encodeQueryString(JSON.stringify({eventid: props.original.id + ""}))}`}>
            {props.value}
          </Link>
        })
      } else if (tsTranslateValue[e]) {
        result.push({
          Header: () => (
              <TableHeader title={tsTranslateValue[e]} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e
        });
      } else {
        result.push({
          Header: () => (
              <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(tseColDefs[e])}/>
          ),
          accessor: e
        });
      }
    });
  }
  return result;
};

//Object for mapping incoming runup data column names to new names for display purposes. Key is old name, Value is new
// name.
const runupTranslateVal = {
  locationName: 'Name',
  causeCode: 'Code',
  eventValidity: 'Val',
  eqMagnitude: 'Earthquake Mag',
  second: 'Sec',
  minute:'Min',
  hour:'Hr',
  month: 'Mo',
  day: 'Dy',
  firstMotion: '1st Mtn',
  distFromSource: 'Distance From Source',
  doubtful: 'Doubtful Runup',
  runupHt: 'Max Water Height',
  runupHoriz: 'Max Inundation Distance',
  typeMeasurementId: 'Type of Measurement',
};

//Object for mapping incoming runup more info data column names to new names for display purposes. Key is old name,
// Value is new name.
const runupMoreInfoTranslate = {
  locationName: 'Name',
  distFromSource: 'Distance From Source',
  doubtful: 'Doubtful Runup',
  runupHt: 'Max Water Height',
  runupHoriz: 'Max Inundation Distance',
  typeMeasurementId: 'Type of Measurement',
  period: 'Per',
  firstMotion: '1st Mtn',
  deaths: 'Number of Deaths',
  deathsAmountOrder: 'Deaths Description',
  injuries: 'Number of Injuries',
  injuriesAmountOrder: 'Description of Injuries',
  damageMillionsDollars: 'Damage in Millions',
  damageAmountOrder: 'Damage Description',
  housesDestroyed: 'Number of Houses Destroyed',
  housesAmountOrder: 'Description of Houses Destroyed',
  housesDamaged: 'Number of Houses Damaged',
  housesDamagedAmountOrder: 'Description of Houses Damaged'
};

/**
 * Function for mapping incoming Tsunami Runup data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToRunupTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: () => (<TableHeader accessor={e} title='Eq Mag' handleClick={() => openModal(rnpColDefs[e])}/>),
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
            {props.value}
          </Link>
        })
      }else if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader handleClick={() => openModal(rnpColDefs[e])} title={camelToPascal(e)} accessor={e}/>),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'eventId' || e === 'id'){
        result.push({Header: camelToPascal(e), accessor: e, show: false})
      } else if(runupTranslateVal[e]){
        result.push({
          Header: () => (<TableHeader accessor={e} title={runupTranslateVal[e]} handleClick={() => openModal(rnpColDefs[e])}/>),
          accessor: e});
      }else{
        result.push({
          Header: () => (<TableHeader accessor={e} title={camelToPascal(e)} handleClick={() => openModal(rnpColDefs[e])}/>),
          accessor: e });
      }
    });
    result.splice(11,0, {
      Header:() => (<TableHeader handleClick={() => openModal(rnpColDefs['tsuSrc'])} title='Tsu Src' accessor={'tsuSrc'}/>),
      accessor: 'tsuSrc',
      Cell: props => <InfoLink to={`/tsunami/event/moreinfo/${props.original.eventId}`}/>
    });
    result.splice(12, 0, {
      Header:() => (<TableHeader handleClick={() => openModal(rnpColDefs['relatedVolcano'])} title='Vol' accessor='relatedVolcano'/>),
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
        Vol
      </Link>
    });
    result.splice(13,0,{
      Header: () => (<TableHeader accessor='moreRunupInfo' title='Tsu Runup' handleClick={() => openModal(rnpColDefs['moreRunupInfo'])}/>),
      accessor: 'moreRunupInfo',
      Cell: props => <InfoLink to={`/tsunami/runup/moreinfo/${props.original.id}/${props.original.eventId}`}/>
    });
  }
  return result;
};

/**
 * Function for mapping incoming Tsunami Runup data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToRunupMoreInfoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if (e === "latitude" || e === "longitude") {
        result.push({
          Header: () => (
              <TableHeader handleClick={() => openModal(rnpColDefs[e])} title={camelToPascal(e)} accessor={e}/>
          ),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      } else if (e === 'eventId' || e === 'id' || e === 'comments') {
        result.push({Header: camelToPascal(e), accessor: e, show: false})
      } else if (runupMoreInfoTranslate[e]) {
        result.push({
          Header: () => (
              <TableHeader
                  accessor={e}
                  title={runupMoreInfoTranslate[e]}
                  handleClick={() => openModal(rnpColDefs[e])}
              />
          ),
          accessor: e
        });
      } else {
        result.push({
          Header: () => (
              <TableHeader accessor={e} title={camelToPascal(e)} handleClick={() => openModal(rnpColDefs[e])}/>
          ),
          accessor: e
        });
      }
    });
  }
  return result;
};

//Object for mapping incoming earthquake data column names to new names for display purposes. Key is old name, Value is
// new name.
const eqTranslateValue = {
  locationName: 'Name',
  second: 'Sec',
  minute:'Min',
  hour:'Hr',
  month: 'Mo',
  day: 'Dy',
  eqDepth: 'Focal Depth',
  eqMagnitude: 'Mag',
  intensity: 'MMI Int',
  injuriesAmountOrder: 'Injury Description',
  deathsAmountOrder: 'Death Description',
  damageAmountOrder: 'Damage Description',
  housesAmountOrder: 'Houses Destroyed Description',
  housesDamagedAmountOrder: 'Houses Damaged Description'
};

/**
 * Function for mapping incoming Earthquake data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToEarthquakeTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
    if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'id'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false
        })
      }else if(eqTranslateValue[e]){
        result.push({
          Header: () => (
              <TableHeader title={eqTranslateValue[e]} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>
          ),
          accessor: e })
      }else{
      result.push({
        Header: () => (
            <TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>
        ),
        accessor: e })
      }
    });
    result.splice(7, 0, {
      Header: () => (
          <TableHeader title="Tsu" accessor="tsu" handleClick={() => openModal(eqColDefs['relatedTsunami'])}/>
      ),
      accessor: 'relatedTsunami',
      Cell: props => <Link
          to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Tsu
      </Link>
    });
    result.splice(8, 0, {
      Header: () => (
          <TableHeader title="Vol" accessor="relatedVolcano" handleClick={() => openModal(eqColDefs['relatedVolcano'])}/>
      ),
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Vol
      </Link>
    });
    result.splice(9, 0, {
      Header: () => (
          <TableHeader title="More Info" accessor="moreInfo" handleClick={() => openModal(eqColDefs['moreInfo'])}/>
      ),
      accessor: 'moreInfo',
      Cell: props => <InfoLink to={`/earthquake/event/moreinfo/${props.original.id}`}/>
    });
  }
  return result;
};

/**
 * Function for mapping incoming Earthquake data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToEqMoreInfoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'id' || e === 'comments'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false
        })
      }else if(eqTranslateValue[e]){
        result.push({
          Header: () => (<TableHeader title={eqTranslateValue[e]} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>),
          accessor: e })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(eqColDefs[e])}/>),
          accessor: e })
      }
    });
  }
  return result;
};

//Object for mapping incoming volcano event data column names to new names for display purposes. Key is old name, Value
// is new name.
const volTranslateValue = {
  vei: 'VEI',
  morphology: 'Type',
  day: 'Dy',
  deathsAmountOrder: 'Death Description',
  damageAmountOrder: 'Damage Description',
  damageMillionsDollars: 'Damage in Millions of Dollars',
  injuriesAmountOrder: 'Injuries Description',
  housesAmountOrder: 'Houses Destroyed Description',
  num: 'ID'
};

//Object for mapping incoming volcano location data column names to new names for display purposes. Key is old name,
// Value is new name.
const volLocTranslate = {
  num: "Number",
  name: "Volcano Name",
  morphology: "Type",
  timeErupt: "Last Known Eruption",
  elevation: "Elev",
};

/**
 * Function for mapping incoming Volcano Location data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToVolcanoLocsTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'id'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false,
        })
      }else if(e === "timeErupt"){
        result.push({
          Header: () => <TableHeader title={volLocTranslate[e]} accessor={e} handleClick={() => openModal(volLocColDefs[e])}/>,
          accessor: e,
        })
      }else if(volLocTranslate[e]){
        result.push({
          Header: volLocTranslate[e],
          accessor: e
        })
      }else{
        result.push({
          Header: camelToPascal(e),
          accessor: e
        });
      }
    });

  }
  return result;
};

/**
 * Function for mapping incoming Volcano Event data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToVolcanoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'hazEventId' || e === 'volId'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false,
        })
      }else if(volTranslateValue[e]){
        result.push({
          Header: () => (<TableHeader title={volTranslateValue[e]} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e
        })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e
        });
      }
    });
    result.splice(5, 0, {
      Header: () => <TableHeader title='Tsu' accessor={'tsu'} handleClick={() => openModal(veColDefs['tsu'])}/>,
      accessor: 'tsu',
      Cell: props =>(
          <Link
                to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ""}))}`}>
            Tsu
          </Link>
      )
    });
    result.splice(6, 0, {
      Header: () => <TableHeader title='Eq' accessor={'eq'} handleClick={() => openModal(veColDefs['eq'])  }/>,
      accessor: 'eq',
      Cell: props => (
          <Link
          to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ''}))}`}>
        Eq
      </Link>)
    });
    result.splice(7, 0, {
      Header: () => <TableHeader title='Vol Loc' accessor={'volLoc'} handleClick={() => openModal(veColDefs['volLoc'])}/>,
      accessor: 'volLoc',
      Cell: props => (<Link to={`/volcano/loc/data?${encodeQueryString(JSON.stringify({eventid: props.original.hazEventId + ""}))}`}>
        Vol
      </Link>)
    });
    result.splice(8, 0, {
      Header: () => <TableHeader title='More Info' accessor={'moreInfo'} handleClick={() => openModal(veColDefs['moreInfo'])}/>,
      accessor: 'moreInfo',
      Cell: props => (<InfoLink to={`/volcano/event/moreinfo/${props.original.hazEventId}`}/>)
    });
  }
  return result;
};

/**
 * Function for mapping incoming Volcano Event data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToVolcanoMoreInfoTable = arr => {
  const result = [];
  console.log("This is arr: ", arr);
  if(arr.length){
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else if(e === 'hazEventId' || e === 'id'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          show: false,
        })
      }else if(volTranslateValue[e]){
        result.push({
          Header: () => (<TableHeader title={volTranslateValue[e]} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e
        })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={() => openModal(veColDefs[e])}/>),
          accessor: e
        });
      }
    })
  }
  return result;
};

/**
 * Function for mapping incoming data to the Header Accessor structure {@link https://react-table.js.org/#/story/readme ReactTable} demands. Important to
 * note that the arr param given is data provided by the api call and is an array of JavaScript Objects where keys are
 * column names and values are associated data (if anny exists).  Keys are the exact same for every object in the array.
 * An array of Objects is returned containing Headers and accessors for the data, based on a schema devised by
 * {@link https://react-table.js.org/#/story/readme ReactTable}. The first object's keys are iterated over to produce the result that dictates how {@link https://react-table.js.org/#/story/readme ReactTable} will display
 * the data.  Additional Headers and accessors are added for new columns that are generated outside of the api
 * (ex. "More Info").
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mapToTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
    if(e === "latitude" || e === "longitude"){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          Cell: props => <div>
            {parseAndShortenFloat(props.value)}
          </div>
        })
      }else{
        result.push({ Header: camelToPascal(e), accessor: e });
      }
    });
  }
  return result;
};

/**
 * Returns a encrypted string
 *
 * @param query
 * @returns {string}
 */
const encodeQueryString = query => CryptoJS.AES.encrypt(query, hashPass).toString();

/**
 * Returns a decrypted string
 *
 * @param query
 * @returns {string}
 */
const decodeQueryString = query => CryptoJS.AES.decrypt(query, hashPass).toString(CryptoJS.enc.Utf8);

/**
 * Generates a query string from a given JavaScript object. Ex. given {minYear:2015, maxYear:2017, country:USA} return
 * would be minYear=2015&maxYear=2017&country=USA
 *
 * @param obj
 * @returns {string}
 */
const createApiQueryString = (obj) => {
  // TODO: insert a trim on strings to account for possiblility of spaces entred into boxes with no value
  let result = '';
  for (const key in obj) {
    if (obj[key].length) {
      result += (`${key}=${obj[key]}&`);
    }
  }
  return result;
};

/**
 * Given a string it will attempt to parse it to a float value and fix the significant digits to 2.
 *
 * @param {string} numStr
 * @returns {any}
 */
const parseAndShortenFloat = numStr => {
  try{
    return numStr? parseFloat(numStr).toFixed(2): null
  }catch(e){
    return null;
  }
};

/**
 * exports all functions in helperFunctions.js file
 * @type {{camelToPascal: function(*=), mapToTable: function(Array), decodeQueryString: function(*=): string, encodeQueryString: function(*=): string, createApiQueryString: function(*), mapToTsunamiEventTable: function(Array), mapToRunupTable: function(Array), mapToEarthquakeTable: function(Array), mapToVolcanoTable: function(Array), mapToVolcanoMoreInfoTable: function(Array), mapToEqMoreInfoTable: function(Array), mapToTsunamiEventMoreInfo: function(Array), mapToRunupMoreInfoTable: function(Array), mapToVolcanoLocsTable: function(Array), mapToTsunamiEventMoreInfoRunup: function(Array)}}
 */
module.exports = {
  camelToPascal,
  mapToTable,
  decodeQueryString,
  encodeQueryString,
  createApiQueryString,
  mapToTsunamiEventTable,
  mapToRunupTable,
  mapToEarthquakeTable,
  mapToVolcanoTable,
  mapToVolcanoMoreInfoTable,
  mapToEqMoreInfoTable,
  mapToTsunamiEventMoreInfo,
  mapToRunupMoreInfoTable,
  mapToVolcanoLocsTable,
  mapToTsunamiEventMoreInfoRunup,
};
