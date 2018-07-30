import {fromJS} from 'immutable';

export const initialState = fromJS({
  modalIsOpen: false,
  modalTitle: null,
  modalValidValues: null,
  modalData: null,
  modalSecondaryData: null,
  modalComponent: null
});

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_MODAL': {
      return state.merge(state, {
        modalIsOpen: true,
        modalTitle: action.payload.title,
        modalData: action.payload.data,
        modalValidValues: action.payload.validValues,
        modalSecondaryData: action.payload.secondaryData || null,
        modalComponent: action.payload.component || null
      });
    }
    case 'CLOSE_MODAL': {
      return state.merge(state, {
        modalIsOpen: false
      });
    }
    default:
      return state;
  }
}