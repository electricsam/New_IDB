import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SubSectionStyles.css';


const SubSection = props => (
  <fieldset className={Styles.subSection}>
    <legend className={Styles.subSectionTitle}>{props.title}</legend>
    {props.children}
  </fieldset>
);

export default SubSection;

SubSection.propTypes = {
  title: PropTypes.string.isRequired
};
