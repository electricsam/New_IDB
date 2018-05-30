import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions'
import store from '../../../store';
import Loading from "../../loadbar/Loading"
import MultiPartForm from "../../FormPartials/MultiPartForm";
import FormSection from "../../FormPartials/FormSection";
import { DateAndLocation, Measurement, TotalEffects, Effects  } from "./TsunamiEventUpdateConstants";

const action = obj => store.dispatch(obj);

class VolcanoEventUpdateContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  componentWillMount(){
    let id = this.props.match.params.id;
    action({type: "FETCH_VOLCANO_EVENT_REQUESTED", payload: id});
  }

  handleSubmit(val){
    val = val.volcano.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.volcanoes){
      let encoded = encodeQueryString(JSON.stringify(val.tsEvent));
      action({type: "PATCH_VOLCANO_EVENT_REQUESTED", payload:{ tsEvent: val.tsEvent, id: id}});
    }
  }


  toggleDateAndLocation = () => action({type: "TOGGLE_TSUNAMI_UPDATE_DATE_LOC"});

  toggleMeasurements = () => action({type: "TOGGLE_TSUNAMI_UPDATE_MEASURE"});

  toggleEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_TOTAL_EFFECTS"});

  toggleTotalEffects = () => action({type: "TOGGLE_TSUNAMI_UPDATE_EFFECTS_TOTAL"});

  checkDropDownDisabled = (val) => this.props.tsunami.asMutable().toJS().tsEvents[0].country === val? false: true;

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    if(tsunami.get("fetchingTsEvent") === true){
      return(<Loading/>)
    }else{
      return (
          <MultiPartForm title="Update Volcano Event" handleSubmit={this.handleSubmit.bind(this)}>
            <FormSection
                title="Date and Location"
                toggleSection={this.toggleDateAndLocation}
                showSection={tsunami.get('showTsunamiUpdateDateLoc')}
                validateMinMax={this.validateMinMax}
                formData={DateAndLocation}
                checkDropDownDisabled={this.checkDropDownDisabled}
            />

          </MultiPartForm>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({volcano: state.deep.volcano});

export default connect(mapStateToProps)(VolcanoEventUpdateContainer);

