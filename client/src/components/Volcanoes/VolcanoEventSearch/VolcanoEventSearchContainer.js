import React from 'react';
import { connect } from 'react-redux';

import { Parameters } from './VolcanoEventSearchConstants';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store'
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";

const action = obj => store.dispatch(obj);

class VolcanoEventSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state= {}
  }


  componentDidMount(){
    console.log("this component mounted")
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    if(val.search){
      let encoded = encodeQueryString(JSON.stringify(val.search));
      let queryString = createApiQueryString(val.search);

      action({type: "FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED", payload: queryString});
      this.props.history.push( `/volcano/event/data?${encoded}`);
    }else{
      action({type: "FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED"});
      this.props.history.push('/volcano/event/data');
    }
  }

  checkLocType = () => this.props.volcano.get('locType');

  checkConditions = (condition) => this.props.volcano.get(condition);

  toggleParameters = () => action({type: "TOGGLE_VOLCANO_EVENT_SEARCH_PARAMETERS"});

  // toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_EFFECTS"});

  // toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_SEARCH_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  // checkDropDownDisabled = (val) => this.props.volcano.asMutable().toJS().search.country === val? false: true;

  render(){
    let { volcano } = this.props;
    return (
        <MultiPartForm title="Search Earthquake Events" handleSubmit={this.handleSubmit.bind(this)}>

          <FormSection
              title="Volcano Parameters"
              toggleSection={this.toggleParameters}
              showSection={volcano.get('showVolEventSearchParams')}
              validateMinMax={this.validateMinMax}
              formData={Parameters}
              // checkDropDownDisabled={this.checkDropDownDisabled}
              checkConditions={this.checkConditions}
          />


        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventSearchContainer);