import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MinMax from "./MinMax";

configure({adapter: new Adapter()});

describe('MinMax Component', () => {
  let wrapper;

  let validate = sinon.spy();

  let props = {
    model: 'model',
    min: 0,
    max: 10,
    validateMinMax: validate,
    validMessage:'validMessage',
    title: 'title'
  };

  beforeEach(() => {
    wrapper = shallow(<MinMax
        model={props.model}
        min={props.min}
        max={props.max}
        validMinMax={props.validateMinMax}
        validMessage={props.validMessage}
        title={props.title}
    />)
  });

  it('should render a label with text title', () => {
    expect(wrapper.find('label').text()).to.equal(props.title);
  });

  it('should render an Errors component identified by className MinMaxStyle__errors', () => {
    expect(wrapper.find('.MinMaxStyle__errors')).to.have.length(1);
  });

});