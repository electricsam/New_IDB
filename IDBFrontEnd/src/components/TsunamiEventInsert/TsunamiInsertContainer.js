import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/lib/immutable';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import Styles from "./InsertTsunamiStyles.css"

import InsertTsunami from './InsertTsunami';

const errorStyles = {
  color: 'red',
  display: 'block'
}

const action = obj => store.dispatch(obj);

class TsunamiInsertContainer extends React.Component{
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
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.insert));
      action({type: "POST_TS_EVENT_REQUESTED", payload: val.insert});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      // this.props.history.push(`/tsunamis?${encoded}`);

    }else{
      // action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      // this.props.history.push(`/tsunamis`)
    }
  }

  validateMinMax = (val, min, max) => {
    (val >= min && val <= max && !isNaN(val)) || !val ? true : false;
  }

  render(){
    const { tsunami } = this.props;
    return (
      <div className={Styles.container}>
        <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

          <InsertTsunami validateMinMax={this.validateMinMax} />


          <button type="submit" className={Styles.searchButton}>
            Submit
          </button> </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(TsunamiInsertContainer);

