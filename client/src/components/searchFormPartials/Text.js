import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';

import Styles from '../TsunamiEventSearch/TsunamiSearchContainerStyle.css';

const Text = props => (
  <div>
    <label htmlFor={props.model}>{props.title}</label>
    <Control.text
      model={props.model}
      id={props.model}
      validators={{
        valid: val => props.validate(val, props.validArgs)
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

export default Text;
