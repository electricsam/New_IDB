import {fromJS} from 'immutable';

export const initialState = fromJS({
  eventModalIsOpen: false,
  eventModalTitle: null,
  eventModalValidValues: null,
  eventModalData: null,
  eventModalSecondaryData: null,
  eventModalComponent: null,
  locModalIsOpen: false,
  locModalTitle: null,
  locModalData: null,
  locModalValidValues: null,
  locModalSecondaryData: null,
  locModalComponent: null,
});

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_VOLCANO_EVENT_MODAL': {
      console.log("action.payload: ", action.payload)
      return state.merge(state, {
        eventModalIsOpen: true,
        eventModalTitle: action.payload.title,
        eventModalData: action.payload.data,
        eventModalValidValues: action.payload.validValues,
        eventModalSecondaryData: action.payload.secondaryData || null,
        eventModalComponent: action.payload.component || null
      });
    }
    case 'CLOSE_VOLCANO_EVENT_MODAL': {
      return state.merge(state, {
        eventModalIsOpen: false
      });
    }
    case 'OPEN_VOLCANO_LOC_MODAL': {
      console.log("action.payload: ", action.payload)
      return state.merge(state, {
        locModalIsOpen: true,
        locModalTitle: action.payload.title,
        locModalData: action.payload.data,
        locModalValidValues: action.payload.validValues,
        locModalSecondaryData: action.payload.secondaryData || null,
        locModalComponent: action.payload.component || null
      });
    }
    case 'CLOSE_VOLCANO_LOC_MODAL': {
      return state.merge(state, {
        locModalIsOpen: false
      });
    }
    default:
      return state;
  }
}