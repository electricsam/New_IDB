import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

import { encodeQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';

const action = obj => store.dispatch(obj)

class TsunamiSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
    }
  }


  handleSubmit(val){
    //First determine if key containing object to be turned into querystring for API exists
    //if it does exist then send to fetchSpecifiedTsEvents
    //if it does NOT exist then send to fetchAllTsEvents

    console.log('VAL: ', val.user);

    let encoded = encodeQueryString(JSON.stringify(val.user));

    this.props.history.push(`/userdisplay?${encoded}`);
  }

  render(){
    return (
      <Form model="deep" onSubmit={(value)=> this.handleSubmit(value)}>
        <label htmlFor=".user.name">First Name</label>
        <Control.text model=".user.name" id=".user.name" placeholder="First Name"/>


        <label htmlFor=".tsunami.query.year"></label>

        <button type="submit">Submit</button>
      </Form>
    )
  }
}


const mapStateToProps = state => ({tsunami: state.tsunami});


export default connect(mapStateToProps)(TsunamiSearchContainer);

