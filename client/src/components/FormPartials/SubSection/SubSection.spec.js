import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubSection from "./SubSection";

configure({adapter: new Adapter()});

describe('Subsection Component', () => {
  let wrapper;

  let props = {
    title: 'title'
  };

  beforeEach(() => {
    wrapper = shallow(<SubSection title={props.title}/>)
  });

  it('should render a fieldset tag', () => {
    expect(wrapper.find('fieldset')).to.have.length(1);
  });

  it('should render a legend tag', () => {
    expect(wrapper.find('legend')).to.have.length(1);
  });

  it(`should have a legend tag with text ${props.title}`, () => {
    expect(wrapper.find('legend').text()).to.equal(props.title);
  });

});