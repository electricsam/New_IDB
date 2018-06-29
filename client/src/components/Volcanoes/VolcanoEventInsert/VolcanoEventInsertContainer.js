import React from "react";
import { connect } from 'react-redux';

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';

import { Dates, Effects, Measurements } from './VolcanoEventInsertConstants';
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj)

class VolcanoEventInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log("this.props.location.state: ", this.props)
  }

  handleSubmit(val){
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

  toggleDate = () => action({type: "TOGGLE_VOLCANO_EVENT_INSERT_DATE_AND_LOCATION"});

  toggleMeasure = () => action({type: "TOGGLE_VOLCANO_EVENT_INSERT_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_VOLCANO_EVENT_INSERT_EFFECTS"});//

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  validateDateTime = (dateTime) => {
    if (!dateTime) return true
    var re = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/
    if(!re.test(dateTime)) return false;

    let date = dateTime.substring(0, 10);
    let dateArr = date.split('-').map(e => parseInt(e));

    let time = dateTime.substring(11, 19)
    let timeArr = time.split(':').map(e => parseInt(e));

    if(dateArr[0] > (new Date).getFullYear() || dateArr[0] < 0) return false;
    if(dateArr[1] > 12 || dateArr[1] < 1) return false;
    if(dateArr[2] < 1 || dateArr[2] > 31) return false;

    if(timeArr[0] < 0 || timeArr[0] > 23) return false;
    if(timeArr[1] < 0 || timeArr[1] > 59) return false;
    if(timeArr[2] < 0 || timeArr[2] > 59) return false;

    return true;
  };

  checkDropDownDisabled = (val) => this.props.volcano.asMutable().toJS().insert.country === val? false: true;

  render() {
    const { volcano } = this.props;
    console.log("volcano ", volcano);
    return (
        <MultiPartForm title="Insert Volcano" handleSubmit={this.handleSubmit.bind(this)} titleColor="red">

          <Toast
            actionMessage="...Posting"
            successMessage="Post Successful"
            failMessage="Post Failed"
            launch={volcano.asMutable().toJS().postingVolcanoEvent}
            success={volcano.asMutable().toJS().postedVolcanoEvent}
            fail={volcano.asMutable().toJS().postVolcanoEventFail}
          />

          <FormSection
              title="Dates"
              toggleSection={this.toggleDate}
              showSection={volcano.get('showVolEventInsertDateLoc')}
              validateMinMax={this.validateMinMax}
              validateDateTime={this.validateDateTime}
              formData={Dates}
              checkDropDownDisabled={this.checkDropDownDisabled}
          />

          <FormSection
            title="Measurements"
            toggleSection={this.toggleMeasure}
            showSection={volcano.get('showVolEventInsertMeasure')}
            validateMinMax={this.validateMinMax}
            formData={Measurements}
          />

          <FormSection
            title="Effects"
            toggleSection={this.toggleEffects}
            showSection={volcano.get('showVolEventInsertEffects')}
            validateMinMax={this.validateMinMax}
            formData={Effects}
          />


        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventInsertContainer);





