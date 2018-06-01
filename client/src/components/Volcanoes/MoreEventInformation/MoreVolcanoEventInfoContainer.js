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
    let { volcanoId } = this.props.match.params;
    console.log("this is my volcano id: ", volcanoId);
    let queryString = `volcanoid=${volcanoId }`
    action({type: "FETCH_VOLCANO_EVENT_REQUESTED", payload: volcanoId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});
  }

  render(){
    const { volcano, reference } = this.props

    console.log("this is volcano ", volcano)

    if(volcano.get('fetchedVolcanoEvents') && reference.get('fetchedReference')){
      console.log("this is my volcano data: ", volcano.asMutable().getIn(['volcanoEvents']).toJS());
      return (
          <div>

            <SmallTable data={volcano.asMutable().getIn(['volcanoEvents']).toJS()}
                        columns={volcano.getIn(['headersAndAccessors']).toJS()}
                        title="Significant Volcano Event Information"
                        loading={volcano.get('fetchingVolcanoEvents')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={volcano.asMutable().getIn(['volcanoEvents']).toJS()[0].comments}/>

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


const mapStateToProps = state => ({volcano: state.deep.volcano, reference: state.deep.reference});

export default connect(mapStateToProps)(MoreVolcanoEventInfoContainer);