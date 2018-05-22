import React from 'react';
import {connect} from 'react-redux';
import { get } from 'immutable';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from "../../table/Table";

import { decodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from "../../FormPartials/DialogBox";

const tableStyle = {
  textAlign: "center"
}

const hiddenStyle = {
  display: "none"
}

const action = obj => store.dispatch(obj);

class ReferenceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { search } = this.props.location;
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded);
      action({type: 'FETCH_SPECIFIED_REFERENCES_REQUESTED', payload: queryString});
    }else{
      action({type:"FETCH_SPECIFIED_REFERENCES_REQUESTED"})
    }
  }

  handleYesClick(){
    let id = this.props.reference.get('deleteReferenceId');
    action({type: "DELETE_REFERENCE_REQUESTED", payload: id});
  }

  handleNoClick(){
    action({type: "TOGGLE_DELETE_EVENT_CONFIRMATION"});
    action({type: "SET_DELETE_EVENT_ID", payload: null});
  }

  render() {
    const { reference } = this.props;

    if( reference.get('fetchedReference')){
      console.log(reference.asMutable().toJS());
      return (
          <div>
            {reference.get('showDeleteReferenceConfirmation')?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                />:
                <div style={hiddenStyle}></div>
            }
            <Table
                loading={reference.get('fetchingReference')}
                data={reference.asMutable().getIn(['references']).toJS()}
                columns={reference.getIn(['headersAndAccessors']).toJS()}
                style={tableStyle}
                title="References"
            />
          </div>
      )
    }else{
      return <Loading/>
    }
  }
}

const mapStateToProps = state => ({ reference: state.deep.reference });

export default connect(mapStateToProps)(ReferenceContainer);

