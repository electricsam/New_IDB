import React from 'react';
import PropTypes from 'prop-types';

import Styles from './DialogBoxStyle.css';

/**
 * Component that lets the user indicate if they are sure they want to proceed with an action or not.
 *
 * @module DialogBox
 * @param props
 * @return {*}
 */
const DialogBox = props => (
  <div className={Styles.outerBox}>
    <div className={Styles.copy}>Are you sure?</div>
    <div className={Styles.buttonContainer}>
      <div className={Styles.yes} onClick={() => props.handleYesClick()}>Yes</div>
      <div className={Styles.no} onClick={() => props.handleNoClick()}>No</div>
    </div>
  </div>

);

export default DialogBox;

DialogBox.propTypes = {
  handleYesClick: PropTypes.func.isRequired,
  handleNoClick: PropTypes.func.isRequired,
};