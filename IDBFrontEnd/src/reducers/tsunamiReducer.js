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
  showSourceForm: true
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
      console.log("you are in the reducer for specified ts event request")
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
    default:
      return state;
  }
}

