import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SubSectionStyles.css';

/**
 * Component to organize form inputs into subsections of related inputs.
 *
 * @module SubSection
 * @param props
 */
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
