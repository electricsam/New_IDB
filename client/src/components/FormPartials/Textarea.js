import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';

import Styles from './TextareaStyles.css';

export const Textarea = props => (
    <div className={Styles.container}>
      <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
      <Control.textarea model={props.model} id={props.id} />
    </div>
);