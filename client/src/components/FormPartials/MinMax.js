require('babel-polyfill');

import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './MinMaxStyle.css';

const MinMax = props => (
  <div className={Styles.container}>
    <label htmlFor={props.model}>{props.title}</label>
    <Control.text
      model={props.model}
      id={props.model}
      validators={{
        valid: val => props.validMinMax(val, props.min, props.max),
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

export default MinMax;

MinMax.propTypes = {
  model: PropTypes.string.isRequired,
  title: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  validMinMax: PropTypes.func.isRequired,
  validMessage: PropTypes.string.isRequired,
};
