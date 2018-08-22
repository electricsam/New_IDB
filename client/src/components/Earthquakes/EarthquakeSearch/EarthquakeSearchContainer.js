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

/**Container for Searching Earthquakes*/
class EarthquakeSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
    }
  }

  /**
   * Checks for existance of search params in url.
   *
   * If they exist then it decodes and adds to search terms given by
   * passed object. It then generates a query string of all key value pairs of search terms, hashes that and dispatches
   * action with unhashed queryString as payload for call to API.  Finally pushes history to /earthquake/relate route
   *
   * If not it simply generates a query string of all key value pairs of search terms, hashes it and pushes history to
   * /earthquake/event/data
   *
   * @param val
   */
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

  /**
   * returns value from store based on given key
   * @param {string} condition
   */
  checkConditions = (condition) => this.props.earthquake.get(condition);

  /**
   * fires action to toggle a section of the form
   * @returns {*}
   */
  toggleParameters = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_PARAMETERS"});

  /**
   * fires action to toggle a section of the form
   * @returns {*}
   */
  toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS"});

  /**
   * fires action to toggle a section of the form
   * @returns {*}
   */
  toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS"});

  /**
   * validates that the given value is between given min and given max
   * @param val
   * @param min
   * @param max
   * @returns {boolean}
   */
  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  /**
   * compares given val against value at search.country in the store. returns false for a match and true for no match
   *
   * @param val
   * @returns {boolean}
   */
  checkDropDownDisabled = (val) => this.props.earthquake.asMutable().toJS().search.country === val? false: true;

  /**
   * dispatches action to reset the search data in store
   *
   * @returns {*}
   */
  handleClear = () => action({type: 'RESET_EARTHQUAKE_SEARCH'});

  render(){
    let { earthquake } = this.props;
    return (
        <MultiPartForm title="Search Earthquake Events"
                       handleSubmit={this.handleSubmit.bind(this)}
                       handleClear={this.handleClear.bind(this)}
                       titleColor="orange">

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