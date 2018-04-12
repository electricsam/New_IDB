import React from 'react';
import {connect} from 'react-redux';
import { get } from 'immutable';

import store from '../../store';
import Loading from '../loadbar/Loading';
import Table from "../table/Table";

import { decodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions';

const tableStyle = {
  textAlign: "center"
}

const action = obj => store.dispatch(obj);

class TsunamiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    let { search } = this.props.location;
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded)
      action({type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString});
    }else{
      action({type:"FETCH_ALL_TS_EVENTS_REQUESTED"})
    }
  }

  render() {
    const { tsunami } = this.props;

    if( tsunami.get('fetchedTsEvent')){
      return (
        <div>

          <Table
            loading={tsunami.get('fetchingTsEvent')}
            data={tsunami.asMutable().getIn(['TsEvents']).toJS()}
            columns={tsunami.getIn(['headersAndAccessors']).toJS()}
            style={tableStyle}
            title="Tsunami Data"
          />
        </div>
      )
    }else{
      return <Loading/>
    }
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TsunamiContainer);

