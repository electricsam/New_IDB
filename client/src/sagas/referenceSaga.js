import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToReferenceTable } from '../helperFunctions/helperFunctions';

const REFERENCE_BASEPATH = '/references'

export function* watchFetchSpecifiedReferences(){
  yield takeEvery("FETCH_SPECIFIED_REFERENCES_REQUESTED", fetchSpecifiedReferences);
}

export function* fetchSpecifiedReferences(action){
  let queryString = action.payload;
  try{
    const response = yield call(axios.get, `${REFERENCE_BASEPATH}?${queryString}`);
    yield put({
      type: "FETCH_SPECIFIED_REFERENCES_FULFILLED",
      payload: {data: response.data, formattedData: mapToReferenceTable(response.data)}
    });
  }catch(error){
    yield put({type: "FETCH_SPECIFIED_REFERENCES_REJECTED", payload: error});
  }
}

export function* watchDeleteReferenceRequested(){
  yield takeEvery("DELETE_REFERENCE_REQUESTED", deleteReference);
}

export function* deleteReference(action){
  let id = action.payload;
  try{
    const response = yield call(axios.delete, `${REFERENCE_BASEPATH}/${id}`);
    yield put({
      type: "DELETE_REFERENCE_FULFILLED",
      payload: {}
    })
  }catch(error){
    yield put({type: "DELETE_REFERENCE_REJECTED", payload: error});
  }
}

export function* watchDeleteReferenceFulfilled(){
  yield takeEvery("DELETE_REFERENCE_FULFILLED", resetDeleteReference);
}

export function* watchDeleteReferenceRejected(){
  yield takeEvery("DELETE_REFERENCE_REJECTED", resetDeleteReference);
}

export function* resetDeleteReference(){
  yield put({type: "SET_DELETE_REFERENCE_ID", payload: null});
  yield put({type: "TOGGLE_DELETE_REFERENCE_CONFIRMATION"});
}