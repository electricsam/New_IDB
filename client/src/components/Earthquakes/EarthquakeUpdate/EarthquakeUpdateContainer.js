import React from 'react';
import {connect} from 'react-redux';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

import {encodeQueryString} from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import {DateAndLocation, Effects, Measurements, TotalEffects} from "./EarthquakeUpdateConstants";
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

/**
 * Container component for the control and display of earthquake update logic.
 *
 * @class
 */
class EarthquakeUpdateContainer extends React.Component{
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.statem = {};
  }

  /**
   * Utilizes react lifecycle method to call a fetch of data for given earthquake id in the url
   *
   */
  componentDidMount(){
    let id = this.props.match.params.id;
    action({type: "FETCH_EARTHQUAKE_REQUESTED", payload: id});
  }

  /**
   * dispatches action PATCH_EARTHQUAKE_REQUESTED that sends PATCH request to API
   *
   *
   * @param val
   */
  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.insert){
      action({type: "PATCH_EARTHQUAKE_REQUESTED", payload:{ earthquake: val.earthquakes[0], id: id}});
    }
  }

  /**
   * dispatches action to toggle the Date and Location section of the Earthquake Update form.
   * @return {*}
   */
  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_DATE_LOC"});

  /**
   * dispatches action to toggle the Measurements section of the Earthquake Update form.
   * @return {*}
   */
  toggleMeasurements = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_MEASURE"});

  /**
   * dispatches action to toggle the Effects section of the Earthquake Update form.
   * @return {*}
   */
  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_EFFECTS"});

  /**
   * dispatches action to toggle the Total Effects section of the Earthquake Update form.
   * @return {*}
   */
  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_TOTAL_EFFECTS"});


  /**
   * Reads country value from store to compare to passed value.  Used for setting disable value on "area" dropdowns.
   * Ex. If country is not USA then you should not be able to access the state dropdown.
   *
   * @param val
   * @return {boolean}
   */
  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().earthquakes[0].country === val? false: true;

  /**
   * Validates passed val to ensure that it is between the given min and max.
   *
   * @param val
   * @param min
   * @param max
   * @return {boolean}
   */
  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { earthquake } = this.props;
    if(earthquake.get("fetchingEarthquake") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Earthquake Event"
                         handleSubmit={this.handleSubmit.bind(this)}
                         titleColor="orange">

            <Toast
                actionMessage="...Updating"
                successMessage="Update Successful"
                failMessage="Update Failed"
                launch={earthquake.asMutable().toJS().patchingEarthquake}
                success={earthquake.asMutable().toJS().patchedEarthquake}
                fail={earthquake.asMutable().toJS().patchFail}
            />

            <FormSection
              title="Date and Location"
              toggleSection={this.toggleDateAndLocation}
              showSection={earthquake.get('showEqUpdateDateLoc')}
              validateMinMax={this.validateMinMax}
              formData={DateAndLocation}
              checkDropDownDisabled={this.checkDropDownDisabled}
            />

            <FormSection
              title="Measurements"
              toggleSection={this.toggleMeasurements}
              showSection={earthquake.get('showEqUpdateMeasure')}
              validateMinMax={this.validateMinMax}
              formData={Measurements}
            />

            <FormSection
                title="Effects"
                toggleSection={this.toggleEffects}
                showSection={earthquake.get('showEqUpdateEffects')}
                validateMinMax={this.validateMinMax}
                formData={Effects}
            />

            <FormSection
                title="Total Effecs"
                toggleSection={this.toggleTotalEffects}
                showSection={earthquake.get('showEqUpdateTotalEffects')}
                validateMinMax={this.validateMinMax}
                formData={TotalEffects}
                count={earthquake.asMutable().toJS().earthquakes[0].comments}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  earthquake: state.deep.earthquake,
  id: ownProps.match.id,
});

export default connect(mapStateToProps)(EarthquakeUpdateContainer);

