import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';
import { push } from 'react-router-redux';

import store from '../../../store';
import Loading from '../../loadbar/Loading';

import { decodeQueryString, createApiQueryString, encodeQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";

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
      action({ type: 'FETCH_ALL_TS_EVENTS_REQUESTED' });
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

  handleMoreInfoClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    console.log("SELECTED IN HANDLEMOREINFOLCICK: ", selected);
    if(selected){
      store.dispatch(push(`/tsunami/event/moreinfo/${selected}`));
    }
  };

  handleRelatedRunupClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      const queryObj = { eventid: `${selected}`};
      const encoded = encodeQueryString(JSON.stringify(queryObj));
      const queryString = createApiQueryString(queryObj);
      store.dispatch(push(`/tsunami/runup/data?${encoded}`));
    }
  };

  handleRelatedVolcanoClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      let basePath = "/volcano/event/data?";
      let query = {tsunamiid: selected + ""};
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`))
    }
  };

  handleRelatedEarthquakeClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    if(selected){
      let basePath = "/earthquake/event/data?";
      let query = {tsunamiid: selected + ""};
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`))
    }
  };

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

  render() {
    const { tsunami } = this.props;
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
        {title: 'More Info', handleClick: this.handleMoreInfoClick},
        {title: 'Related Runups', handleClick: this.handleRelatedRunupClick},
        {title: 'Related Volcanoes', handleClick: this.handleRelatedVolcanoClick},
        {title: 'Related Earthquake', handleClick: this.handleRelatedEarthquakeClick},
        {title: "Edit Tsunami", handleClick: this.handleEditClick},
        {title: "Add Related Runup", handleClick: this.handleAddRelatedRunupClick},
        {title: "Delete Tsunami", handleClick: this.handleDeleteClick}
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

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TsunamiContainer);

