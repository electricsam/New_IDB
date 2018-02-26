import React from 'react';
import ReactTable from 'react-table'
import PropTypes from 'prop-types';

import Styles from './TableStyle.css';

const Table = props => (
  <div className={Styles.container}>

    <h1>{props.title}</h1>

    <ReactTable
      data={props.data}
      columns={props.columns}
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
        height: "50%", // This will force the table body to overflow and scroll, since there is not enough room
        width: "95%"
      }}
      className="-striped -highlight"
      defaultSorted={[{id: 'id', desc: false}]}
      loading={props.loading}
    />

  </div>

);

export default Table;

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}
