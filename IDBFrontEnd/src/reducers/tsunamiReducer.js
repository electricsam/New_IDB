import Immutable from 'seamless-immutable';

export const initialState = Immutable ({
  fetchingTsEvent: false,
  fetchedTsEvent: false,
  error: null,
  TsEvents: [],
  headersAndAccessors: [],
});


export default function reducer(state=initialState, action){
  switch (action.type){
    case 'FETCH_ALL_TS_EVENTS_REQUESTED': {
      return Immutable.set(state, 'fetchingTsEvent', true);
    }
    case 'FETCH_ALL_TS_EVENTS_REJECTED': {
      return Immutable.merge(state, {fetchingTsEvent:false, error:action.payload});
    }
    case 'FETCH_ALL_TS_EVENTS_FULFILLED': {
      return Immutable.merge(state, {
        fetchingTsEvent:false,
        fetchedTsEvent: true,
        TsEvents: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    default:
      return state
  }
}

