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
      result.push({Header: camelToPascal(e), accessor: e})
    });
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
  createApiQueryString
};
