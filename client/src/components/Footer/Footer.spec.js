import React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';
import sinon from 'sinon';
import Footer from './Footer.jsx'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({adapter: new Adapter()})

describe("footer component test", ()=>{
  it("should contain a single container div", ()=>{
    let wrapper = enzyme.shallow(<Footer/>)
    expect(wrapper).to.have.length(1);
  })

  it("should contain a 4 P tags", ()=>{
    let wrapper = enzyme.shallow(<Footer/>)
    expect(wrapper.find('p')).to.have.length(4)
  })

  it("should contain 7 divs", ()=>{
    let wrapper = enzyme.shallow(<Footer/>);
    expect(wrapper.find('div')).to.have.length(7)
  })


})