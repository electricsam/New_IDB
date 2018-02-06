import React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';
import sinon from 'sinon';
import UserContainer from '../src/components/user/UserContainer'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store';


enzyme.configure({ adapter: new Adapter()})

describe("user page component test", function() {

  it("should call componentDidMount()", ()=>{
    const mockStore = configureStore();
    const initialState = {test: 10}
    const store = mockStore(initialState)
    sinon.spy(UserContainer.prototype, 'componentDidMount');
    const wrapper = enzyme.shallow(<UserContainer store={store}/>)
    expect(UserContainer.prototype.componentDidMount).to.have.property('callCount', 1)
    UserContainer.prototype.componentDidMount.restore()
  })


  it("should contain a div", function() {
    let wrapper = enzyme.shallow(<UserContainer/>)
    expect(wrapper.type()).to.equal('div').dive()
  });

  it("should have an outer div with the class 'homepage", ()=>{
    let wrapper = enzyme.shallow(<UserContainer/>).dive()
    expect(wrapper.hasClass('userContainer')).to.be.true;
  })

});
