import React from 'react';
import PropTypes from 'prop-types';

import Styles from './MultiPartFormStyles.css';
import { Form } from 'react-redux-form/lib/immutable';

const MultiPartForm = props => (
  <div className={Styles.container}>

    <h1 className={Styles.title}>{props.title}</h1>

    <Form model="deep" onSubmit={value => props.handleSubmit(value)} className={Styles.form}>

      {props.children}

      <button type="submit" className={Styles.button}>
          Submit
      </button>

    </Form>

  </div>
);

export default MultiPartForm;

MultiPartForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};