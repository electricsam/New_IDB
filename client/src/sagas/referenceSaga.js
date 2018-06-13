import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToTable } from '../helperFunctions/helperFunctions';

const REFERENCE_BASEPATH = '/idb-service/references',
      REFERENCE_EARTHQUAKE_BASEPATH = '/idb-service/eqrefjunction',
      REFERENCE_TSUNAMI_BASEPATH = '/idb-service/tsurefjunction',
      REFERENCE_RUNUP_BASEPATH = '/idb-service/runuprefjunction',
      REFERENCE_VOLCANO_BASEPATH = '/idb-service/volrefjunction';


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

export function* watchRelateReferenceToEarthquake(){
  yield takeEvery("RELATE_REFERENCE_TO_EARTHQUAKE_REQUESTED", relateReferenceToEarthquake);
}

export function* relateReferenceToEarthquake(action){
  const { eqId, refId } = action.payload;
  try{
    const response = yield call(axios.post, `${REFERENCE_EARTHQUAKE_BASEPATH}/${eqId}/${refId}`);
    if(response.data){
      yield put({
        type: "RELATE_REFERENCE_TO_EARTHQUAKE_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_REFERENCE_TO_EARTHQUAKE_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_REFERENCE_TO_EARTHQUAKE_REJECTED', payload: error });
  }
}

export function* watchRelateReferenceToVolcano(){
  yield takeEvery("RELATE_REFERENCE_TO_VOLCANO_REQUESTED", relateReferenceToVolcano);
}

export function* relateReferenceToVolcano(action){
  const { refId, volId } = action.payload;
  try{
    const response = yield call(axios.post, `${REFERENCE_VOLCANO_BASEPATH}/${volId}/${refId}`);
    if(response.data){
      yield put({
        type: "RELATE_REFERENCE_TO_VOLCANO_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_REFERENCE_TO_VOLCANO_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_REFERENCE_TO_VOLCANO_REJECTED', payload: error });
  }
}

export function* watchRelateReferenceToRunup(){
  yield takeEvery("RELATE_REFERENCE_TO_RUNUP_REQUESTED", relateReferenceToRunup);
}

export function* relateReferenceToRunup(action){
  const { runupId, refId } = action.payload;
  try{
    const response = yield call(axios.post, `${REFERENCE_RUNUP_BASEPATH}/${runupId}/${refId}`);
    if(response.data){
      yield put({
        type: "RELATE_REFERENCE_TO_RUNUP_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_REFERENCE_TO_RUNUP_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_REFERENCE_TO_RUNUP_REJECTED', payload: error });
  }
}

export function* watchRelateReferenceToTsunami(){
  yield takeEvery("RELATE_REFERENCE_TO_TSUNAMI_REQUESTED", relateReferenceToTsunami);
}

export function* relateReferenceToTsunami(action){
  const { tsuId, refId } = action.payload;
  try{
    const response = yield call(axios.post, `${REFERENCE_TSUNAMI_BASEPATH}/${tsuId}/${refId}`);
    if(response.data){
      yield put({
        type: "RELATE_REFERENCE_TO_TSUNAMI_FULFILLED",
        payload: {}
      })
    }else{
      yield put({ type: 'RELATE_REFERENCE_TO_TSUNAMI_REJECTED', payload: "empty response" });
    }
  }catch(error){
    yield put({ type: 'RELATE_REFERENCE_TO_TSUNAMI_REJECTED', payload: error });
  }
}