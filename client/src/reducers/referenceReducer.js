import { fromJS } from 'immutable';

export const initialState = fromJS({
  references: [],
  headersAndAccessors: [],
  fetchingReference: false,
  fetchedReference: false,
  error: null,
  deleteReferenceId: null,
  showDeleteReferenceConfirmation: false,
  search: {},
  insert: {},
  showSearchParams: true,
  author: null,
  citation: null,
  comments: null,
  showReferenceInsertParam: true,
  postingReference: false,
  postedReference: false,
  showReferenceUpdateParam: true,
  fetchingReferenceById: false,
  fetchedReferenceById: false,
  patchingReference: false,
  patchedReference: false,
  tableSelection: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_SPECIFIED_REFERENCES_REQUESTED': {
    return state.merge(state, { fetchingReference: true });
  }
  case 'FETCH_SPECIFIED_REFERENCES_FULFILLED': {
    return state.merge(state, {
      fetchedReference: true,
      fetchingReference: false,
      references: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_SPECIFIED_REFERENCES_REJECTED': {
    return state.merge(state, { fetchingReference: false, error: action.payload });
  }
  case 'SET_DELETE_REFERENCE_ID': {
    return state.merge(state, { deleteReferenceId: action.payload });
  }
  case 'TOGGLE_DELETE_REFERENCE_CONFIRMATION': {
    return state.merge(state, { showDeleteReferenceConfirmation: !state.get('showDeleteReferenceConfirmation') });
  }
  case 'TOGGLE_SEARCH_PARAMETERS': {
    return state.merge(state, { showSearchParams: !state.get('showSearchParams') });
  }
  case 'TOGGLE_REFERENCE_INSERT_PARAMETERS': {
    return state.merge(state, { showReferenceInsertParam: !state.get('showReferenceInsertParam') });
  }
  case 'POST_REFERENCE_REQUESTED': {
    return state.merge(state, { postingReference: true });
  }
  case 'POST_REFERENCE_FULFILLED': {
    return state.merge(state, { postingReference: false, postedReference: true });
  }
  case 'POST_REFERENCE_REJECTED': {
    return state.merge(state, { postedReference: false, error: action.payload });
  }
  case 'TOGGLE_REFERENCE_UPDATE_PARAMETERS': {
    return state.merge(state, { showReferenceUpdateParam: !state.get('showReferenceUpdateParam') });
  }
  case 'FETCH_REFERENCE_BY_ID_REQUESTED': {
    return state.merge(state, { fetchingReferenceById: true });
  }
  case 'FETCH_REFERENCE_BY_ID_FULFILLED': {
    return state.merge(state, {
      fetchingReferenceById: false,
      fetchedReferenceById: true,
      references: [action.payload],
    });
  }
  case 'FETCH_REFERENCE_BY_ID_REJECTED': {
    return state.merge(state, {
      fetchingReferenceById: false,
      error: action.payload,
    });
  }
  case 'PATCH_REFERENCE_REQUESTED': {
    return state.merge(state, { patchingReference: true });
  }
  case 'PATCH_REFERENCE_FULFILLED': {
    return state.merge(state, { patchingReference: false, patchedReference: true });
  }
  case 'PATCH_REFERENCE_REJECTED': {
    return state.merge(state, { patchingReference: true, error: action.payload });
  }
    case "SET_TABLE_SELECTION": {
      return state.merge(state, {tableSelection: action.payload});
    }
  default:
    return state;
  }
}
