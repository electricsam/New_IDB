import { fromJS } from 'immutable';
import { actionTypes } from 'react-redux-form';

export const initialState = fromJS({
  showEqSearchParams: true,
  showEqSearchEffects: true,
  showEqSearchEffectsTotal: true,
  search: {
    country: ""
  }
});

export default function reducer(state = initialState, action){
  switch(action.type){
    case "TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS" : {
      return state.merge(state, {"showEqSearchParams": !state.get("showEqSearchParams")});
    }
    case "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS" : {
      return state.merge(state, {"showEqSearchEffects": !state.get("showEqSearchEffects")});
    }
    case "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS" : {
      return state.merge(state, {"showEqSearchEffectsTotal": !state.get("showEqSearchEffectsTotal")});
    }
    default:
      return state;
  }
}