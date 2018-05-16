import React from 'react';
import { connect } from 'react-redux';

import { encodeQueryString, createApiQueryString } from '../../helperFunctions/helperFunctions'
import store from '../../store';
import MultiPartForm from "../components/FormPartials/MultiPartForm";

const action = obj => store.dispatch(obj);

class EarthquakeSearchContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formApi: null,
    }
  }

  handleSubmit(val){
    console.log("submit being handled");

  }

  render(){
    return (
        <MultiPartForm>

        </MultiPartForm>
    )
  }
}


const mapStateToProps = state => ({earthquake: state.deep.earthquake});

export default connect(mapStateToProps)(EarthquakeSearchContainer);