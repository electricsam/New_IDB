import React from 'react';

import { push } from 'react-router-redux';

import { Link } from 'react-router-dom';

import store from '../store';

const CryptoJS = require('crypto-js');

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

const mapToEarthquakeTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
      result.push({ Header: camelToPascal(e), accessor: e });
    });
  }
  return result;
};

const mapToReferenceTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
      result.push({ Header: camelToPascal(e), accessor: e });
    });
  }
  return result;
};


const mapToVolcanoEventTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
      result.push({ Header: camelToPascal(e), accessor: e });
    });
  }
  return result;
};


const mapToVolcanoLocsTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
      result.push({ Header: camelToPascal(e), accessor: e });
    });
    result.push({
      Header: 'Edit',
      accessor: 'edit',
      Cell: props => (
        <button type="button" onClick={() => store.dispatch(push(`/volcano/loc/update/${props.original.id}`))}>
            Edit Volcano Event
        </button>
      ),
    });
    result.push({
      Header: 'Add Event',
      accessor: 'addEvent',
      Cell: props => (
        <button type="button" onClick={() => store.dispatch(push(`/volcano/event/insert/${props.original.id}`))}>
            Add Related Event
        </button>
      ),
    });
    result.push({
      Header: 'Delete',
      accessor: 'delete',
      Cell: props => (
        <button type="button" onClick={() => deleteVolLoc(props.original.id)}>
            Delete Volcano Event
        </button>
      ),
    });
  }
  return result;
};


const mapToRunupTable = (arr) => {
  const result = [];
  if (arr.length) {
    const accessors = Object.keys(arr[0]);
    accessors.map((e) => {
      result.push({ Header: camelToPascal(e), accessor: e });
    });
  }
  return result;
};


const deleteVolLoc = (id) => {
  store.dispatch({ type: 'SET_DELETE_VOLCANO_LOC_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION' });
};

const deleteVolEvent = (id) => {
  store.dispatch({ type: 'SET_DELETE_VOLCANO_EVENT_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION' });
};

const deleteReference = (id) => {
  store.dispatch({ type: 'SET_DELETE_REFERENCE_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_REFERENCE_CONFIRMATION' });
};

const deleteEarthquake = (id) => {
  console.log('props', id);
  store.dispatch({ type: 'SET_DELETE_EARTHQUAKE_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION' });
};

const getRelatedRunups = (val) => {
  const queryObj = { eventid: val };
  const encoded = encodeQueryString(JSON.stringify(queryObj));
  const queryString = createApiQueryString(queryObj);
  store.dispatch(push(`/tsunami/runup/data?${encoded}`));
};

const deleteRunup = (id) => {
  store.dispatch({ type: 'SET_DELETE_RUNUP_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_RUNUP_CONFIRMATION' });
};

const deleteEvent = (id) => {
  store.dispatch({ type: 'SET_DELETE_EVENT_ID', payload: id });
  store.dispatch({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' });
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
  mapToRunupTable,
  mapToEarthquakeTable,
  mapToReferenceTable,
  mapToVolcanoEventTable,
  mapToVolcanoLocsTable,
  deleteEarthquake,
};
