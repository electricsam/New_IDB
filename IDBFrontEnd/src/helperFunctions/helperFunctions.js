
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
  //TODO: check if object here before progressing
  let result = [];
  if(arr.length){
    let accessors = Object.keys(arr[0]);
    accessors.map(e => {
      result.push({Header: camelToPascal(e), accessor: e})
    });
  }
  return result;
}



module.exports = {
  oddEven,
  camelToPascal,
  mapToTable,
};
