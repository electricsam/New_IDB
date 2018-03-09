import { all } from 'redux-saga/effects';

import {watchFetchAllTsEvents, fetchAllTsEvents, watchFetchSpecifiedTSEvents, fetchSpecifiedTSEvents} from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    fetchAllTsEvents(),
    watchFetchAllTsEvents(),
    watchFetchSpecifiedTSEvents(),
  ]);
}