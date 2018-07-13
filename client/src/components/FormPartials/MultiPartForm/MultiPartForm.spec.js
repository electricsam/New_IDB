import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MultiPartForm from "./MultiPartForm";

configure({adapter: new Adapter()});

describe('MultiPartForm Component', () => {

  let wrapper;
  const props = {
    title: 'TITLE',
    handleSubmit: sinon.spy(),
    handleClear: sinon.spy(),
    titleColor: 'blue'
  };

  beforeEach(() => {
    wrapper = shallow(
        <MultiPartForm
            title={props.title}
            handleSubmit={sinon.spy()}
            titleColor={props.titleColor}
            handleClear={props.handleClear}
        />
    )
  });


  it(`should have an h1 tag with inner text ${props.title}`, () => {
    expect(wrapper.find('h1').text()).to.equal(props.title);
  });

  it('should render a button with inner text Clear', () => {
    let clear = sinon.spy();
    let submit = sinon.spy();
    wrapper.setProps({handleClear: clear, handleSubmit: submit});
    expect(wrapper.find('button').at(1).text()).to.equal('Clear');
  });

  it('should call handleClear function passed as prop when clear button clicked', () => {
    let clear = sinon.spy();
    let submit = sinon.spy();
    wrapper.setProps({handleClear: clear, handleSubmit: submit});
    wrapper.find('button').at(1).simulate('click');
    expect(clear.calledOnce).to.be.true;
  });

  it('should call handleSubmit function (passed as prop) when onSubmit triggered', () => {
    let submit = sinon.spy();
    wrapper.setProps({handleSubmit: submit, handleClear: null});
    wrapper.find('Connect(Form)').simulate('submit');
    expect(submit.called).to.be.true;
  });

  it('should only render one button if handleClear is not passed as a prop', () => {
    wrapper.setProps({handleSubmit: sinon.spy(), handleClear: null});
    expect(wrapper.find('button')).to.have.length(1);
  });
  
});