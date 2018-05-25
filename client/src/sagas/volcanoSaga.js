import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  mapToVolcanoEventTable,
  mapToVolcanoLocsTable
} from '../helperFunctions/helperFunctions'

const VOLCANO_BASEPATH = "/idb-service/volcanoes";
const VOLCANOLOC_BASEPATH ='/idb-service/volcanolocs';

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


export function* watchFetchSpecifiedVolcanoLocs(){
  yield takeEvery("FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED", fetchSpecifiedVolcanoLocs)
}

export function* fetchSpecifiedVolcanoLocs(action){
  let query = action.payload;
  try{
    const response = yield call(axios.get, `${VOLCANOLOC_BASEPATH}?${query}`);
    yield put({
      type: "FETCH_SPECIFIED_VOLCANO_LOCS_FULFILLED",
      payload: {data: response.data, formattedData: mapToVolcanoLocsTable(response.data)}
    })
  }catch(error){
    yield put({type: "FETCH_SPECIFIED_VOLCANO_LOCS_REJECTED", payload: error});
  }
}

export function* watchDeleteVolcanoLoc(){
  yield takeEvery("DELETE_VOLCANO_LOC_REQUESTED", deleteVolcanoLoc)
}

export function* deleteVolcanoLoc(action){
  let id = action.payload;
  try{
    const response = yield call(axios.delete, `${VOLCANOLOC_BASEPATH}/${id}`);
    yield put({type: "DELETE_VOLCANO_LOC_FULFILLED", payload: {}});
  }catch(error){
    yield put({type: "DELETE_VOLCANO_LOC_REJECTED", payload: error});
  }
}

export function* watchDeleteVolcanoLocFulfilled(){
  yield takeEvery("DELETE_VOLCANO_LOC_FULFILLED", resetDeleteVolcanoLoc)
}

export function* watchDeleteVolcanoLocRejected(){
  yield takeEvery("DELETE_VOLCANO_LOC_REJECTED", resetDeleteVolcanoLoc)
}

export function* resetDeleteVolcanoLoc(){
  yield put({type: "SET_DELETE_VOLCANO_LOC_ID", payload: null});
  yield put({type: "TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION"});
}

export function* watchPostVolcanoEvent(){
  yield takeEvery("POST_VOLCANO_EVENT_REQUESTED", postVolcanoEvent);
}

export function* postVolcanoEvent(action){
  let {volcanoEvent, id} = action.payload;
  try{
    const response = yield call(axios.post, `${VOLCANO_BASEPATH}/${id}`, volcanoEvent);
    yield put({
      type: "POST_VOLCANO_EVENT_FULFILLED",
      payload: response.data
    })
  }catch(error){
    yield put({type: "POST_VOLCANO_EVENT_FULFILLED", payload: error});
  }
}

