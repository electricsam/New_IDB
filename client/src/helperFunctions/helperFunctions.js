const CryptoJS = require('crypto-js');
const hashPass = 'lockunlock';

import React from 'react'

import { push } from "react-router-redux";

import store from "../store"

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
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
        <button type="button" onClick={()=> store.dispatch(push(`/tsunami/updatetsunami/${props.original.id}`))}>Edit Event</button>
      )
    });
    result.push({
      Header: "Add TsunamiRunupDataDisplay",
      accessor: 'addRunup',
      Cell: props => (
        <button type="button" onClick={()=> store.dispatch(push(`/tsunami/insertrunup/${props.original.id}`))}>
          Add Runup
        </button>
      )
    });
    result.push({
      Header: "Related Runups",
      accessor: 'relatedRunups',
      Cell: props => (
        <button type="button" onClick={()=> getRelatedRunups(`${props.original.id}`)}>
          Related Runups
        </button>
      )
    });
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
        <button type="button" onClick={()=> deleteEvent(props.original.id)}>
          Delete Event
        </button>
      )
    });

  }
  return result;
};

const mapToEarthquakeTable = (arr) => {
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/earthquake/update/${props.original.id}`))}>
            Edit Event
          </button>
      )
    });
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
          <button type="button" onClick={()=> deleteEarthquake(props.original.id)}>
            Delete Event
          </button>
      )
    });

  }
  return result;
};

const mapToReferenceTable = (arr) => {
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/reference/update/${props.original.id}`))}>
            Edit Reference
          </button>
      )
    });
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
          <button type="button" onClick={()=> deleteReference(props.original.id)}>
            Delete Reference
          </button>
      )
    });
  }
  return result;
};


const mapToVolcanoEventTable = arr => {
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/volcano/event/update/${props.original.hazEventId}/${props.original.volId}`))}>
            Edit Volcano Event
          </button>
      )
    });
    result.push({
      Header: "Add Volcano Event",
      accessor: 'addEvent',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/volcano/event/insert/${props.original.id}`))}>
            Add Volcano Event
          </button>
      )
    });
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
          <button type="button" onClick={()=> deleteVolEvent(props.original.hazEventId)}>
            Delete Volcano Event
          </button>
      )
    });
  }
  return result;
};


const mapToVolcanoLocsTable = arr => {
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/volcano/loc/update${props.original.id}`))}>
            Edit Volcano Event
          </button>
      )
    });
    result.push({
      Header: "Add Event",
      accessor: 'addEvent',
      Cell: props => (
          <button type="button" onClick={()=> store.dispatch(push(`/volcano/event/insert/${props.original.id}`))}>
            Add Related Event
          </button>
      )
    });
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
          <button type="button" onClick={()=> deleteVolLoc(props.original.id)}>
            Delete Volcano Event
          </button>
      )
    });
  }
  return result;
};


const deleteVolLoc = id => {
  console.log("####################### this is the id from inside the deleteVolLoc func: ", id);
  store.dispatch({type: "SET_DELETE_VOLCANO_LOC_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION"});
};

const deleteVolEvent = id => {
  console.log('################################### event id; ', id);
  store.dispatch({type: "SET_DELETE_VOLCANO_EVENT_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION"});
};

const deleteReference = id => {
  store.dispatch({type: "SET_DELETE_REFERENCE_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_REFERENCE_CONFIRMATION"});
};


const deleteEarthquake = (id) => {
  console.log("props", id);
  store.dispatch({type: "SET_DELETE_EARTHQUAKE_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION"});
};

const getRelatedRunups = (val) => {
  let queryObj = {eventid: val};
  let encoded = encodeQueryString(JSON.stringify(queryObj));
  let queryString = createApiQueryString(queryObj);
  store.dispatch(push(`/tsunami/runup/data?${encoded}`));
};

const deleteRunup = (id) => {
  store.dispatch({type: "SET_DELETE_RUNUP_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_RUNUP_CONFIRMATION"});
};

const deleteEvent = (id) => {
  store.dispatch({type: "SET_DELETE_EVENT_ID", payload: id});
  store.dispatch({type: "TOGGLE_DELETE_EVENT_CONFIRMATION"});
};


const mapToRunupTable = (arr) => {
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e, })
    });
    result.push({
      Header: "Edit",
      accessor: 'edit',
      Cell: props => (
        <button type="button"
                onClick={()=> store.dispatch(push(`/tsunami/updaterunup/${props.original.id}/${props.original.eventId}`))}>
          Edit Runup
        </button>
      )
    })
    result.push({
      Header: "Delete",
      accessor: 'delete',
      Cell: props => (
        <button type="button"
                onClick={()=> deleteRunup(props.original.id)}>
          Delete Runup
        </button>
      )
    })

  }
  return result;
};

const encodeQueryString = (query) => {
  return CryptoJS.AES.encrypt(query, hashPass).toString();
};

const decodeQueryString = (query) => {
  return CryptoJS.AES.decrypt(query, hashPass).toString(CryptoJS.enc.Utf8);
};

const createApiQueryString = (obj) => {
  //TODO: insert a trim on strings to account for possiblility of spaces entred into boxes with no value
  let result = '';
  for(let key in obj){
    if(obj[key].length) {
      result += (key+"="+obj[key]+"&");
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
  mapToVolcanoLocsTable
};
