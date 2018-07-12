import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from "./Text";

configure({adapter: new Adapter()});

describe('Text Component', () => {
  let wrapper;
  let validate = sinon.spy();

  const props = {
    model: 'model',
    min: 0,
    max: 10,
    needsVal: true,
    validMessage: 'validMessage',
    title: 'title'
  };

  beforeEach(() => {
    wrapper = shallow(<Text
        model={props.model}
        title={props.title}
        needsVal={props.needsVal}
        validMessage={props.validMessage}
        validMinMax={validate}
        min={props.min}
        max={props.max}
    />)
  });

  it('should render a label', () => {
    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should render a DefaultConnectedControlText component', () => {
    expect(wrapper.find('DefaultConnectedControlText')).to.have.length(1);
  });

  it('should render a Errors component when needsVal prop is false', () => {
    expect(wrapper.find('.TextStyles__errors')).to.have.length(1);
  });

  it('should NOT render a Errors component when needsVal prop is false', () => {
    wrapper = shallow(<Text
        model={props.model}
        title={props.title}
        needsVal={false}
        validMessage={props.validMessage}
        validMinMax={validate}
        min={props.min}
        max={props.max}
    />)
    expect(wrapper.find('.TextStyles__errors')).to.have.length(0);
  });

});