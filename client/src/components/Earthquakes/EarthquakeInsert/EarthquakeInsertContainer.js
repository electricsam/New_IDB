import React from "react";
import { connect } from 'react-redux';

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

  componentDidMount(){

  }

  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_EARTHQUAKE_REQUESTED", payload: val.insert});
    }else{
    //  nothing
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_DATE_AND_LOCATION"});

  toggleMeasure = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().insert.country === val? false: true;

  // handleSubmit={this.handleSubmit.bind(this)}

  render() {
    const { earthquake } = this.props;
    console.log("earthquake ", earthquake);
    return (
        <MultiPartForm title="Insert Earthquake" >
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

        <button onClick={this.notify}>Toast</button>

        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({earthquake: state.deep.earthquake});

export default connect(mapStateToProps)(EarthquakeInsertContainer);





