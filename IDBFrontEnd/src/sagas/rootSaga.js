import { all } from 'redux-saga/effects';

import {
  watchFetchAllTsEvents, fetchAllTsEvents, watchFetchSpecifiedTSEvents, fetchSpecifiedTSEvents,
  watchPostTsEvent, watchPostRunup, watchFetchTsEventById
} from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    fetchAllTsEvents(),
    watchFetchAllTsEvents(),
    watchFetchSpecifiedTSEvents(),
    watchPostTsEvent(),
    watchPostRunup(),
    watchFetchTsEventById(),
  ]);
}