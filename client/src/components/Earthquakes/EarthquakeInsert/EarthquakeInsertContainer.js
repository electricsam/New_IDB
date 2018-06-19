import React from "react";
import { connect } from 'react-redux';
import {toast, ToastContainer } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { DateAndLocation, Effects, TotalEffects, Measurements} from "./EarthquakeInsertConstants";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj)

class EarthquakeInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  toastId = null;

  componentDidMount(){}

  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_EARTHQUAKE_REQUESTED", payload: val.insert});
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_DATE_AND_LOCATION"});

  toggleMeasure = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().insert.country === val? false: true;

  validLength = (val, max) => (val.length > max? false: true);

  render() {
    const { earthquake } = this.props;

    return (
        <MultiPartForm title="Insert Earthquake" handleSubmit={this.handleSubmit.bind(this)}>

          <Toast
            actionMessage="...Posting"
            successMessage="Post Successful"
            failMessage="Post Failed"
            launch={earthquake.asMutable().toJS().postingEarthquake}
            success={earthquake.asMutable().toJS().postedEarthquake}
            fail={earthquake.asMutable().toJS().postFail}
          />

          <FormSection
            title="Date and Location"
            toggleSection={this.toggleDateAndLocation}
            showSection={earthquake.get('showEqInsertDateLoc')}
            validateMinMax={this.validateMinMax}
            formData={DateAndLocation}
            checkDropDownDisabled={this.checkDropDownDisabled}
          />

          <FormSection
            title="Measurements"
            toggleSection={this.toggleMeasure}
            showSection={earthquake.get('showEqInsertMeasure')}
            validateMinMax={this.validateMinMax}
            formData={Measurements}
          />

          <FormSection
              title="Effects"
              toggleSection={this.toggleEffects}
              showSection={earthquake.get('showEqInsertEffects')}
              validateMinMax={this.validateMinMax}
              formData={Effects}
          />

          <FormSection
              title="Total Effects"
              toggleSection={this.toggleTotalEffects}
              showSection={earthquake.get('showEqInsertTotalEffects')}
              validateMinMax={this.validateMinMax}
              formData={TotalEffects}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({earthquake: state.deep.earthquake});

export default connect(mapStateToProps)(EarthquakeInsertContainer);
