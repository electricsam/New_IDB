import React from 'react';
import ReactTable from 'react-table';
import selectTableHOC from 'react-table/lib/hoc/selectTable';
import { push } from 'react-router-redux';
import {connect} from "react-redux";

const CheckboxTable = selectTableHOC(ReactTable);
import DialogBox from "../../FormPartials/DialogBox";
import Loading from "../../loadbar/Loading";
import TickboxTable from '../../CheckboxTable/TickboxTable';
import store from "../../../store";

import {
  createApiQueryString,
  decodeQueryString,
  encodeQueryString,
  deleteEarthquake
} from "../../../helperFunctions/helperFunctions";

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

  handleYesClick = () => {
    let id = this.props.earthquake.get('deleteEarthquakeId');
    action({type: "DELETE_EARTHQUAKE_REQUESTED", payload: id});
  };

  handleNoClick = () => {
    action({type: "TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION"});
    action({type: "SET_DELETE_EARTHQUAKE_ID", payload: null});
  };

  toggleSelection = key => {
    let selection = this.props.earthquake.get('tableSelection');
    if(selection === key){
      action({type: "SET_TABLE_SELECTION", payload: null});
    }else{
      action({type: "SET_TABLE_SELECTION", payload: key});
    }
  }

  selectAll = () => {
    // do nothing
  }

  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
  };

  handleMoreInfoCick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if(!selected){
      // do nothing
    }else{
      store.dispatch(push(`/earthquake/event/moreinfo/${selected}`));
    }
  };

  handleRelatedVolcanoClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if(!selected){
      // do nothing
    }else{
      let basePath = "/volcano/event/data?";
      let query = {earthquakeid: selected + ""};
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`))
    }
  }

  handleRelatedTsunamiClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if(!selected){
      // do nothing
    }else{
      let basePath = "/tsunami/event/data?";
      let query = {earthquakeid: selected + ""};
      let encoded = encodeQueryString(JSON.stringify(query));
      return store.dispatch(push(`${basePath}${encoded}`))
    }
  };

  handleEditClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if (!selected) {
      //  do nothing
    }else {
      store.dispatch(push(`/earthquake/update/${selected}`));
    }
  };

  handleDeleteClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if (selected){
      action({ type: 'SET_DELETE_EARTHQUAKE_ID', payload: selected });
      action({ type: 'TOGGLE_DELETE_EARTHQUAKE_CONFIRMATION' });
    }
  };

  isSelected = key => this.props.earthquake.get('tableSelection') === key ? true : false;

  logSelection = () => {console.log('selection: ', this.props.earthquake.get('tableSelection'))}

  handleRelateToExistingTsunamiClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if(selected){
      let relateObj = {relate: true, relateTo: "earthquake", relateId: selected}
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`/tsunami/eventsearch?${encoded}`));
    }
  };


  render(){
    const { earthquake } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected, logSelected } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      logSelected,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: 'More Info', handleClick: this.handleMoreInfoCick},
        {title: 'Related Volcanoes', handleClick: this.handleRelatedVolcanoClick},
        {title: 'Related Tsunamis', handleClick: this.handleRelatedTsunamiClick},
        {title: 'Relate to Existing Tsunami', handleClick: this.handleRelateToExistingTsunamiClick},
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

