import React from 'react';
import {connect} from "react-redux";

import store from '../../../store';
import SmallTable from "../../SmallTable/SmallTable";
import Loading from '../../loadbar/Loading';
import MoreInfoComments from "../../FormPartials/MoreInfoComments/MoreInfoComments";
import {DefinitionModal} from "../../DefinitionModal/DefinitionModal";

const action = obj => store.dispatch(obj);

class MoreVolcanoEventInfoContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let { volcanoId } = this.props.match.params;
    let queryString = `volcanoid=${volcanoId }`
    action({type: "FETCH_MORE_INFO_VOLCANO_EVENT_REQUESTED", payload: volcanoId});
    action({type: "FETCH_SPECIFIED_REFERENCES_REQUESTED", payload: queryString});
  }

  closeModal = () => action({type: 'CLOSE_VOLCANO_EVENT_MODAL'});


  render(){
    const { volcano, reference, volcanoUi } = this.props;
    if(volcano.get('fetchedVolcanoEvents') && reference.get('fetchedReference')){
      console.log("this is my volcano data: ", volcano.asMutable().getIn(['volcanoEvents']).toJS());
      return (
          <div>
            <DefinitionModal
                isOpen={volcanoUi.get('eventModalIsOpen')}
                closeModal={this.closeModal}
                validValues={volcanoUi.get('eventModalValidValues')}
                title={volcanoUi.get('eventModalTitle')}
                data={volcanoUi.get('eventModalData')}
                secondaryData={volcanoUi.get('eventModalSecondaryData') ? volcanoUi.get('eventModalSecondaryData').asMutable().toJS() : null}
                component={volcanoUi.get('eventModalComponent') ? volcanoUi.get('eventModalComponent').asMutable().toJS() : null}
            />

            <SmallTable data={volcano.asMutable().getIn(['volcanoEvents']).toJS()}
                        columns={volcano.getIn(['headersAndAccessors']).toJS()}
                        title="Significant Volcano Event Information"
                        titleColor="red"
                        loading={volcano.get('fetchingVolcanoEvents')}
                        defaultPageSize={1}
            />

            <MoreInfoComments comments={volcano.asMutable().getIn(['volcanoEvents']).toJS()[0].comments}/>

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

const mapStateToProps = state => ({
  volcano: state.deep.volcano,
  reference: state.deep.reference,
  volcanoUi: state.volcanoUi
});

export default connect(mapStateToProps)(MoreVolcanoEventInfoContainer);