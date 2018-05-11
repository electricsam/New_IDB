import React from 'react';
import { Control } from 'react-redux-form/lib/immutable'


const Radio = props => (
    <div className={props.radioSectionStyle}>
      <div className={props.titleStyle}>{props.title}</div>
      {
        props.radios.map(e => {
          return (
              <div>
                <Control.radio
                    model={props.model}
                    id={props.model}
                    value={e.value}
                    isToggle={true}
                />
                <label htmlFor={props.htmlFor}>{e.label}</label>
              </div>
          )
        })
      }
      <Control.text model={`${props.textModelPreface}${props.checkConditions()}`}
                    id={`${props.textModelPreface}${props.checkConditions()}`}/>
    </div>
);

export default Radio