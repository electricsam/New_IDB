import React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Table from './Table';

enzyme.configure({adapter: new Adapter()})

describe("Navbar component test", ()=>{
  let wrapper = enzyme.mount(<Table/>)
  it("should have a data prop", ()=>{
    expect(wrapper.instance().props().data).to.be.an('array')
  })
})