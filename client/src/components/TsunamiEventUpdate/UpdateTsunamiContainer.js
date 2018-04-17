import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/immutable';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import Loading from "../loadbar/Loading"

import InsertTsunami from '../TsunamiEventInsert/InsertTsunami';
import UpdateTsunami from "./UpdateTsunami";

import Styles from "./UpdateTsunamiStyles.css"

const errorStyles = {
  color: 'red',
  display: 'block'
}

const action = obj => store.dispatch(obj);

class UpdateTsunamiContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    action({type: "FETCH_TS_EVENT_REQUESTED", payload: id});
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    let id = this.props.match.params.id;
    if(val.insert){
      let encoded = encodeQueryString(JSON.stringify(val.tsEvent));
      action({type: "PATCH_TS_EVENT_REQUESTED", payload:{ tsEvent: val.tsEvent, id: id}});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      // this.props.history.push(`/tsunamis?${encoded}`);
    }
    // else{
    //   action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
    //   // this.props.history.push(`/tsunamis`)
    // }
  }

  validateMinMax = (val, min, max) => {
    (val >= min && val <= max && !isNaN(val)) || !val ? true : false;
  }

  render(){
    const { tsunami } = this.props;
    if(tsunami.get("fetchingTsEvent") === true){
      return(
        <Loading/>
      )
    }else{
      return (
        <div className={Styles.container}>
          <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

            <UpdateTsunami validateMinMax={this.validateMinMax}/>

            <button type="submit" className={Styles.searchButton} >
              Submit
            </button> </Form>
        </div>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({tsunami: state.deep.tsunami, id: ownProps.match.id});

export default connect(mapStateToProps)(UpdateTsunamiContainer);

