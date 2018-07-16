import React from "react";
import { connect } from 'react-redux';

import store from "../../../store";
import MultiPartForm from "../../FormPartials/MultiPartForm/MultiPartForm";
import FormSection from "../../FormPartials/FormSection/FormSection";
import { encodeQueryString } from '../../../helperFunctions/helperFunctions';
import { Location, Details } from './VolcanoLocInsertConstants';
import {Toast} from "../../Toast/Toast";

const action = obj => store.dispatch(obj);

class VolcanoLocInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){}

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    if(val.locInsert){
      let encoded = encodeQueryString(JSON.stringify(val.locInsert));
      action({type: "POST_VOLCANO_LOC_REQUESTED", payload: val.locInsert});
    }
  }

  toggleLocation = () => action({type: "TOGGLE_VOLCANO_LOC_INSERT_LOCATION"});

  toggleDetails = () => action({type: "TOGGLE_VOLCANO_LOC_INSERT_DETIALS"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkDropDownDisabled = (val) => this.props.volcano.asMutable().toJS().insert.country === val? false: true;

  render() {
    const { volcano } = this.props;
    return (
        <MultiPartForm title="Insert Volcano" handleSubmit={this.handleSubmit.bind(this)} titleColor="red">

          <Toast
            actionMessage="...Posting"
            successMessage="Post Successful"
            failMessage="Post Failed"
            launch={volcano.asMutable().toJS().postingVolcanoLoc}
            success={volcano.asMutable().toJS().postedVolcanoLoc}
            fail={volcano.asMutable().toJS().postVolcanoLocFail}
          />

          <FormSection
              title="Location"
              toggleSection={this.toggleLocation}
              showSection={volcano.get('showVolLocInsertLocation')}
              validateMinMax={this.validateMinMax}
              formData={Location}
          />

          <FormSection
              title="Details"
              toggleSection={this.toggleDetails}
              showSection={volcano.get('showVolLocInsertDetails')}
              validateMinMax={this.validateMinMax}
              formData={Details}
          />

        </MultiPartForm>
    )
  }
}

const mapStateToProps = state => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoLocInsertContainer);
