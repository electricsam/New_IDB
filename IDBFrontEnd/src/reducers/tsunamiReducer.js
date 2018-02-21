import Immutable from 'seamless-immutable';

const initialState = Immutable ({
  fetchingTsEvent: false,
  fetchedTsEvent: false,
  error: null,
  TsEvents: [],
  headersAndAccessors: [],
});


export default function reducer(state=initialState, action){
  switch (action.type){
    case 'FETCH_TS_EVENT_REQUESTED': {
      return Immutable.set(state, 'fetchingTSEvent', true);
    }
    case 'FETCH_TS_EVENT_REJECTED': {
      return Immutable.merge(state, {fetchingTsEvent:false, error:action.payload});
    }
    case 'FETCH_TS_EVENT_FULFILLED': {
      return Immutable.merge(state, {
        fetchingTsEvent:false,
        fetchedTsEvent: true,
        TsEvents: action.payload.data,
        headersAndAccessors: action.payload.formattedData
      });
    }
    case 'REFORMAT_TS_DATA': {
      return Immutable.merge(state, {headersAndAccessors: action.payload})
    }
  }
  return state;
}