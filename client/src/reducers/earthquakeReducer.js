import {fromJS} from 'immutable';

export const initialState = fromJS({
  showEqSearchParams: true,
  showEqSearchEffects: true,
  showEqSearchEffectsTotal: true,
  search: {
    country: ""
  },
  earthquakes: [],
  headersAndAccessors: [],
  fetchingEarthquake: false,
  fetchingEarthquake: false,
  fetchedEarthquake: false,
  error: null,
  showDeleteEarthquakeConfirmation: false,
  deleteEarthquakeId: null,
  deletingEarthquake: false,
  deletedEarthquake: false,

});

export default function reducer(state = initialState, action){
  switch(action.type){
    case "TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS" : {
      return state.merge(state, {showEqSearchParams: !state.get("showEqSearchParams")});
    }
    case "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS" : {
      return state.merge(state, {showEqSearchEffects: !state.get("showEqSearchEffects")});
    }
    case "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS" : {
      return state.merge(state, {showEqSearchEffectsTotal: !state.get("showEqSearchEffectsTotal")});
    }
    case "SET_DELETE_EARTHQUAKE_ID": {
      return state.merge({deleteEarthquakeId: action.payload});
    }
    case "TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION": {
      return state.merge(state, {showDeleteEarthquakeConfirmation: !state.get('showDeleteEarthquakeConfirmation')});
    }
    case "DELETE_EARTHQUAKE_REQUESTED": {
      return state.merge(state, {deletingEarthquake: true});
    }
    case "DELETE_EARTHQUAKE_FULFILLED": {
      return state.merge(state, {deletingEarthquake: false, deletedEarthquake: true});
    }
    case "DELETE_EARTHQUAKE_REJECTED": {
      return state.merge(state, {deletingEarthquake: false, error: action.payload});
    }
    case "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED": {
      return state.merge(state, {fetchingEarthquake: true});
    }
    case "FETCH_SPECIFIED_EARTHQUAKES_FULFILLED": {
      return state.merge(state, {
        fetchingEarthquake: false,
        fetchedEarthquake: true,
        earthquakes: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case "FETCH_SPECIFIED_EARTHQUAKES_REJECTED": {
      return state.merge(state, {fetchingEarthquake: false, error: action.payload});
    }
    default:
      return state;
  }
}