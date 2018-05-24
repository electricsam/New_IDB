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
  watchPatchTsEvent,
  } from './tsunamiSaga';

import {
  watchDeleteEarthquake,
  watchFetchSpecifiedEarthquakes,
  watchDeleteEarthquakeFulfilled,
  watchDeleteEarthquakeRejected,
  watchPostEarthquake,
  watchPatchEarthquake,
  watchFetchEarthquake,
} from "./earthquakeSaga";

import {
  watchFetchSpecifiedReferences,
  watchDeleteReference,
  watchDeleteReferenceFulfilled,
  watchDeleteReferenceRejected,
  watchPostReference,
  watchFetchReferenceById,
  watchPatchReference
} from "./referenceSaga";

import {
  watchFetchSpecifiedVolcanoEvents,
  watchDeleteVolcanoEvent,
  watchDeleteVolcanoEventFulfilled,
  watchDeleteVolcanoEventRejected,
} from './volcanoSaga';

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
    watchPostEarthquake(),
    watchPatchEarthquake(),
    watchFetchEarthquake(),
    watchFetchSpecifiedReferences(),
    watchDeleteReference(),
    watchDeleteReferenceFulfilled(),
    watchDeleteReferenceRejected(),
    watchPostReference(),
    watchFetchReferenceById(),
    watchPatchReference(),
    watchFetchSpecifiedVolcanoEvents(),
    watchDeleteVolcanoEvent(),
    watchDeleteVolcanoEventFulfilled(),
    watchDeleteVolcanoEventRejected(),
  ]);
}