import React from 'react';
import Styles from './tableStyle.css';
import Immutable from "seamless-immutable";

const Table = props => (
  <div className={Styles.container}>

    <h1 className={Styles.header}>{props.title}</h1>

    <ReactTable
      {/*
        TODO: need to remove the Immutable.asMutable from here
        TODO: need to make the data more generically titled
        TODO: need to move the map to table out and data into store - try saga or thunk
      */}
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

  </div>

);

export default Table;
