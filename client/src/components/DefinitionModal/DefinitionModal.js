import React from 'react';
import Modal from 'react-modal';

import Styles from './DefinitionModalStyles.css'
import SecondaryData from './SecondaryData';
import ValidValues from "./ValidValues";


const modalStyle = {
  overlay: {
    position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(50, 50, 50, 0.75)'
  },
  content: {
    position: 'absolute',
        top: '10%',
        left: '20%',
        right: '20%',
        bottom: '20%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
  }
}

export const DefinitionModal = props => {
  if(props.isOpen){
    return(
        <Modal isOpen={props.isOpen} onRequestClose={props.handleCloseModal} style={modalStyle}>

          <div className={Styles.modal} role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDesc">
            <div className={Styles.modalContent}>
              <button  aria-label="Close Button"
                       autoFocus={true}
                       className={Styles.close}
                       onClick={props.handleCloseModal}
              >
                <i className="material-icons">close</i>
              </button>

              <h2 id="modalTitle" className={Styles.title}>{props.title}</h2>

              <ValidValues value={props.validValues}/>

              <p id="modalDesc">{props.data}</p>

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

        </Modal>
    )
  }else{
    return <div style={{display: 'none'}}></div>
  }
};
