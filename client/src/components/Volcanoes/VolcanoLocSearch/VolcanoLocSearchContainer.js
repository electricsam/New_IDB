import React from 'react';
import { connect } from 'react-redux';

import { Parameters } from "./VolcanoLocSearchConstants";

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store'
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";

const action = obj => store.dispatch(obj);

class VolcanoLocSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state= {}
  }


  componentDidMount(){
    console.log("this component mounted")
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    if(val.locSearch){
      console.log("you are inside the locSearch")
      console.log(val.locSearch)
      let encoded = encodeQueryString(JSON.stringify(val.locSearch));
      let queryString = createApiQueryString(val.locSearch);
      action({type: "FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED", payload: queryString});
      this.props.history.push( `/volcano/loc/data?${encoded}`);
    }else{
      console.log("alskdjfldsakjflaksjlskjlksjsjj")
      action({type: "FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED"});
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