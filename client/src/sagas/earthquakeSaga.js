
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToEarthquakeTable } from '../helperFunctions/helperFunctions';

const port = 'http//localhost10088';
const EARTHQUAKE_BASEPATH = '/idb-service/earthquakes';

export function* fetchSpecifiedEarthquakes(action) {
  const queryString = action.payload;
  try {
    const response = yield call(axios.get, `${EARTHQUAKE_BASEPATH}?${queryString}`);
    yield put({
      type: 'FETCH_SPECIFIED_EARTHQUAKES_FULFILLED',
      payload: { data: response.data, formattedData: mapToEarthquakeTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_EARTHQUAKES_REJECTED', payload: error });
  }
}

export function* watchFetchSpecifiedEarthquakes() {
  yield takeEvery('FETCH_SPECIFIED_EARTHQUAKES_REQUESTED', fetchSpecifiedEarthquakes);
}

export function* deleteEarthquake(action) {
  console.log('you have hit the delete earthquake function');
  const id = action.payload;
  console.log('this is the id: ', id);
  try {
    const response = yield call(axios.delete, `${EARTHQUAKE_BASEPATH}/${id}`);
    yield put({
      type: 'DELETE_EARTHQUAKE_FULFILLED',
      payload: {},
    });
  } catch (error) {
    yield put({ type: 'DELETE_EARTHQUAKE_REJECTED', payload: error });
  }
}

export function* watchDeleteEarthquake() {
  yield takeEvery('DELETE_EARTHQUAKE_REQUESTED', deleteEarthquake);
}

export function* watchDeleteEarthquakeFulfilled() {
  yield takeEvery('DELETE_EARTHQUAKE_FULFILLED', resetDeleteEarthquake);
}

export function* watchDeleteEarthquakeRejected() {
  yield takeEvery('DELETE_EARTHQUAKE_REJECTED', resetDeleteEarthquake);
}

export function* resetDeleteEarthquake() {
  yield put({ type: 'SET_DELETE_EARTHQUAKE_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION' });
}


export function* postEarthquake(action) {
  const earthquake = action.payload;
  try {
    const response = yield call(axios.post, `${EARTHQUAKE_BASEPATH}`, earthquake);
    yield put({
      type: 'POST_EARTHQUAKE_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'POST_EARTHQUAKE_REJECTED', payload: error });
  }
}

export function* watchPostEarthquake() {
  yield takeEvery('POST_EARTHQUAKE_REQUESTED', postEarthquake);
}

export function* watchPatchEarthquake() {
  yield takeEvery('PATCH_EARTHQUAKE_REQUESTED', patchEarthquake);
}

export function* patchEarthquake(action) {
  const { id, earthquake } = action.payload;
  try {
    const response = yield call(axios.patch, `${EARTHQUAKE_BASEPATH}/${id}`, earthquake);
    yield put({
      type: 'PATCH_EARTHQUAKE_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'PATCH_EARTHQUAKE_REJECTED', payload: error });
  }
}

export function* watchFetchEarthquake() {
  yield takeEvery('FETCH_EARTHQUAKE_REQUESTED', fetchEarthquake);
}

export function* fetchEarthquake(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${EARTHQUAKE_BASEPATH}/${id}`);
    if(response.data){
      yield put({
        type: 'FETCH_EARTHQUAKE_FULFILLED',
        payload: {data: response.data, formattedData: mapToEarthquakeTable([response.data])},
      });
    }else{
      yield put({ type: 'FETCH_EARTHQUAKE_REJECTED', payload: "empty response" });
    }
  } catch (error) {
    yield put({ type: 'FETCH_EARTHQUAKE_REJECTED', payload: error });
  }
}

