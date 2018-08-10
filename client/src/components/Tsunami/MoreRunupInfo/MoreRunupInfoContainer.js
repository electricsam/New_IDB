import React from 'react';
import {connect} from "react-redux";

import store from '../../../store';
import SmallTable from "../../SmallTable/SmallTable";
import Loading from '../../loadbar/Loading';
import MoreInfoComments from "../../FormPartials/MoreInfoComments/MoreInfoComments";
import {DefinitionModal} from "../../DefinitionModal/DefinitionModal";

const action = obj => store.dispatch(obj);

class MoreRunupInfoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let { runupId, eventId } = this.props.match.params;
    console.log("******************************* ", eventId );
    console.log("******************************",this.props.match.params);
    let queryString = `runupid=${runupId}`;
    action({type: "FETCH_TS_EVENT_MORE_INFO_RUNUP_REQUESTED", payload: eventId});
    action({type: "FETCH_TS_RUNUP_MORE_INFO_REQUESTED", payload: runupId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});
  }

  render(){
    const { tsunami, reference } = this.props;
    if(tsunami.get('fetchedRunup') && reference.get('fetchedReference')){
      return (
          <div>

            <SmallTable data={tsunami.asMutable().getIn(['tsEvent']).toJS()}
                        columns={tsunami.getIn(['tsHeadersAndAccessors']).toJS()}
                        title="Tsunami Event Info"
                        titleColor="blue"
                        loading={tsunami.get('fetchingTsEvent')}
                        defaultPageSize={1}
            />

            <SmallTable data={tsunami.asMutable().getIn(['runupData']).toJS()}
                        columns={tsunami.getIn(['headersAndAccessors']).toJS()}
                        title="Tsunami Runup Info"
                        titleColor="blue"
                        loading={tsunami.get('fetchingRunup')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={tsunami.asMutable().getIn(['runupData']).toJS()[0].comments}/>

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

export default connect(mapStateToProps)(MoreRunupInfoContainer);