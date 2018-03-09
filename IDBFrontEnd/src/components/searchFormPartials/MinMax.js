import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';

import Styles from '../TsunamiSearch/TsunamiSearchContainerStyle.css';

const MinMax = props => (
  <div>
    <label htmlFor={props.model}>{props.title}</label>
    <Control.text
      model={props.model}
      id={props.model}
      validators={{
        valid: val => props.validMinMax(val, props.min, props.max)
      }}
      validateOn="blur" required={false}>
    </Control.text>
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
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  validMinMax: PropTypes.func.isRequired,
}