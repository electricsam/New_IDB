import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import {Details, Location} from "./VolcanoLocUpdateConstants";
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

class VolcanoLocUpdateContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  componentWillMount(){
    let { id } = this.props.match.params;
    action({type: "FETCH_VOLCANO_LOC_REQUESTED", payload: id});
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    if(val.volcanoLocs){
      let encoded = encodeQueryString(JSON.stringify(val.volcanoLocs[0]));
      action({type: "PATCH_VOLCANO_LOC_REQUESTED", payload: val.volcanoLocs[0]});
    }
  }

  toggleLocation = () => action({type: "TOGGLE_VOLCANO_LOC_UPDATE_LOCATION"});

  toggleDetails = () => action({type: "TOGGLE_VOLCANO_LOC_UPDATE_DETAILS"});

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

  render(){
    const { volcano } = this.props;
    if(volcano.get("fetchingVolcanoLocs") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Volcano Location" handleSubmit={this.handleSubmit.bind(this)}>

            <Toast
                actionMessage="...Updating"
                successMessage="Update Successful"
                failMessage="Update Failed"
                launch={volcano.asMutable().toJS().patchingVolcanoLoc}
                success={volcano.asMutable().toJS().patchedVolcanoLoc}
                fail={volcano.asMutable().toJS().patchVolcanoLocFail}
            />

            <FormSection
                title="Location"
                toggleSection={this.toggleLocation}
                showSection={volcano.get('showVolLocUpdateLocation')}
                validateMinMax={this.validateMinMax}
                validateDateTime={this.validateDateTime}
                formData={Location}
            />

            <FormSection
                title="Details"
                toggleSection={this.toggleDetails}
                showSection={volcano.get('showVolLocUpdateDetails')}
                validateMinMax={this.validateMinMax}
                formData={Details}
            />

          </MultiPartForm>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoLocUpdateContainer);

