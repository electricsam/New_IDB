import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import MultiPartForm from "../FormPartials/MultiPartForm";
import FormSection from "../FormPartials/FormSection";

import { Measurements, DateAndLocation, Effects } from "./RunupInsertConstants";

const action = obj => store.dispatch(obj);

class RunupInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount(){
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpinsert){
      let encoded = encodeQueryString(JSON.stringify(val.rnpinsert));
      action({type: "POST_TS_RUNUP_REQUESTED", payload: {runup: val.rnpinsert, id: this.props.match.params.eventId}});
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_RUNUP_INSERT_DATE_LOC"});

  toggleMeasurements = () => action({type: "TOGGLE_RUNUP_INSERT_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_RUNUP_INSERT_EFFECTS"});

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().rnpinsert.country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    return (
        <MultiPartForm title="Insert Runup" handleSubmit={this.handleSubmit}>

          <FormSection
            title="Date and Location"
            toggleSection={this.toggleDateAndLocation}
            showSection={tsunami.get('showRunupInsertDateLoc')}
            validateMinMax={this.validateMinMax}
            formData={DateAndLocation}
            checkDropDownDisabled={this.checkDropDownDisabled}
          />
          <FormSection
            title="Measurements"
            toggleSection={this.toggleMeasurements}
            showSection={tsunami.get('showRunupInsertMeasure')}
            validateMinMax={this.validateMinMax}
            formData={Measurements}
            checkDropDownDisabled={this.checkDropDownDisabled}
          />
          <FormSection
            title="Effects"
            toggleSection={this.toggleEffects}
            showSection={tsunami.get('showRunupInsertEffects')}
            validateMinMax={this.validateMinMax}
            formData={Effects}
            checkDropDownDisabled={this.checkDropDownDisabled}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(RunupInsertContainer);

