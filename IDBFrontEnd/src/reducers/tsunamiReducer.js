import { fromJS } from 'immutable';
import { actionsTypes } from 'react-redux-form'

export const initialState = fromJS({
  fetchingTsEvent: false,
  fetchedTsEvent: false,
  error: null,
  TsEvents: [],
  headersAndAccessors: [],
  showSourceForm: true
});


export default function reducer(state=initialState, action){
  switch (action.type){
    case 'FETCH_ALL_TS_EVENTS_REQUESTED': {
      return state.set(state, 'fetchingTsEvent', true);
    }
    case 'FETCH_ALL_TS_EVENTS_REJECTED': {
      return state.merge(state, {fetchingTsEvent:false, error:action.payload});
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
    case 'UPDATE_LOCATION_PARAM':{
      switch (state.get('locType')){
        case 'locstart': {
          console.log('you got here', action.payload)
          let newState = state.merge(state, {search: {locstart: action.payload, loc: ''}})
          console.log("New State: ", newState)
        }
        case 'locend': {
          return state.merge(state, {search: {locend: action.payload, loc: ''}})
        }
        case 'locincludes': {
          return state.merge(state, {search: {locincludes: action.payload, loc: ''}})
        }
        case 'locmatch' : {
          return state.merge(state, {search: {locmatch: action.payload, loc: ''}})
        }
        case 'locnot': {
          return state.merge(state, {search: {locnot: action.payload, loc: ''}})
        }
      }
    }

    default:
      return state;
  }
}

