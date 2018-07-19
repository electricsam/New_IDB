import React from 'react';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
const CryptoJS = require('crypto-js');

import store from '../store';
import {tsunamiEventColumnDefinitions} from "../components/Tsunami/TsunamiEventDataDisplay/TsunamiDataConstants";
import { earthquakeColumnDefinitions } from "../components/Earthquakes/EarthquakeDataDisplay/EarthquakeDataConstants";
import { RunupColumnDefinitions} from "../components/Tsunami/TsunamiRunupDataDisplay/RunupDataConstants";
import TableHeader from "../components/TableHeader/TableHeader";
import {VolcanoEventColumnDefinitions} from "../components/Volcanoes/VolcanoDataDisplay/VolcanoEventConstants";

const action = obj => store.dispatch(obj);

const hashPass = 'lockunlock';

const oddEven = (num) => {
  // TODO: need to properly throw error and update test file accordingly
  if (typeof num !== Number && !Number.isInteger(num)) {
    return 'whoops';
  }
  if (num % 2 === 0) return 'even';
  return 'odd';
};

const camelToPascal = (string) => {
  if (typeof string !== 'string') return 'error in camelToPascal';
  return string.split(/(?=[A-Z])/).map((e, i, a) => (
    a[i] = e.charAt(0).toUpperCase() + e.slice(1)
  )).join(' ');
};

const openTsunamiEventModal = (accessor) => {
  let node = tsunamiEventColumnDefinitions[accessor];
  if(node){
    action({
      type: 'OPEN_TSUNAMI_EVENT_MODAL',
      payload: {
        data:node.data,
        validValues: node.validValues,
        title: node.title,
        secondaryData: node.secondaryData,
        component: node.component
      }})
  }
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: "center",
  alignItems: 'center'
};

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
  day: 'Dy'
};

const mapToTsunamiEventTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: () => (
              <div style={headerStyle}>
                <span>Earthquake Mag</span>
                <i className='material-icons'
                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>
          ),
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
                {props.value}
              </Link>
        })
      }else if(e === 'id' || e === "area" ){
        result.push({
          Header: () => (
              <div style={headerStyle}>
                {camelToPascal(e)}
              </div>
          ),
          accessor: e
        })
      }else if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (
              <div style={headerStyle}>
                <span>{camelToPascal(e)} </span>
                <i className="material-icons"
                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else if(e === 'numRunup'){
        result.push({
          Header: () => (
              <div style={headerStyle}>
                <span>{camelToPascal(e)} </span>
                <i className="material-icons"
                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e,
          Cell: props => <Link
              to={`/tsunami/runup/data?${encodeQueryString(JSON.stringify({eventid: props.original.id + ""}))}`}>
                {props.value}
              </Link>
        })
      }else if(tsTranslateValue[e]){
        result.push({
          Header: () => (
              <div style={headerStyle}>
                <span style={{wordWrap: 'break-word'}}>{tsTranslateValue[e]} </span>
                <i className="material-icons"
                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e });
      } else{
        result.push({
          Header: () => (
          <div style={headerStyle}>
            <span style={{wordWrap: 'break-word'}}>{camelToPascal(e)} </span>
            <i className="material-icons"
               style={{margin: '0 1% 0 1%', color: 'blue'}}
               onClick={() => openTsunamiEventModal(e)}>info</i>
          </div>),
          accessor: e });
      }
    });
    result.splice(10, 0, {
      Header: () => (<div style={headerStyle}><span>More Info </span>
        <i className="material-icons"
           style={{margin: '0 1% 0 1%', color: 'blue'}}
           onClick={() => openTsunamiEventModal('moreInfo')}>info</i>
      </div>),
      accessor: 'moreInfo',
      Cell: props => <Link to={`/tsunami/event/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    });
    result.splice(10, 0, {
      Header: () => (<div style={headerStyle}><span>Related Volcano </span>
        <i className="material-icons"
           style={{margin: '0 1% 0 1%', color: 'blue'}}
           onClick={() => openTsunamiEventModal('relatedVolcano')}>info</i>
      </div>),
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
        Vol
      </Link>
    })
  }
  return result;
};

const openTsunamiRunupModal = accessor => {
  let node = RunupColumnDefinitions[accessor];
  if(node){
    action({
      type: 'OPEN_TSUNAMI_RUNUP_MODAL',
      payload: {
        data:node.data,
        validValues: node.validValues,
        title: node.title,
        secondaryData: node.secondaryData,
        component: node.component
      }})
  }
};

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

const mapToRunupTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: () => (<TableHeader accessor={e} title='Eq Mag' handleClick={openTsunamiRunupModal}/>),
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
            {props.value}
          </Link>
        })
      }else if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader handleClick={openTsunamiRunupModal} title={camelToPascal(e)} accessor={e}/>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else if(e === 'eventId' || e === 'id'){
        result.push({Header: camelToPascal(e), accessor: e, show: false})
      } else if(runupTranslateVal[e]){
        result.push({
          Header: () => (<TableHeader accessor={e} title={runupTranslateVal[e]} handleClick={openTsunamiRunupModal}/>),
          accessor: e});
      }else{
        result.push({
          Header: () => (<TableHeader accessor={e} title={camelToPascal(e)} handleClick={openTsunamiRunupModal}/>),
          accessor: e });
      }
    });
    result.splice(11,0, {
      Header:() => (<TableHeader handleClick={openTsunamiRunupModal} title='Tsu Src' accessor={'tsuSrc'}/>),
      accessor: 'tsuSrc',
      Cell: props => <Link to={`/tsunami/event/moreinfo/${props.original.eventId}`}>
        <i className="material-icons">info</i>
      </Link>
    });
    result.splice(12, 0, {
      Header:() => (<TableHeader handleClick={openTsunamiRunupModal} title='Vol' accessor='relatedVolcano'/>),
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
        Vol
      </Link>
    })
    result.splice(13,0,{
      Header: () => (<TableHeader accessor='moreRunupInfo' title='Tsu Runup' handleClick={openTsunamiRunupModal}/>),
      accessor: 'moreRunupInfo',
      Cell: props => <Link to={`/tsunami/runup/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    });
  }
  return result;
};

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

const openEarthquakeModal = accessor => {
  let node = earthquakeColumnDefinitions[accessor];
  if(node){
    action({
      type: 'OPEN_EARTHQUAKE_MODAL',
      payload: {
        data:node.data,
        validValues: node.validValues,
        title: node.title,
        secondaryData: node.secondaryData,
        component: node.component
      }})
  }
};

const mapToEarthquakeTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
    if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openEarthquakeModal}/>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
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
          Header: () => (<TableHeader title={eqTranslateValue[e]} accessor={e} handleClick={openEarthquakeModal}/>),
          accessor: e })
      }else{
      result.push({
        Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openEarthquakeModal}/>),
        accessor: e })
      }
    });
    result.splice(7, 0, {
      Header: () => (
          <div style={headerStyle}>
            <span style={{wordWrap: 'break-word'}}>Tsu </span>
            <i className="material-icons"
               style={{margin: '0 1% 0 1%', color: 'blue'}}
               onClick={() => openEarthquakeModal('relatedTsunami')}>info</i>
          </div>),
      accessor: 'relatedTsunami',
      Cell: props => <Link
          to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Tsu
      </Link>
    });
    result.splice(8, 0, {
      Header: () => (<div style={headerStyle}>
        <span style={{wordWrap: 'break-word'}}>Vol </span>
        <i className="material-icons"
           style={{margin: '0 1% 0 1%', color: 'blue'}}
           onClick={() => openEarthquakeModal('relatedVolcano')}>info</i>
      </div>),
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Vol
      </Link>
    });
    result.splice(9, 0, {
      Header: () => (<div style={headerStyle}>
        <span style={{wordWrap: 'break-word'}}>More Info </span>
        <i className="material-icons"
           style={{margin: '0 1% 0 1%', color: 'blue'}}
           onClick={() => openEarthquakeModal('moreInfo')}>info</i>
      </div>),
      accessor: 'moreInfo',
      Cell: props => <Link to={`/earthquake/event/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    });
  }
  return result;
};

const mapToEqMoreInfoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openEarthquakeModal}/>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
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
          Header: () => (<TableHeader title={eqTranslateValue[e]} accessor={e} handleClick={openEarthquakeModal}/>),
          accessor: e })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openEarthquakeModal}/>),
          accessor: e })
      }
    });
  }
  return result;
};

const openVolcanoEventModal = (accessor) => {
  let node = VolcanoEventColumnDefinitions[accessor];
  if(node){
    action({
      type: 'OPEN_VOLCANO_EVENT_MODAL',
      payload: {
        data:node.data,
        validValues: node.validValues,
        title: node.title,
        secondaryData: node.secondaryData,
        component: node.component
      }
    })
  }
};

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

const mapToVolcanoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
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
          Header: () => (<TableHeader title={volTranslateValue[e]} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e
        })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e
        });
      }
    });
    result.splice(5, 0, {
      Header: () => <TableHeader title='Tsu' accessor={'tsu'} handleClick={openVolcanoEventModal}/>,
      accessor: 'tsu',
      Cell: props => <Link
          to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ""}))}`}>
        Tsu
      </Link>
    });
    result.splice(6, 0, {
      Header: () => <TableHeader title='Eq' accessor={'eq'} handleClick={openVolcanoEventModal  }/>,
      accessor: 'eq',
      Cell: props => <Link
          to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ""}))}`}>
        Vol
      </Link>
    });
    result.splice(7, 0, {
      Header: () => <TableHeader title='More Info' accessor={'moreInfo'} handleClick={openVolcanoEventModal}/>,
      accessor: 'moreInfo',
      Cell: props => <Link to={`/volcano/event/moreinfo/${props.original.hazEventId}`}>
        <i className="material-icons">info</i>
      </Link>
    });
  }
  return result;
};

const mapToVolcanoMoreInfoTable = arr => {
  const result = [];
  console.log("This is arr: ", arr);
  if(arr.length){
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
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
          Header: () => (<TableHeader title={volTranslateValue[e]} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e
        })
      }else{
        result.push({
          Header: () => (<TableHeader title={camelToPascal(e)} accessor={e} handleClick={openVolcanoEventModal}/>),
          accessor: e
        });
      }
    })
  }
  return result;
};

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
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else{
        result.push({ Header: camelToPascal(e), accessor: e });
      }
    });
  }
  return result;
};

const encodeQueryString = query => CryptoJS.AES.encrypt(query, hashPass).toString();

const decodeQueryString = query => CryptoJS.AES.decrypt(query, hashPass).toString(CryptoJS.enc.Utf8);

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

module.exports = {
  oddEven,
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
};
