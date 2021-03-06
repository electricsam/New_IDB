import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './TextStyles.css';

/**
 * Component for the display and validation of text input.
 *
 * @module Text
 * @param props
 */
const Text = props => {
  if(props.needsVal){
    return(
        <div className={Styles.container}>
          <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
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
    )

  }else{
    return (
        <div className={Styles.container}>
          <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
          <Control.text model={props.model} id={props.model}/>
        </div>
    )
  }
};

export default Text;

Text.propTypes = {
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};