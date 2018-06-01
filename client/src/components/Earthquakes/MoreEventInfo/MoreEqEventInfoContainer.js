import React from 'react';
import {connect} from "react-redux";

import store from '../../../store';
import SmallTable from "../../SmallTable/SmallTable";
import Loading from '../../loadbar/Loading';
import MoreInfoComments from "../../FormPartials/MoreInfoComments";

const action = obj => store.dispatch(obj);

class MoreVolcanoEventInfoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let { eqId } = this.props.match.params;
    let queryString = `earthquakeid=${eqId}`
    action({type: "FETCH_EARTHQUAKE_REQUESTED", payload: eqId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});
  }

  render(){
    const { earthquake, reference } = this.props

    if(earthquake.get('fetchedEarthquake') && reference.get('fetchedReference')){
      return (
          <div>

            <SmallTable data={earthquake.asMutable().getIn(['earthquakes']).toJS()}
                        columns={earthquake.getIn(['headersAndAccessors']).toJS()}
                        title="Significant Earthquake Information"
                        loading={earthquake.get('fetchingEarthquake')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={earthquake.asMutable().getIn(['earthquakes']).toJS()[0].comments}/>

            <SmallTable data={reference.asMutable().getIn(['references']).toJS()}
                        columns={reference.getIn(['headersAndAccessors']).toJS()}
                        title="Related References"
                        defaultPageSize={reference.asMutable().getIn(['references']).toJS().length}
                        loading={reference.get('fetchingReference')}/>


          </div>
      )
    }
    return <Loading/>
  }
}


const mapStateToProps = state => ({earthquake: state.deep.earthquake, reference: state.deep.reference});

export default connect(mapStateToProps)(MoreVolcanoEventInfoContainer);