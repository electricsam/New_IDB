import React from 'react';
import PropTypes from 'prop-types';


const headerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: "center",
  alignItems: 'center'
};

const TableHeader = props => (
    <div style={headerStyle}>
      <span>{props.title} </span>
      <i className="material-icons"
         style={{margin: '0 1% 0 1%', color: 'blue'}}
         onClick={() => props.handleClick(props.accessor)}>info</i>
    </div>
);

export default TableHeader

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  accessor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};