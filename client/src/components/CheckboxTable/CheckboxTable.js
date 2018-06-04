import React from 'react';

import ReactTable from 'react-table';
import selectTableHOC from 'react-table/lib/hoc/selectTable';

const CheckboxTable = selectTableHOC(ReactTable);

import {connect} from "react-redux";
import DialogBox from "../FormPartials/DialogBox";
import Table from "../Table/Table"
import Loading from "../loadbar/Loading";
import store from "../../store";

import {createApiQueryString, decodeQueryString} from "../../helperFunctions/helperFunctions";

const tableStyle = {
  textAlign: "center"
};

const hiddenStyle = {
  display: "none"
};

const action = obj => store.dispatch(obj);

class EarthquakeSelectTestContainer extends React.Component {
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
    // let selection = this.props.earthquake.get('tableSelection');
    action({type: "SET_TABLE_SELECTION", payload: key});
  }

  selectAll = () => {
    // do nothing
  }

  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
  }

  isSelected = key => this.props.earthquake.get('tableSelection') === key ? true : false;

  logSelection = () => {console.log('selection: ', this.props.earthquake.get('tableSelection'))}







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
      keyField:'id'
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

            <div>
              <h1>Test Earthquake Select Table</h1>
              <CheckboxTable
                  ref={r => {this.selectTableHOC}}
                  className="-striped -highlight"
                  columns={earthquake.getIn(['headersAndAccessors']).toJS()}
                  data={earthquake.asMutable().getIn(['earthquakes']).toJS()}
                  defaultPageSize={20}
                  defaultSorted={[{ id: 'id', desc: false }]}
                  expanderDefaults={
                    {
                      sortable: false,
                      resizable: true,
                      filterable: false,
                      width: 35,
                    }
                  }
                  loading={earthquake.get('fetchingEarthquake')}
                  style={{
                    height: '50%', // This will force the table body to overflow and scroll, since there is not enough room
                    width: '95%',
                    textAlign: 'center',
                  }}
                  {...checkboxProps}
              />

            </div>

          </div>
      )
    }else{
      return <Loading/>
    }
  }

}


const mapStateToProps = state => ({ earthquake: state.deep.earthquake });

export default connect(mapStateToProps)(EarthquakeSelectTestContainer);

