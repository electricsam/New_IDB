import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoreInfoComments from "./MoreInfoComments";

configure({adapter: new Adapter()});

describe('MoreInfoComments Component', () => {
  let wrapper;

  let validate = sinon.spy();

  beforeEach(() => {
    wrapper = shallow(
        <MoreInfoComments
          comments='test'
        />
    )
  });

  it('should render a h1 tag with text Comments', () => {
    expect(wrapper.find('h1').text()).to.equal('Comments');
  });

  it("should display text 'No Comments Available' if props.comments is null or empty", () => {
    wrapper.setProps({comments: ''});
    expect(wrapper.find('p').text()).to.equal('No Comments Available')
  })

  it("should display text 'test' when props.comments is 'test", () => {
    expect(wrapper.find('p').text()).to.equal('test')
  })

});