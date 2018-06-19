import React from 'react';
import {connect} from 'react-redux';
import {actions, Control, Errors, Form} from 'react-redux-form/lib/immutable';

import {createApiQueryString, encodeQueryString} from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import FormSection from "../../FormPartials/FormSection";

import { RunupLocInfo, RunupSourceInfo, RunupParamsEffects } from './RunupFormConstants';
import MultiPartForm from "../../FormPartials/MultiPartForm";

const action = obj => store.dispatch(obj);

class RunupSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount(){
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
    // - specifically for radio button toggle to location search
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpsearch){
      let encoded = encodeQueryString(JSON.stringify(val.rnpsearch));
      let queryString = createApiQueryString(val.rnpsearch);
      this.props.history.push(`/tsunami/runup/data?${encoded}`);
    }else{
      action({type: "FETCH_ALL_RUNUPS_REQUESTED"});
      this.props.history.push(`/tsunami/runup/data`)
    }
  }

  toggleRunupSourceInfo = () => action({type: "TOGGLE_RUNUP_SOURCE_FORM"});

  toggleRunupLocationInfo = () => action({type: "TOGGLE_RUNUPLOCATION_FORM"});

  toggleParamsEffect = () => action({type: "TOGGLE_RUNUPPARAMS_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkRunupLocType = () => this.props.tsunami.get('runupLocType');

  render(){
    const { tsunami } = this.props;
    return (
        <MultiPartForm title="Search Runups" handleSubmit={this.handleSubmit.bind(this)}>

         <FormSection
            title="Runup Source Information"
            toggleSection={this.toggleRunupSourceInfo}
            showSection={tsunami.get('showRunupSource')}
            validateMinMax={this.validateMinMax}
            formData={RunupSourceInfo}
          />

          <FormSection
            title="Tsunami Runup Location Information"
            toggleSection={this.toggleRunupLocationInfo}
            showSection={tsunami.get('showRunupLocation')}
            checkConditions={this.checkRunupLocType}
            validateMinMax={this.validateMinMax}
            formData={RunupLocInfo}
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

