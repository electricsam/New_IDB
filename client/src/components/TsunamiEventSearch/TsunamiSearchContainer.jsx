import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/immutable';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import { countries, states, canadianProvince, validationConstants, regions } from '../tsunamiForms/constants'
import MinMax from '../searchFormPartials/MinMax';
import Styles from './TsunamiSearchContainerStyle.css';
import DropDown from "../searchFormPartials/DropDown.jsx";

import TsunamiSourceParameters from './TsunamiSourceParameters';
import TsunamiRunupByPlace from './TsunamiRunupByPlace';
import TotalTsunamiEffects from "./TotalTsunamiEffects";
import TotalTsunamiandSourceEffects from "./TotalTsunamiandSourceEffects";

const errorStyles = {
  color: 'red',
  display: 'block'
}

const action = obj => store.dispatch(obj);

class TsunamiSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount() {
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
    // - specifically for radio button toggle to location search
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.search){
      let encoded = encodeQueryString(JSON.stringify(val.search));
      let queryString = createApiQueryString(val.search);
      action({type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      this.props.history.push(`/tsunami/event/data?${encoded}`);
    }else{
      action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      this.props.history.push(`/tsunami/event/data`)
    }
  }

  toggleSourceForm = () => action({type: "TOGGLE_SOURCE_FORM"});

  toggleRunupPlaceForm = () => action({type: "TOGGLE_RUNUPPLACE_FORM"});

  toggleTsunamiEffectsForm = () => action({type: "TOGGLE_TSUNAMIEFFECTS_FORM"});

  toggleTotalTsunamiSourceForm = () => action({type: "TOGGLE_TOTALTSUNAMISOURCE_FORM"});

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  checkLocType = () => this.props.tsunami.get('locType');

  checkRunupLocType = () => this.props.tsunami.get('runupLocType')

  render(){
    const { tsunami } = this.props;
    return (
      <div className={Styles.container}>
        <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

          <TsunamiSourceParameters
            validateMinMax={this.validateMinMax}
            checkLocType={this.checkLocType}
            showSourceForm = {tsunami.get('showSourceForm')}
            toggleSourceForm = {this.toggleSourceForm}
            country={tsunami.asMutable().toJS().search.country}
          />

          <TsunamiRunupByPlace
            validateMinMax={this.validateMinMax}
            checkRunupLocType={this.checkRunupLocType}
            showRunupPlaceForm={tsunami.get('showRunupPlaceForm')}
            toggleRunupPlaceForm={this.toggleRunupPlaceForm}
            country={tsunami.asMutable().toJS().search.runupcountry}
          />

          <TotalTsunamiEffects
            validateMinMax={this.validateMinMax}
            showTsunamiEffectsForm={tsunami.get('showTsunamiEffectsForm')}
            toggleTsunamiEffectsForm={this.toggleTsunamiEffectsForm}
          />

          <TotalTsunamiandSourceEffects
            validateMinMax={this.validateMinMax}
            showTotalTsunamiSourceForm={tsunami.get('showTotalTsunamiSourceForm')}
            toggleTotalTsunamiSourceForm={this.toggleTotalTsunamiSourceForm}
          />

        <button type="submit" className={Styles.searchButton}>
          Submit
        </button> </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(TsunamiSearchContainer);

