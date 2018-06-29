import React from 'react';
import {connect} from "react-redux";

import store from '../../../store';
import SmallTable from "../../SmallTable/SmallTable";
import Loading from '../../loadbar/Loading';

import { createApiQueryString } from '../../../helperFunctions/helperFunctions'
import MoreInfoComments from "../../FormPartials/MoreInfoComments";

const action = obj => store.dispatch(obj);

class MoreEventInfoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let { eventId } = this.props.match.params;
    let queryString = `tsunamiid=${eventId}`
    action({type: "FETCH_TS_EVENT_REQUESTED", payload: eventId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});

  }

  render(){
    const { tsunami, reference } = this.props

    if(tsunami.get('fetchedTsEvent') && reference.get('fetchedReference')){

      return (
          <div>

            <SmallTable data={tsunami.asMutable().getIn(['tsEvent']).toJS()}
                        columns={tsunami.getIn(['headersAndAccessors']).toJS()}
                        title="Tsunami Event Info"
                        titleColor="blue"
                        loading={tsunami.get('fetchingTsEvent')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={tsunami.asMutable().getIn(['tsEvent']).toJS()[0].comments}/>

            <SmallTable data={reference.asMutable().getIn(['references']).toJS()}
                        columns={reference.getIn(['headersAndAccessors']).toJS()}
                        title="Related References"
                        titleColor="black"
                        defaultPageSize={reference.asMutable().getIn(['references']).toJS().length}
                        loading={reference.get('fetchingReference')}/>
          </div>
      )
    }
    return <Loading/>
  }



}


const mapStateToProps = state => ({tsunami: state.deep.tsunami, reference: state.deep.reference});

export default connect(mapStateToProps)(MoreEventInfoContainer);