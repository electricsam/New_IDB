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

class EarthquakeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    // let { search } = this.props.location;
    // if(search.length){
    //   search = search.split('?')[1];
    //   let decoded = JSON.parse(decodeQueryString(search));
    //   let queryString = createApiQueryString(decoded);
    //   action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED", payload: queryString});
    // }else{
    //   action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED"});
    // }
  }

  handleYesClick = () => {
    // let id = this.props.earthquake.get('deleteEarthquakeId');
    // console.log("id inside the yes click: ", id);
    // action({type: "DELETE_EARTHQUAKE_REQUESTED", payload: id});
  };

  handleNoClick = () => {
    // action({type: "TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION"});
    // action({type: "SET_DELETE_EARTHQUAKE_ID", payload: null});
  };

  render(){
    const { volcano } = this.props;

    if( earthquake.get('fetchedEarthquake')){
      return (
          <div>
            {volcano.get('showDeleteEarthquakeConfirmation')?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                />:
                <div style={hiddenStyle}></div>
            }
            <Table
                loading={volcano.get('fetchingEarthquake')}
                data={volcano.asMutable().getIn(['earthquakes']).toJS()}
                columns={volcano.getIn(['headersAndAccessors']).toJS()}
                style={tableStyle}
                title="Earthquake Data"
            />
          </div>
      )
    }else{
      return <Loading/>
    }
  }

}


const mapStateToProps = state => ({ volcano: state.deep.volcano });

export default connect(mapStateToProps)(EarthquakeContainer);