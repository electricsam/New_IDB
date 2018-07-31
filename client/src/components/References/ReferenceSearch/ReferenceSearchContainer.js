import React from 'react';
import { connect } from 'react-redux';

import {encodeQueryString, createApiQueryString, decodeQueryString} from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";

import { Parameters } from "./ReferenceSearchConstants";

const action = obj => store.dispatch(obj);

class ReferenceSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){}

  handleSubmit(val){
    val = val.reference.asMutable().toJS();
    if(val.search){
      if(this.props.location.search.length){
        let search = JSON.parse(decodeQueryString(this.props.location.search.split("?")[1]));
        Object.assign(val.search, search);
        let encoded = encodeQueryString(JSON.stringify(val.search));
        this.props.history.push(`/reference/relate?${encoded}`);
      }else{
        let encoded = encodeQueryString(JSON.stringify(val.search));
        this.props.history.push(`/reference/data?${encoded}`);
      }
    }else{
      this.props.history.push(`/reference/data`)
    }
  }

  toggleParameters = () => action({type: "TOGGLE_SEARCH_PARAMETERS"});

  checkConditions = (condition) => this.props.reference.get(condition);

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  handleClear = () => action({type: 'RESET_REFERENCE_FORM'});

  render(){
    const { reference } = this.props;
    return (
        <MultiPartForm title="Search References"
                       handleSubmit={this.handleSubmit.bind(this)}
                       handleClear={this.handleClear.bind(this)}
        >

          <FormSection
              title="Parameters"
              toggleSection={this.toggleParameters}
              showSection={reference.get('showSearchParams')}
              validateMinMax={this.validateMinMax}
              formData={Parameters}
              checkConditions={this.checkConditions}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({reference: state.deep.reference});

export default connect(mapStateToProps)(ReferenceSearchContainer);
