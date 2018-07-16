import {fromJS} from 'immutable';

export const initialState = fromJS({
  eventModalIsOpen: false,
  eventModalTitle: null,
  eventModalValidValues: null,
  eventModalData: null,
  eventModalSecondaryData: null,
  eventModalComponent: null
});

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_EARTHQUAKE_MODAL': {
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
    case 'CLOSE_EARTHQUAKE_MODAL': {
      return state.merge(state, {
        eventModalIsOpen: false
      });
    }
    default:
      return state;
  }
}