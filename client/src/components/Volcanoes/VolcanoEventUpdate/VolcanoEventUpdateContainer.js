import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import {Dates, Measurements, Effects} from "./VolcanoEventUpdateConstants";
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

class VolcanoEventUpdateContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  componentWillMount(){
    let { hazEventId, volId } = this.props.match.params;
    action({type: "FETCH_VOLCANO_EVENT_REQUESTED", payload: hazEventId});
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    let { volId } = this.props.match.params;
    if(val.volcanoEvents){
      let encoded = encodeQueryString(JSON.stringify(val.volcanoEvents[0]));
      action({type: "PATCH_VOLCANO_EVENT_REQUESTED", payload:{ volcanoEvent: val.volcanoEvents[0], volId: volId}});
    }
  }

  toggleDate = () => action({type: "TOGGLE_VOLCANO_EVENT_UPDATE_DATE"});

  toggleMeasure = () => action({type: "TOGGLE_VOLCANO_EVENT_UPDATE_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_VOLCANO_EVENT_UPDATE_EFFECTS"});//

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

  validLength = (val, max) => {
    if(val === null){
      return true
    }else{
      return val.length > max? false: true
    }
  };

  render(){
    const { volcano } = this.props;
    if(volcano.get("fetchingVolcanoEvents") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Volcano Event" handleSubmit={this.handleSubmit.bind(this)} titleColor="red">

            <Toast
              actionMessage="...Updating"
              successMessage="Update Successful"
              failMessage="Update Failed"
              launch={volcano.asMutable().toJS().patchingVolcanoEvent}
              success={volcano.asMutable().toJS().patchedVolcanoEvent}
              fail={volcano.asMutable().toJS().patchVolcanoEventFail}
            />

            <FormSection
                title="Dates"
                toggleSection={this.toggleDate}
                showSection={volcano.get('showVolEventUpdateDate')}
                validateMinMax={this.validateMinMax}
                validateDateTime={this.validateDateTime}
                formData={Dates}
            />

            <FormSection
                title="Measurements"
                toggleSection={this.toggleMeasure}
                showSection={volcano.get('showVolEventUpdateMeasure')}
                validateMinMax={this.validateMinMax}
                formData={Measurements}
            />

            <FormSection
                title="Effects"
                toggleSection={this.toggleEffects}
                showSection={volcano.get('showVolEventUpdateEffects')}
                validateMinMax={this.validateMinMax}
                formData={Effects}
            />

          </MultiPartForm>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventUpdateContainer);

