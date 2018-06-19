import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';

import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { Parameters } from "./ReferenceInsertConstants";
const action = obj => store.dispatch(obj);

class ReferenceInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.reference.asMutable().toJS();
    if(val.insert){
      action({type: "POST_REFERENCE_REQUESTED", payload: val.insert});
    }else{
      //placeholder
    }
  }

  toggleParameters = () => action({type: "TOGGLE_REFERENCE_INSERT_PARAMETERS"});

  render(){
    const { reference } = this.props;
    return (
        <MultiPartForm title="Insert Reference" handleSubmit={this.handleSubmit.bind(this)}>

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

