import React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTable from 'react-table';

import Table from './Table';

enzyme.configure({ adapter: new Adapter() });

describe('Navbar component test', () => {
  const wrapper = enzyme.mount(<Table
    columns={[{ test: 'test' }]}
    data={['test']}
    defaultPageSize={10}
    loading={false}
    title="test"
  />);

  it('should include required props as their specified type', () => {
    expect(wrapper.props().data).to.be.an('array');
    expect(wrapper.props().columns).to.be.an('array');
    expect(wrapper.props().defaultPageSize).to.be.a('number');
    expect(wrapper.props().loading).to.be.a('boolean');
    expect(wrapper.props().title).to.be.a('string');
  });

  it('should contain a title', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should contain a ReactTable component', () => {
    expect(wrapper
      .find('.TableStyle__container')
      .childAt(1)
      .containsMatchingElement(<ReactTable
        data={['test']}
        columns={[{ test: 'test' }]}
        defaultPageSize={20}
        expanderDefaults={
          {
            sortable: false,
            resizable: true,
            filterable: false,
            width: 35,
          }
        }
        // The style height gives fixed header with scroll
        style={{
          height: '50%', // This will force the table body to overflow and scroll, since there is not enough room
          width: '95%',
        }}
        className="-striped -highlight"
        defaultSorted={[{ id: 'id', desc: false }]}
        loading={false}
      />)).to.equal(true);
  });
});
