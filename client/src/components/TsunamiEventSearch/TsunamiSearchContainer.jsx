import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import MultiPartForm from "../FormPartials/MultiPartForm";
import FormSection from "../FormPartials/FormSection";

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

  componentDidMount(){
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
    // - specifically for radio button toggle to location search
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.search){
      let encoded = encodeQueryString(JSON.stringify(val.search));
      let queryString = createApiQueryString(val.search);
      action({type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      this.props.history.push(`/tsunami/event/data?${encoded}`);
    }else{
      action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      this.props.history.push(`/tsunami/event/data`)
    }
  }

  toggleSourceForm = () => action({type: "TOGGLE_SOURCE_FORM"});

  toggleRunupPlaceForm = () => action({type: "TOGGLE_RUNUPPLACE_FORM"});

  toggleTsunamiEffectsForm = () => action({type: "TOGGLE_TSUNAMIEFFECTS_FORM"});

  toggleTotalTsunamiSourceForm = () => action({type: "TOGGLE_TOTALTSUNAMISOURCE_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkLocType = () => this.props.tsunami.get('locType');

  checkRunupLocType = () => this.props.tsunami.get('runupLocType')

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().search.country === val? false: true;

  checkDropdownDisabledRunup = (val) => this.props.tsunami.asMutable().toJS().search.runupCountry === val? false: true;

  render(){
    const { tsunami } = this.props;
    return (
      <MultiPartForm title={"Search Tsunami Events"} handleSubmit={this.handleSubmit.bind(this)}>

          <FormSection
            title="Tsunami Source Parameters"
            toggleSection={this.toggleSourceForm}
            showSection={tsunami.get('showSourceForm')}
            validateMinMax={this.validateMinMax}
            formData={TsunamiSourceParameters}
            checkDropDownDisabled={this.checkDropDownDisabled}
            checkConditions={this.checkLocType}
          />

          <FormSection
            title="Tsunami Runup By Place"
            toggleSection={this.toggleRunupPlaceForm}
            showSection={tsunami.get('showRunupPlaceForm')}
            validateMinMax={this.validateMinMax}
            formData={TsunamiRunupByPlace}
            checkDropDownDisabled={this.checkDropdownDisabledRunup}
            checkConditions={this.checkRunupLocType}
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
