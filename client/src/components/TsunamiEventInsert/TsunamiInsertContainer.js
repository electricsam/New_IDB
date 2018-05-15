import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import Styles from "./InsertTsunamiStyles.css"

import MultiPartForm from "../FormPartials/MultiPartForm";
import FormSection from "../FormPartials/FormSection";
import { Measurements, TotalEffects, Effects, DateAndLocation } from "./TsunamiEventInsertConstants"

const action = obj => store.dispatch(obj);

class TsunamiInsertContainer extends React.Component{
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
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_TS_EVENT_REQUESTED", payload: val.insert});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      // this.props.history.push(`/tsunamis?${encoded}`);

    }else{
      // action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      // this.props.history.push(`/tsunamis`)
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_TSINSERT_DATE_AND_LOCATION"});

  toggleMeasurements = () => action({type: "TOGGLE_TSINSERT_MEASUREMENTS"});

  toggleEffects = () => action({type: "TOGGLE_TSINSERT_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_TSINSERT_TOTAL_EFFECTS"})

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().insert.country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;



  render(){
    const { tsunami } = this.props;
    return (
        <MultiPartForm title="Insert Tsunami Event" handleSubmit={this.handleSubmit}>
          <FormSection
            title="Date and Location"
            toggleSection={this.toggleDateAndLocation}
            showSection={tsunami.get('showTsInsertDateLoc')}
            validateMinMax={this.validateMinMax}
            formData={DateAndLocation}
            checkDropDownDisabled={this.checkDropDownDisabled}
          />
          <FormSection
              title="Measurements"
              toggleSection={this.toggleMeasurements}
              showSection={tsunami.get('showTsInsertMeasure')}
              validateMinMax={this.validateMinMax}
              formData={Measurements}
          />
          <FormSection
              title="Effects"
              toggleSection={this.toggleEffects}
              showSection={tsunami.get('showTsInsertEffects')}
              validateMinMax={this.validateMinMax}
              formData={Effects}
          />
          <FormSection
              title="Total Effects"
              toggleSection={this.toggleTotalEffects}
              showSection={tsunami.get('showTsInsertEffectsTotal')}
              validateMinMax={this.validateMinMax}
              formData={TotalEffects}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(TsunamiInsertContainer);

