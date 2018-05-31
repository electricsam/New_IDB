import { expect } from 'chai';
import 'babel-polyfill';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  watchFetchAllTsEvents,
  fetchAllTsEvents,
  watchFetchTsEventById,
  fetchTsEventById,
  watchPatchTsEvent,
  patchTsEvent,
  watchPostTsEvent,
  postTsEvent,
  watchPostRunup,
  fetchRunup,
  postRunup,
  watchFetchRunup,
  watchUpdateRunup,
  updateRunup,
  watchFetchSpecifiedRunup,
  fetchSpecifiedRunup,
  watchFetchAllRunups,
  fetchAllRunups,
  watchDeleteRunup,
  deleteRunup,
  resetDeleteRunup,
  watchDeleteRunupRejected,
  watchDeleteRunupFulfilled,
  watchDeleteEvent,
  deleteEvent,
  watchDeleteEventFulfilled,
  resetDeleteEvent,
  watchDeleteEventRejected,
} from './tsunamiSaga';
import { mapToRunupTable } from '../helperFunctions/helperFunctions';

// NOTE: this must be run on command line with the --require babel-polyfill
// mocha --reporter progress --require ignore-styles --require babel-polyfill ./test/testSetup.js ./src/sagas/*.spec.js

describe('watchFetchAllTsEvent()', () => {
  const gen = watchFetchAllTsEvents();
  it('should fire the fetchTsEvent() saga', () => {
    expect(gen.next().value)
      .to.deep.equal(takeEvery('FETCH_ALL_TS_EVENTS_REQUESTED', fetchAllTsEvents));
  });
});

describe('fetchTsEvent()', () => {
  const gen = fetchAllTsEvents();

  it('should call axios.get', () => {
    expect(gen.next().value)
      .to.deep.equal(call(axios.get, 'http://localhost:8080/tsunamievents/select'));
  });

  it('should dispatch an action', () => {
    const response = { data: [], formattedData: [] };
    expect(gen.next(response).value)
      .to.deep.equal(put({
        type: 'FETCH_ALL_TS_EVENTS_FULFILLED',
        payload: {
          data: response.data,
          formattedData: response.formattedData,
        },
      }));
  });
});

describe('watchFetchTsEventById', () => {
  const gen = watchFetchTsEventById();

  it('should fire the fetchTsEventById', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('FETCH_TS_EVENT_REQUESTED', fetchTsEventById));
  });
});

describe('fetchTsEventById', () => {
  const action = { type: 'FETCH_TS_EVENT_REQUESTED', payload: 1 };
  const gen = fetchTsEventById(action);

  it('should call axios.get', () => {
    const hold = gen.next().value;
    expect(hold).to.eql(call(axios.get, 'http://localhost:8080/tsunamievent/1'));
  });

  it('should dispatch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'FETCH_TS_EVENT_FULFILLED',
      payload: [],
    }));
  });
});

describe('watchPatchTsEvent', () => {
  const gen = watchPatchTsEvent();
  it('should fire the patchTsEvent saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('PATCH_TS_EVENT_REQUESTED', patchTsEvent));
  });
});

describe('patchTsEvent', () => {
  const action = { type: 'PATCH_TS_EVENT_REQUESTED', payload: { id: 1, tsEvent: {} } };
  const gen = patchTsEvent(action);

  it('should call axios.patch', () => {
    expect(gen.next().value).to.eql(call(axios.patch, `http://localhost:8080/tsunamievents/${action.payload.id}`, action.payload.tsEvent));
  });

  it('should dispatch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'PATCH_TS_EVENT_FULFILLED',
      payload: response.data,
    }));
  });
});

describe('watchPostTsEvent', () => {
  const gen = watchPostTsEvent();
  it('should fire the postTsEvent saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('POST_TS_EVENT_REQUESTED', postTsEvent));
  });
});

describe('postTsEvent', () => {
  const action = { type: 'POST_TS_EVENT_REQUESTED', payload: {} };
  const gen = postTsEvent(action);
  it('should call axios.post', () => {
    expect(gen.next().value).to.eql(call(axios.post, 'http://localhost:8080/tsunamievents', action.payload));
  });

  it('should dispatch an action ', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'POST_TS_EVENT_FULFILLED',
      payload: { data: response.data },
    }));
  });
});

describe('watchPostRunup', () => {
  const gen = watchPostRunup();
  it('should fire the postRunup Saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('POST_TS_RUNUP_REQUESTED', postRunup));
  });
});

describe('postRunup', () => {
  const action = { type: 'POST_TS_RUNUP_REQUESTED', payload: { runup: {}, id: 1 } };
  const { id, runup } = action.payload;
  const gen = postRunup(action);
  it('should call axios.post', () => {
    expect(gen.next().value).to.eql(call(axios.post, `http://localhost:8080/tsunamirunups/${id}`, runup));
  });

  it('should launch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'POST_TS_RUNUP_FULFILLED',
      payload: { data: response.data },
    }));
  });
});

describe('watchFetchRunup', () => {
  const gen = watchFetchRunup();
  it('should fire fetchRunup saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('FETCH_TS_RUNUP_REQUESTED', fetchRunup));
  });
});

describe('fetchRunup', () => {
  const action = { type: 'POST_TS_RUNUP_REQUESTED', payload: 1 };
  const runupId = action.payload;
  const gen = fetchRunup(action);
  it('should call axios.get', () => {
    expect(gen.next().value).to.eql(call(axios.get, `http://localhost:8080/tsunamirunups/${runupId}`));
  });

  it('should launch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'FETCH_TS_RUNUP_FULFILLED',
      payload: response.data,
    }));
  });
});

describe('watchUpdateRunup', () => {
  const gen = watchUpdateRunup();
  it('should fire fetchRunup saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('UPDATE_TS_RUNUP_REQUESTED', updateRunup));
  });
});

describe('updateRunup', () => {
  const action = { type: 'POST_TS_RUNUP_REQUESTED', payload: { runupId: 1, eventId: 1, runupData: {} } };
  const { runupId, eventId, runupData } = action.payload;
  const gen = updateRunup(action);
  it('should call axios.patch', () => {
    expect(gen.next().value).to.eql(call(axios.patch, `http://localhost808/tsunamirunups/${runupId}/${eventId}`, runupData));
  });

  it('should launch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({ type: 'UPDATE_TS_RUNUP_FULFILLED', payload: response.data }));
  });
});

describe('watchFetchSpecifiedRunup', () => {
  const gen = watchFetchSpecifiedRunup();
  it('should fire fetchSpecifiedRunup saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('FETCH_SPECIFIED_RUNUP_REQUESTED', fetchSpecifiedRunup));
  });
});

describe('fetchSpecifiedRunup', () => {
  const action = { type: 'POST_TS_RUNUP_REQUESTED', payload: 'test' };
  const queryString = action.payload;
  const gen = fetchSpecifiedRunup(action);
  it('should call axios.get', () => {
    expect(gen.next().value).to.eql(call(axios.get, `http://localhost:8080/tsunamirunups/select?${queryString}`));
  });

  it('should launch an action', () => {
    const response = { data: [], formattedData: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'FETCH_SPECIFIED_RUNUP_FULFILLED',
      payload: { data: response.data, formattedData: mapToRunupTable(response.data) },
    }));
  });
});


describe('watchFetchAllRunups', () => {
  const gen = watchFetchAllRunups();
  it('should fire fetchAllRunups saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('FETCH_ALL_RUNUP_REQUESTED', fetchAllRunups));
  });
});

describe('fetchAllRunups', () => {
  const gen = fetchAllRunups();
  it('should call axios.get', () => {
    expect(gen.next().value).to.eql(call(axios.get, 'http://localhost:8080/tsunamirunups/select'));
  });

  it('should launch an action', () => {
    const response = { data: [], formattedData: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'FETCH_ALL_RUNUP_FULFILLED',
      payload: { data: response.data, formattedData: mapToRunupTable(response.data) },
    }));
  });
});

describe('watchDeleteRunup', () => {
  const gen = watchDeleteRunup();
  it('should fire deleteRunup saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_RUNUP_REQUESTED', deleteRunup));
  });
});

describe('deleteRunup', () => {
  const action = { type: 'DELETE_RUNUP_REQUESTED', payload: 1 };
  const gen = deleteRunup(action);
  it('should call axios.delete', () => {
    expect(gen.next().value).to.eql(call(axios.delete, `http://localhost:8080/tsunamirunups/${action.payload}`));
  });

  it('should launch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'DELETE_RUNUP_FULFILLED',
      payload: response.data,
    }));
  });
});

describe('watchDeleteRunupFulfilled', () => {
  const gen = watchDeleteRunupFulfilled();
  it('should fire resetDelteRunupSaga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_RUNUP_FULFILLED', resetDeleteRunup));
  });
});

describe('watchDeleteRunupRejected', () => {
  const gen = watchDeleteRunupRejected();
  it('should fire resetDeleteRunupSaga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_RUNUP_REJECTED', resetDeleteRunup));
  });
});

describe('resetDeleteRunup', () => {
  const gen = resetDeleteRunup();
  it('should fire the SET_DELETE_RUNUP_ID action', () => {
    expect(gen.next().value).to.deep.equal(put({ type: 'SET_DELETE_RUNUP_ID', payload: null }));
  });
  it('should fire the TOGGLE_DELETE_RUNUIP_CONFIRMATION action', () => {
    expect(gen.next().value).to.deep.equal(put({ type: 'TOGGLE_DELETE_RUNUP_CONFIRMATION' }));
  });
});

describe('watchDeleteEvent', () => {
  const gen = watchDeleteEvent();
  it('should fire deleteEvent saga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_EVENT_REQUESTED', deleteEvent));
  });
});

describe('deleteEvent', () => {
  const action = { type: 'DELETE_RUNUP_REQUESTED', payload: 1 };
  const gen = deleteEvent(action);
  it('should call axios.delete', () => {
    expect(gen.next().value).to.eql(call(axios.delete, `http://localhost:8080/tsunamievents/${action.payload}`));
  });

  it('should launch an action', () => {
    const response = { data: [] };
    expect(gen.next(response).value).to.deep.equal(put({
      type: 'DELETE_EVENT_FULFILLED',
      payload: response.data,
    }));
  });
});

describe('watchDeleteEventFulfilled', () => {
  const gen = watchDeleteEventFulfilled();
  it('should fire resetDeleteEventSaga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_EVENT_FULFILLED', resetDeleteEvent));
  });
});

describe('watchDeleteEventRejected', () => {
  const gen = watchDeleteEventRejected();
  it('should fire resetDeleteRunupSaga', () => {
    expect(gen.next().value).to.deep.equal(takeEvery('DELETE_EVENT_REJECTED', resetDeleteEvent));
  });
});

describe('resetDeleteEvent', () => {
  const gen = resetDeleteEvent();
  it('should fire the SET_DELETE_EVENT_ID action', () => {
    expect(gen.next().value).to.deep.equal(put({ type: 'SET_DELETE_EVENT_ID', payload: null }));
  });
  it('should fire the TOGGLE_DELETE_EVENT_CONFIRMATION action', () => {
    expect(gen.next().value).to.deep.equal(put({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' }));
  });
});
