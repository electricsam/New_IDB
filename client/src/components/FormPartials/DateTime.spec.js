import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Textarea} from "./Textarea";
import DateTime from "./DateTime";

configure({adapter: new Adapter()});

describe('DateTime Component', () => {
  let wrapper;
  let spy;
  const props = {
    model: '.tsunami.search.datetime',
    validMessage: 'date time error',
    title: 'DateTime Title'
  };

  beforeEach(() => {
    spy = sinon.spy();
    wrapper = shallow(
        <DateTime
            model={props.model}
            validDateTime={spy}
            validMessage={props.validMessage}
            title={props.title}
        />
    )
  });

  it(`should render a label tag with text ${props.title}`, () => {
    expect(wrapper.find('label').text()).to.equal(props.title);
  });

  it('should render a component called DefaultConnectedControlText', ()=> {
    expect(wrapper.find('DefaultConnectedControlText')).to.have.length(1);
  });


});