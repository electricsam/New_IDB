import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/lib/immutable';

import { encodeQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import DateAndLocation from "./DateAndLocation.jsx"
import Measurements from "./Measurements.jsx";
import Effects from "./Effects.jsx";
import Styles from "./RunupInsertStyle.css";

const action = obj => store.dispatch(obj);

class RunupInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }


  componentDidMount(){
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpinsert){
      let encoded = encodeQueryString(JSON.stringify(val.rnpinsert));
      action({type: "POST_TS_RUNUP_REQUESTED", payload: {runup: val.rnpinsert, id: this.props.match.params.eventId}});
    }
  }

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    return (
      <div className={Styles.container}>
        <h1 className={Styles.title}>Insert Runup</h1>
        <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

          <DateAndLocation validateMinMax={this.validateMinMax}/>
          <Measurements validateMinMax={this.validateMinMax}/>
          <Effects validateMinMax={this.validateMinMax}/>

          <button type="submit" className={Styles.searchButton}>
            Submit
          </button> </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(RunupInsertContainer);

