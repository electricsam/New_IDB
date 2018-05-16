import React from 'react';
import { connect } from 'react-redux';


import { EarthquakeParameters,
  EarthquakeEffects,
  TotalEarthquakeAndSecondaryEffects
} from "./EarthquakeSearchConstants"

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store'
import MultiPartForm from "../FormPartials/MultiPartForm";
import FormSection from "../FormPartials/FormSection";

const action = obj => store.dispatch(obj);

class EarthquakeSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
    }
  }

  componentDidMount(){
    console.log("this component mounted")
  }

  handleSubmit(val){
    console.log("submit being handled");
  }

  checkLocType = () => this.props.earthquake.get('locType');

  toggleParameters = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().search.country === val? false: true;

  render(){
    let { earthquake } = this.props;
    return (
        <MultiPartForm>

          <FormSection
            title="Earthquake Parameters"
            toggleSection={this.toggleParameters}
            showSection={earthquake.get('showEqSearchParams')}
            validateMinMax={this.validateMinMax}
            formData={EarthquakeParameters}
            checkDropDownDisabled={this.checkDropDownDisabled}
            checkConditions={this.checkLocType}
          />

          <FormSection
            title="Earthquake Effects"
            toggleSection={this.toggleEffects}
            showSection={earthquake.get('showEqSearchEffects')}
            formData={EarthquakeEffects}
            validateMinMax={this.validateMinMax}
          />

          <FormSection
            title="Total Earthquake and Secondary Effects "
            toggleSection={this.toggleTotalEffects}
            showSection={earthquake.get('showEqSearchEffectsTotal')}
            formData={TotalEarthquakeAndSecondaryEffects}
            validateMinMax={this.validateMinMax}
          />

        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({earthquake: state.deep.earthquake});

export default connect(mapStateToProps)(EarthquakeSearchContainer);