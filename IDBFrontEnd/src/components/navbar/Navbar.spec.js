import React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Navbar from './Navbar';

enzyme.configure({adapter: new Adapter()})

describe("Navbar component test", ()=>{
  let wrapper = enzyme.mount(<Navbar/>)
  it("should contain a single container div", ()=>{
    expect(wrapper).to.have.length(1);
  })
  it("should contain a 4 anchor tags", ()=>{
    expect(wrapper.find('a')).to.have.length(4)
  })
  it("should contain 5 divs", ()=>{
    expect(wrapper.find('div')).to.have.length(5)
  })
  it("should contain 2 img tags",()=>{
    expect(wrapper.find('img')).to.have.length(2)
  })
  it("should have a div with name NavbarStyle__noaa", ()=>{
    expect(wrapper.find('.NavbarStyle__noaa')).to.have.length(1)
  })
  it("should contain an anchor tag linking noaa.gov nested inside the NavbarStyle_noaa", ()=>{
    expect(wrapper
      .find('.NavbarStyle__noaa')
      .children()
      .containsMatchingElement(<a href="http://www.noaa.gov/" target="_blank"><img/></a>))
    .to.equal(true)
  })
  it("should have a long-form title that links to noaa.gov", ()=>{
    expect(wrapper
      .find('.NavbarStyle__noaaTitle')
      .childAt(0)
      .containsMatchingElement(<a href="http://www.noaa.gov/" target="_blank">
      National Oceanic and Atmospheric Administration
      </a>
    )).to.equal(true);
  })
  it("should have a link to the department of commerce", ()=>{
    expect(wrapper
      .find('.NavbarStyle__noaaTitle')
      .childAt(1)
      .containsMatchingElement(<a href="https://www.commerce.gov/" target="_blank">U.S. Department of Commerce</a>)
    ).to.equal(true)
  })
  it("should contain an image linking to department of commerce", ()=>{
    expect(wrapper
      .find('.NavbarStyle__doc')
      .childAt(0)
      .containsMatchingElement(<a href="http://www.commerce.gov/" target="_blank"><img/></a>)
    ).to.equal(true)
  })


})