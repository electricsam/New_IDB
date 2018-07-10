import React from 'react';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
const CryptoJS = require('crypto-js');

import store from '../store';
import {tsunamiEventColumnDefinitions} from "../components/Tsunami/TsunamiEventDataDisplay/TsunamiDataConstants";

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

const closeTsunamiEventModal = () => {
  action({type: "CLOSE_TSUNAMI_EVENT_MODAL"})
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
}


const translateValue = {
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
}

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
      }else if(translateValue[e]){
        result.push({
          Header: () => (
              <div style={headerStyle}>
                <span style={{wordWrap: 'break-word'}}>{translateValue[e]} </span>
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


const mapToRunupTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
            {props.value}
          </Link>
        })
      }else if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (
              <div style={headerStyle}>
                <span>{camelToPascal(e)} </span><i className="material-icons"
                                                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                                                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else{
        result.push({ Header: camelToPascal(e), accessor: e });
      }
    });
    let moreRunupInfo = {
      Header: "More Runup Info",
      accessor: 'moreRunupInfo',
      Cell: props => <Link to={`/tsunami/runup/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    };
    let tsunamiInfo = {
      Header: 'Tsu Src',
      accessor: 'tsuSrc',
      Cell: props => <Link to={`/tsunami/event/moreinfo/${props.original.eventId}`}>
        <i className="material-icons">info</i>
      </Link>
    };
    result.splice(10, 0, moreRunupInfo);
    result.splice(9, 0, tsunamiInfo);
    result.splice(11, 0, {
      Header: 'Related Volcano',
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.eventId + ""}))}`}>
        Vol
      </Link>
    })
  }
  return result;
};


const mapToEarthquakeTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
    if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (
              <div style={headerStyle}>
                <span>{camelToPascal(e)} </span><i className="material-icons"
                                                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                                                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else{
        result.push({ Header: camelToPascal(e), accessor: e });
      }
    });
    let moreInfo = {
      Header: () => <div style={headerStyle}>More Info</div>,
      accessor: 'moreInfo',
      Cell: props => <Link to={`/earthquake/event/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    };
    result.splice(10, 0, moreInfo);
    result.splice(11, 0, {
      Header: () => (
          <span>Related Tsunami <a href='https://www.google.com'>*</a></span>
      ),
      accessor: 'relatedTsunami',
      Cell: props => <Link
          to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Tsu
      </Link>
    });
    result.splice(12, 0, {
      Header: 'Related Volcano',
      accessor: 'realatedVolcano',
      Cell: props => <Link
          to={`/volcano/event/data?${encodeQueryString(JSON.stringify({earthquakeid: props.original.id + ""}))}`}>
        Vol
      </Link>
    });
  }
  return result;
};

const mapToVolcanoTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
    if(e === "latitude" || e === "longitude"){
        result.push({
          Header:() => (
              <div style={headerStyle}>
                <span>{camelToPascal(e)} </span><i className="material-icons"
                                                   style={{margin: '0 1% 0 1%', color: 'blue'}}
                                                   onClick={() => openTsunamiEventModal(e)}>info</i>
              </div>),
          accessor: e,
          Cell: props => <div>
            {parseFloat(props.value).toFixed(2)}
          </div>
        })
      }else{
        result.push({ Header: camelToPascal(e), accessor: e });
      }
    });
    result.splice(10, 0, {
      Header: "More Info",
      accessor: 'moreInfo',
      Cell: props => <Link to={`/volcano/event/moreinfo/${props.original.hazEventId}`}>
        <i className="material-icons">info</i>
      </Link>
    });
    result.splice(11, 0, {
      Header: 'TSU',
      accessor: 'tsu',
      Cell: props => <Link
          to={`/tsunami/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ""}))}`}>
        Tsu
      </Link>
    });
    result.splice(12, 0, {
      Header: 'EQ',
      accessor: 'eq',
      Cell: props => <Link
          to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({volcanoid: props.original.hazEventId + ""}))}`}>
        Vol
      </Link>
    });
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
  mapToVolcanoTable
};
