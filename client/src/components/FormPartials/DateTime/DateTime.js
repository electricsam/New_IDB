import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './DateTimeStyles.css';

/**
 * Component for the display of input boxes that accept Dates.
 *
 * @module DateTime
 * @param props
 * @return {*}
 */
const DateTime = props => (
  <div className={Styles.container}>
    <label htmlFor={props.model}>{props.title}</label>
    <Control.text
      model={props.model}
      id={props.model}
      validators={{
        valid: val => props.validDateTime(val),
      }}
      validateOn="blur"
      required={false}
    />
    <Errors
      className={Styles.errors}
      model={props.model}
      show="touched"
      messages={props.validMessage}
    />
  </div>
);

export default DateTime;

DateTime.propTypes = {
  model: PropTypes.string.isRequired,
  validDateTime: PropTypes.func.isRequired,
  validMessage: PropTypes.string.isRequired
};