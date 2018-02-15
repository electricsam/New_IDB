import axios from 'axios';

export function getAllTsunamis() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TS_EVENT'})
    return axios
      .get('http://localhost:8080/tsunamievents')
      .then( response => {
        dispatch({type:"FETCH_TS_EVENT_FULFILLED", payload: response.data});
      })
      .catch( err => {
        dispatch({type: "FETCH_TS_EVENT_REJECTED", payload: err});
      })
  }
}
