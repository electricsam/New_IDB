import React from 'react';
import { connect } from 'react-redux';


import { EarthquakeParameters,
  EarthquakeEffects,
  TotalEarthquakeAndSecondaryEffects
} from "./EarthquakeSearchConstants";

import { encodeQueryString, createApiQueryString, decodeQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store'
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";

const action = obj => store.dispatch(obj);

class EarthquakeSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
    }
  }

  componentDidMount(){}

  handleSubmit(val){
    val = val.earthquake.asMutable().toJS();
    if(val.search){
      if(this.props.location.search.length){
        let search = JSON.parse(decodeQueryString(this.props.location.search.split("?")[1]));
        Object.assign(val.search, search);
        let encoded = encodeQueryString(JSON.stringify(val.search));
        let queryString = createApiQueryString(val.search);
        action({type: 'FETCH_SPECIFIED_EARTHQUAKES_REQUESTED', payload: queryString});
        this.props.history.push( `/earthquake/relate?${encoded}`);
      }else{
        let encoded = encodeQueryString(JSON.stringify(val.search));
        this.props.history.push( `/earthquake/event/data?${encoded}`);
      }
    }else{
      this.props.history.push('/earthquake/event/data');
    }
  }

  checkConditions = (condition) => this.props.earthquake.get(condition);

  toggleParameters = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS"});

  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().search.country === val? false: true;

  handleClear = () => action({type: 'RESET_EARTHQUAKE_SEARCH'});

  render(){
    let { earthquake } = this.props;
    return (
        <MultiPartForm title="Search Earthquake Events"
                       handleSubmit={this.handleSubmit.bind(this)}
                       handleClear={this.handleClear.bind(this)}
                       titleColor="orange"
        >

          <FormSection
            title="Earthquake Parameters"
            toggleSection={this.toggleParameters}
            showSection={earthquake.get('showEqSearchParams')}
            validateMinMax={this.validateMinMax}
            formData={EarthquakeParameters}
            checkDropDownDisabled={this.checkDropDownDisabled}
            checkConditions={this.checkConditions}
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
            checkConditions={this.checkConditions}
          />

        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({earthquake: state.deep.earthquake});

export default connect(mapStateToProps)(EarthquakeSearchContainer);