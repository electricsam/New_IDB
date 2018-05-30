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

class VolcanoLocContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    let { search } = this.props.location;
    if(search.length){
      console.log("SEARCH", search)
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      console.log("decoded: ", decoded);
      let queryString = createApiQueryString(decoded);
      console.log("querystring: ", queryString);
      action({type: "FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED", payload: queryString});
    }else{
      action({type: "FETCH_SPECIFIED_VOLCANO_LOCS_REQUESTED"});
    }
  }

  handleYesClick = () => {
    let id = this.props.volcano.get('deleteVolcanoLocId');
    action({type: "DELETE_VOLCANO_LOC_REQUESTED", payload: id});
  };

  handleNoClick = () => {
    action({type: "TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION"});
    action({type: "SET_DELETE_VOLCANO_LOC_ID", payload: null});
  };

  render(){
    const { volcano } = this.props;

    if( volcano.get('fetchedVolcanoLocs')){
      return (
          <div>
            {volcano.get('showDeleteVolcanoLocConfirmation')?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                />:
                <div style={hiddenStyle}></div>
            }
            <Table
                loading={volcano.get('fetchingVolcanoLocs')}
                data={volcano.asMutable().getIn(['volcanoLocs']).toJS()}
                columns={volcano.getIn(['headersAndAccessors']).toJS()}
                style={tableStyle}
                title="Volcano Loc Data"
            />
          </div>
      )
    }else{
      return <Loading/>
    }
  }

}


const mapStateToProps = state => ({ volcano: state.deep.volcano });

export default connect(mapStateToProps)(VolcanoLocContainer);