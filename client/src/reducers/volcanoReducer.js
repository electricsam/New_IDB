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
  search: {},
  showVolEventSearchParams: true,
  name:null,
  location:null,
  comments: null,
  showVolEventSearchEffects:true,
  fetchedVolcanoLocs:false,
  fetchingVolcanoLocs:false,
  showDeleteVolcanoLocsConfirmation:false,
  volcanoLocs:[],
  deletingVolcanoLoc: false,
  deletedVolcanoLoc: false,
  deleteVolcanoLocId: null,
  showDeleteVolcanoLocConfirmation: false,
  showVolLocSearchParams: true,
  locSearch:{

  },
  locName:null,

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
    case "TOGGLE_VOLCANO_EVENT_SEARCH_PARAMETERS": {
      return state.merge(state, {showVolEventSearchParams: !state.get('showVolEventSearchParams')});
    }
    case "TOGGLE_VOLCANO_EVENT_SEARCH_EFFECTS": {
      return state.merge(state, {showVolEventSearchEffects: !state.get("showVolEventSearchEffects")});
    }
    case "FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED": {
      return state.merge(state, {fetchingVolcanoLocs: true});
    }
    case "FETCH_SPECIFIED_VOLCANO_LOCS_FULFILLED": {
      return state.merge(state, {
        fetchingVolcanoLocs: false,
        fetchedVolcanoLocs: true,
        volcanoLocs: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      })
    }
    case "FETCH_SPECIFIED_VOLCANO_LOCS_REJECTED": {
      return state.merge(state, {
        fetchingVolcanoLocs: false,
        error: action.payload
      })
    }
    case "DELETE_VOLCANO_LOC_REQUESTED": {
      return state.merge(state, {deletingVolcanoLoc: true});
    }
    case "DELETE_VOLCANO_LOC_FULFILLED": {
      return state.merge(state, {deletingVolcanoLoc: false, deletedVolcanoLoc: true})
    }
    case "TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION": {
      return state.merge(state, {showDeleteVolcanoLocConfirmation: !state.get('showDeleteVolcanoLocConfirmation')})
    }
    case "SET_DELETE_VOLCANO_LOC_ID": {
      return state.merge(state, {deleteVolcanoLocId: action.payload});
    }
    case "TOGGLE_VOLCANO_LOC_SEARCH_PARAMETERS": {
      return state.merge(state, {showVolLocSearchParams: !state.get('showVolLocSearchParams')});
    }
    default:
      return state;
  }
}