import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/immutable';

import { encodeQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import RunupInsert from "./RunupInsert"


const action = obj => store.dispatch(obj);

class RunupInsertContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount = () => {
   console.log("LOCATION", this.props.location.search)

    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    if(val.rnpinsert){
      let encoded = encodeQueryString(JSON.stringify(val.rnpinsert));
      console.log(val.rnpinsert)
      action({type: "POST_TS_RUNUP_REQUESTED", payload: val.rnpinsert});
      //TODO: wrap the call to api and the push to a new frontend endpoint into a saga and call it here
      // this.props.history.push(`/tsunamis?${encoded}`);
    }else{
      // action({type: "FETCH_ALL_TS_EVENTS_REQUESTED"});
      // this.props.history.push(`/tsunamis`)
    }
  }

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    return (
      <div >
        <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)}>

          <RunupInsert validateMinMax={this.validateMinMax}/>

          <button type="submit" >
            Submit
          </button> </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({tsunami: state.deep.tsunami});

export default connect(mapStateToProps)(RunupInsertContainer);

