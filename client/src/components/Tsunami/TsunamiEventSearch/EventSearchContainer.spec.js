import 'babel-polyfill';
// import 'regenerator-runtime';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TsunamiSearchContainer from './TsunamiSearchContainer.jsx'
import configureStore from 'redux-mock-store';

configure({adapter: new Adapter()});

describe('TsunamiEventSearchContainer load', () => {
  let initialState = {
    deep: {
      tsunami: {
        postingRunup: false,
        postedRunup: false,
        postRunupFail: false,
        postedRunupData: [],
        postingTsEvent: false,
        postedTsEvent: false,
        postTsEventFail: false,
        postedTsEventData: [],
        fetchingTsEvent: false,
        fetchedTsEvent: false,
        error: null,
        tsEvents: [{ country: '', comments: ''}],
        tsEvent: [{country: '', comments: ''}],
        headersAndAccessors: [],
        showSourceForm: true,
        showRunupPlaceForm: false,
        showTsunamiEffectsForm: false,
        showTotalTsunamiSourceForm: false,
        showRunupSource: true,
        showRunupLocation: true,
        showRunupParams: true,
        fetchingRunup: false,
        fetchedRunup: false,
        runupData: [{ country: '', comments: '' }],
        deleteRunupId: null,
        showDeleteConfirmation: false,
        deletingRunup: false,
        deletedRunup: false,
        deletingEvent: false,
        deletedEvent: false,
        deleteEventId: null,
        showDeleteEventConfirmation: false,
        search: {
          country: '',
          runupcountry: '',
        },
        insert: {
          country: '',
          comments: '',
        },
        rnpinsert: {
          country: '',
          comments: '',
        },
        rnpsearch: {

        },
        showTsInsertDateLoc: true,
        showTsInsertMeasure: true,
        showTsInsertEffects: true,
        showTsInsertEffectsTotal: true,
        showRunupInsertDateLoc: true,
        showRunupInsertMeasure: true,
        showRunupInsertEffects: true,
        showRunupUpdateDateLoc: true,
        showRunupUpdateMeasure: true,
        showRunupUpdateEffects: true,
        showTsunamiUpdateDateLoc: true,
        showTsunamiUpdateMeasure: true,
        showTsunamiUpdateEffects: true,
        showTsunamiUpdateEffectsTotal: true,
        tsunamiTableSelection: null,
        runupTableSelectionId: null,
        runupTableSelectionEventId: null,
        relating: false,
        related: false,
        patchTsEventFail: false,
        patchingTsEvent: false,
        patchedTsEvent: false,
        patchingRunup: false,
        patchedRunup: false,
        patchRunupFail: false,
      }
    }
  }
  let mockStore = configureStore();

  beforeEach(()=> {
    let store = mockStore(initialState);
    let wrapper = shallow(<TsunamiSearchContainer store={store}/>);
  });


  it('should load without crashing', () => {
    expect(true).to.be.true;
  })
});