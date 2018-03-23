import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';


const DropDown = props => (
  <div>
    <label htmlFor={props.model}>{props.title}</label>
    <Control.select model={props.model} id={props.model}>
      {props.data.map(e => <option value={e.value}>{e.name}</option>)}
    </Control.select>
  </div>
);


export default DropDown;

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}