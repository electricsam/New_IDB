import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Textarea} from "./Textarea";

configure({adapter: new Adapter()});

describe('Textarea behavior', () => {
  let wrapper;
  let props = {
    model: '.tsunami.search.comments',
    title: 'Title',
    maxLength: 10,
    needsVal: false
  };
  beforeEach(() => {
    wrapper = shallow(<Textarea model={props.model} title={props.title} maxLength={props.maxLength}/>);
  });

  it('should render a div with className container', () => {
    expect(wrapper.hasClass('TextareaStyles__container')).to.be.true;
  });

  it("should render a label with title 'Title'", () => {
    expect(wrapper.find('.TextareaStyles__label').text()).to.equal(props.title);
  });

  it('validateLength should return false when called with a value larger than max', () => {
    let val = 'test';
    let max = 2;
    expect(wrapper.instance().validateLength(val, max)).to.equal(false);
  });

  it('validateLength should return true when called with a value smaller than max', () => {
    let val = 'test';
    let max = 10;
    expect(wrapper.instance().validateLength(val, max)).to.equal(true);
  });

  it('validateLength should return true when called with a value with no length', () => {
    let val = '';
    let max = 10;
    expect(wrapper.instance().validateLength(val, max)).to.equal(true);
  });

  it('validateLength should return true when called with a null value', () => {
    let val = null;
    let max = 10;
    expect(wrapper.instance().validateLength(val, max)).to.equal(true);
  });

  it('should NOT render a <p> tag if the needsVal prop is set to false', () => {
    expect(wrapper.find('p')).to.have.length(0);
  });

  it('should render a <p> tag if the needsVal prop is set to true', () => {
    wrapper = shallow(<Textarea model={props.model} title={props.title} maxLength={props.maxLength} needsVal={true}/>);
    expect(wrapper.find('p')).to.have.length(1);
  });

});