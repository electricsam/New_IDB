import React from 'react';
import PropTypes from 'prop-types';

import Styles from './MultiPartFormStyles.css';
import { Form } from 'react-redux-form/lib/immutable';

/**
 * Component that returns a wrapped {@link https://davidkpiano.github.io/react-redux-form/docs/api/Form.html Form}
 * component from {@link https://davidkpiano.github.io/react-redux-form/docs.html React-Redux-Form}.  The form is passed
 * child components that could be a {@link module:FormSection} or lower level input components from React-Redux-Form.
 *
 * @module MultiPartForm
 * @param props
 */
const MultiPartForm = props => (
  <div className={Styles.container}>

    <h1 style={{color: props.titleColor}} className={Styles.title}>{props.title}</h1>

    <Form model="deep" onSubmit={value => props.handleSubmit(value)} className={Styles.form}>

      {props.children}

      <div className={Styles.buttonContainer}>
        <button type="submit" value="Submit" className={Styles.button}>
            Submit
        </button>
        {props.handleClear ? <button onClick={props.handleClear} type="reset" value="Reset" className={Styles.button}>
          Clear
        </button> : <div style={{display: 'none'}}></div>}

      </div>


    </Form>

  </div>
);

export default MultiPartForm;

MultiPartForm.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleClear: PropTypes.func,
};