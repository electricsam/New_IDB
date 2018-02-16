import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Immutable from 'seamless-immutable';
import ReactTable from 'react-table';

import Loading from '../loadbar/Loading';
import * as tsunamiActions from '../../actions/tsunamiActions';
import Table from "../table/Table";

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    this.props.getAllTsunamis();
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

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllTsunamis: tsunamiActions.getAllTsunamis,
  reformatTsData: tsunamiActions.reformatTsData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
