import { fromJS } from 'immutable';

export const initialState = fromJS({
  showEqSearchParams: true,
  showEqSearchEffects: true,
  showEqSearchEffectsTotal: true,
  search: {
    country: '',
  },
  insert: {
    country: '',
  },
  earthquakes: [{ country: '' }],
  headersAndAccessors: [],
  fetchingEarthquake: false,
  fetchingEarthquake: false,
  fetchedEarthquake: false,
  error: null,
  showDeleteEarthquakeConfirmation: false,
  deleteEarthquakeId: null,
  deletingEarthquake: false,
  deletedEarthquake: false,
  showEqInsertDateLoc: true,
  showEqInsertMeasure: true,
  showEqInsertEffects: true,
  showEqInsertTotalEffects: true,
  postingEarthquake: false,
  postedEarthquake: false,
  showEqUpdateDateLoc: true,
  showEqUpdateMeasure: true,
  showEqUpdateEffects: true,
  showEqUpdateTotalEffects: true,
  tableSelection:null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS': {
    return state.merge(state, { showEqSearchParams: !state.get('showEqSearchParams') });
  }
  case 'TOGGLE_EARTHQUAKE_SEARCH_EFFECTS': {
    return state.merge(state, { showEqSearchEffects: !state.get('showEqSearchEffects') });
  }
  case 'TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS': {
    return state.merge(state, { showEqSearchEffectsTotal: !state.get('showEqSearchEffectsTotal') });
  }
  case 'SET_DELETE_EARTHQUAKE_ID': {
    return state.merge({ deleteEarthquakeId: action.payload });
  }
  case 'TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION': {
    return state.merge(state, { showDeleteEarthquakeConfirmation: !state.get('showDeleteEarthquakeConfirmation') });
  }
  case 'DELETE_EARTHQUAKE_REQUESTED': {
    return state.merge(state, { deletingEarthquake: true });
  }
  case 'DELETE_EARTHQUAKE_FULFILLED': {
    return state.merge(state, { deletingEarthquake: false, deletedEarthquake: true });
  }
  case 'DELETE_EARTHQUAKE_REJECTED': {
    return state.merge(state, { deletingEarthquake: false, error: action.payload });
  }
  case 'FETCH_SPECIFIED_EARTHQUAKES_REQUESTED': {
    return state.merge(state, { fetchingEarthquake: true, fetchedEarthquake: false });
  }
  case 'FETCH_SPECIFIED_EARTHQUAKES_FULFILLED': {
    return state.merge(state, {
      fetchingEarthquake: false,
      fetchedEarthquake: true,
      earthquakes: action.payload.data,
      headersAndAccessors: action.payload.formattedData,
    });
  }
  case 'FETCH_SPECIFIED_EARTHQUAKES_REJECTED': {
    return state.merge(state, { fetchingEarthquake: false, error: action.payload });
  }
  case 'TOGGLE_EARTHQUAKE_INSERT_DATE_AND_LOCATION': {
    return state.merge(state, { showEqInsertDateLoc: !state.get('showEqInsertDateLoc') });
  }
  case 'TOGGLE_EARTHQUAKE_INSERT_MEASURE': {
    return state.merge(state, { showEqInsertMeasure: !state.get('showEqInsertMeasure') });
  }
  case 'TOGGLE_EARTHQUAKE_INSERT_EFFECTS': {
    return state.merge(state, { showEqInsertEffects: !state.get('showEqInsertEffects') });
  }
  case 'TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS': {
    return state.merge(state, { showEqInsertTotalEffects: !state.get('showEqInsertTotalEffects') });
  }
  case 'POST_EARTHQUAKE_REQUESTED': {
    return state.merge(state, { postingEarthquake: true });
  }
  case 'POST_EARTHQUAKE_FULFILLED': {
    return state.merge(state, { postingEarthquake: false, postedEarthquake: true, earthquakes: [action.payload] });
  }
  case 'POST_EARTHQUAKE_REJECTED': {
    return state.merge(state, { postingEarthquake: false, error: action.payload });
  }
  case 'FETCH_EARTHQUAKE_REQUESTED': {
    return state.merge(state, { fetchingEarthquake: true, fetchedEarthquake: false });
  }
  case 'FETCH_EARTHQUAKE_FULFILLED': {
    return state.merge(state, {
      fetchingEarthquake: false,
      fetchedEarthquake: true,
      earthquakes: [action.payload.data],
      headersAndAccessors: action.payload.formattedData
    });
  }
  case 'FETCH_EARTHQUAKE_REJECTED': {
    return state.merge(state, { fetchingEarthquake: false, error: action.payload });
  }
  case 'TOGGLE_EARTHQUAKE_UPDATE_DATE_LOC': {
    return state.merge(state, { showEqUpdateDateLoc: !state.get('showEqUpdateDateLoc') });
  }
  case 'TOGGLE_EARTHQUAKE_UPDATE_MEASURE': {
    return state.merge(state, { showEqUpdateMeasure: !state.get('showEqUpdateMeasure') });
  }
  case 'TOGGLE_EARTHQUAKE_UPDATE_EFFECTS': {
    return state.merge(state, { showEqUpdateEffects: !state.get('showEqUpdateEffects') });
  }
  case 'TOGGLE_EARTHQUAKE_UPDATE_TOTAL_EFFECTS': {
    return state.merge(state, { showEqUpdateTotalEffects: !state.get('showEqUpdateTotalEffects') });
  }
    case 'SET_TABLE_SELECTION': {
      return state.merge(state, {tableSelection: action.payload});
    }

  default:
    return state;
  }
}
