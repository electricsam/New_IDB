import React from "react";
import { connect } from 'react-redux';

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';

import { DateAndLocation } from './VolcanoEventInsertConstants';

const action = obj => store.dispatch(obj)

class VolcanoEventInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log("the component mounted")
  }

  handleSubmit(val){
    //TODO: NEED TO grab the id of the vol_loc
    val = val.volcano.asMutable().toJS();
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_VOLCANO_EVENT_REQUESTED", payload: {
        volcanoEvent: val.insert, id: this.props.match.params.volLocId}
      });
    }else{
      //  nothing
    }
  }

  toggleDateAndLocation = () => action({type: "TOGGLE_VOLCANO_EVENT_INSERT_DATE_AND_LOCATION"});
  //
  // toggleMeasure = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_MEASURE"});
  //
  // toggleEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_EFFECTS"});
  //
  // toggleTotalEffects = () => action({type: "TOGGLE_EARTHQUAKE_INSERT_TOTAL_EFFECTS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.volcano.asMutable().toJS().insert.country === val? false: true;

  render() {
    const { volcano } = this.props;
    console.log("volcano ", volcano);
    return (
        <MultiPartForm title="Insert Volcano" handleSubmit={this.handleSubmit.bind(this)}>

          <FormSection
              title="Date and Location"
              toggleSection={this.toggleDateAndLocation}
              showSection={volcano.get('showVolEventInsertDateLoc')}
              validateMinMax={this.validateMinMax}
              formData={DateAndLocation}
              checkDropDownDisabled={this.checkDropDownDisabled}
          />


        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventInsertContainer);





