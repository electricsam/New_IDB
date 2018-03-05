import { all } from 'redux-saga/effects';

import { watchFetchAllTsEvents, fetchAllTsEvents } from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    fetchAllTsEvents(),
    watchFetchAllTsEvents(),
  ]);
}