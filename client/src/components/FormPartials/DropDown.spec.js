import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropDown from './DropDown.jsx';

import { countries }from '../formConstants/constants';

configure({adapter: new Adapter()});

describe('DropDown Load', () => {
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
    expect(wrapper.hasClass('DropDownStyles__dropContainer')).to.equal(true);
  });

  it('should render a label ', () => {
    expect(wrapper.contains(
        <label className="DropDownStyles__label" htmlFor=".tsunami.search.country">
          Country
        </label>

    )).to.equal(true)
  });

  it('should render a third party component called DefaultConnectedControlSelect', ()=> {
    expect(wrapper.find('DefaultConnectedControlSelect')).to.have.length(1);
  });

});