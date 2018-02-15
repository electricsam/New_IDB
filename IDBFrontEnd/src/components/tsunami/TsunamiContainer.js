import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactTable from 'react-table';
import Immutable from 'seamless-immutable'

import Loading from '../loadbar/Loading';
import Styles from './TsunamiContainerStyle.css';
import * as tsunamiActions from '../../actions/tsunamiActions';
import {mapToTable} from '../../helperFunctions/helperFunctions';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllTsunamis();
  }

  render() {
    const { user } = this.props;
    const { tsunami } = this.props;
    if (tsunami.fetchedTsEvent) {
      return (
        <div className={Styles.container}>

          <h1 className={Styles.header}>Tsunami Data</h1>

          <ReactTable
              data={Immutable.asMutable(tsunami.TsEvents, {deep: true})}
              columns={mapToTable(tsunami.TsEvents)}
              defaultPageSize={10}
              expanderDefaults={
                {
                  sortable: false,
                  resizable: true,
                  filterable: false,
                  width: 35
                }
              }
              //The style height gives fixed header with scroll
              style={{
                height: "400px", // This will force the table body to overflow and scroll, since there is not enough room
                width: "1600px"
              }}
              className="-striped -highlight"
              defaultSorted={[{id: 'id', desc: true}]}
          />

        </div>);
    }
    return <Loading />;
  }
}

// TODO: change this to have DESTRUCTURING
const mapStateToProps = state => ({ tsunami: state.tsunami });


// TODO: change this to have DESTRUCTURING
const mapDispatchToProps = dispatch => bindActionCreators({
  getAllTsunamis : tsunamiActions.getAllTsunamis,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
