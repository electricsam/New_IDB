import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'seamless-immutable';

import store from '../../store';
import Loading from '../loadbar/Loading';
import Table from "../table/Table";

const action = type => store.dispatch({type});

class TsunamiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    action('FETCH_TS_EVENT_REQUESTED');
  }

  render() {
    const { tsunami } = this.props;

    if(tsunami.fetchedTsEvent){
      return (
        <Table
          loading={tsunami.fetchingTsEvent}
          data={Immutable.asMutable(tsunami.TsEvents, {deep: true})}
          columns={tsunami.headersAndAccessors}
          title="Tsunami Data"
        />
      )
    }else{
      return <Loading/>
    }
  }
}

const mapStateToProps = state => ({ tsunami: state.tsunami });

export default connect(mapStateToProps)(TsunamiContainer);

