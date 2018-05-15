import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import Styles from './TsunamiSearchContainerStyle.css';
import MultiPartForm from "../FormPartials/MultiPartForm";

import {
  TsunamiSourceParameters,
  TsunamiRunupByPlace,
  TotalTsunamiEffects,
  TotalTsunamiAndSourceEffects
} from "./EventSearchConstants";

import FormSection from "../FormPartials/FormSection";

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
      <MultiPartForm title={"Search Tsunami Events"} handleSubmit={this.handleSubmit}>

          <FormSection
            title="Tsunami Source Parameters"
            sectionStyle={Styles.formSectionOne}
            headerStyle={Styles.header}
            toggleSection={this.toggleSourceForm}
            showSection={tsunami.get('showSourceForm')}
            innerSectionStyle={Styles.formInnerSectionOne}
            expandCollapseStyle={Styles.expandCollapse}
            validateMinMax={this.validateMinMax}
            formData={TsunamiSourceParameters}
            checkDropDownDisabled={this.checkDropDownDisabled}
            checkConditions={this.checkLocType}
          />

          <FormSection
            title="Tsunami Runup By Place"
            sectionStyle={Styles.formSectionTwo}
            headerStyle={Styles.header}
            toggleSection={this.toggleRunupPlaceForm}
            showSection={tsunami.get('showRunupPlaceForm')}
            innerSectionStyle={Styles.formInnerSectionTwo}
            expandCollapseStyle={Styles.expandCollapse}
            validateMinMax={this.validateMinMax}
            formData={TsunamiRunupByPlace}
            checkDropDownDisabled={this.checkDropdownDisabledRunup}
            checkConditions={this.checkRunupLocType}
          />

          <FormSection
            title="Total Tsunami Effects"
            sectionStyle={Styles.formSectionThree}
            headerStyle={Styles.header}
            toggleSection={this.toggleTsunamiEffectsForm}
            showSection={tsunami.get('showTsunamiEffectsForm')}
            innerSectionStyle={Styles.formInnerSectionThree}
            expandCollapseStyle={Styles.expandCollapse}
            validateMinMax={this.validateMinMax}
            formData={TotalTsunamiEffects}
          />

          <FormSection
            title="Total Tsunami and Source Effects"
            sectionStyle={Styles.formSectionFour}
            headerStyle={Styles.header}
            toggleSection={this.toggleTotalTsunamiSourceForm}
            showSection={tsunami.get('showTotalTsunamiSourceForm')}
            innerSectionStyle={Styles.formInnerSectionFour}
            expandCollapseStyle={Styles.expandCollapse}
            validateMinMax={this.validateMinMax}
            formData={TotalTsunamiAndSourceEffects}
          />

      </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(TsunamiSearchContainer);
