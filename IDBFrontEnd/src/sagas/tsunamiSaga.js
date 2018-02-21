import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { mapToTable } from '../helperFunctions/helperFunctions';


export function* fetchTsEvent(){
  try {
    const response = yield call(axios.get, 'http://localhost:8080/tsunamievents');
    yield put({
      type: "FETCH_TS_EVENT_FULFILLED",
      payload:{data: response.data, formattedData: mapToTable(response.data)}
    });
  } catch(error) {
    yield put({type: "FETCH_TS_EVENT_REJECTED", payload: error});
  }
}


export function* watchFetchTsEvent(){
  yield takeEvery("FETCH_TS_EVENT_REQUESTED", fetchTsEvent);
}
