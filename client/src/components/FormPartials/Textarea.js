import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './TextareaStyles.css';

export const Textarea = props => (
    <div className={Styles.container}>
      <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
      <Control.textarea
          model={props.model}
          id={props.id}
          validators={{
            valid: val => props.validLength(val, props.maxLength)
          }}
          validateOn="change"
      />
      <p style={{color: props.validLength(props.count, props.maxLength) ? 'green': 'red', fontWeight: 'bold'}}>
        {props.count.length? props.count.length : 0} characters of {props.maxLength}
      </p>
    </div>
);

Textarea.propTypes = {
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};