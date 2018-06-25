import React from 'react';
import PropTypes from 'prop-types';

import Styles from './MultiPartFormStyles.css';
import { Form } from 'react-redux-form/lib/immutable';

const MultiPartForm = props => (
  <div className={Styles.container}>

    <h1 className={Styles.title}>{props.title}</h1>

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
  handleSubmit: PropTypes.func.isRequired,
};