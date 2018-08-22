import React from 'react';
import {connect} from "react-redux";

import store from '../../../store';
import SmallTable from "../../SmallTable/SmallTable";
import Loading from '../../loadbar/Loading';
import MoreInfoComments from "../../FormPartials/MoreInfoComments/MoreInfoComments";

const action = obj => store.dispatch(obj);

/**
 * Container component for the control and display of More Info for Volcano Events
 *
 * @class
 */
class MoreEarthquakeInfoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  /**
   * Uses React lifecycle method to dispatch actions to fetch earthquake of a given id and related reference to that
   * earthquake of given id
   */
  componentDidMount(){
    let { eqId } = this.props.match.params;
    let queryString = `earthquakeid=${eqId}`;
    action({type: "FETCH_MORE_INFO_EARTHQUAKE_REQUESTED", payload: eqId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});
  }

  render(){
    const { earthquake, reference, earthquakeUi } = this.props;

    if(earthquake.get('fetchedEarthquake') && reference.get('fetchedReference')){
      return (
          <div>

            <SmallTable data={earthquake.asMutable().getIn(['earthquakes']).toJS()}
                        columns={earthquake.getIn(['headersAndAccessors']).toJS()}
                        title="Significant Earthquake Information"
                        titleColor="orange"
                        loading={earthquake.get('fetchingEarthquake')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={earthquake.asMutable().getIn(['earthquakes']).toJS()[0].comments}/>

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

const mapStateToProps = state => ({earthquake: state.deep.earthquake, reference: state.deep.reference});

export default connect(mapStateToProps)(MoreEarthquakeInfoContainer);