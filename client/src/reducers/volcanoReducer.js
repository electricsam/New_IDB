import { fromJS } from 'immutable';

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
  name: null,
  location: null,
  comments: null,
  showVolEventSearchEffects: true,
  fetchedVolcanoLocs: false,
  fetchingVolcanoLocs: false,
  showDeleteVolcanoLocsConfirmation: false,
  volcanoLocs: [],
  deletingVolcanoLoc: false,
  deletedVolcanoLoc: false,
  deleteVolcanoLocId: null,
  showDeleteVolcanoLocConfirmation: false,
  showVolLocSearchParams: true,
  locSearch: {

  },
  locName: null,
  showVolEventInsertDateLoc: true,
  insert: {
    country: '',
  },
  locInsert: {

  },
  postingVolcanoEvent: false,
  postedVolcanoEvent: false,
  showVolEventInsertMeasure: true,
  showVolEventInsertEffects: true,
  postingVolcanoLoc: false,
  postedVolcanoLoc: false,
  showVolLocInsertLocation: true,
  showVolLocInsertDetails: true,
  patchingVolcanoEvent: false,
  patchedVolcanoEvent: false,
  showVolEventUpdateDate: true,
  showVolEventUpdateMeasure: true,
  showVolEventUpdateEffects: true,
  patchingVolcanoLoc: false,
  patchedVolcanoLoc: false,
  showVolLocUpdateLocation: true,
  showVolLocUpdateDetails: true,
  volcanoEventTableSelectionId: null,
  volcanoEventTableSelectionLocId: null,
  volcanoLocTableSelectionId: null,
  relating: false,
  related: false,

});

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED': {
    return state.merge(state, { fetchingVolcanoEvents: true, fetchedVolcanoEvents: false });
  }
  case 'FETCH_SPECIFIED_VOLCANO_EVENTS_FULFILLED': {
    return state.merge(state, {
      fetchingVolcanoEvents: false,
      fetchedVolcanoEvents: true,
      volcanoEvents: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_SPECIFIED_VOLCANO_EVENTS_REJECTED': {
    return state.merge(state, { fetchingVolcanoEvents: false, error: action.payload });
  }
  case 'DELETE_VOLCANO_EVENT_REQUESTED': {
    return state.merge(state, { deletingVolcanoEvent: true });
  }
  case 'DELETE_VOLCANO_EVENT_FULFILLED': {
    return state.merge(state, { deletingVolcanoEvent: false, deletedVolcanoEvent: true });
  }
  case 'DELETE_VOLCANO_EVENT_REJECTED': {
    return state.merge(state, { deletingVolcanoEvent: false, error });
  }
  case 'SET_DELETE_VOLCANO_EVENT_ID': {
    return state.merge(state, { deleteVolcanoEventId: action.payload });
  }
  case 'TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION': {
    return state.merge(state, { showDeleteVolcanoEventConfirmation: !state.get('showDeleteVolcanoEventConfirmation') });
  }
  case 'TOGGLE_VOLCANO_EVENT_SEARCH_PARAMETERS': {
    return state.merge(state, { showVolEventSearchParams: !state.get('showVolEventSearchParams') });
  }
  case 'TOGGLE_VOLCANO_EVENT_SEARCH_EFFECTS': {
    return state.merge(state, { showVolEventSearchEffects: !state.get('showVolEventSearchEffects') });
  }
  case 'FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED': {
    return state.merge(state, { fetchingVolcanoLocs: true, fetchedVolcanoLocs: false });
  }
  case 'FETCH_SPECIFIED_VOLCANO_LOCS_FULFILLED': {
    return state.merge(state, {
      fetchingVolcanoLocs: false,
      fetchedVolcanoLocs: true,
      volcanoLocs: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_SPECIFIED_VOLCANO_LOCS_REJECTED': {
    return state.merge(state, {
      fetchingVolcanoLocs: false,
      error: action.payload,
    });
  }
  case 'DELETE_VOLCANO_LOC_REQUESTED': {
    return state.merge(state, { deletingVolcanoLoc: true });
  }
  case 'DELETE_VOLCANO_LOC_FULFILLED': {
    return state.merge(state, { deletingVolcanoLoc: false, deletedVolcanoLoc: true });
  }
  case 'TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION': {
    return state.merge(state, { showDeleteVolcanoLocConfirmation: !state.get('showDeleteVolcanoLocConfirmation') });
  }
  case 'SET_DELETE_VOLCANO_LOC_ID': {
    return state.merge(state, { deleteVolcanoLocId: action.payload });
  }
  case 'TOGGLE_VOLCANO_LOC_SEARCH_PARAMETERS': {
    return state.merge(state, { showVolLocSearchParams: !state.get('showVolLocSearchParams') });
  }
  case 'TOGGLE_VOLCANO_EVENT_INSERT_DATE_AND_LOCATION': {
    return state.merge(state, { showVolEventInsertDateLoc: !state.get('showVolEventInsertDateLoc') });
  }
  case 'POST_VOLCANO_EVENT_REQUESTED': {
    return state.merge(state, { postingVolcanoEvent: true });
  }
  case 'POST_VOLCANO_EVENT_FULFILLED': {
    return state.merge(state, { postingVolcanoEvent: false, postedVolcanoEvent: true });
  }
  case 'POST_VOLCANO_EVENT_REJECTED': {
    return state.merge(state, { postingVolcanoEvent: false, error: action.payload });
  }
  case 'TOGGLE_VOLCANO_EVENT_INSERT_MEASURE': {
    return state.merge(state, { showVolEventInsertMeasure: !state.get('showVolEventInsertMeasure') });
  }
  case 'TOGGLE_VOLCANO_EVENT_INSERT_EFFECTS': {
    return state.merge(state, { showVolEventInsertEffects: !state.get('showVolEventInsertEffects') });
  }
  case 'POST_VOLCANO_LOC_REQUESTED': {
    return state.merge(state, { postingVolcanoLoc: true });
  }
  case 'POST_VOLCANO_LOC_FULFILLED': {
    return state.merge(state, { postingVolcanoLoc: false, postedVolcanoLoc: true });
  }
  case 'POST_VOLCANO_LOC_REJECTED': {
    return state.merge(state, { postingVolcanoLoc: false, error: action.payload });
  }
  case 'TOGGLE_VOLCANO_LOC_INSERT_LOCATION': {
    return state.merge(state, { showVolLocInsertLocation: !state.get('showVolLocInsertLocation') });
  }
  case 'TOGGLE_VOLCANO_LOC_INSERT_DETAILS': {
    return state.merge(state, { showVolLocInsertDetails: !state.get('showVolLocInsertDetails') });
  }
  case 'PATCH_VOLCANO_EVENT_REQUESTED': {
    return state.merge(state, { patchingVolcanoEvent: true });
  }
  case 'PATCH_VOLCANO_EVENT_FULFILLED': {
    return state.merge(state, { patchingVolcanoEvent: false, patchedVolcanoEvent: true });
  }
  case 'PATCH_VOLCANO_EVENT_REJECTED': {
    return state.merge(state, { patchingVolcanoEvent: false, error: action.payload });
  }
  case 'FETCH_VOLCANO_EVENT_REQUESTED': {
    return state.merge(state, { fetchingVolcanoEvents: true, fetchedVolcanoEvents: false });
  }
  case 'FETCH_VOLCANO_EVENT_FULFILLED': {
    return state.merge(state, {
      fetchingVolcanoEvents: false,
      fetchedVolcanoEvents: true,
      volcanoEvents: [action.payload.data],
      headersAndAccessors: action.payload.formattedData
    });
  }
  case 'FETCH_VOLCANO_EVENT_REJECTED': {
    return state.merge(state, { fetchingVolcanoEvents: false, error: action.payload });
  }
  case 'TOGGLE_VOLCANO_EVENT_UPDATE_DATE': {
    return state.merge(state, { showVolEventUpdateDate: !state.get('showVolEventUpdateDate') });
  }
  case 'TOGGLE_VOLCANO_EVENT_UPDATE_MEASURE': {
    return state.merge(state, { showVolEventUpdateMeasure: !state.get('showVolEventUpdateMeasure') });
  }
  case 'TOGGLE_VOLCANO_EVENT_UPDATE_EFFECTS': {
    return state.merge(state, { showVolEventUpdateEffects: !state.get('showVolEventUpdateEffects') });
  }
  case 'FETCH_VOLCANO_LOC_REQUESTED': {
    return state.merge(state, { fetchingVolcanoLocs: true, fetchedVolcanoLocs: false });
  }
  case 'FETCH_VOLCANO_LOC_FULFILLED': {
    return state.merge(state, {
      fetchingVolcanoLocs: false,
      fetchedVolcanoLocs: true,
      volcanoLocs: [action.payload],
    });
  }
  case 'FETCH_VOLCANO_LOC_REQUESTED': {
    return state.merge(state, { fetchingVolcanoLocs: false, error: action.payload });
  }
  case 'PATCH_VOLCANO_LOC_REQUESTED': {
    return state.merge(state, { patchingVolcanoLoc: true, patchedVolcanoLoc: false });
  }
  case 'FETCH_VOLCANO_LOC_FULFILLED': {
    return state.merge(state, { patchingVolcanoLoc: false, patchedVolcanoLoc: true });
  }
  case 'FETCH_VOLCANO_LOC_REJECTED': {
    return state.merge(state, { patchingVolcanoLoc: false, error: action.payload });
  }
  case 'TOGGLE_VOLCANO_LOC_UPDATE_LOCATION': {
    return state.merge(state, { showVolLocUpdateLocation: !state.get('showVolLocUpdateLocation') });
  }
  case 'TOGGLE_VOLCANO_LOC_UPDATE_DETAILS': {
    return state.merge(state, { showVolLocUpdateDetails: !state.get('showVolLocUpdateDetails') });
  }
  case "SET_VOLCANO_EVENT_TABLE_SELECTION_ID": {
    return state.merge(state, { volcanoEventTableSelectionId: action.payload});
  }
  case "SET_VOLCANO_EVENT_TABLE_SELECITON_LOCID": {
    return state.merge(state, { volcanoEventTableSelectionLocId: action.payload});
  }
  case "SET_VOLCANO_LOC_TABLE_SELECTION_ID": {
    return state.merge(state, {volcanoLocTableSelectionId: action.payload});
  }
    case 'RELATE_VOLCANO_TO_EARTHQUAKE_REQUESTED': {
      return state.merge(state, {relating: true, related: false});
    }
    case 'RELATE_VOLCANO_TO_EARTHQUAKE_FULFILLED': {
      return state.merge(state, {relating: false, related: true});
    }
    case 'RELATE_VOLCANO_TO_EARTHQUAKE_REJECTED': {
      return state.merge(state, {relating: false, related: false, error: action.payload});
    }
    case 'RELATE_VOLCANO_TO_TSUNAMI_REQUESTED': {
      return state.merge(state, {relating: true, related: false});
    }
    case 'RELATE_VOLCANO_TO_TSUNAMI_FULFILLED': {
      return state.merge(state, {relating: false, related: true});
    }
    case 'RELATE_VOLCANO_TO_TSUNAMI_REJECTED': {
      return state.merge(state, {relating: false, related: false, error: action.payload});
    }

  default:
    return state;
  }
}
