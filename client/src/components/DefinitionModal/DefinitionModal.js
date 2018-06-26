import React from 'react';

import Styles from './DefinitionModalStyles.css'

export const DefinitionModal = props => {
  if(props.isOpen){
    return(
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <button className={Styles.close}>
              <i className="material-icons" onClick={props.closeModal}>close</i>
            </button>

            <h2 className={Styles.title}>{props.title}</h2>

            {props.validValues? <p><b>Valid Values:</b> {props.validValues}</p> : <div style={{display: 'none'}}></div>}

            <p>{props.data}</p>
          </div>
        </div>
    )
  }else{
    return <div style={{display: 'none'}}></div>
  }

};
