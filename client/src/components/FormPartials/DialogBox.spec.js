import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DialogBox from './DialogBox';

configure({adapter: new Adapter()});

describe('Dialog box behavior', () => {
  let wrapper;
  let handleYesClick;
  let handleNoClick;
  beforeEach(() => {
    handleYesClick = sinon.spy();
    handleNoClick = sinon.spy();

    wrapper = shallow(
        <DialogBox handleNoClick={handleNoClick} handleYesClick={handleYesClick}/>
    );
  });

  it('should render a div with className outerBox', () => {
    expect(wrapper.hasClass('DialogBoxStyle__outerBox')).to.equal(true);
  });

  it('should render a div with className copy', () => {
    expect(wrapper.find('.DialogBoxStyle__copy')).to.have.length(1);
  });

  it('should render a div with className buttonContainer', () => {
    expect(wrapper.find('.DialogBoxStyle__buttonContainer')).to.have.length(1);
  });

  it('should render a div with className yes', () => {
    expect(wrapper.find('.DialogBoxStyle__yes')).to.have.length(1)
  });

  it('should render a div with className NO', () => {
    expect(wrapper.find('.DialogBoxStyle__no')).to.have.length(1)
  });

  it('should call handleYesClick when yes button is clicked', () => {
    wrapper.find('.DialogBoxStyle__yes').simulate('click');
    expect(handleYesClick.calledOnce).to.be.true;
  });

  it('should call handleNoClick when no button is clicked', () => {
    wrapper.find('.DialogBoxStyle__no').simulate('click');
    expect(handleNoClick.calledOnce).to.be.true;
  });
});

