import React from 'react';

import Styles from './DefinitionModalStyles.css'
import SecondaryData from './SecondaryData';
import ValidValues from "./ValidValues";

export const DefinitionModal = props => {
  if(props.isOpen){
    return(
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <button className={Styles.close} onClick={props.closeModal}>
              <i className="material-icons">close</i>
            </button>

            <h2 className={Styles.title}>{props.title}</h2>

            <ValidValues value={props.validValues}/>

            <p>{props.data}</p>

            {
              props.secondaryData?
                  props.secondaryData.map(e => <SecondaryData data={e.data} title={e.title}/>):
                  <div style={{display:'none'}}></div>
            }

            {
              props.component?
                  props.component: <div style={{display: 'none'}}></div>
            }
          </div>
        </div>
    )
  }else{
    return <div style={{display: 'none'}}></div>
  }

};
