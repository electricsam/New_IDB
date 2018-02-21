import { all } from 'redux-saga/effects';

import { watchFetchTsEvent, fetchTsEvent } from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    fetchTsEvent(),
    watchFetchTsEvent()
  ]);
}