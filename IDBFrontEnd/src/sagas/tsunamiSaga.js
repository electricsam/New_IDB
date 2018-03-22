import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';


import { mapToTable } from '../helperFunctions/helperFunctions';


export function* fetchAllTsEvents(){
  try {
    const response = yield call(axios.get, 'http://localhost:8080/tsunamievents');
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
    const response = yield call(axios.get, `http://localhost:8080/tsunamievents/select?${queryString}`)
    yield put({
      type: "FETCH_SPECIFIED_TS_EVENTS_FULFILLED",
      payload:{data: response.data, formattedData: mapToTable(response.data)}
    })
  }catch(error){
    yield put({type: 'FETCH_SPECIFIED_TS_EVENTS_REJECTED', payload: error})
  }
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


export function* watchFetchSpecifiedTSEvents(){
  yield takeEvery('FETCH_SPECIFIED_TS_EVENTS_REQUESTED', fetchSpecifiedTSEvents)
}

export function* postTsEvent(action){
  let tsEvent = action.payload;
  console.log("postTSEVENT action.payload: ", tsEvent);
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
  let runup = action.payload;
  console.log("POST TS RUNUP action.payload: ", runup);
  try{
    const response = yield call(axios.post, "http://localhost:8080/tsunamirunups", runup);
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