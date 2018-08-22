import React from 'react';
import {connect} from "react-redux";

import Loading from "../../loadbar/Loading";
import TickboxTable from '../../CheckboxTable/TickboxTable';
import store from "../../../store";

import {createApiQueryString, decodeQueryString, deleteEarthquake} from "../../../helperFunctions/helperFunctions";

const tableStyle = {
  textAlign: "center"
};

const hiddenStyle = {
  display: "none"
};

const action = obj => store.dispatch(obj);

/**
 * Container component to handle logic and displays for relating given row of another data set to an Earthquake.
 *
 * @class
 */
class RelateEarthquake extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  /**
   * Uses React lifecycle component to reset the selected boxes on mount, and fetch earthquakes specified by the query
   * string in the URL
   */
  componentDidMount(){
    action({type: "SET_TABLE_SELECTION", payload: null});
    let { search } = this.props.location;
    if(search.length){
      search = search.split("?")[1];
      let decoded = JSON.parse(decodeQueryString(search));
      let queryString = createApiQueryString(decoded);
      action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED", payload: queryString});
    }
  }

  /**
   * Toggles the selection of checkboxes in the table by updating the store via action dispatches. If the key passed is
   * the same as the key currently held by the store it will set the store value to null in order to deselect the
   * checkbox.  However, if a differing key is passed then the store will be updated with the new key as the value.
   *
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
   * Empty method defined in order to satisfy HOC from ReactTable
   */
  selectAll = () => {
    // do nothing
  };

  /**
   * Toggles the selection to null via action dispatch
   */
  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
  };

  /**
   * Checks store to see if a particular given key is "selected"
   *
   * @param key
   * @return {boolean}
   */
  isSelected = key => this.props.earthquake.get('tableSelection') === key ? true : false;

  /**
   * Handles the logic behind relating two rows of data from two different data sets. Ex. Earthquake and Tsunami.
   * First it reads the table selection to get an id of the currently selected earthquake and then it reads the url for
   * the id of the data a user wishes to relate.  There is further logic to find which data set the id in the url is
   * from and then the two are related via action dispatch.
   *
   * @return {{}}
   */
  handleRelateClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    let { search } = this.props.location;
    search = search.split('?')[1];

    let decoded = JSON.parse(decodeQueryString(search));

    if(selected && decoded.relate) {
      switch(decoded.relateTo){
        case "tsunami": {
          action({type: "RELATE_EARTHQUAKE_TO_TSUNAMI_REQUESTED", payload: {eqId: selected, tsuId: decoded.relateId}});
          break;
        }
        case "volcano": {
          action({type: "RELATE_EARTHQUAKE_TO_VOLCANO_REQUESTED", payload: {eqId: selected, volId: decoded.relateId}});
          break;
        }
        default: return {}
      }
    }
  };

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
        {title: 'Relate', handleClick: this.handleRelateClick},
      ]
    };

    if( earthquake.get('fetchedEarthquake')){
      return (
          <div>
            <TickboxTable
                title="Relate Earthquake"
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

export default connect(mapStateToProps)(RelateEarthquake);