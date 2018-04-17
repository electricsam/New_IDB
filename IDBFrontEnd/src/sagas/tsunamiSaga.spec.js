import { expect } from 'chai';
import 'babel-polyfill';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from "axios";

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
  watchDeleteEventRejected
} from "./tsunamiSaga";
import {mapToRunupTable} from "../helperFunctions/helperFunctions";

//NOTE: this must be run on command line with the --require babel-polyfill
// mocha --reporter progress --require ignore-styles --require babel-polyfill ./test/testSetup.js ./src/sagas/*.spec.js

describe('watchFetchAllTsEvent()', ()=>{
  let gen = watchFetchAllTsEvents();
  it('should fire the fetchTsEvent() saga', ()=>{
    expect(gen.next().value)
      .to.deep.equal(takeEvery("FETCH_ALL_TS_EVENTS_REQUESTED", fetchAllTsEvents));
  })
});

describe("fetchTsEvent()", ()=>{
  let gen = fetchAllTsEvents();

  it("should call axios.get", ()=>{
    expect(gen.next().value)
      .to.deep.equal(call(axios.get, 'http://localhost:8080/tsunamievents/select'))
  });

  it("should dispatch an action", ()=>{
    let response = {data: [], formattedData: []};
    expect(gen.next(response).value)
      .to.deep.equal(put({
        type: 'FETCH_ALL_TS_EVENTS_FULFILLED',
        payload: {
          data: response.data,
          formattedData: response.formattedData
        }
      }));
  })
});

describe("watchFetchTsEventById", () => {
  let gen = watchFetchTsEventById();

  it("should fire the fetchTsEventById", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("FETCH_TS_EVENT_REQUESTED", fetchTsEventById))
  })
});

describe("fetchTsEventById", ()=>{
  let action = {type: "FETCH_TS_EVENT_REQUESTED", payload: 1};
  let gen = fetchTsEventById(action);

  it("should call axios.get", ()=>{
    let hold = gen.next().value;
    expect(hold).to.eql(call(axios.get, `http://localhost:8080/tsunamievent/1`));
  });

  it("should dispatch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "FETCH_TS_EVENT_FULFILLED",
      payload: []
    }))
  });
});

describe("watchPatchTsEvent", ()=>{
  let gen = watchPatchTsEvent();
  it("should fire the patchTsEvent saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("PATCH_TS_EVENT_REQUESTED", patchTsEvent));
  });
});

describe("patchTsEvent", ()=>{
  let action = {type: "PATCH_TS_EVENT_REQUESTED", payload: {id: 1, tsEvent: {}}};
  let gen = patchTsEvent(action);

  it("should call axios.patch", ()=>{
    expect(gen.next().value).to.eql(call(axios.patch, `http://localhost:8080/tsunamievents/${action.payload.id}`, action.payload.tsEvent));
  });

  it("should dispatch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "PATCH_TS_EVENT_FULFILLED",
      payload: response.data
    }))
  })
});

describe("watchPostTsEvent", ()=>{
  let gen = watchPostTsEvent();
  it("should fire the postTsEvent saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("POST_TS_EVENT_REQUESTED", postTsEvent));
  })
});

describe("postTsEvent", ()=>{
  let action = {type: "POST_TS_EVENT_REQUESTED", payload: {}};
  let gen = postTsEvent(action);
  it("should call axios.post", ()=>{
    expect(gen.next().value).to.eql(call(axios.post, "http://localhost:8080/tsunamievents", action.payload));
  });

  it("should dispatch an action ", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type:"POST_TS_EVENT_FULFILLED",
      payload:{data: response.data}
    }))
  });
});

describe("watchPostRunup", ()=>{
  let gen = watchPostRunup();
  it("should fire the postRunup Saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("POST_TS_RUNUP_REQUESTED", postRunup));
  })
});

describe("postRunup", ()=>{
  let action = {type: "POST_TS_RUNUP_REQUESTED", payload: {runup: {}, id: 1}};
  let { id, runup } = action.payload;
  let gen = postRunup(action);
  it("should call axios.post", ()=>{
    expect(gen.next().value).to.eql(call(axios.post, `http://localhost:8080/tsunamirunups/${id}`, runup));
  });

  it("should launch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type:"POST_TS_RUNUP_FULFILLED",
      payload:{data: response.data}
    }));
  });
});

describe("watchFetchRunup", ()=>{
  let gen = watchFetchRunup();
  it("should fire fetchRunup saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("FETCH_TS_RUNUP_REQUESTED", fetchRunup));
  });
});

describe("fetchRunup", ()=>{
  let action = {type: "POST_TS_RUNUP_REQUESTED", payload: 1};
  let runupId = action.payload;
  let gen = fetchRunup(action);
  it("should call axios.get", ()=>{
    expect(gen.next().value).to.eql(call(axios.get, `http://localhost:8080/tsunamirunups/${runupId}`));
  });

  it("should launch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "FETCH_TS_RUNUP_FULFILLED",
      payload: response.data
    }));
  });
});

describe("watchUpdateRunup", ()=>{
  let gen = watchUpdateRunup();
  it("should fire fetchRunup saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("UPDATE_TS_RUNUP_REQUESTED", updateRunup));
  });
});

describe("updateRunup", ()=>{
  let action = {type: "POST_TS_RUNUP_REQUESTED", payload: {runupId: 1, eventId: 1, runupData: {}}};
  let { runupId, eventId, runupData} = action.payload;
  let gen = updateRunup(action);
  it("should call axios.patch", ()=>{
    expect(gen.next().value).to.eql(call(axios.patch, `http://localhost808/tsunamirunups/${runupId}/${eventId}`, runupData));
  });

  it("should launch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({type: "UPDATE_TS_RUNUP_FULFILLED",payload: response.data}));
  });
});

describe("watchFetchSpecifiedRunup", ()=>{
  let gen = watchFetchSpecifiedRunup();
  it("should fire fetchSpecifiedRunup saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("FETCH_SPECIFIED_RUNUP_REQUESTED", fetchSpecifiedRunup));
  });
});

describe("fetchSpecifiedRunup", ()=>{
  let action = {type: "POST_TS_RUNUP_REQUESTED", payload: "test"};
  let queryString = action.payload;
  let gen = fetchSpecifiedRunup(action);
  it("should call axios.get", ()=>{
    expect(gen.next().value).to.eql(call(axios.get, `http://localhost:8080/tsunamirunups/select?${queryString}`));
  });

  it("should launch an action", ()=>{
    let response = {data: [], formattedData: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "FETCH_SPECIFIED_RUNUP_FULFILLED",
      payload:{data: response.data, formattedData: mapToRunupTable(response.data)}
    }));
  });
});


describe("watchFetchAllRunups", ()=>{
  let gen = watchFetchAllRunups();
  it("should fire fetchAllRunups saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("FETCH_ALL_RUNUP_REQUESTED", fetchAllRunups));
  });
});

describe("fetchAllRunups", ()=>{
  let gen = fetchAllRunups();
  it("should call axios.get", ()=>{
    expect(gen.next().value).to.eql(call(axios.get, 'http://localhost:8080/tsunamirunups/select'));
  });

  it("should launch an action", ()=>{
    let response = {data: [], formattedData: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "FETCH_ALL_RUNUP_FULFILLED",
      payload:{data: response.data, formattedData: mapToRunupTable(response.data)}
    }));
  });
});

describe("watchDeleteRunup", ()=>{
  let gen = watchDeleteRunup();
  it("should fire deleteRunup saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_RUNUP_REQUESTED", deleteRunup));
  });
});

describe("deleteRunup", ()=>{
  let action = {type: "DELETE_RUNUP_REQUESTED", payload: 1};
  let gen = deleteRunup(action);
  it("should call axios.delete", ()=>{
    expect(gen.next().value).to.eql(call(axios.delete, `http://localhost:8080/tsunamirunups/${action.payload}`));
  });

  it("should launch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "DELETE_RUNUP_FULFILLED",
      payload:response.data
    }));
  });
});

describe("watchDeleteRunupFulfilled", ()=>{
  let gen = watchDeleteRunupFulfilled();
  it("should fire resetDelteRunupSaga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_RUNUP_FULFILLED", resetDeleteRunup));
  });
});

describe("watchDeleteRunupRejected", ()=>{
  let gen = watchDeleteRunupRejected();
  it("should fire resetDeleteRunupSaga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_RUNUP_REJECTED", resetDeleteRunup));
  })
});

describe("resetDeleteRunup", ()=>{
  let gen = resetDeleteRunup();
  it("should fire the SET_DELETE_RUNUP_ID action", ()=>{
    expect(gen.next().value).to.deep.equal(put({type: "SET_DELETE_RUNUP_ID", payload: null}));
  });
  it("should fire the TOGGLE_DELETE_RUNUIP_CONFIRMATION action", ()=>{
    expect(gen.next().value).to.deep.equal(put({type: "TOGGLE_DELETE_RUNUP_CONFIRMATION"}));
  })
});

describe("watchDeleteEvent", ()=>{
  let gen = watchDeleteEvent();
  it("should fire deleteEvent saga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_EVENT_REQUESTED", deleteEvent));
  });
});

describe("deleteEvent", ()=>{
  let action = {type: "DELETE_RUNUP_REQUESTED", payload: 1};
  let gen = deleteEvent(action);
  it("should call axios.delete", ()=>{
    expect(gen.next().value).to.eql(call(axios.delete, `http://localhost:8080/tsunamievents/${action.payload}`));
  });

  it("should launch an action", ()=>{
    let response = {data: []};
    expect(gen.next(response).value).to.deep.equal(put({
      type: "DELETE_EVENT_FULFILLED",
      payload: response.data
    }));
  });
});

describe("watchDeleteEventFulfilled", ()=>{
  let gen = watchDeleteEventFulfilled();
  it("should fire resetDeleteEventSaga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_EVENT_FULFILLED", resetDeleteEvent));
  });
});

describe("watchDeleteEventRejected", ()=>{
  let gen = watchDeleteEventRejected();
  it("should fire resetDeleteRunupSaga", ()=>{
    expect(gen.next().value).to.deep.equal(takeEvery("DELETE_EVENT_REJECTED", resetDeleteEvent));
  })
});

describe("resetDeleteEvent", ()=>{
  let gen = resetDeleteEvent();
  it("should fire the SET_DELETE_EVENT_ID action", ()=>{
    expect(gen.next().value).to.deep.equal(put({type: "SET_DELETE_EVENT_ID", payload: null}));
  });
  it("should fire the TOGGLE_DELETE_EVENT_CONFIRMATION action", ()=>{
    expect(gen.next().value).to.deep.equal(put({type: "TOGGLE_DELETE_EVENT_CONFIRMATION"}));
  })
});