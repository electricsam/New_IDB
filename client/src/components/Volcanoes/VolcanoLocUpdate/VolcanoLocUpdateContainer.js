import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
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

  render(){
    const { volcano } = this.props;
    if(volcano.get("fetchingVolcanoLocs") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Volcano Location" handleSubmit={this.handleSubmit.bind(this)} titleColor="red">

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

