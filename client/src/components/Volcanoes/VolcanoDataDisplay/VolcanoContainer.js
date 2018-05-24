import React from 'react';
import {connect} from "react-redux";
import DialogBox from "../../FormPartials/DialogBox";
import Table from "../../Table/Table"
import Loading from "../../loadbar/Loading";
import store from "../../../store";

import {createApiQueryString, decodeQueryString} from "../../../helperFunctions/helperFunctions";

const tableStyle = {
  textAlign: "center"
};

const hiddenStyle = {
  display: "none"
};

const action = obj => store.dispatch(obj);

class VolcanoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    let { search } = this.props.location;
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded);
      action({type: "FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED", payload: queryString});
    }else{
      action({type: "FETCH_SPECIFIED_VOLCANO_EVENTS_REQUESTED"});
    }
  }

  handleYesClick = () => {
    let id = this.props.earthquake.get('deleteEarthquakeId');
    console.log("id inside the yes click: ", id);
    action({type: "DELETE_VOLCANO_EVENT_REQUESTED", payload: id});
  };

  handleNoClick = () => {
    action({type: "TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION"});
    action({type: "SET_DELETE_VOLCANO_EVENT_ID", payload: null});
  };

  render(){
    const { volcano } = this.props;

    if( volcano.get('fetchedVolcanoEvents')){
      return (
          <div>
            {volcano.get('showDeleteVolcanoEventConfirmation')?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                />:
                <div style={hiddenStyle}></div>
            }
            <Table
                loading={volcano.get('fetchingVolcanoes')}
                data={volcano.asMutable().getIn(['volcanoEvents']).toJS()}
                columns={volcano.getIn(['headersAndAccessors']).toJS()}
                style={tableStyle}
                title="Volcano Data"
            />
          </div>
      )
    }else{
      return <Loading/>
    }
  }

}


const mapStateToProps = state => ({ volcano: state.deep.volcano });

export default connect(mapStateToProps)(VolcanoContainer);