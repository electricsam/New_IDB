import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import {Parameters} from "./ReferenceUpdateConstants";
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

class ReferenceUpdateContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    let id = this.props.match.params.id;
    action({type: "FETCH_REFERENCE_BY_ID_REQUESTED", payload: id});
  }

  handleSubmit(val){
    val = val.reference.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.insert){
      action({type: "PATCH_REFERENCE_REQUESTED", payload:{ reference: val.references[0], id: id}});
    }
  }

  toggleParameters = () => action({type: "TOGGLE_REFERENCE_UPDATE_PARAMETERS"});

  render(){
    const { reference } = this.props;
    if(reference.get("fetchingReferenceById") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Reference" handleSubmit={this.handleSubmit.bind(this)}>

            <Toast
                actionMessage="...Updating"
                successMessage="Update Successful"
                failMessage="Update Failed"
                launch={reference.asMutable().toJS().patchingReference}
                success={reference.asMutable().toJS().patchedReference}
                fail={reference.asMutable().toJS().patchFail}
            />

            <FormSection
                title="Parameters"
                toggleSection={this.toggleParameters}
                showSection={reference.get('showReferenceUpdateParam')}
                formData={Parameters}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({reference: state.deep.reference, id: ownProps.match.id});

export default connect(mapStateToProps)(ReferenceUpdateContainer);

