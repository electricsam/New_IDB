import { fromJS } from 'immutable';
import { actionsTypes } from 'react-redux-form'

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
  TsEvents: [],
  tsEvent:{},
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
  runupData: [],
  deleteRunupId: null,
  showDeleteConfirmation: false,
  deletingRunup: false,
  deletedRunup: false,
});

export default function reducer(state=initialState, action){
  switch (action.type){
    case 'FETCH_ALL_TS_EVENTS_REQUESTED': {
      return state.set(state, 'fetchingTsEvent', true);
    }
    case 'FETCH_ALL_TS_EVENTS_REJECTED': {
      return state.merge(state, {fetchingTsEvent: false, error: action.payload});
    }
    case 'FETCH_ALL_TS_EVENTS_FULFILLED': {
      return state.merge(state, {
        fetchingTsEvent:false,
        fetchedTsEvent: true,
        TsEvents: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED': {
      return state.set(state, 'fetchingTsEvent', true);
    }
    case 'FETCH_SPECIFIED_TS_EVENTS_REJECTED': {
      return state.merge(state, {fetchingTsEvent:false, error:action.payload});
    }
    case 'FETCH_SPECIFIED_TS_EVENTS_FULFILLED': {
      return state.merge(state, {
        fetchingTsEvent:false,
        fetchedTsEvent: true,
        TsEvents: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case 'TOGGLE_SOURCE_FORM': {
      return state.merge(state, {showSourceForm: !state.get('showSourceForm')})
    }
    case 'UPDATE_FETCHED_TS_EVENTS': {
      return state.merge(state, {fetchedTsEvent: true});
    }
    case 'POST_TS_EVENT_REQUESTED':{
      return state.merge(state, {postingTsEvent: true});
    }
    case 'POST_TS_EVENT_REJECTED': {
      return state.merge(state, {postingTsEvent: false, errors: action.payload});
    }
    case 'POST_TS_EVENT_FULFILLED': {
      return state.merge(state, {postingTsEvent: false, postedTsEvent: true, postedTsEventData: action.payload.data});
    }
    case 'POST_TS_RUNUP_REQUESTED':{
      return state.merge(state, {postingRunup: true});
    }
    case 'POST_TS_RUNUP_REJECTED': {
      return state.merge(state, {postingRunup: false, errors: action.payload});
    }
    case 'POST_TS_RUNUP_FULFILLED': {
      return state.merge(state, {postingRunup: false, postedRunup: true, postedRunupData: action.payload.data});
    }
    case 'FETCH_TS_EVENT': {
      return state.merge(state, {fetchingTsEvent: true});
    }
    case 'FETCH_TS_EVENT_FULFILLED': {
      return state.merge(state, {fetchingTsEvent: false, fetchedTsEvent:true, tsEvent: action.payload});
    }
    case 'FETCH_TS_EVENT_REJECTED': {
      return state.merge(state, {fetchingTsEvent: false, fetchedTsEvent: false, error: action.payload});
    }
    case "FETCH_TS_RUNUP_REQUESTED": {
      return state.merge(state, {fetchingRunup: true})
    }
    case "FETCH_TS_RUNUP_FULFILLED": {
      return state.merge(state, {fetchingRunup: false, fetchedRunup: true, runupData: action.payload});
    }
    case "FETCH_TS_RUNUP_REJECTED":{
      return state.merge(state, {fetchingRunup: false, error: action.payload});
    }
    case "TOGGLE_RUNUPPLACE_FORM": {
      return state.merge(state, {showRunupPlaceForm: !state.get('showRunupPlaceForm')})
    }
    case "TOGGLE_TSUNAMIEFFECTS_FORM": {
      return state.merge(state, {showTsunamiEffectsForm: !state.get('showTsunamiEffectsForm')})
    }
    case "TOGGLE_TOTALTSUNAMISOURCE_FORM": {
      return state.merge(state, {showTotalTsunamiSourceForm: !state.get('showTotalTsunamiSourceForm')})
    }
    case "TOGGLE_RUNUP_SOURCE_FORM": {
      return state.merge(state, {showRunupSource: !state.get('showRunupSource')});
    }
    case "TOGGLE_RUNUPLOCATION_FORM": {
      return state.merge(state, {showRunupLocation: !state.get('showRunupLocation')});
    }
    case "TOGGLE_RUNUPPARAMS_FORM": {
      return state.merge(state, {showRunupParams: !state.get('showRunupParams')});
    }
    case "FETCH_SPECIFIED_RUNUP_REQUESTED": {
      return state.merge({fetchingRunup: true});
    }
    case "FETCH_SPECIFIED_RUNUP_REJECTED": {
     return state.merge({fetchingRunup: false, error: action.payload})
    }
    case "FETCH_SPECIFIED_RUNUP_FULFILLED": {
      return state.merge(state, {
        fetchingRunup:false,
        fetchedRunup: true,
        runupData: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case "FETCH_ALL_RUNUP_REQUESTED": {
      return state.merge({fetchingRunup: true});
    }
    case "FETCH_ALL_RUNUP_REJECTED": {
      return state.merge({fetchingRunup: false, error: action.payload})
    }
    case "FETCH_ALL_RUNUP_FULFILLED": {
      return state.merge(state, {
        fetchingRunup:false,
        fetchedRunup: true,
        runupData: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case "TOGGLE_DELETE_RUNUP_CONFIRMATION": {
      console.log("you are inside the toggle action for delete confirmation on runups")
      return state.merge(state, {showDeleteConfirmation: !state.get('showDeleteConfirmation')});
    }
    case "SET_DELETE_RUNUP_ID":{
      return state.merge(state, {deleteRunupId: action.payload});
    }
    case "DELETE_RUNUP_REQUESTED": {
      return state.merge(state, {deletingRunup: true});
    }
    case "DELETE_RUNUP_FULFILLED": {
      return state.merge(state, {deletingRunup: false, deletedRunup: true});
    }
    case "DELETE_RUNUP_REJECTED": {
      return state.merge(state, {deletingRunup: false, error: action.payload});
    }
    default:
      return state;
  }
}

