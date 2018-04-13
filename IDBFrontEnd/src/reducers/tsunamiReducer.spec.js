// import { expect } from 'chai'
// import Immutable from 'seamless-immutable';
//
// import tsunamiReducer, { initialState } from './tsunamiReducer';
//
//
// describe('TsunamiLandingPage reducer', ()=>{
//   it('should return the initial state when given parameters an unmatched action', ()=> {
//     expect(tsunamiReducer(undefined, {})).to.equal(initialState);
//   });
//
//   it('should handle FETCH_TS_EVENT_REQUESTED action', ()=>{
//     let nextState = tsunamiReducer(undefined, {type: 'FETCH_TS_EVENT_REQUESTED'});
//     expect(nextState).to.include({fetchingTsEvent: true});
//   });
//
//   it('should handle FETCH_TS_EVENT_REJECTED action', ()=>{
//     let nextState = tsunamiReducer(undefined, {type: 'FETCH_TS_EVENT_REJECTED', payload: 'error'});
//     expect(nextState).to.include({fetchingTsEvent:false, error: 'error'});
//   })
//
//   it('should handle FETCH_TS_EVENT_FULFILLED action', ()=>{
//     let nextState = tsunamiReducer(undefined, {
//       type: 'FETCH_TS_EVENT_FULFILLED',
//       payload: {
//         data: ['test'],
//         formattedData: ['test']
//       }
//     });
//     expect(nextState).to.deep.include({
//       fetchingTsEvent:false,
//       fetchedTsEvent: true,
//       TsEvents: ['test'],
//       headersAndAccessors:['test']
//     })
//   })
//
// });