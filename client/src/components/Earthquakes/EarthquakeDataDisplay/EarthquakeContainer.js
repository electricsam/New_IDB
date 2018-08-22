import React from 'react';
import {push} from 'react-router-redux';
import {connect} from "react-redux";

import DialogBox from "../../FormPartials/DialogBox/DialogBox";
import Loading from "../../loadbar/Loading";
import TickboxTable from '../../CheckboxTable/TickboxTable';
import store from "../../../store";
import {
  createApiQueryString,
  decodeQueryString,
  deleteEarthquake,
  encodeQueryString
} from "../../../helperFunctions/helperFunctions";

import {tsunamiEventColumnDefinitions} from '../../formConstants/constants';

const tableStyle = {
  textAlign: "center"
};

const hiddenStyle = {
  display: "none"
};

const action = obj => store.dispatch(obj);

/**
 * Container for display of Earthquake data based upon GET request to API
 *
 * @class
 */
class EarthquakeContainer extends React.Component {
  /**
   * @constructor
   * @param props
   */
  constructor(props){
    super(props);
    this.state = {}
  }

  /**
   * Dispatches action to reset the table settings
   *
   * If the url contains a query string then an action is dispatched to request data from the server
   * with decoded, given query string
   * else it will request data from the server without a query string
   */
  componentDidMount(){
    action({type: "SET_TABLE_SELECTION", payload: null});
    let { search } = this.props.location;
    if(search.length){
      search = search.split('?')[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded);
      action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED", payload: queryString});
    }else{
      action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED"});
    }
  }

  /**
   * dispatches an action that triggers a DELETE request to the api
   */
  handleYesClick = () => {
    let id = this.props.earthquake.get('deleteEarthquakeId');
    action({type: "DELETE_EARTHQUAKE_REQUESTED", payload: id});
  };

  /**
   * dispatches an action to reset the delete data in the store
   */
  handleNoClick = () => {
    action({type: "TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION"});
    action({type: "SET_DELETE_EARTHQUAKE_ID", payload: null});
  };

  /**
   * dispatches action to reset the store's value of table row that is selected
   * @param key
   */
  toggleSelection = key => {
    let selection = this.props.earthquake.get('tableSelection');
    if(selection === key){
      action({type: "SET_TABLE_SELECTION", payload: null});
    }else{
      action({type: "SET_TABLE_SELECTION", payload: key});
    }
  };

  /**
   * vestigial function for selecting all tick boxes
   */
  selectAll = () => {
    // do nothing
  };

  /**
   * dispatches actions to clear all selections on table
   */
  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
  };

  /**
   * if there is a row selected via tickbox then the function will push history obj to /earchquake/update/:selectedrowid
   */
  handleEditClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if (!selected) {
      //  do nothing
    }else {
      store.dispatch(push(`/earthquake/update/${selected}`));
    }
  };

  /**
   * dispatches actions to handle the click of delete button, passing the selected row id to the store to set it for
   * deletion
   */
  handleDeleteClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if (selected){
      action({ type: 'SET_DELETE_EARTHQUAKE_ID', payload: selected });
      action({ type: 'TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION' });
    }
  };

  /**
   * function to determine whether a given key's corresponding value is selected in the table
   *
   * @param key
   * @returns {boolean}
   */
  isSelected = key => this.props.earthquake.get('tableSelection') === key ? true : false;

  /**
   * function to handle click of any relate button.  Given a specific url it will push to that url with an encoded
   * query string of what to relate and the id of the entity you want to relate.
   *
   * @param url
   */
  handleRelateClick = url => {
    let selected = this.props.earthquake.get('tableSelection');
    if(selected){
      let relateObj = {relate: true, relateTo: "earthquake", relateId: selected};
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`${url}${encoded}`));
    }
  };

  /**
   * function to handle click of relate button where user is trying to relate and earthquake to a tsunami.  Calls
   * handleRelateClick and passes in unique url of dataset that earthquake is to be related to.
   */
  handleRelateToExistingTsunamiClick = () => {this.handleRelateClick('/tsunami/eventsearch?');};

  /**
   * function to handle click of relate button where user is trying to relate and earthquake to a volcano.  Calls
   * handleRelateClick and passes in unique url of dataset that earthquake is to be related to.
   */
  handleRelateToExistingVolcanoClick = () => {this.handleRelateClick('/volcano/event/search?');};

  /**
   * function to handle click of relate button where user is trying to relate and earthquake to a reference.  Calls
   * handleRelateClick and passes in unique url of dataset that earthquake is to be related to.
   */
  handleRelateToExistingRefClick = () => {this.handleRelateClick('/reference/search?')};

  render(){
    const { earthquake } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: 'Relate to Existing Tsunami', handleClick: this.handleRelateToExistingTsunamiClick},
        {title: 'Relate to Existing Volcano', handleClick: this.handleRelateToExistingVolcanoClick},
        {title: 'Relate to Existing Reference', handleClick: this.handleRelateToExistingRefClick},
        {title: "Edit Earthquake", handleClick: this.handleEditClick},
        {title: "Delete Earthquake", handleClick: this.handleDeleteClick}
      ]
    };

    if( earthquake.get('fetchedEarthquake')){
      return (
          <div>
            {earthquake.get('showDeleteEarthquakeConfirmation')?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                />:
                <div style={hiddenStyle}></div>
            }

            <TickboxTable
                title="Earthquake Data"
                columns={earthquake.getIn(['headersAndAccessors']).toJS()}
                data={earthquake.asMutable().getIn(['earthquakes']).toJS()}
                loading={earthquake.get('fetchingEarthquake')}
                {...checkboxProps}
            />

          </div>
      )
    }else{
      return <Loading/>
    }
  }
}

const mapStateToProps = state => ({ earthquake: state.deep.earthquake });

export default connect(mapStateToProps)(EarthquakeContainer);