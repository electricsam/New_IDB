import React from "react";
import { connect } from 'react-redux';
import {toast, ToastContainer } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import { DateAndLocation, Effects, TotalEffects, Measurements} from "./EarthquakeInsertConstants";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj)

/**
 * Container for insert of new Earthquake Event
 *
 * @class
 */
class EarthquakeInsertContainer extends React.Component{
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.state = {};
  }

  /**
   * dispatches the action POST_EARTHQUAKE_REQUESTED with payload of the user defined form values.  This will call a
   * POST to the API
   *
   * @param val
   */
  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_EARTHQUAKE_REQUESTED", payload: val.insert});
    }
  }

  /**
   * dispatches action to toggle the dipslay of the Date and Location section of the insert form
   *
   * @return {*}
   */
  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_DATE_AND_LOCATION"});

  /**
   * dispatches action to toggle the display of the measurement section of the insert form
   *
   * @return {*}
   */
  toggleMeasure = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_MEASURE"});

  /**
   * dispatches action to toggle the display of the effects section of the insert form
   *
   * @return {*}
   */
  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_EFFECTS"});

  /**
   * dispatches action to toggle the display of the total effects section of the insert form
   *
   * @return {*}
   */
  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS"});

  /**
   * Performs client side validation of the given val, to ensure that it is between the max and min params.
   *
   * @param val
   * @param min
   * @param max
   * @return {boolean}
   */
  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  /**
   * checks store for value of insert.country and compares equality to passed val.  This is intended assess whether
   * users should be able to access a dropDown for a subcategory based on the existence of a parent category.  Ex. if
   * country selected is not USA then users should not be able to select a state from the state dropdown.
   *
   * @param val
   * @return {boolean}
   */
  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().insert.country === val? false: true;

  render() {
    const { earthquake } = this.props;

    return (
        <MultiPartForm title="Insert Earthquake" handleSubmit={this.handleSubmit.bind(this)} titleColor={"orange"}>

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
