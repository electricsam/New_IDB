import { all } from 'redux-saga/effects';

import {
  watchFetchAllTsEvents,
  watchFetchSpecifiedTSEvents,
  watchPostTsEvent,
  watchPostRunup,
  watchFetchTsEventById,
  watchFetchRunup,
  watchUpdateRunup,
  watchFetchSpecifiedRunup,
  watchFetchAllRunups,
} from './tsunamiSaga';

export default function* rootSaga(){
  yield all([
    watchFetchSpecifiedTSEvents(),
    watchFetchAllTsEvents(),
    watchPostTsEvent(),
    watchPostRunup(),
    watchFetchTsEventById(),
    watchFetchRunup(),
    watchUpdateRunup(),
    watchFetchSpecifiedRunup(),
    watchFetchAllRunups()
  ]);
}