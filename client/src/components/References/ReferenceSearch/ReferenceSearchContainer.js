import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";

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
      let encoded = encodeQueryString(JSON.stringify(val.search));
      let queryString = createApiQueryString(val.search);
      action({type: 'FETCH_SPECIFIED_REFERENCES_REQUESTED', payload: queryString});
      this.props.history.push(`/reference/data?${encoded}`);
    }else{
      action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED"});
      this.props.history.push(`/reference/data`)
    }
  }

  toggleParameters = () => action({type: "TOGGLE_SEARCH_PARAMETERS"});

  checkAuthor = () => this.props.reference.get('author');

  checkCitation = () => this.props.reference.get('citation');

  checkComments = () => this.props.reference.get('comments');

  checkConditions = (condition) => this.props.reference.get(condition);

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { reference } = this.props;
    return (
        <MultiPartForm title="Search References" handleSubmit={this.handleSubmit.bind(this)}>

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
