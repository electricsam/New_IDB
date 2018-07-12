import React from 'react';
import { push } from 'react-router-redux';
import {connect} from "react-redux";

import DialogBox from "../../FormPartials/DialogBox/DialogBox";
import Loading from "../../loadbar/Loading";
import TickboxTable from '../../CheckboxTable/TickboxTable';
import store from "../../../store";
import {
  createApiQueryString,
  decodeQueryString,
  encodeQueryString,
  deleteEarthquake
} from "../../../helperFunctions/helperFunctions";
import {DefinitionModal} from "../../DefinitionModal/DefinitionModal";

import {tsunamiEventColumnDefinitions} from '../../formConstants/constants';
import DefinitionList from "../../DefinitionList/DefinitionList";

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
    this.state = {
      modal: {
        isOpen: false,
        title: 'this is a test',
        data: "this is a test of the data that we can send through to the modal",
        validValues: 'holder'
      }
    }
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
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
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

  handleRelateClick = url => {
    let selected = this.props.earthquake.get('tableSelection');
    if(selected){
      let relateObj = {relate: true, relateTo: "earthquake", relateId: selected};
      let encoded = encodeQueryString(JSON.stringify(relateObj));
      store.dispatch(push(`${url}${encoded}`));
    }
  };

  handleRelateToExistingTsunamiClick = () => {this.handleRelateClick('/tsunami/eventsearch?');};

  handleRelateToExistingVolcanoClick = () => {this.handleRelateClick('/volcano/event/search?');};

  handleRelateToExistingRefClick = () => {this.handleRelateClick('/reference/search?')};

  closeModal = () => this.setState( {modal: {...this.state.modal, isOpen: false}});

  openModal = (title, data, validValues) => {
    console.log("this is valid Values ", validValues)
    this.setState({
      modal: {
          ...this.state.modal,
        isOpen: true,
        title: title,
        validValues: validValues,
        data: data
      }
    })
    console.log(' you are clicking meeeeeee')
  }
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
