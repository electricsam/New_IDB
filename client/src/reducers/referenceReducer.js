import {fromJS} from 'immutable';

export const initialState = fromJS({
  references: [],
  headersAndAccessors: [],
  fetchingReference: false,
  fetchedReference: false,
  error: null,
  deleteReferenceId: null,
  showDeleteReferenceConfirmation: false,


});

export default function reducer(state = initialState, action){
  switch(action.type){
    case "FETCH_SPECIFIED_REFERENCES_REQUESTED": {
      return state.merge(state, {fetchingReference: true});
    }
    case "FETCH_SPECIFIED_REFERENCES_FULFILLED": {
      return state.merge(state, {
        etchedReference: true,
        fetchingReference: false,
        references: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case "FETCH_SPECIFIED_REFERENCES_REJECTED": {
      return state.merge(state, {fetchingReference: false, error: action.payload})
    }
    case "SET_DELETE_REFERENCE_ID": {
      return state.merge(state, {deleteReferenceId: action.payload});
    }
    case "TOGGLE_DELETE_REFERENCE_CONFIRMATION": {
      return state.merge(state, {showDeleteReferenceConfirmation: !state.get('showDeleteReferenceConfirmation')});
    }

    default:
      return state;
  }
}