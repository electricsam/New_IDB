import React from 'react';
import {connect} from 'react-redux';
import { get } from 'immutable';

import store from '../../store';
import Loading from '../loadbar/Loading';
import Table from "../table/Table";

import { decodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions';
import DialogBox from "../searchFormPartials/DialogBox";

const action = obj => store.dispatch(obj);

const styles = {
  display: "hidden"
}

class RunupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    console.log("you reached the component did mount");
    let { search } = this.props.location;
    console.log(this.props)
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded)
      action({type: 'FETCH_SPECIFIED_RUNUP_REQUESTED', payload: queryString});
    }else{
      action({type: 'FETCH_ALL_RUNUP_REQUESTED'})
    }
  }

  handleYesClick = () => {
    let id = this.props.tsunami.get('deleteRunupId');
    action({type: "DELETE_RUNUP_REQUESTED", payload: id})
  }

  handleNoClick = () => {
    action({type:"TOGGLE_DELETE_RUNUP_CONFIRMATION"});
    action({type: "SET_DELETE_RUNUP_ID", payload: null});
  }

  render() {
    const { tsunami } = this.props;

    if( tsunami.get('fetchedRunup')){
      return (
        <div>
          {tsunami.get('showDeleteConfirmation')?
              <DialogBox
                handleYesClick={this.handleYesClick}
                handleNoClick={this.handleNoClick}
              />
              :<div style={styles}></div>
          }
          <Table
            loading={tsunami.get('fetchingRunup')}
            data={tsunami.asMutable().getIn(['runupData']).toJS()}
            columns={tsunami.getIn(['headersAndAccessors']).toJS()}
            title="Runup Data"
          />

        </div>
      )
    }else{
      return <Loading/>
    }
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(RunupContainer);

