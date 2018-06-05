import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToTable } from '../helperFunctions/helperFunctions';

const REFERENCE_BASEPATH = '/idb-service/references';

export function* watchFetchSpecifiedReferences() {
  yield takeEvery('FETCH_SPECIFIED_REFERENCES_REQUESTED', fetchSpecifiedReferences);
}

export function* fetchSpecifiedReferences(action) {
  const queryString = action.payload;
  try {
    const response = yield call(axios.get, `${REFERENCE_BASEPATH}?${queryString}`);
    yield put({
      type: 'FETCH_SPECIFIED_REFERENCES_FULFILLED',
      payload: { data: response.data, formattedData: mapToTable(response.data) },
    });
  } catch (error) {
    yield put({ type: 'FETCH_SPECIFIED_REFERENCES_REJECTED', payload: error });
  }
}

export function* watchDeleteReference() {
  yield takeEvery('DELETE_REFERENCE_REQUESTED', deleteReference);
}

export function* deleteReference(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.delete, `${REFERENCE_BASEPATH}/${id}`);
    yield put({
      type: 'DELETE_REFERENCE_FULFILLED',
      payload: {},
    });
  } catch (error) {
    yield put({ type: 'DELETE_REFERENCE_REJECTED', payload: error });
  }
}

export function* watchDeleteReferenceFulfilled() {
  yield takeEvery('DELETE_REFERENCE_FULFILLED', resetDeleteReference);
}

export function* watchDeleteReferenceRejected() {
  yield takeEvery('DELETE_REFERENCE_REJECTED', resetDeleteReference);
}

export function* resetDeleteReference() {
  yield put({ type: 'SET_DELETE_REFERENCE_ID', payload: null });
  yield put({ type: 'TOGGLE_DELETE_REFERENCE_CONFIRMATION' });
}

export function* watchPostReference() {
  yield takeEvery('POST_REFERENCE_REQUESTED', postReference);
}

export function* postReference(action) {
  const reference = action.payload;
  try {
    const response = yield call(axios.post, `${REFERENCE_BASEPATH}`, reference);
    yield put({
      type: 'POST_REFERENCE_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    return yield put({ type: 'POST_REFERENCE_REJECTED', payload: error });
  }
}

export function* watchFetchReferenceById() {
  yield takeEvery('FETCH_REFERENCE_BY_ID_REQUESTED', fetchReferenceById);
}

export function* fetchReferenceById(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${REFERENCE_BASEPATH}/${id}`);
    yield put({
      type: 'FETCH_REFERENCE_BY_ID_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    return yield put({ type: 'FETCH_REFERENCE_BY_ID_REJECTED', error });
  }
}

export function* watchPatchReference() {
  yield takeEvery('PATCH_REFERENCE_REQUESTED', patchReference);
}

export function* patchReference(action) {
  const { reference, id } = action.payload;
  try {
    const response = yield call(axios.patch, `${REFERENCE_BASEPATH}/${id}`, reference);
    yield put({
      type: 'PATCH_REFERENCE_FULFILLED',
      payload: response.data,
    });
  } catch (error) {
    return yield put({ type: 'PATCH_REFERENCE_REJECTED', error });
  }
}
