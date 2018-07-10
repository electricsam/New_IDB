import React from 'react';
import {DefinitionModal} from "./DefinitionModal";
import ValidValues from "./ValidValues";
import SecondaryData from "./SecondaryData";

const ModalIngest = props => {
  switch(props.modalType){
    case 'COMMONVALID': {
      return (
          <DefinitionModal title={props.data.title}>

            <ValidValues value={props.data.validValues}/>

            <p>{props.data.data}</p>

          </DefinitionModal>
      )
    }
    case 'COMMON': {
      <DefinitionModal title={props.data.title}>

        <p>{props.data.data}</p>

      </DefinitionModal>
    }
    case 'SECONDARYVALID': {
      <DefinitionModal>

        <ValidValues value={props.data.validValues}/>

        <p>{props.data.data}</p>

        {props.data.secondaryData.map(e => <SecondaryData data={e.data} title={e.title}/>)}

      </DefinitionModal>
    }
    case 'MISCVALID': {
      <DefinitionModal>
        <ValidValues value={props.data.validValues}/>

        <p>{props.data.data}</p>

        <div>
          {props.data.component}
        </div>

      </DefinitionModal>
    }
    case 'MISC'
  }
}



export default ModalIngest;

