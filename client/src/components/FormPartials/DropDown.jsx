require('babel-polyfill')
import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from "./DropDownStyles.css"

const DropDown = props => (
  <div className={Styles.dropContainer}>
    <Control.select model={props.model} id={props.model} disabled={props.disabled}>
      {props.data.map(e => <option value={e.value}>{e.name}</option>)}
    </Control.select>
  </div>
);

export default DropDown;

DropDown.propTypes = {
  model: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}