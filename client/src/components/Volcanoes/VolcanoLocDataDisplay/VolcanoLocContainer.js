import React from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";

import DialogBox from "../../FormPartials/DialogBox/DialogBox";
import Loading from "../../loadbar/Loading";
import store from "../../../store";
import {createApiQueryString, decodeQueryString} from "../../../helperFunctions/helperFunctions";
import TickboxTable from "../../CheckboxTable/TickboxTable";
import {DefinitionModal} from "../../DefinitionModal/DefinitionModal";

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
    let { search } = this.props.location;
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded);
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

  toggleSelection = key => {
    let selection = this.props.volcano.get('volcanoLocTableSelectionId');
    if(selection === key){
      action({type: "SET_VOLCANO_LOC_TABLE_SELECTION_ID", payload: null});
    }else{
      action({type: "SET_VOLCANO_LOC_TABLE_SELECTION_ID", payload: key});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_VOLCANO_LOC_TABLE_SELECTION_ID", payload: null});
  };

  isSelected = key => this.props.volcano.get('volcanoLocTableSelectionId') === key;

  logSelection = () => {console.log('selection: ', this.props.volcano.get('volcanoLocTableSelectionId'))};

  handleAddEventClick = () => {
    let selected = this.props.volcano.get('volcanoLocTableSelectionId');
    if(selected){
      store.dispatch(push(`/volcano/event/insert/${selected}`))
    }
  };

  handleEditClick = () => {
    let selected = this.props.volcano.get('volcanoLocTableSelectionId');
    if(selected){
      store.dispatch(push(`/volcano/loc/update/${selected}`));
    }
  };

  handleDeleteClick = () => {
    let selected = this.props.volcano.get('volcanoLocTableSelectionId');
    if(selected){
      action({ type: 'SET_DELETE_VOLCANO_LOC_ID', payload: selected });
      action({ type: 'TOGGLE_DELETE_VOLCANO_LOC_CONFIRMATION' });
    }
  };

  closeModal = () => action({type: "CLOSE_VOLCANO_LOC_MODAL"});

  render(){
    const { volcano, volcanoUi } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected, logSelection } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      logSelection,
      selectType: "checkbox",
      keyField: "id",
      buttons: [
        {title: "Add Event", handleClick: this.handleAddEventClick},
        {title: "Edit Volcano Location", handleClick: this.handleEditClick},
        {title: "Delete Volcano Location", handleClick: this.handleDeleteClick},
      ]
    };
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

            <DefinitionModal
                isOpen={volcanoUi.get('locModalIsOpen')}
                closeModal={this.closeModal}
                validValues={volcanoUi.get('locModalValidValues')}
                title={volcanoUi.get('locModalTitle')}
                data={volcanoUi.get('locModalData')}
                secondaryData={volcanoUi.get('eventModalSecondaryData') ? volcanoUi.get('locModalSecondaryData').asMutable().toJS() : null}
                component={volcanoUi.get('locModalComponent') ? volcanoUi.get('locModalComponent').asMutable().toJS() : null}
            />

            <TickboxTable
                loading={volcano.get('fetchingVolcanoLocs')}
                data={volcano.asMutable().getIn(['volcanoLocs']).toJS()}
                columns={volcano.getIn(['headersAndAccessors']).toJS()}
                title="Volcano Loc Data"
                {...checkboxProps}
            />
          </div>
      )
    }else{
      return <Loading/>
    }
  }

}


const mapStateToProps = state => ({ volcano: state.deep.volcano, volcanoUi: state.volcanoUi });

export default connect(mapStateToProps)(VolcanoLocContainer);