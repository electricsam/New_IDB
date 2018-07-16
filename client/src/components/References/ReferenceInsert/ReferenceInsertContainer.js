import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';

import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import { Parameters } from "./ReferenceInsertConstants";
import {Toast} from "../../Toast/Toast";
const action = obj => store.dispatch(obj);

class ReferenceInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){}

  handleSubmit(val){
    val = val.reference.asMutable().toJS();
    if(val.insert){
      action({type: "POST_REFERENCE_REQUESTED", payload: val.insert});
    }
  }

  toggleParameters = () => action({type: "TOGGLE_REFERENCE_INSERT_PARAMETERS"});

  render(){
    const { reference } = this.props;

    return (
        <MultiPartForm title="Insert Reference" handleSubmit={this.handleSubmit.bind(this)}>

          <Toast
              actionMessage="...Posting"
              successMessage="Post Successful"
              failMessage="Post Failed"
              launch={reference.asMutable().toJS().postingReference}
              success={reference.asMutable().toJS().postedReference}
              fail={reference.asMutable().toJS().postFail}
          />

          <FormSection
              title="Parameters"
              toggleSection={this.toggleParameters}
              showSection={reference.get('showReferenceInsertParam')}
              formData={Parameters}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({reference: state.deep.reference});

export default connect(mapStateToProps)(ReferenceInsertContainer);

