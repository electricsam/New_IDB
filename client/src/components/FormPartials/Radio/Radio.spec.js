import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radio from "./Radio";

configure({adapter: new Adapter()});

describe('Radio Component', () => {

  let wrapper;
  let checkConditions;
  let props = {
    title: 'Earthquake Location',
    htmlFor: '.earthquake.locType',
    model: '.earthquake.locType',
    radios: [
      { value: 'locStart', label: 'Starts With' },
      { value: 'locIncludes', label: 'Includes' },
      { value: 'locMatches', label: 'Matches' },
      { value: 'locNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.earthquake.search.',
    condition: 'locType'
  };

  beforeEach(() => {
    checkConditions = sinon.spy()
    wrapper = shallow(<Radio
        noText={false}
        radios={props.radios}
        model={props.model}
        htmlFor={props.htmlFor}
        textModelPreface={props.textModelPreface}
        condition={props.condition}
        checkConditions={checkConditions}
    />)
  });

  it('should render a DefaultConnectedControlText component if noText prop is false/ not passed', () => {
    expect(wrapper.find('DefaultConnectedControlText')).to.have.length(1);
  });

  it('should NOT render DefaultConnectedControlText if noText prop is true', () => {
    wrapper.setProps({noText: true});
    expect(wrapper.find('DefaultConnectedControlText')).to.have.length(0);
  });

  it('should call checkConditions three times if noText prop is passed as false / not passed', () => {
    expect(checkConditions.calledThrice).to.be.true;
  });

});