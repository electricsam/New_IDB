import React from 'react';
import { connect } from 'react-redux';

import { Parameters } from "./VolcanoLocSearchConstants";

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store'
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";

const action = obj => store.dispatch(obj);

class VolcanoLocSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state= {}
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    if(val.locSearch){
      let encoded = encodeQueryString(JSON.stringify(val.locSearch));
      this.props.history.push( `/volcano/loc/data?${encoded}`);
    }else{
      this.props.history.push('/volcano/loc/data');
    }
  }

  checkConditions = (condition) => this.props.volcano.get(condition);

  toggleParameters = () => action({type: "TOGGLE_VOLCANO_LOC_SEARCH_PARAMETERS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  handleClear = () => action({type: 'RESET_VOLCANO_LOC_SEARCH'});

  render(){
    let { volcano } = this.props;
    return (
        <MultiPartForm title="Search Volcano Locations"
                       handleSubmit={this.handleSubmit.bind(this)}
                       handleClear={this.handleClear.bind(this)}
                       titleColor="red"
        >

          <FormSection
              title="Volcano Location Parameters"
              toggleSection={this.toggleParameters}
              showSection={volcano.get('showVolLocSearchParams')}
              validateMinMax={this.validateMinMax}
              formData={Parameters}
              checkConditions={this.checkConditions}
          />



        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoLocSearchContainer);