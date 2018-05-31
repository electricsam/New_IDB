import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  mapToVolcanoEventTable,
  mapToVolcanoLocsTable,
} from '../helperFunctions/helperFunctions';

const VOLCANO_BASEPATH = '/idb-service/volcanoes';
const VOLCANOLOC_BASEPATH = '/idb-service/volcanolocs';

export function* watchFetchSpecifiedVolcanoEvents() {
  yield takeEvery('FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED', fetchSpecifiedVolcanoEvents);
}

export function* fetchSpecifiedVolcanoEvents(action) {
  const query = action.payload;
  try {
    const response = yield call(axios.get, `${VOLCANO_BASEPATH}?${query}`);
    yield put({
      type: 'FETCH_SPECIFIED_VOLCANO_EVENTS_FULFILLED',
      payload: { data: response.data, formattedData: mapToVolcanoEventTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_VOLCANO_EVENTS_REJECTED', payload: error });
  }
}

export function* watchDeleteVolcanoEvent() {
  yield takeEvery('DELETE_VOLCANO_EVENT_REQUESTED', deleteVolcanoEvent);
}

export function* deleteVolcanoEvent(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.delete, `${VOLCANO_BASEPATH}/${id}`);
    yield put({
      type: 'DELETE_VOLCANO_EVENT_FULFILLED',
      payload: {},
    });
  } catch (error) {
    yield put({ type: 'DELETE_VOLCANO_EVENT_REJECTED', payload: error });
  }
}

export function* watchDeleteVolcanoEventFulfilled() {
  yield takeEvery('DELETE_VOLCANO_EVENT_FULFILLED', resetDeleteVolcanoEvent);
}

export function* watchDeleteVolcanoEventRejected() {
  yield takeEvery('DELETE_VOLCANO_EVENT_REJECTED', resetDeleteVolcanoEvent);
}

export function* resetDeleteVolcanoEvent() {
  yield put({ type: 'SET_DELETE_VOLCANO_EVENT_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION' });
}


export function* watchFetchSpecifiedVolcanoLocs() {
  yield takeEvery('FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED', fetchSpecifiedVolcanoLocs);
}

export function* fetchSpecifiedVolcanoLocs(action) {
  const query = action.payload;
  try {
    const response = yield call(axios.get, `${VOLCANOLOC_BASEPATH}?${query}`);
    yield put({
      type: 'FETCH_SPECIFIED_VOLCANO_LOCS_FULFILLED',
      payload: { data: response.data, formattedData: mapToVolcanoLocsTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_VOLCANO_LOCS_REJECTED', payload: error });
  }
}

export function* watchDeleteVolcanoLoc() {
  yield takeEvery('DELETE_VOLCANO_LOC_REQUESTED', deleteVolcanoLoc);
}

export function* deleteVolcanoLoc(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.delete, `${VOLCANOLOC_BASEPATH}/${id}`);
    yield put({ type: 'DELETE_VOLCANO_LOC_FULFILLED', payload: {} });
  } catch (error) {
    yield put({ type: 'DELETE_VOLCANO_LOC_REJECTED', payload: error });
  }
}

export function* watchDeleteVolcanoLocFulfilled() {
  yield takeEvery('DELETE_VOLCANO_LOC_FULFILLED', resetDeleteVolcanoLoc);
}

export function* watchDeleteVolcanoLocRejected() {
  yield takeEvery('DELETE_VOLCANO_LOC_REJECTED', resetDeleteVolcanoLoc);
}

export function* resetDeleteVolcanoLoc() {
  yield put({ type: 'SET_DELETE_VOLCANO_LOC_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION' });
}

export function* watchPostVolcanoEvent() {
  yield takeEvery('POST_VOLCANO_EVENT_REQUESTED', postVolcanoEvent);
}

export function* postVolcanoEvent(action) {
  const { volcanoEvent, id } = action.payload;
  try {
    const response = yield call(axios.post, `${VOLCANO_BASEPATH}/${id}`, volcanoEvent);
    yield put({
      type: 'POST_VOLCANO_EVENT_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'POST_VOLCANO_EVENT_REJECTED', payload: error });
  }
}

export function* watchPostVolcanoLoc() {
  yield takeEvery('POST_VOLCANO_LOC_REQUESTED', postVolcanoLoc);
}

export function* postVolcanoLoc(action) {
  const volcano = action.payload;
  try {
    const response = yield call(axios.post, `${VOLCANOLOC_BASEPATH}`, volcano);
    yield put({
      type: 'POST_VOLCANO_LOC_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'POST_VOLCANO_LOC_REJECTED', payload: error });
  }
}

export function* watchFetchVolcanoEvent() {
  yield takeEvery('FETCH_VOLCANO_EVENT_REQUESTED', fetchVolcanoEvent);
}

export function* fetchVolcanoEvent(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${VOLCANO_BASEPATH}/${id}`);
    yield put({
      type: 'FETCH_VOLCANO_EVENT_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_VOLCANO_EVENT_REJECTED', payload: error });
  }
}

export function* watchPatchVolcanoEvent() {
  yield takeEvery('PATCH_VOLCANO_EVENT_REQUESTED', patchVolcanoEvent);
}

export function* patchVolcanoEvent(action) {
  const { volId, volcanoEvent } = action.payload;
  try {
    const response = yield call(axios.patch, `${VOLCANO_BASEPATH}/${volId}`, volcanoEvent);
    yield put({
      type: 'PATCH_VOLCANO_EVENT_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'PATCH_VOLCANO_EVENT_REJECTED', payload: error });
  }
}

export function* watchFetchVolcanoLoc() {
  yield takeEvery('FETCH_VOLCANO_LOC_REQUESTED', fetchVolcanoLoc);
}

export function* fetchVolcanoLoc(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${VOLCANOLOC_BASEPATH}/${id}`);
    yield put({
      type: 'FETCH_VOLCANO_LOC_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_VOLCANO_LOC_REJECTED', payload: error });
  }
}

export function* watchPatchVolcanoLoc() {
  yield takeEvery('PATCH_VOLCANO_LOC_REQUESTED', patchVolcanoLoc);
}

export function* patchVolcanoLoc(action) {
  const volcanoLoc = action.payload;
  console.log('this is volcanoLoc ', action.payload);
  try {
    const response = yield call(axios.patch, `${VOLCANOLOC_BASEPATH}`, volcanoLoc);
    yield put({
      type: 'PATCH_VOLCANO_LOC_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'PATCH_VOLCANO_LOC_REJECTED', payload: error });
  }
}
