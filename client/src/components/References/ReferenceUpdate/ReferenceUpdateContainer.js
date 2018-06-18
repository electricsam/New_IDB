import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import {Parameters} from "./ReferenceUpdateConstants";

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

  validLength = (val, max) => {
    if(val === null){
      return true
    }else{
      return val.length > max? false: true
    }
  };

  render(){
    const { reference } = this.props;
    if(reference.get("fetchingReferenceById") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Reference" handleSubmit={this.handleSubmit.bind(this)}>
            <FormSection
                title="Parameters"
                toggleSection={this.toggleParameters}
                showSection={reference.get('showReferenceUpdateParam')}
                formData={Parameters}
                count={reference.asMutable().toJS().references[0].comments}
                validLength={this.validLength}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({reference: state.deep.reference, id: ownProps.match.id});

export default connect(mapStateToProps)(ReferenceUpdateContainer);

