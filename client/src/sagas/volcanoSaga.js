import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToVolcanoEventTable } from '../helperFunctions/helperFunctions'

const VOLCANO_BASEPATH = "/idb-service/volcanoes";

export function* watchFetchSpecifiedVolcanoEvents(){
  yield takeEvery("FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED", fetchSpecifiedVolcanoEvents);
}

export function* fetchSpecifiedVolcanoEvents(action){
  let query = action.payload;
  try{
    const response = yield call(axios.get, `${VOLCANO_BASEPATH}?${query}`);
    yield put({
      type: "FETCH_SPECIFIED_VOLCANO_EVENTS_FULFILLED",
      payload: {data: response.data, formattedData: mapToVolcanoEventTable(response.data)}
    })
  }catch(error){
    yield put({type: "FETCH_SPECIFIED_VOLCANO_EVENTS_REJECTED", payload: error});
  }
}

export function* watchDeleteVolcanoEvent(){
  yield takeEvery("DELETE_VOLCANO_EVENT_REQUESTED", deleteVolcanoEvent)
}

export function* deleteVolcanoEvent(action){
  let id = action.payload;
  try{
    const response = yield call(axios.delete, `${VOLCANO_BASEPATH}/${id}`);
    yield put({
      type: "DELETE_VOLCANO_EVENT_FULFILLED",
      payload: {}
    })
  }catch(error){
    yield put({type: "DELETE_VOLCANO_EVENT_REJECTED", payload: error});
  }
}

export function* watchDeleteVolcanoEventFulfilled(){
  yield takeEvery("DELETE_VOLCANO_EVENT_FULFILLED", resetDeleteVolcanoEvent);
}

export function* watchDeleteVolcanoEventRejected(){
  yield takeEvery("DELETE_VOLCANO_EVENT_REJECTED", resetDeleteVolcanoEvent);
}

export function* resetDeleteVolcanoEvent(){
  yield put({type: "SET_DELETE_VOLCANO_EVENT_ID", payload: null});
  yield put({type: "TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION"});
}
