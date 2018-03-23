import { all } from 'redux-saga/effects';

import {
  watchFetchAllTsEvents, fetchAllTsEvents, watchFetchSpecifiedTSEvents, fetchSpecifiedTSEvents,
  watchPostTsEvent, watchPostRunup, watchFetchTsEventById
} from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    watchFetchSpecifiedTSEvents(),
    watchFetchAllTsEvents(),
    watchPostTsEvent(),
    watchPostRunup(),
    watchFetchTsEventById(),
  ]);
}