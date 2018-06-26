import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';
import { push } from 'react-router-redux';

import store from '../../../store';
import Loading from '../../loadbar/Loading';

import { decodeQueryString, createApiQueryString, encodeQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";
import {DefinitionModal} from "../../DefinitionModal/DefinitionModal";
import DefinitionList from "../../DefinitionList/DefinitionList";

const tableStyle = {
  textAlign: 'center',
};

const hiddenStyle = {
  display: 'none',
};

const action = obj => store.dispatch(obj);

class TsunamiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
    let { search } = this.props.location;
    if (search.length) {
      search = search.split('?')[1];
      const decoded = JSON.parse(decodeQueryString(search));
      const queryString = createApiQueryString(decoded);
      action({ type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString });
    } else {
      action({ type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: '' });
    }
  }

  handleYesClick() {
    const id = this.props.tsunami.get('deleteEventId');
    action({ type: 'DELETE_EVENT_REQUESTED', payload: id });
  }

  handleNoClick() {
    action({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' });
    action({ type: 'SET_DELETE_EVENT_ID', payload: null });
  }

  toggleSelection = key => {
    let selection = this.props.tsunami.get('tsunamiTableSelection');
    if(selection === key){
      action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
    }else{
      action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: key});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
  };

  isSelected = key => this.props.tsunami.get('tsunamiTableSelection') === key;

  logSelection = () => {console.log('selection: ', this.props.tsunami.get('tsunamiTableSelection'))};

  handleEditClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      store.dispatch(push(`/tsunami/updatetsunami/${selected}`))
    }
  };

  handleDeleteClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      store.dispatch({ type: 'SET_DELETE_EVENT_ID', payload: selected });
      store.dispatch({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' });
    }
  };

  handleAddRelatedRunupClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      store.dispatch(push(`/tsunami/insertrunup/${selected}`));
    }
  };

  handleRelateToExistingEarthquake = () => {this.handleRelateClick('/earthquake/eventsearch?')};

  handleRelateToExistingVolcano = () => {this.handleRelateClick('/volcano/event/search?')};

  handleRelateToExistingReference = () => {this.handleRelateClick('/reference/search?')};

  handleRelateClick = url => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      let relateObj = {relate: true, relateTo: "tsunami", relateId: selected}
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`${url}${encoded}`));
    }
  };

  closeTsunamiEventModal = () => action({type: "CLOSE_TSUNAMI_EVENT_MODAL"});

  render() {
    const { tsunami,tsunamiUi } = this.props;
    console.log("this is the UI ", tsunamiUi);
    const { toggleSelection, selectAll, toggleAll, isSelected, logSelection } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      logSelection,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: "Relate Tsunami to Existing Earthquake", handleClick: this.handleRelateToExistingEarthquake},
        {title: "Relate Tsunami to Existing Volcano", handleClick: this.handleRelateToExistingVolcano},
        {title: "Relate Tsunami to Existing Reference", handleClick: this.handleRelateToExistingReference},
        {title: "Edit Tsunami", handleClick: this.handleEditClick},
        {title: "Add Related Runup", handleClick: this.handleAddRelatedRunupClick},
        {title: "Delete Tsunami", handleClick: this.handleDeleteClick},
      ]
    };
    if (tsunami.get('fetchedTsEvent')) {
      return (
        <div>
          {tsunami.get('showDeleteEventConfirmation') ?
            <DialogBox
              handleYesClick={this.handleYesClick}
              handleNoClick={this.handleNoClick}
            /> :
            <div style={hiddenStyle} />
          }
          {
          <DefinitionModal
            isOpen={tsunamiUi.get('eventModalIsOpen')}
            closeModal={this.closeTsunamiEventModal}
            validValues={tsunamiUi.get('eventModalValidValues')}
            title={tsunamiUi.get('eventModalTitle')}
            data={tsunamiUi.get('eventModalData')}
            />
          }
          <TickboxTable
              loading={tsunami.get('fetchingTsEvent')}
              data={tsunami.asMutable().getIn(['tsEvents']).toJS()}
              columns={tsunami.getIn(['headersAndAccessors']).toJS()}
              title="Tsunami Data"
              {...checkboxProps}
          />
        </div>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami, tsunamiUi: state.tsunamiUi });

export default connect(mapStateToProps)(TsunamiContainer);

