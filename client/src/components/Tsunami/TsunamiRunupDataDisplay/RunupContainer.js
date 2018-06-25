import React from 'react';
import { connect } from 'react-redux';
import { get, getIn } from 'immutable';
import { push } from 'react-router-redux';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from '../../Table/Table';

import {decodeQueryString, createApiQueryString, encodeQueryString} from '../../../helperFunctions/helperFunctions';
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
      action({ type: 'FETCH_SPECIFIED_RUNUP_REQUESTED', payload: "" });
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

  handleRelateToExistingRefClick = () => {
    let selected = this.props.tsunami.get('runupTableSelectionId');
    if(selected){
      let relateObj = {relate: true, relateTo: "runup", relateId: selected}
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`/reference/search?${encoded}`));
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
        {title: "Relate to Existing Reference", handleClick: this.handleRelateToExistingRefClick},
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

