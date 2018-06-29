import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/lib/immutable';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"

import { DateAndLocation, Effects, Measurements} from "./RunupUpdateConstants";
import FormSection from "../../FormPartials/FormSection";
import MultiPartForm from "../../FormPartials/MultiPartForm";
import {Toast} from "../../Toast/Toast";

const errorStyles = {
  color: 'red',
  display: 'block'
}

const action = obj => store.dispatch(obj);

class UpdateRunupContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }


  componentDidMount(){
    let runupId = this.props.match.params.runupId;
    action ({type: "FETCH_TS_RUNUP_REQUESTED", payload: runupId });
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    let runupId = this.props.match.params.runupId;
    let eventId = this.props.match.params.eventId;
    if(val.runupData){
      action({
        type: "UPDATE_TS_RUNUP_REQUESTED",
        payload:{
          runupData: val.runupData[0], runupId: runupId, eventId: eventId
        }
      });
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_RUNUP_UPDATE_DATE_LOC"});

  toggleMeasurements = () => action({type: "TOGGLE_RUNUP_UPDATE_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_RUNUP_UPDATE_EFFECTS"});

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().runupData[0].country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    if(tsunami.get("fetchingRunup") === true){
      return(
        <Loading/>
      )
    }else{
      return (
          <MultiPartForm title="Update Runup" handleSubmit={this.handleSubmit.bind(this)} titleColor="blue">

            <Toast
              actionMessage="...Updating"
              successMessage="Update Successful"
              failMessage="Update Failed"
              launch={tsunami.asMutable().toJS().patchingRunup}
              success={tsunami.asMutable().toJS().patchedRunup}
              fail={tsunami.asMutable().toJS().patchRunupFail}
            />

            <FormSection
              title="Date and Location"
              toggleSection={this.toggleDateAndLocation}
              showSection={tsunami.get('showRunupUpdateDateLoc')}
              validateMinMax={this.validateMinMax}
              formData={DateAndLocation}
              checkDropDownDisabled={this.checkDropDownDisabled.bind(this)}
            />

            <FormSection
                title="Measurements"
                toggleSection={this.toggleMeasurements}
                showSection={tsunami.get('showRunupUpdateMeasure')}
                validateMinMax={this.validateMinMax}
                formData={Measurements}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

            <FormSection
                title="Effects"
                toggleSection={this.toggleEffects}
                showSection={tsunami.get('showRunupUpdateEffects')}
                validateMinMax={this.validateMinMax}
                formData={Effects}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({tsunami: state.deep.tsunami, id: ownProps.match.id});

export default connect(mapStateToProps)(UpdateRunupContainer);

