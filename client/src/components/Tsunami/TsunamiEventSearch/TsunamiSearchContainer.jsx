import React from 'react';
import { connect } from 'react-redux';

import {encodeQueryString, createApiQueryString, decodeQueryString} from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";

import {
  TsunamiSourceParameters,
  TsunamiRunupByPlace,
  TotalTsunamiEffects,
  TotalTsunamiAndSourceEffects
} from "./EventSearchConstants";

const action = obj => store.dispatch(obj);

class TsunamiSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.search){
      if(this.props.location.search.length){
        let search = JSON.parse(decodeQueryString(this.props.location.search.split('?')[1]));
        Object.assign(val.search, search);
        let encoded = encodeQueryString(JSON.stringify((val.search)));
        this.props.history.push(`/tsunami/relate?${encoded}`);
      }else{
        let encoded = encodeQueryString(JSON.stringify(val.search));
        let queryString = createApiQueryString(val.search);
        this.props.history.push(`/tsunami/event/data?${encoded}`);
      }
    }else{
      this.props.history.push(`/tsunami/event/data`)
    }
  }

  toggleSourceForm = () => action({type: "TOGGLE_SOURCE_FORM"});

  toggleRunupPlaceForm = () => action({type: "TOGGLE_RUNUPPLACE_FORM"});

  toggleTsunamiEffectsForm = () => action({type: "TOGGLE_TSUNAMIEFFECTS_FORM"});

  toggleTotalTsunamiSourceForm = () => action({type: "TOGGLE_TOTALTSUNAMISOURCE_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkConditions = (condition) => this.props.tsunami.get(condition);

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().search.country === val? false: true;

  checkDropdownDisabledRunup = (val) => this.props.tsunami.asMutable().toJS().search.runupCountry === val? false: true;

  handleClear = () => action({type: 'RESET_TS_EVENT_FORM'});

  render(){
    const { tsunami } = this.props;
    return (
      <MultiPartForm title="Search Tsunami Events"
                     handleSubmit={this.handleSubmit.bind(this)}
                     handleClear={this.handleClear.bind(this)}
                     titleColor="blue">

          <FormSection
            title="Tsunami Source Parameters"
            toggleSection={this.toggleSourceForm}
            showSection={tsunami.get('showSourceForm')}
            validateMinMax={this.validateMinMax}
            formData={TsunamiSourceParameters}
            checkDropDownDisabled={this.checkDropDownDisabled}
            checkConditions={this.checkConditions}
          />

          <FormSection
            title="Tsunami Runup By Place"
            toggleSection={this.toggleRunupPlaceForm}
            showSection={tsunami.get('showRunupPlaceForm')}
            validateMinMax={this.validateMinMax}
            formData={TsunamiRunupByPlace}
            checkDropDownDisabled={this.checkDropdownDisabledRunup}
            checkConditions={this.checkConditions}
          />

          <FormSection
            title="Total Tsunami Effects"
            toggleSection={this.toggleTsunamiEffectsForm}
            showSection={tsunami.get('showTsunamiEffectsForm')}
            validateMinMax={this.validateMinMax}
            formData={TotalTsunamiEffects}
          />

          <FormSection
            title="Total Tsunami and Source Effects"
            toggleSection={this.toggleTotalTsunamiSourceForm}
            showSection={tsunami.get('showTotalTsunamiSourceForm')}
            validateMinMax={this.validateMinMax}
            formData={TotalTsunamiAndSourceEffects}
          />

      </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(TsunamiSearchContainer);
