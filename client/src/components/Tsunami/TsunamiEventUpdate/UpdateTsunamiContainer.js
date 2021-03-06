import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import { DateAndLocation, Measurement, TotalEffects, Effects  } from "./TsunamiEventUpdateConstants";
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

class UpdateTsunamiContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentWillMount(){
    let id = this.props.match.params.id;
    action({type: "FETCH_TS_EVENT_REQUESTED", payload: id});
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.tsEvent[0]){
      let encoded = encodeQueryString(JSON.stringify(val.tsEvent[0]));
      action({type: "PATCH_TS_EVENT_REQUESTED", payload:{ tsEvent: val.tsEvent[0], id: id}});
    }
  }


  toggleDateAndLocation = () => action({type: "TOGGLE_TSUNAMI_UPDATE_DATE_LOC"});

  toggleMeasurements = () => action({type: "TOGGLE_TSUNAMI_UPDATE_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_TOTAL_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_EFFECTS_TOTAL"});

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().tsEvent[0].country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    if(tsunami.get("fetchingTsEvent") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Tsunami Event" handleSubmit={this.handleSubmit.bind(this)} titleColor="blue">

            <Toast
              actionMessage="...Updating"
              successMessage="Update Successful"
              failMessage="Update Failed"
              launch={tsunami.asMutable().toJS().patchingTsEvent}
              success={tsunami.asMutable().toJS().patchedTsEvent}
              fail={tsunami.asMutable().toJS().patchTsEventFail}
            />

            <FormSection
              title="Date and Location"
              toggleSection={this.toggleDateAndLocation}
              showSection={tsunami.get('showTsunamiUpdateDateLoc')}
              validateMinMax={this.validateMinMax}
              formData={DateAndLocation}
              checkDropDownDisabled={this.checkDropDownDisabled}
            />

            <FormSection
                title="Measurements"
                toggleSection={this.toggleMeasurements}
                showSection={tsunami.get('showTsunamiUpdateMeasure')}
                validateMinMax={this.validateMinMax}
                formData={Measurement}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

            <FormSection
                title="Effects"
                toggleSection={this.toggleEffects}
                showSection={tsunami.get('showTsunamiUpdateEffects')}
                validateMinMax={this.validateMinMax}
                formData={Effects}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

            <FormSection
                title="Total Effects"
                toggleSection={this.toggleTotalEffects}
                showSection={tsunami.get('showTsunamiUpdateEffectsTotal')}
                validateMinMax={this.validateMinMax}
                formData={TotalEffects}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({tsunami: state.deep.tsunami, id: ownProps.match.id});

export default connect(mapStateToProps)(UpdateTsunamiContainer);

