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
  let initialState = {test: 10};
  let mockStore = configureStore();

  beforeEach(()=> {
    let store = mockStore(initialState);
    let wrapper = shallow(<TsunamiSearchContainer store={store}/>);
  });


  it('should load without crashing', () => {
    expect(true).to.be.true;
  })
});