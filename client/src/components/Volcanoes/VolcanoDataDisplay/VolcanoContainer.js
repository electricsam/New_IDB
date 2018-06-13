import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';

import DialogBox from "../../FormPartials/DialogBox";
import Table from "../../Table/Table"
import Loading from "../../loadbar/Loading";
import store from "../../../store";

import {createApiQueryString, decodeQueryString, encodeQueryString} from "../../../helperFunctions/helperFunctions";
import TickboxTable from "../../CheckboxTable/TickboxTable";

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
    action({type: "SET_VOLCANO_EVENT_TABLE_SELECTION_ID", payload: null});
    action({type: "SET_VOLCANO_EVENT_TABLE_SELECITON_LOCID", payload: null});
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
    let id = this.props.volcano.get('deleteVolcanoEventId');
    console.log("id inside the yes click: ", id);
    action({type: "DELETE_VOLCANO_EVENT_REQUESTED", payload: id});
  };

  handleNoClick = () => {
    action({type: "TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION"});
    action({type: "SET_DELETE_VOLCANO_EVENT_ID", payload: null});
  };

  toggleSelection = (key, shift, row) => {
    let selection = this.props.volcano.get('volcanoEventTableSelectionId');
    if(selection === key){
      action({type: "SET_VOLCANO_EVENT_TABLE_SELECTION_ID", payload: null});
      action({type: "SET_VOLCANO_EVENT_TABLE_SELECITON_LOCID", payload: null});
    }else{
      action({type: "SET_VOLCANO_EVENT_TABLE_SELECTION_ID", payload: key});
      action({type: "SET_VOLCANO_EVENT_TABLE_SELECITON_LOCID", payload: row.volId});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_VOLCANO_EVENT_TABLE_SELECTION_ID", payload: null});
    action({type: "SET_VOLCANO_EVENT_TABLE_SELECITON_LOCID", payload: null});
  };

  isSelected = key => this.props.volcano.get('volcanoEventTableSelectionId') === key;

  logSelection = () => {console.log('selection: ', this.props.volcano.get('volcanoEventTableSelectionId'))};

  handleMoreInfoClick = () => {
    let id = this.props.volcano.get('volcanoEventTableSelectionId');
    if(id){
      store.dispatch(push(`/volcano/event/moreinfo/${id}`));
    }
  };

  handleRelatedEarthquakeClick = () => {
    let id = this.props.volcano.get('volcanoEventTableSelectionId');
    if(id){
      let basePath = "/earthquake/event/data?";
      let query = {volcanoid: id + ""};
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`));
    }
  };

  handleRelatedTsunamiClick = () => {
    let id = this.props.volcano.get('volcanoEventTableSelectionId');
    if(id){
      let basePath = "/tsunami/event/data?"
      let query = {volcanoid: id+ ""}
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`))
    }
  };

  handleEditClick = () => {
    let id = this.props.volcano.get('volcanoEventTableSelectionId');
    let locId = this.props.volcano.get('volcanoEventTableSelectionLocId');
    if(id && locId){
      store.dispatch(push(`/volcano/event/update/${id}/${locId}`));
    }
  };

  handleDeleteClick = () => {
    let id = this.props.volcano.get('volcanoEventTableSelectionId');
    if(id){
      action({type: 'SET_DELETE_VOLCANO_EVENT_ID', payload: id});
      action({type: 'TOGGLE_DELETE_VOLCANO_EVENT_CONFIRMATION'});
    }
  };

  handleRelateToExistingEarthquakeClick = () => {this.handleRelateClick('/earthquake/eventsearch?')};

  handleRelateToExistingTsunamiClick = () => {this.handleRelateClick('/tsunami/eventsearch?')};

  handleRelateToExistingReferenceClick = () => {this.handleRelateClick('/reference/search?')};

  handleRelateClick = url => {
    let selected = this.props.volcano.get('volcanoEventTableSelectionId');
    if(selected){
      let relateObj = {relate: true, relateTo: "volcano", relateId: selected}
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`${url}${encoded}`));
    }
  };

  render(){
    const { volcano } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected, logSelection } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      logSelection,
      selectType: "checkbox",
      keyField: "hazEventId",
      buttons: [
        {title: "More Info", handleClick: this.handleMoreInfoClick},
        {title: "Related Earthquakes", handleClick: this.handleRelatedEarthquakeClick},
        {title: "Related Tsunamis", handleClick: this.handleRelatedTsunamiClick},
        {title: "Relate Volcano to Existing Earthquake", handleClick: this.handleRelateToExistingEarthquakeClick},
        {title: "Relate Volcano to Existing Tsunami", handleClick: this.handleRelateToExistingTsunamiClick},
        {title: "Relate Volcano to Existing Reference", handleClick: this.handleRelateToExistingReferenceClick},
        {title: "Edit Volcano Event", handleClick: this.handleEditClick},
        {title: "Delete Volcano Event", handleClick: this.handleDeleteClick},
      ]
    };
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
            <TickboxTable
                loading={volcano.get('fetchingVolcanoes')}
                data={volcano.asMutable().getIn(['volcanoEvents']).toJS()}
                columns={volcano.getIn(['headersAndAccessors']).toJS()}
                title="Volcano Data"
                {...checkboxProps}
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