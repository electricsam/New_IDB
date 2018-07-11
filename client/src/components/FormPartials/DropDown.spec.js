import 'babel-polyfill';
import { fromJS } from 'immutable';
// import 'regenerator-runtime';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropDown from './DropDown.jsx';
import configureStore from 'redux-mock-store';

import { countries }from '../formConstants/constants';

configure({adapter: new Adapter()});

describe('DropDown Load', () => {


  let mockStore = configureStore();
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(
        <DropDown
          model='.tsunami.search.country'
          id='.tsunami.search.country'
          disabled={false}
          data={countries}
          title="Country"
        />
    );
  });

  it('should render a div with className dropContainer', () => {
    console.log(wrapper.debug())
    expect(wrapper.hasClass('DropDownStyles__dropContainer')).to.equal(true);
  });

  it('should render a label ', () => {
    expect(wrapper.contains(
        <label className="DropDownStyles__label" htmlFor=".tsunami.search.country">
          Country
        </label>

    )).to.equal(true)
  })


});