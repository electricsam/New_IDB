import React from 'react';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
const CryptoJS = require('crypto-js');

import store from '../store';
import {tsunamiEventColumnDefinitions} from "../components/formConstants/constants";

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
        title: node.title
      }})
  }
};

const mapToTsunamiEventTable = arr => {
  const result = [];
  if(arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map(e => {
      if(e === 'eqMagnitude'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          Cell: props => <Link
              to={`/earthquake/event/data?${encodeQueryString(JSON.stringify({tsunamiid: props.original.id + ""}))}`}>
                {props.value}
              </Link>
        })
      }else if(e === 'numRunup'){
        result.push({
          Header: camelToPascal(e),
          accessor: e,
          Cell: props => <Link
              to={`/tsunami/runup/data?${encodeQueryString(JSON.stringify({eventid: props.original.id + ""}))}`}>
                {props.value}
              </Link>
        })
      }else{
        result.push({
          Header: () => (<span>{camelToPascal(e)} <span onClick={() => openTsunamiEventModal(e)}>#</span></span>),
          accessor: e });
      }
    });
    let input = {
      Header: "More Info",
      accessor: 'moreInfo',
      Cell: props => <Link to={`/tsunami/event/moreinfo/${props.original.id}`}>
        <i className="material-icons">info</i>
      </Link>
    }
    result.splice(10, 0, input);
    result.push({
      Header: 'Related Volcano',
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
      result.push({ Header: camelToPascal(e), accessor: e });
    });
    let moreInfo = {
      Header: "More Info",
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
      result.push({ Header: camelToPascal(e), accessor: e });
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
      result.push({ Header: camelToPascal(e), accessor: e });
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
