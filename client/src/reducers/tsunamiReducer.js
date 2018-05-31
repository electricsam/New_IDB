import { fromJS } from 'immutable';
import { actionsTypes } from 'react-redux-form';

export const initialState = fromJS({
  postingRunup: false,
  postedRunup: false,
  postedRunupData: [],
  postingTsEvent: false,
  postedTsEvent: false,
  postedTsEventData: [],
  fetchingTsEvent: false,
  fetchedTsEvent: false,
  error: null,
  tsEvents: [{ country: '' }],
  tsEvent: {},
  headersAndAccessors: [],
  showSourceForm: true,
  showRunupPlaceForm: false,
  showTsunamiEffectsForm: false,
  showTotalTsunamiSourceForm: false,
  showRunupSource: true,
  showRunupLocation: true,
  showRunupParams: true,
  fetchingRunup: false,
  fetchedRunup: false,
  runupData: [{ country: '' }],
  deleteRunupId: null,
  showDeleteConfirmation: false,
  deletingRunup: false,
  deletedRunup: false,
  deletingEvent: false,
  deletedEvent: false,
  deleteEventId: null,
  showDeleteEventConfirmation: false,
  search: {
    country: '',
    runupcountry: '',
  },
  insert: {
    country: '',
  },
  rnpinsert: {
    country: '',
  },
  showTsInsertDateLoc: true,
  showTsInsertMeasure: true,
  showTsInsertEffects: true,
  showTsInsertEffectsTotal: true,
  showRunupInsertDateLoc: true,
  showRunupInsertMeasure: true,
  showRunupInsertEffects: true,
  showRunupUpdateDateLoc: true,
  showRunupUpdateMeasure: true,
  showRunupUpdateEffects: true,
  showTsunamiUpdateDateLoc: true,
  showTsunamiUpdateMeasure: true,
  showTsunamiUpdateEffects: true,
  showTsunamiUpdateEffectsTotal: true,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_ALL_TS_EVENTS_REQUESTED': {
    return state.set(state, 'fetchingTsEvent', true);
  }
  case 'FETCH_ALL_TS_EVENTS_REJECTED': {
    return state.merge(state, { fetchingTsEvent: false, error: action.payload });
  }
  case 'FETCH_ALL_TS_EVENTS_FULFILLED': {
    return state.merge(state, {
      fetchingTsEvent: false,
      fetchedTsEvent: true,
      tsEvents: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED': {
    return state.set(state, 'fetchingTsEvent', true);
  }
  case 'FETCH_SPECIFIED_TS_EVENTS_REJECTED': {
    return state.merge(state, { fetchingTsEvent: false, error: action.payload });
  }
  case 'FETCH_SPECIFIED_TS_EVENTS_FULFILLED': {
    return state.merge(state, {
      fetchingTsEvent: false,
      fetchedTsEvent: true,
      tsEvents: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'TOGGLE_SOURCE_FORM': {
    return state.merge(state, { showSourceForm: !state.get('showSourceForm') });
  }
  case 'UPDATE_FETCHED_TS_EVENTS': {
    return state.merge(state, { fetchedTsEvent: true });
  }
  case 'POST_TS_EVENT_REQUESTED': {
    return state.merge(state, { postingTsEvent: true });
  }
  case 'POST_TS_EVENT_REJECTED': {
    return state.merge(state, { postingTsEvent: false, errors: action.payload });
  }
  case 'POST_TS_EVENT_FULFILLED': {
    return state.merge(state, { postingTsEvent: false, postedTsEvent: true, postedTsEventData: action.payload.data });
  }
  case 'POST_TS_RUNUP_REQUESTED': {
    return state.merge(state, { postingRunup: true });
  }
  case 'POST_TS_RUNUP_REJECTED': {
    return state.merge(state, { postingRunup: false, errors: action.payload });
  }
  case 'POST_TS_RUNUP_FULFILLED': {
    return state.merge(state, { postingRunup: false, postedRunup: true, postedRunupData: action.payload.data });
  }
  case 'FETCH_TS_EVENT': {
    return state.merge(state, { fetchingTsEvent: true });
  }
  case 'FETCH_TS_EVENT_FULFILLED': {
    return state.merge(state, { fetchingTsEvent: false, fetchedTsEvent: true, tsEvent: action.payload });
  }
  case 'FETCH_TS_EVENT_REJECTED': {
    return state.merge(state, { fetchingTsEvent: false, fetchedTsEvent: false, error: action.payload });
  }
  case 'FETCH_TS_RUNUP_REQUESTED': {
    return state.merge(state, { fetchingRunup: true });
  }
  case 'FETCH_TS_RUNUP_FULFILLED': {
    console.log('Action.payload: ', action.payload);
    return state.mergeDeep(state, { fetchingRunup: false, fetchedRunup: true, runupData: [action.payload] });
  }
  case 'FETCH_TS_RUNUP_REJECTED': {
    return state.merge(state, { fetchingRunup: false, error: action.payload });
  }
  case 'TOGGLE_RUNUPPLACE_FORM': {
    return state.merge(state, { showRunupPlaceForm: !state.get('showRunupPlaceForm') });
  }
  case 'TOGGLE_TSUNAMIEFFECTS_FORM': {
    return state.merge(state, { showTsunamiEffectsForm: !state.get('showTsunamiEffectsForm') });
  }
  case 'TOGGLE_TOTALTSUNAMISOURCE_FORM': {
    return state.merge(state, { showTotalTsunamiSourceForm: !state.get('showTotalTsunamiSourceForm') });
  }
  case 'TOGGLE_RUNUP_SOURCE_FORM': {
    return state.merge(state, { showRunupSource: !state.get('showRunupSource') });
  }
  case 'TOGGLE_RUNUPLOCATION_FORM': {
    return state.merge(state, { showRunupLocation: !state.get('showRunupLocation') });
  }
  case 'TOGGLE_RUNUPPARAMS_FORM': {
    return state.merge(state, { showRunupParams: !state.get('showRunupParams') });
  }
  case 'FETCH_SPECIFIED_RUNUP_REQUESTED': {
    return state.merge({ fetchingRunup: true });
  }
  case 'FETCH_SPECIFIED_RUNUP_REJECTED': {
    return state.merge({ fetchingRunup: false, error: action.payload });
  }
  case 'FETCH_SPECIFIED_RUNUP_FULFILLED': {
    return state.merge(state, {
      fetchingRunup: false,
      fetchedRunup: true,
      runupData: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_ALL_RUNUP_REQUESTED': {
    return state.merge({ fetchingRunup: true });
  }
  case 'FETCH_ALL_RUNUP_REJECTED': {
    return state.merge({ fetchingRunup: false, error: action.payload });
  }
  case 'FETCH_ALL_RUNUP_FULFILLED': {
    return state.merge(state, {
      fetchingRunup: false,
      fetchedRunup: true,
      runupData: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'TOGGLE_DELETE_RUNUP_CONFIRMATION': {
    return state.merge(state, { showDeleteConfirmation: !state.get('showDeleteConfirmation') });
  }
  case 'SET_DELETE_RUNUP_ID': {
    return state.merge(state, { deleteRunupId: action.payload });
  }
  case 'DELETE_RUNUP_REQUESTED': {
    return state.merge(state, { deletingRunup: true });
  }
  case 'DELETE_RUNUP_FULFILLED': {
    return state.merge(state, { deletingRunup: false, deletedRunup: true });
  }
  case 'DELETE_RUNUP_REJECTED': {
    return state.merge(state, { deletingRunup: false, error: action.payload });
  }
  case 'SET_DELETE_EVENT_ID': {
    return state.merge(state, { deleteEventId: action.payload });
  }
  case 'TOGGLE_DELETE_EVENT_CONFIRMATION': {
    return state.merge(state, { showDeleteEventConfirmation: !state.get('showDeleteEventConfirmation') });
  }
  case 'DELETE_EVENT_REQUESTED': {
    return state.merge(state, { deletingEvent: true });
  }
  case 'DELETE_EVENT_FULFILLED': {
    return state.merge(state, { deletingEvent: false, deletedEvent: true });
  }
  case 'DELETE_EVENT_REJECTED': {
    return state.merge(state, { deletingEvent: false, error: action.payload });
  }
  case 'TOGGLE_TSINSERT_DATE_AND_LOCATION': {
    return state.merge(state, { showTsInsertDateLoc: !state.get('showTsInsertDateLoc') });
  }
  case 'TOGGLE_TSINSERT_MEASUREMENTS': {
    return state.merge(state, { showTsInsertMeasure: !state.get('showTsInsertMeasure') });
  }
  case 'TOGGLE_TSINSERT_EFFECTS': {
    return state.merge(state, { showTsInsertEffects: !state.get('showTsInsertEffects') });
  }
  case 'TOGGLE_TSINSERT_TOTAL_EFFECTS': {
    return state.merge(state, { showTsInsertEffectsTotal: !state.get('showTsInsertEffectsTotal') });
  }
  case 'TOGGLE_RUNUP_INSERT_DATE_LOC': {
    return state.merge(state, { showRunupInsertDateLoc: !state.get('showRunupInsertDateLoc') });
  }
  case 'TOGGLE_RUNUP_INSERT_MEASURE': {
    return state.merge(state, { showRunupInsertMeasure: !state.get('showRunupInsertMeasure') });
  }
  case 'TOGGLE_RUNUP_INSERT_EFFECTS': {
    return state.merge(state, { showRunupInsertEffects: !state.get('showRunupInsertEffects') });
  }
  case 'TOGGLE_RUNUP_UPDATE_DATE_LOC': {
    return state.merge(state, { showRunupUpdateDateLoc: !state.get('showRunupUpdateDateLoc') });
  }
  case 'TOGGLE_RUNUP_UPDATE_MEASURE': {
    return state.merge(state, { showRunupUpdateMeasure: !state.get('showRunupUpdateMeasure') });
  }
  case 'TOGGLE_RUNUP_UPDATE_EFFECTS': {
    return state.merge(state, { showRunupUpdateEffects: !state.get('showRunupUpdateEffects') });
  }
  case 'TOGGLE_TSUNAMI_UPDATE_DATE_LOC': {
    return state.merge(state, { showTsunamiUpdateDateLoc: !state.get('showTsunamiUpdateDateLoc') });
  }
  case 'TOGGLE_TSUNAMI_UPDATE_MEASURE': {
    return state.merge(state, { showTsunamiUpdateMeasure: !state.get('showTsunamiUpdateMeasure') });
  }
  case 'TOGGLE_TSUNAMI_UPDATE_EFFECTS': {
    return state.merge(state, { showTsunamiUpdateEffects: !state.get('showTsunamiUpdateEffects') });
  }
  case 'TOGGLE_TSUNAMI_UPDATE_EFFECTS_TOTAL': {
    return state.merge(state, { showTsunamiUpdateEffectsTotal: !state.get('showTsunamiUpdateEffectsTotal') });
  }
  default:
    return state;
  }
}

