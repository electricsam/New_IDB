import axios from 'axios';
import { mapToTable } from '../helperFunctions/helperFunctions';


export function getAllTsunamis() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TS_EVENT'})
    return axios
      .get('http://localhost:8080/tsunamievents')
      .then( response => {
        let formattedData = mapToTable(response.data)
        dispatch({type:"FETCH_TS_EVENT_FULFILLED", payload: {
          data: response.data, formattedData: formattedData}
        });
      })
      .catch( err => {
        dispatch({type: "FETCH_TS_EVENT_REJECTED", payload: err});
      })
  }
}

export function reformatTsData(arr) {
  let formattedData = mapToTable(arr);
  return {type: 'REFORMAT_TS_DATA', payload: formattedData}
}

