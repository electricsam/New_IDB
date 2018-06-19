import React from "react";
import { connect } from 'react-redux';
import {toast, ToastContainer } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { DateAndLocation, Effects, TotalEffects, Measurements} from "./EarthquakeInsertConstants";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';

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
      let toastId = null
      this.notify();
      // setTimeout(this.update(), 3000)
    }
  }

  notify = () => this.toastId = toast('...posting', {autoClose: false});

  updateSuccess = () => this.toastId = toast.update(this.toastId, {
      type: toast.TYPE.SUCCESS,
      render: 'Post Successful',
      autoClose: 3000
  });

  updateFail = () => this.toastId = toast.update(this.toastId, {type: toast.TYPE.ERROR, render: 'Post Failed', autoClose: 3000})

  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_DATE_AND_LOCATION"});

  toggleMeasure = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().insert.country === val? false: true;

  validLength = (val, max) => (val.length > max? false: true);

  render() {
    const { earthquake, forms } = this.props;
    if(earthquake.asMutable().toJS().postedEarthquake){
      this.updateSuccess()
    }
    if(earthquake.asMutable().toJS().postFail){
      this.updateFail();
    }

    return (
        <MultiPartForm title="Insert Earthquake" handleSubmit={this.handleSubmit.bind(this)}>

          <ToastContainer/>

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
