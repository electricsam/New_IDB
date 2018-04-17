import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form/lib/immutable';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import Loading from "../loadbar/Loading"
import Styles from "./UpdateRunupStyles.css"

import UpdateRunup from "./UpdateRunup"

const errorStyles = {
  color: 'red',
  display: 'block'
}

const action = obj => store.dispatch(obj);

class UpdateRunupContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
      showSourceForm: true
    }
  }

  componentDidMount(){
    let runupId = this.props.match.params.runupId;
    action ({type: "FETCH_TS_RUNUP_REQUESTED", payload: runupId });
    //TODO: clear form upon load of component - otherwise your old values will stick and you do not want that
  }

  handleSubmit(val){
    val = val.tsunami.asMutable().toJS();
    let runupId = this.props.match.params.runupId;
    let eventId = this.props.match.params.eventId;
    if(val.runupData){
      action({
        type: "UPDATE_TS_RUNUP_REQUESTED",
        payload:{
          runupData: val.runupData[0], runupId: runupId, eventId: eventId
        }
      });
    }
  }

  validateMinMax = (val, min, max) => (val >= min && val <= max && !isNaN(val)) || !val ? true : false;

  render(){
    const { tsunami } = this.props;
    if(tsunami.get("fetchingRunup") === true){
      return(
        <Loading/>
      )
    }else{
      return (
        <div className={Styles.container}>
          <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)} className={Styles.form}>

            <UpdateRunup validateMinMax={this.validateMinMax}/>

            <button type="submit" className={Styles.searchButton}>
              Submit
            </button> </Form>
        </div>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({tsunami: state.deep.tsunami, id: ownProps.match.id});

export default connect(mapStateToProps)(UpdateRunupContainer);

