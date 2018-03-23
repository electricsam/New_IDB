// import { expect } from 'chai';
// import { put, call, takeEvery } from 'redux-saga/effects';
// import axios from "axios/index";
//
// import { watchFetchTsEvent, fetchTsEvent} from "./tsunamiSaga";
//
// //NOTE: this must be run on command line with the --require babel-polyfill
// // mocha --reporter progress --require ignore-styles --require babel-polyfill ./test/testSetup.js ./src/sagas/*.spec.js
//
// describe('watchFetchTsEvent()', ()=>{
//   // let gen = watchFetchTsEvent();
//   it('should fire the fetchTsEvent() saga', ()=>{
//     expect(gen.next().value)
//       .to.deep.equal(takeEvery("FETCH_TS_EVENT_REQUESTED", fetchTsEvent));
//   })
// })
//
// describe("fetchTsEvent()", ()=>{
//   let gen = fetchTsEvent();
//
//   it("should call axios.get", ()=>{
//     expect(gen.next().value)
//       .to.deep.equal(call(axios.get, 'http://localhost:8080/tsunamievents'))
//   })
//
//   it("should dispatch an action", ()=>{
//     let response = {data: [], formattedData: []}
//     expect(gen.next(response).value)
//       .to.deep.equal(put({
//         type: 'FETCH_TS_EVENT_FULFILLED',
//         payload: {
//           data: response.data,
//           formattedData: response.formattedData
//         }
//       }));
//   })
// })