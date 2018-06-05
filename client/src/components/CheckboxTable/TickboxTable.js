import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import selectTableHOC from "react-table/lib/hoc/selectTable/index";

import Styles from './TickboxTableStyles.css';
import Buttons from "../Buttons/Buttons";

const CheckboxTable = selectTableHOC(ReactTable);

const TickboxTable = props => (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{props.title}</h1>
      <h3 className={Styles.noTuples}>{props.data.length} Tuples Returned</h3>
      <CheckboxTable
          className="-striped -highlight"
          columns={props.columns}
          data={props.data}
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
          loading={props.loading}
          style={{
            height: '50%', // This will force the table body to overflow and scroll, since there is not enough room
            width: '95%',
            textAlign: 'center',
          }}
          {...props}
      />

      <Buttons buttons={props.buttons}/>

    </div>


);

TickboxTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}


export default TickboxTable