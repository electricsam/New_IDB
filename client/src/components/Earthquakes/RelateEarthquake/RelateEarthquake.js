import React from 'react';
import ReactTable from 'react-table';
import selectTableHOC from 'react-table/lib/hoc/selectTable';
import { push } from 'react-router-redux';
import {connect} from "react-redux";

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

class RelateEarthquake extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    action({type: "SET_TABLE_SELECTION", payload: null});
    let { search } = this.props.location;
    if(search.length){
      search = search.split("?")[1];
      let decoded = JSON.parse(decodeQueryString(search));
      console.log("decoded from componentDidMount: ", decoded)
      let queryString = createApiQueryString(decoded);
      action({type: "FETCH_SPECIFIED_EARTHQUAKES_REQUESTED", payload: queryString});
    }
  }

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

  handleMoreInfoCick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    if(selected){
      store.dispatch(push(`/earthquake/event/moreinfo/${selected}`));
    }
  };

  isSelected = key => this.props.earthquake.get('tableSelection') === key ? true : false;

  handleRelateClick = () => {
    let selected = this.props.earthquake.get('tableSelection');
    let { search } = this.props.location;
    search = search.split('?')[1];

    let decoded = JSON.parse(decodeQueryString(search));

    if(selected && decoded.relate) {
      switch(decoded.relateTo){
        case "tsunami": {
          action({type: "RELATE_EARTHQUAKE_TO_TSUNAMI_REQUESTED", payload: {eqId: selected, tsuId: decoded.relateId}});
        }
        case "volcano": {
          action({type: "RELATE_EARTHQUAKE_TO_VOLCANO_REQUESTED", payload: {eqId: selected, volId: decoded.relateId}});
        }
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

export default connect(mapStateToProps)(RelateEarthquake);
