import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


import { mapToTable } from '../helperFunctions/helperFunctions';


export function* fetchAllTsEvents(){
  try {
    const response = yield call(axios.get, 'http://localhost:8080/tsunamievents');
    yield put({
      type: "FETCH_ALL_TS_EVENTS_FULFILLED",
      payload:{data: response.data, formattedData: mapToTable(response.data)}
    });
  } catch(error) {
    yield put({type: "FETCH_ALL_TS_EVENTS_REJECTED", payload: error});
  }
}


export function* watchFetchAllTsEvents(){
  yield takeEvery("FETCH_ALL_TS_EVENTS_REQUESTED", fetchAllTsEvents);
}


export function* fetchSpecifiedTSEvents(){
  //pull from helper functions
  //createApiQueryString() - assign to queryString
  let queryString = '';
  try{
    const response = yield call(axios.get, `http://localhost:8080/tsunamievents?${queryString}`)
  }catch(error){
    yield put({type: 'FETCH_SPECIFIED_TS_EVENTS', payload: error})
  }
}