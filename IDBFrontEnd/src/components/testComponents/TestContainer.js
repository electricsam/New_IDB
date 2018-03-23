import React from 'react';
import {connect} from 'react-redux';

import store from '../../store';
import Table from "../table/Table";

import {data, headAccess} from "./FakeData";

const action = type => store.dispatch({type});

class TestContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    console.log("data: ", data);
    console.log("headAccess; ", headAccess)
    // let { search } = this.props.location;
    // if(search.length){
    //   search = search.split('?')[1];
    //   let decoded = JSON.parse(decodeQueryString(search));
    //   action('UPDATE_FETCHED_TS_EVENT');
    // }else{
    //   action('FETCH_ALL_TS_EVENTS_REQUESTED');
    // }
  }

  handleEdit = (row) =>{
    console.log("yooo you got into the handle edit function");
    console.log("ROW: ", row);
  }

  render() {
    return (
      <Table
        loading={false}
        data={data}
        columns={headAccess}
        title="Fake Data"
        handleEdit={this.handleEdit}
      />
    )
  }

}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TestContainer);

