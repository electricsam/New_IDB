import React from 'react';
import {connect} from 'react-redux';
import {actions, Control, Errors, Form} from 'react-redux-form/lib/immutable';

import {createApiQueryString, encodeQueryString} from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import FormSection from "../../FormPartials/FormSection/FormSection";

import { RunupLocInfo, RunupSourceInfo, RunupParamsEffects } from './RunupFormConstants';
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";

const action = obj => store.dispatch(obj);

class RunupSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpsearch){
      let encoded = encodeQueryString(JSON.stringify(val.rnpsearch));
      this.props.history.push(`/tsunami/runup/data?${encoded}`);
    }else{
      this.props.history.push(`/tsunami/runup/data`)
    }
  }

  toggleRunupSourceInfo = () => action({type: "TOGGLE_RUNUP_SOURCE_FORM"});

  toggleRunupLocationInfo = () => action({type: "TOGGLE_RUNUPLOCATION_FORM"});

  toggleParamsEffect = () => action({type: "TOGGLE_RUNUPPARAMS_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkConditions = (condition) => this.props.tsunami.get(condition);

  handleClear = () => action({type: 'RESET_TS_RUNUP_FORM'});

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().rnpsearch.tsCountry === val? false: true;

  checkDropDownDisabledRunup = (val) => this.props.tsunami.asMutable().toJS().rnpsearch.country === val? false: true;

  render(){
    const { tsunami } = this.props;
    return (
        <MultiPartForm title="Search Runups"
                       handleSubmit={this.handleSubmit.bind(this)}
                       handleClear={this.handleClear.bind(this)}
                       titleColor="blue"
        >

         <FormSection
            title="Runup Source Information"
            toggleSection={this.toggleRunupSourceInfo}
            showSection={tsunami.get('showRunupSource')}
            validateMinMax={this.validateMinMax}
            checkDropDownDisabled={this.checkDropDownDisabled}
            formData={RunupSourceInfo}
          />

          <FormSection
            title="Tsunami Runup Location Information"
            toggleSection={this.toggleRunupLocationInfo}
            showSection={tsunami.get('showRunupLocation')}
            checkConditions={this.checkConditions}
            validateMinMax={this.validateMinMax}
            formData={RunupLocInfo}
            checkDropDownDisabled={this.checkDropDownDisabledRunup}
          />

          <FormSection
            title="Tsunami Runup Parameters and Effects Information"
            toggleSection={this.toggleParamsEffect}
            showSection={tsunami.get('showRunupParams')}
            validateMinMax={this.validateMinMax}
            formData={RunupParamsEffects}
          />

        </MultiPartForm>

    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(RunupSearchContainer);

