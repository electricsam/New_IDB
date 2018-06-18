import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';


import Styles from './TextareaStyles.css';

export const Textarea = props => (
    <div className={Styles.container}>
      <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
      <Control.textarea model={props.model} id={props.id} />
    </div>
);

Textarea.propTypes = {
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};