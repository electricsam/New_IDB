import React from 'react';
import { connect } from 'react-redux';

import {Effects, Parameters} from './VolcanoEventSearchConstants';

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

  checkConditions = (condition) => this.props.volcano.get(condition);

  toggleParameters = () => action({type: "TOGGLE_VOLCANO_EVENT_SEARCH_PARAMETERS"});

  toggleEffects = () => action({type: "TOGGLE_VOLCANO_EVENT_SEARCH_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    let { volcano } = this.props;
    return (
        <MultiPartForm title="Search Volcano Events" handleSubmit={this.handleSubmit.bind(this)}>

          <FormSection
              title="Volcano Parameters"
              toggleSection={this.toggleParameters}
              showSection={volcano.get('showVolEventSearchParams')}
              validateMinMax={this.validateMinMax}
              formData={Parameters}
              checkConditions={this.checkConditions}
          />

          <FormSection
              title="Volcano Parameters"
              toggleSection={this.toggleEffects}
              showSection={volcano.get('showVolEventSearchEffects')}
              validateMinMax={this.validateMinMax}
              formData={Effects}
              checkConditions={this.checkConditions}
          />

        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventSearchContainer);