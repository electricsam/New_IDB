import React from 'react';
import { connect } from 'react-redux';
import { get, getIn } from 'immutable';
import { push } from 'react-router-redux';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from '../../Table/Table';

import { decodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";

const action = obj => store.dispatch(obj);

const styles = {
  display: 'hidden',
};

class RunupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    action({type: "SET_RUNUP_TABLE_SELECTION_ID", payload: null});
    action({type: "SET_RUNUP_TABLE_SELECITON_EVENTID", payload: null});
    let { search } = this.props.location;
    if (search.length) {
      search = search.split('?')[1];
      const decoded = JSON.parse(decodeQueryString(search));
      const queryString = createApiQueryString(decoded);
      action({ type: 'FETCH_SPECIFIED_RUNUP_REQUESTED', payload: queryString });
    } else {
      action({ type: 'FETCH_ALL_RUNUP_REQUESTED' });
    }
  }

  handleYesClick() {
    const id = this.props.tsunami.get('deleteRunupId');
    action({ type: 'DELETE_RUNUP_REQUESTED', payload: id });
  }

  handleNoClick() {
    action({ type: 'TOGGLE_DELETE_RUNUP_CONFIRMATION' });
    action({ type: 'SET_DELETE_RUNUP_ID', payload: null });
  }

  toggleSelection = (key, shift, row) => {
    console.log("key: ", key);
    console.log("shift: ", shift)
    console.log("row: ", row)
    let selection = this.props.tsunami.get('runupTableSelectionId');
    if(selection === key){
      action({type: "SET_RUNUP_TABLE_SELECTION_ID", payload: null});
      action({type: "SET_RUNUP_TABLE_SELECITON_EVENTID", payload: null});
    }else{
      action({type: "SET_RUNUP_TABLE_SELECTION_ID", payload: key});
      action({type: "SET_RUNUP_TABLE_SELECTION_EVENTID", payload: row.eventId});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_RUNUP_TABLE_SELECTION_ID", payload: null});
    action({type: "SET_RUNUP_TABLE_SELECTION_EVENTID", payload: null});
  };

  isSelected = key => this.props.tsunami.get('runupTableSelectionId') === key;

  logSelection = () => {console.log('selection: ', this.props.tsunami.get('runupTableSelection'))};

  handleMoreInfoClick = () => {
    let id = this.props.tsunami.get('runupTableSelectionId');
    // let eventId = this.props.tsunami.get('runupTableSelectionEventId');
    if(id){
      store.dispatch(push(`/tsunami/runup/moreinfo/${id}`))
    }
  };

  handleMoreEventInfoClick = () => {
    let eventId = this.props.tsunami.get('runupTableSelectionEventId');
    if(eventId){
      store.dispatch(push(`/tsunami/event/moreinfo/${eventId}`))
    }
  };

  handleEditClick = () => {
    let id = this.props.tsunami.get('runupTableSelectionId');
    let eventId = this.props.tsunami.get('runupTableSelectionEventId');
    if(id && eventId){
      store.dispatch(push(`/tsunami/updaterunup/${id}/${eventId}`));
    }
  };

  handleDeleteClick = () => {
    let id = this.props.tsunami.get('runupTableSelectionId');
    if(id){
      store.dispatch({ type: 'SET_DELETE_RUNUP_ID', payload: id });
      store.dispatch({ type: 'TOGGLE_DELETE_RUNUP_CONFIRMATION' });
    }
  };

  render() {
    const { tsunami } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected, logSelection} = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      logSelection,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: 'More Info', handleClick: this.handleMoreInfoClick},
        {title: "More Event Info", handleClick: this.handleMoreEventInfoClick},
        {title: "Edit Runup", handleClick: this.handleEditClick},
        {title: "Delete Runup", handleClick: this.handleDeleteClick}
      ]
    };
    if (tsunami.get('fetchedRunup')) {
      return (
        <div>
          {tsunami.get('showDeleteConfirmation') ?
            <DialogBox
              handleYesClick={this.handleYesClick}
              handleNoClick={this.handleNoClick}
            />
            : <div style={styles} />
          }
          <TickboxTable
              loading={tsunami.get('fetchingRunup')}
              data={tsunami.asMutable().getIn(['runupData']).toJS()}
              columns={tsunami.getIn(['headersAndAccessors']).toJS()}
              title="Runup Data"
              {...checkboxProps}
          />

        </div>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(RunupContainer);

