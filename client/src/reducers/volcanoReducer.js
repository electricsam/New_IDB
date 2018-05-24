import {fromJS} from 'immutable';

export const initialState = fromJS({
  error: null,
  volcanoEvents: [],
  headersAndAccessors: [],
  fetchingVolcanoEvents: false,
  fetchedVolcanoEvents: false,
  deletingVolcanoEvent: false,
  deletedVolcanoEvent: false,
  deleteVolcanoEventId: null,
  showDeleteVolcanoEventConfirmation: false,
});


export default function reducer(state = initialState, action){
  switch(action.type){
    case "FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED": {
      return state.merge(state, {fetchingVolcanoEvents: true});
    }
    case "FETCH_SPECIFIED_VOLCANO_EVENTS_FULFILLED": {
      return state.merge(state, {
        fetchingVolcanoEvents: false,
        fetchedVolcanoEvents: true,
        volcanoEvents: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case "FETCH_SPECIFIED_VOLCANO_EVENTS_REJECTED": {
      return state.merge(state, {fetchingVolcanoEvents: false, error: action.payload});
    }
    case "DELETE_VOLCANO_EVENT_REQUESTED":{
      return state.merge(state, {deletingVolcanoEvent:true});
    }
    case "DELETE_VOLCANO_EVENT_FULFILLED": {
      return state.merge(state, {deletingVolcanoEvent: false, deletedVolcanoEvent: true});
    }
    case "DELETE_VOLCANO_EVENT_REJECTED": {
      return state.merge(state, {deletingVolcanoEvent: false, error: error});
    }
    case "SET_DELETE_VOLCANO_EVENT_ID": {
      return state.merge(state, {deleteVolcanoEventId: action.payload});
    }
    case "TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION": {
      return state.merge(state, {showDeleteVolcanoEventConfirmation: !state.get('showDeleteVolcanoEventConfirmation')});
    }
    default:
      return state;
  }
}