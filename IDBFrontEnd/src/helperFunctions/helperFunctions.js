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
  if (typeof string !== 'string') return 'whoops';
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
        <button type="button" onClick={()=> store.dispatch(push(`/updatetsunami/${props.original.id}`))}>Edit</button>
      )
    })
    result.push({
      Header: "Add Runup",
      accessor: 'addRunup',
      Cell: props => (
        <button type="button" onClick={()=> store.dispatch(push(`/inserttsunamirunup/${props.original.id}`))}>
          Add Runup
        </button>
      )
    })

  }
  return result;
}

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
                onClick={()=> store.dispatch(push(`/updaterunup/${props.original.id}/${props.original.eventId}`))}>
          Edit
        </button>
      )
    })

  }
  return result;
}

const encodeQueryString = (query) => {
  return CryptoJS.AES.encrypt(query, hashPass).toString();
}

const decodeQueryString = (query) => {
  return CryptoJS.AES.decrypt(query, hashPass).toString(CryptoJS.enc.Utf8);
}


const createApiQueryString = (obj) => {
  //TODO: insert a trim on strings to account for possiblility of spaces entred into boxes with no value
  let result = '';
  for(let key in obj){
    if(obj[key].length) {
      result += (key+"="+obj[key]+"&");
    }
  }
  console.log("result: ", result);
  return result;
}


module.exports = {
  oddEven,
  camelToPascal,
  mapToTable,
  decodeQueryString,
  encodeQueryString,
  createApiQueryString,
  mapToRunupTable,
};
