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
  watchDeleteRunup,
  watchDeleteRunupFulfilled,
  watchDeleteRunupRejected,
  watchDeleteEvent,
  watchDeleteEventFulfilled,
  watchDeleteEventRejected,
  watchPatchTsEvent
} from './tsunamiSaga';

import {
  watchDeleteEarthquake,
  watchFetchSpecifiedEarthquakes,
  watchDeleteEarthquakeFulfilled,
  watchDeleteEarthquakeRejected
} from "./earthquakeSaga";

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
    watchFetchAllRunups(),
    watchDeleteRunup(),
    watchDeleteRunupFulfilled(),
    watchDeleteRunupRejected(),
    watchDeleteEvent(),
    watchDeleteEventFulfilled(),
    watchDeleteEventRejected(),
    watchPatchTsEvent(),
    watchFetchSpecifiedEarthquakes(),
    watchDeleteEarthquake(),
    watchDeleteEarthquakeFulfilled(),
    watchDeleteEarthquakeRejected(),
  ]);
}