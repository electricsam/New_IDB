import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';

import DialogBox from "../../FormPartials/DialogBox/DialogBox";
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

class RelateVolcanoEvent extends React.Component {
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


  handleRelateClick = () => {
    let selected = this.props.volcano.get('volcanoEventTableSelectionId');
    let { search } = this.props.location;
    search = search.split('?')[1];

    let decoded = JSON.parse(decodeQueryString(search));
    console.log("#######decoded relate to: ",decoded.relateTo);
    if(selected && decoded.relate){
      switch(decoded.relateTo){
        case "tsunami": {
          console.log("decoded relate to tsunami: ", decoded.relateTo)
          action({type: "RELATE_VOLCANO_TO_TSUNAMI_REQUESTED", payload: {tsuId: decoded.relateId, volId: selected}});
          break;
        }
        case "earthquake": {
          console.log("decoded relate to eq: ", decoded.relateTo)
          action({type: "RELATE_VOLCANO_TO_EARTHQUAKE_REQUESTED", payload: {eqId: decoded.relateId, volId: selected}});
          break;
        }
        default: return {}
      }


    }
  }


  render(){
    const { volcano } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      selectType: "checkbox",
      keyField: "hazEventId",
      buttons: [
        {title: "Relate", handleClick: this.handleRelateClick},

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

export default connect(mapStateToProps)(RelateVolcanoEvent);