import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  mapToTable,
  mapToTsunamiEventTable,
  mapToRunupTable,
  mapToTsunamiEventMoreInfo,
  mapToRunupMoreInfoTable,
  mapToTsunamiEventMoreInfoRunup
} from '../helperFunctions/helperFunctions';

const port = 'http://localhost:10088';

const TSUNAMI_EVENTS_BASEPATH = '/idb-service/tsunamievents',
    TSUNAMI_RUNUPS_BASEPATH = '/idb-service/runups',
    TSUNAMI_EARTHQUAKE_BASEPATH = '/idb-service/eqtsujunction',
    TSUNAMI_VOLCANO_BASEPATH ='/idb-service/tsuvoljunction';

export function* fetchAllTsEvents() {
  try {
    const response = yield call(axios.get, `${TSUNAMI_EVENTS_BASEPATH}`);
    yield put({
      type: 'FETCH_ALL_TS_EVENTS_FULFILLED',
      payload: { data: response.data, formattedData: mapToTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_ALL_TS_EVENTS_REJECTED', payload: error });
  }
}

export function* watchFetchAllTsEvents() {
  yield takeEvery('FETCH_ALL_TS_EVENTS_REQUESTED', fetchAllTsEvents);
}

export function* fetchTsEventById(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${TSUNAMI_EVENTS_BASEPATH}/${id}`);
    yield put({
      type: 'FETCH_TS_EVENT_FULFILLED',
      //TODO: MAKE SURE TO CHANGE ANY CALLS TO THIS
      payload: {data: response.data, formattedData: mapToTable([response.data])},
    });
    console.log("response data", mapToTable(response.data))
  } catch (error) {
    yield put({ type: 'FETCH_TS_EVENT_REJECTED', payload: error });
  }
}

export function* watchFetchTsEventById() {
  yield takeEvery('FETCH_TS_EVENT_REQUESTED', fetchTsEventById);
}


export function* fetchTsEventMoreInfo(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${TSUNAMI_EVENTS_BASEPATH}/moreinfo/${id}`);
    yield put({
      type: 'FETCH_TS_EVENT_MORE_INFO_FULFILLED',
      //TODO: MAKE SURE TO CHANGE ANY CALLS TO THIS
      payload: {data: response.data, formattedData: mapToTsunamiEventMoreInfo(response.data)},
    });
  } catch (error) {
    yield put({ type: 'FETCH_TS_EVENT_MORE_INFO_REJECTED', payload: error });
  }
}

export function* watchFetchTsEventMoreInfo() {
  yield takeEvery('FETCH_TS_EVENT_MORE_INFO_REQUESTED', fetchTsEventMoreInfo);
}

export function* fetchTsEventMoreInfoRunup(action) {
  const eventId = action.payload;
  console.log("This is event id: ")
  try {
    const response = yield call(axios.get, `${TSUNAMI_EVENTS_BASEPATH}/morerunupinfo/${eventId}`);
    yield put({
      type: 'FETCH_TS_EVENT_MORE_INFO_RUNUP_FULFILLED',
      payload: {data: response.data, formattedData: mapToTsunamiEventMoreInfoRunup(response.data)},
    });
  } catch (error) {
    yield put({ type: 'FETCH_TS_EVENT_MORE_INFO_RUNUP_REJECTED', payload: error });
  }
}

export function* watchFetchTsEventMoreInfoRunup() {
  yield takeEvery('FETCH_TS_EVENT_MORE_INFO_RUNUP_REQUESTED', fetchTsEventMoreInfoRunup);
}

export function* fetchSpecifiedTSEvents(action) {
  const queryString = action.payload;
  try {
    const response = yield call(axios.get, `${TSUNAMI_EVENTS_BASEPATH}?${queryString}`);
    yield put({
      type: 'FETCH_SPECIFIED_TS_EVENTS_FULFILLED',
      payload: { data: response.data, formattedData: mapToTsunamiEventTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_TS_EVENTS_REJECTED', payload: error });
  }
}

export function* watchFetchSpecifiedTSEvents() {
  yield takeEvery('FETCH_SPECIFIED_TS_EVENTS_REQUESTED', fetchSpecifiedTSEvents);
}

export function* patchTsEvent(action) {
  const id = action.payload.id;
  const tsEvent = action.payload.tsEvent;
  try {
    const response = yield call(axios.patch, `${TSUNAMI_EVENTS_BASEPATH}/${id}`, tsEvent);
    yield put({
      type: 'PATCH_TS_EVENT_FULFILLED',
      payload: response.data,
    });
    // this commented out put below will push you to a new route using the push function from react-router-redux
    // yield put(push("/tsunamis"))
  } catch (error) {
    yield put({
      type: 'PATCH_TS_EVENT_REJECTED',
      payload: error,
    });
  }
}

export function* watchPatchTsEvent() {
  yield takeEvery('PATCH_TS_EVENT_REQUESTED', patchTsEvent);
}


export function* postTsEvent(action) {
  const tsEvent = action.payload;
  try {
    const response = yield call(axios.post, TSUNAMI_EVENTS_BASEPATH, tsEvent);
    yield put({
      type: 'POST_TS_EVENT_FULFILLED',
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({ type: 'POST_TS_EVENT_REJECTED', payload: error });
  }
}

export function* watchPostTsEvent() {
  yield takeEvery('POST_TS_EVENT_REQUESTED', postTsEvent);
}

export function* postRunup(action) {
  const { runup, id } = action.payload;
  try {
    const response = yield call(axios.post, `${TSUNAMI_RUNUPS_BASEPATH}/${id}`, runup);
    yield put({
      type: 'POST_TS_RUNUP_FULFILLED',
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({ type: 'POST_TS_RUNUP_REJECTED', payload: error });
  }
}

export function* watchPostRunup() {
  yield takeEvery('POST_TS_RUNUP_REQUESTED', postRunup);
}

export function* watchFetchRunup() {
  yield takeEvery('FETCH_TS_RUNUP_REQUESTED', fetchRunup);
}

export function* fetchRunup(action) {
  const runupId = action.payload;
  try {
    const response = yield call(axios.get, `${TSUNAMI_RUNUPS_BASEPATH}/${runupId}`);
    if(response){console.log(response)}else{console.log("NO RESPONSE")}
    yield put({
      type: 'FETCH_TS_RUNUP_FULFILLED',
      payload: {data: response.data, formattedData: mapToTable([response.data])},
    });
  } catch (error) {
    yield put({ type: 'FETCH_TS_RUNUP_REJECTED', payload: error });
  }
}

export function* watchFetchRunupMoreInfo() {
  yield takeEvery('FETCH_TS_RUNUP_MORE_INFO_REQUESTED', fetchRunupMoreInfo);
}

export function* fetchRunupMoreInfo(action) {
  const runupId = action.payload;
  try {
    const response = yield call(axios.get, `${TSUNAMI_RUNUPS_BASEPATH}/moreinfo/${runupId}`);
    yield put({
      type: 'FETCH_TS_RUNUP_MORE_INFO_FULFILLED',
      payload: {data: response.data, formattedData: mapToRunupMoreInfoTable(response.data)},
    });
  } catch (error) {
    yield put({ type: 'FETCH_TS_RUNUP_MORE_INFO_REJECTED', payload: error });
  }
}

export function* watchUpdateRunup() {
  yield takeEvery('UPDATE_TS_RUNUP_REQUESTED', updateRunup);
}

export function* updateRunup(action) {
  const { runupId, eventId, runupData } = action.payload;
  try {
    const response = yield call(axios.patch, `${TSUNAMI_RUNUPS_BASEPATH}/${eventId}`, runupData);
    yield put({ type: 'UPDATE_TS_RUNUP_FULFILLED', payload: response.data });
  } catch (error) {
    yield put({ type: 'UPDATE_TS_RUNUP_REJECTED', payload: error });
  }
}

export function* fetchSpecifiedRunup(action) {
  const queryString = action.payload;

  try {
    const response = yield call(axios.get, `${TSUNAMI_RUNUPS_BASEPATH}?${queryString}`);
    yield put({
      type: 'FETCH_SPECIFIED_RUNUP_FULFILLED',
      payload: { data: response.data, formattedData: mapToRunupTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_RUNUP_REJECTED', payload: error });
  }
}

export function* watchFetchSpecifiedRunup() {
  yield takeEvery('FETCH_SPECIFIED_RUNUP_REQUESTED', fetchSpecifiedRunup);
}

export function* fetchAllRunups() {
  try {
    const response = yield call(axios.get, `${TSUNAMI_RUNUPS_BASEPATH}`);
    yield put({
      type: 'FETCH_ALL_RUNUP_FULFILLED',
      payload: { data: response.data, formattedData: mapToTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_ALL_RUNUP_REJECTED', payload: error });
  }
}

export function* watchFetchAllRunups() {
  yield takeEvery('FETCH_ALL_RUNUP_REQUESTED', fetchAllRunups);
}

export function* deleteRunup(value) {
  try {
    const response = yield call(axios.delete, `${TSUNAMI_RUNUPS_BASEPATH}/${value.payload}`);
    yield put({
      type: 'DELETE_RUNUP_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'DELETE_RUNUP_REJECTED', payload: error });
  }
}

export function* watchDeleteRunup() {
  yield takeEvery('DELETE_RUNUP_REQUESTED', deleteRunup);
}

export function* watchDeleteRunupFulfilled() {
  yield takeEvery('DELETE_RUNUP_FULFILLED', resetDeleteRunup);
}

export function* watchDeleteRunupRejected() {
  yield takeEvery('DELETE_RUNUP_REJECTED', resetDeleteRunup);
}

export function* resetDeleteRunup() {
  yield put({ type: 'SET_DELETE_RUNUP_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_RUNUP_CONFIRMATION' });
}

export function* deleteEvent(value) {
  try {
    const response = yield call(axios.delete, `${TSUNAMI_EVENTS_BASEPATH}/${value.payload}`);
    yield put({
      type: 'DELETE_EVENT_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'DELETE_EVENT_REJECTED' });
  }
}

export function* watchDeleteEvent() {
  yield takeEvery('DELETE_EVENT_REQUESTED', deleteEvent);
}

export function* resetDeleteEvent() {
  yield put({ type: 'SET_DELETE_EVENT_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' });
}

export function* watchDeleteEventFulfilled() {
  yield takeEvery('DELETE_EVENT_FULFILLED', resetDeleteEvent);
}

export function* watchDeleteEventRejected() {
  yield takeEvery('DELETE_EVENT_REJECTED', resetDeleteEvent);
}

export function* watchRelateTsunamitoEarthquake(){
  yield takeEvery("RELATE_TSUNAMI_TO_EARTHQUAKE_REQUESTED", relateTsunamiToEarthquake);
}

export function* relateTsunamiToEarthquake(action){
  const { tsuId, eqId } = action.payload;
  try{
    const response = yield call(axios.post, `${TSUNAMI_EARTHQUAKE_BASEPATH}/${eqId}/${tsuId}`);
    if(response.data){
      yield put({
        type: "RELATE_TSUNAMI_TO_EARTHQUAKE_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_TSUNAMI_TO_EARTHQUAKE_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_TSUNAMI_TO_EARTHQUAKE_REJECTED', payload: error });
  }
}

export function* watchRelateTsunamitoVolcano(){
  yield takeEvery("RELATE_TSUNAMI_TO_VOLCANO_REQUESTED", relateTsunamiToVolcano);
}

export function* relateTsunamiToVolcano(action){
  const { tsuId, volId } = action.payload;
  try{
    const response = yield call(axios.post, `${TSUNAMI_VOLCANO_BASEPATH}/${tsuId}/${volId}`);
    if(response.data){
      yield put({
        type: "RELATE_TSUNAMI_TO_VOLCANO_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_TSUNAMI_TO_VOLCANO_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_TSUNAMI_TO_VOLCANO_REJECTED', payload: error });
  }
}