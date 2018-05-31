import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import Styles from './TableStyle.css';

const Table = props => (
  <div className={Styles.container}>

    <h1 className={Styles.title}>{props.title}</h1>

    <ReactTable
      data={props.data}
      columns={props.columns}
      defaultPageSize={20}
      expanderDefaults={
        {
          sortable: false,
          resizable: true,
          filterable: false,
          width: 35,
        }
      }
      style={{
        height: '50%', // This will force the table body to overflow and scroll, since there is not enough room
        width: '95%',
        textAlign: 'center',
      }}
      className="-striped -highlight"
      defaultSorted={[{ id: 'id', desc: false }]}
      loading={props.loading}
      handleEdit={props.handleEdit}
    />
  </div>
);

export default Table;

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
