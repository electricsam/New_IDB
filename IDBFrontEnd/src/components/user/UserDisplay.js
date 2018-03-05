import React from 'react';
import { connect } from 'react-redux';

import store from '../../store'

import { decodeQueryString } from '../../helperFunctions/helperFunctions';

const action = obj => store.dispatch(obj)

class UserDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }


  componentWillMount(){
      let { search } = this.props.location;
      console.log('Search: ', search)
      if(search.length){
        search = search.split('?')[1];
        let decoded = JSON.parse(decodeQueryString(search));
        console.log('DECODED: ', decoded);
        action({type: 'SET_NAME', payload: decoded.name})
        // action({type: 'rrf/change', model:'user.name', value: decoded.name})
      }

      console.log('full pathname ',this.props.history.location)
      console.log('full search param', this.props.history.location.search)
  }

  render(){
    const { user } = this.props;

    return (
      <div>{user.name}</div>
    )
  }
}


const mapStateToProps = (state) => ({user: state.deep.user})

export default connect(mapStateToProps)(UserDisplay)