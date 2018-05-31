import React from 'react';
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
