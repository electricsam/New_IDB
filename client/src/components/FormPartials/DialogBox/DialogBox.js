import React from 'react';
import PropTypes from 'prop-types';

import Styles from './DialogBoxStyle.css';


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