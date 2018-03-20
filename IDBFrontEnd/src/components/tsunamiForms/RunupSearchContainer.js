import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/immutable';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import { countries, states, canadianProvince, validationConstants, regions } from './constants'
import MinMax from '../searchFormPartials/MinMax';
import Styles from './TsunamiSearchContainerStyle.css';
import DropDown from "../searchFormPartials/DropDown.jsx";
import RunupSourceInfo from "./RunupSourceInfo";
import RunupLocationInfo from "./RunupLocationInfo";
import RunupParamsEffects from "./RunupParamsEffects";



const errorStyles = {
  color: 'red',
  display: 'block'
}

//TODO: Remove const from action

const action = obj => store.dispatch(obj);

class RunupSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount = () => {
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
    // - specifically for radio button toggle to location search
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpsearch){
      let encoded = encodeQueryString(JSON.stringify(val.rnpsearch));
      let queryString = createApiQueryString(val.rnpsearch);
      // action({type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      // this.props.history.push(`/tsunamis?${encoded}`);
    }else{
      action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      // this.props.history.push(`/tsunamis`)
    }
  }

  toggleSourceForm = () => action({type: "TOGGLE_SOURCE_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkRunupLocType = () => this.props.tsunami.get('runupLocType')

  render(){
    const { tsunami } = this.props;
    return (
      <div className={Styles.container}>
        <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

          <RunupSourceInfo validateMinMax={this.validateMinMax}/>

          <RunupLocationInfo validateMinMax={this.validateMinMax} checkLocType={this.checkRunupLocType}/>

          <RunupParamsEffects validateMinMax={this.validateMinMax}/>

          <button type="submit" >
            Submit
          </button> </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(RunupSearchContainer);

