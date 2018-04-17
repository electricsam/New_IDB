import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToTable, mapToRunupTable } from '../helperFunctions/helperFunctions';

export function* watchUpdateFetchedTsEvent(){
  yield takeEvery("UPDATE_FETCHED_TS_EVENT", fetch)
}

export function* fetchAllTsEvents(){
  try {
    const response = yield call(axios.get, 'http://localhost:8080/tsunamievents/select');
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

export function* fetchTsEventById(action){
  let id = action.payload;
  try{
    const response = yield call(axios.get, `http://localhost:8080/tsunamievent/${id}`);
    yield put({
      type: "FETCH_TS_EVENT_FULFILLED",
      payload: response.data
    })

  }catch(error){
    yield  put({type: "FETCH_TS_EVENT_REJECTED", payload: error});
  }
}

export function* watchFetchTsEventById(){
  yield takeEvery("FETCH_TS_EVENT_REQUESTED", fetchTsEventById);
}

export function* fetchSpecifiedTSEvents(action){
  let queryString = action.payload;
  try{
    const response = yield call(axios.get, `http://localhost:8080/tsunamievents/select?${queryString}`);
    yield put({
      type: "FETCH_SPECIFIED_TS_EVENTS_FULFILLED",
      payload:{data: response.data, formattedData: mapToTable(response.data)}
    })
  }catch(error){
    yield put({type: 'FETCH_SPECIFIED_TS_EVENTS_REJECTED', payload: error})
  }
}

export function* watchFetchSpecifiedTSEvents(){
  yield takeEvery('FETCH_SPECIFIED_TS_EVENTS_REQUESTED', fetchSpecifiedTSEvents)
}

export function* patchTsEvent(action){
  let id = action.payload.id;
  let tsEvent = action.payload.tsEvent;
  try{
    const response = yield call(axios.patch, `http://localhost:8080/tsunamievents/${id}`, tsEvent);
    yield put({
      type: "PATCH_TS_EVENT_FULFILLED",
      payload: response.data
    });
    //this commented out put below will push you to a new route using the push function from react-router-redux
    //yield put(push("/tsunamis"))
  }catch(error){
    yield put({
      type: "PATCH_TS_EVENT_REJECTED",
      payload: error
    });
  }

}

export function* watchPatchTsEvent(){
  yield takeEvery("PATCH_TS_EVENT_REQUESTED", patchTsEvent)
}


export function* postTsEvent(action){
  let tsEvent = action.payload;
  try{
    const response = yield call(axios.post, "http://localhost:8080/tsunamievents", tsEvent);
    yield put({
      type:"POST_TS_EVENT_FULFILLED",
      payload:{data: response.data}
    });
  }catch(error){
    yield put({type: "POST_TS_EVENT_REJECTED", payload: error});
  }
}

export function* watchPostTsEvent(){
  yield takeEvery("POST_TS_EVENT_REQUESTED", postTsEvent)
}

export function* postRunup(action){
  let { runup, id } = action.payload
  try{
    const response = yield call(axios.post, `http://localhost:8080/tsunamirunups/${id}`, runup);
    yield put({
      type:"POST_TS_RUNUP_FULFILLED",
      payload:{data: response.data}
    });
  }catch(error){
    yield put({type: "POST_TS_RUNUP_REJECTED", payload: error});
  }
}

export function* watchPostRunup() {
  yield takeEvery("POST_TS_RUNUP_REQUESTED", postRunup)
}

export function* watchFetchRunup(){
  yield takeEvery("FETCH_TS_RUNUP_REQUESTED", fetchRunup)
}

export function* fetchRunup(action){
  let runupId = action.payload;
  try{
    const response = yield call(axios.get, `http://localhost:8080/tsunamirunups/${runupId}`);
    yield put({
      type: "FETCH_TS_RUNUP_FULFILLED",
      payload: response.data
    });
  }catch(error){
    yield put({type: "FETCH_TS_RUNUP_REJECTED", payload: error});
  }
}

export function* watchUpdateRunup(){
  yield takeEvery("UPDATE_TS_RUNUP_REQUESTED", updateRunup)
}

export function* updateRunup(action){
  let { runupId, eventId, runupData } = action.payload;
  try{
    const response = yield call(axios.patch, `http://localhost808/tsunamirunups/${runupId}/${eventId}`, runupData);
    yield put({type: "UPDATE_TS_RUNUP_FULFILLED",payload: response.data});
  }catch(error){
    yield put({type: "UPDATE_TS_RUNUP_REJECTED", payload: error});
  }
}

export function* fetchSpecifiedRunup(action){
  let queryString = action.payload;

  try{
    const response = yield call(axios.get, `http://localhost:8080/tsunamirunups/select?${queryString}`);
    yield  put({
      type: "FETCH_SPECIFIED_RUNUP_FULFILLED",
      payload:{data: response.data, formattedData: mapToRunupTable(response.data)}
    });
  }catch(error){
    yield put({type: "FETCH_SPECIFIED_RUNUP_REJECTED", payload: error});
  }
}

export function* watchFetchSpecifiedRunup() {
  yield takeEvery("FETCH_SPECIFIED_RUNUP_REQUESTED", fetchSpecifiedRunup)
}

export function* fetchAllRunups(){
  try {
    const response = yield call(axios.get, 'http://localhost:8080/tsunamirunups/select');
    yield put({
      type: "FETCH_ALL_RUNUP_FULFILLED",
      payload:{data: response.data, formattedData: mapToRunupTable(response.data)}
    });
  } catch(error) {
    yield put({type: "FETCH_ALL_RUNUP_REJECTED", payload: error});
  }
}

export function* watchFetchAllRunups(){
  yield takeEvery("FETCH_ALL_RUNUP_REQUESTED", fetchAllRunups);
}

export function* deleteRunup(value){
  try{
    const response = yield call(axios.delete, `http://localhost:8080/tsunamirunups/${value.payload}`);
    yield put({
      type: "DELETE_RUNUP_FULFILLED",
      payload:response.data
    });
  }catch(error){
    yield put({type: "DELETE_RUNUP_REJECTED", payload: error});
  }
}

export function* watchDeleteRunup(){
  yield takeEvery("DELETE_RUNUP_REQUESTED", deleteRunup);
}

export function* watchDeleteRunupFulfilled(){
  yield takeEvery("DELETE_RUNUP_FULFILLED", resetDeleteRunup);
}

export function* watchDeleteRunupRejected(){
  yield takeEvery("DELETE_RUNUP_REJECTED", resetDeleteRunup);
}

export function* resetDeleteRunup(){
  yield put({type: "SET_DELETE_RUNUP_ID", payload: null});
    yield put({type: "TOGGLE_DELETE_RUNUP_CONFIRMATION"});
}

export function* deleteEvent(value){
  try{
    const response = yield call(axios.delete, `http://localhost:8080/tsunamievents/${value.payload}`);
    yield put({
      type: "DELETE_EVENT_FULFILLED",
      payload: response.data
    });
  }catch(error) {
    yield put({type:"DELETE_EVENT_REJECTED"});
  }
}

export function* watchDeleteEvent () {
  yield takeEvery("DELETE_EVENT_REQUESTED", deleteEvent);
}

export function* resetDeleteEvent() {
  yield put({type: "SET_DELETE_EVENT_ID", payload: null});
  yield put({type: "TOGGLE_DELETE_EVENT_CONFIRMATION"});
}

export function* watchDeleteEventFulfilled(){
  yield takeEvery("DELETE_EVENT_FULFILLED", resetDeleteEvent);
}

export function* watchDeleteEventRejected() {
  yield takeEvery("DELETE_EVENT_REJECTED", resetDeleteEvent);
}