import React from 'react';
import PropTypes from 'prop-types';
import ModalLauncher from "../ModalLuncher/ModalLauncher";


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
      <ModalLauncher  handleClick={props.handleClick} arg={props.accessor}/>
    </div>
);

export default TableHeader

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  accessor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};