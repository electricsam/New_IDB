import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import '!style-loader!css-loader!react-table/react-table.css';

import Styles from './SmallTableStyles.css';

/**
 * Component for the display of a ReactTable component without pagination ad with only the number of rows that the data
 * has (typically 1).
 *
 * @module SmallTable
 * @param props
 */
const SmallTable = props => (
    <div className={Styles.container}>

      <h1 style={{color: props.titleColor}} className={Styles.title}>{props.title}</h1>

      <ReactTable
          data={props.data}
          columns={props.columns}
          defaultPageSize={props.defaultPageSize}
          expanderDefaults={
            {
              sortable: false,
              resizable: true,
              filterable: false,
              width: 35,
            }
          }
          // The style height gives fixed header with scroll
          style={{
            height: '50%', // This will force the table body to overflow and scroll, since there is not enough room
            width: '95%',
            textAlign: 'center',
          }}
          className="-striped -highlight"
          defaultSorted={[{ id: 'id', desc: false }]}
          loading={props.loading}
          handleEdit={props.handleEdit}
          showPagination={false}
      />
    </div>
);

export default SmallTable;

SmallTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
