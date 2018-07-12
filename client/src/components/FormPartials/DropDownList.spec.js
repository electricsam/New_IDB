import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Textarea} from "./Textarea/Textarea";
import DateTime from "./DateTime/DateTime";
import DropDownList from "./DropDownList";

configure({adapter: new Adapter()});

describe('DateTime Component', () => {
  let wrapper;
  let checkDropDownDisabled = sinon.spy();

  const props = {
    list: [
      {title: 'title',model: 'model', disabled: true, data: [{value: 'val', name: 'name'}]}
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<DropDownList list={props.list} checkDropDownDisabled={checkDropDownDisabled}/>)
  });

  it('should render a label', () => {
    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should render a DefaultConnectedControlSelect component', () => {
    expect(wrapper.find('DefaultConnectedControlSelect')).to.have.length(1);
  });

});