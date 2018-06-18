import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { DateAndLocation, Measurements, TotalEffects, Effects  } from "./EarthquakeUpdateConstants";

const action = obj => store.dispatch(obj);

class EarthquakeUpdateContainer extends React.Component{
  constructor(props){
    super(props);
    this.statem = {};
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    action({type: "FETCH_EARTHQUAKE_REQUESTED", payload: id});
  }

  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.earthquakes[0]));
      action({type: "PATCH_EARTHQUAKE_REQUESTED", payload:{ earthquake: val.earthquakes[0], id: id}});
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_DATE_LOC"});

  toggleMeasurements = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_UPDATE_TOTAL_EFFECTS"});

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().earthquakes[0].country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  validLength = (val, max) => {
    if(val === null){
      return true
    }else{
      return val.length > max? false: true
    }
  };

  render(){
    const { earthquake } = this.props;
    console.log("Earthquake: ", earthquake.asMutable().toJS());
    if(earthquake.get("fetchingEarthquake") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Earthquake Event" handleSubmit={this.handleSubmit.bind(this)}>

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
                validLength={this.validLength}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({earthquake: state.deep.earthquake, id: ownProps.match.id});

export default connect(mapStateToProps)(EarthquakeUpdateContainer);

