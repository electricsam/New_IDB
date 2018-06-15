import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';

import Styles from './RadioStyles.css';

const hiddenStyle = {
  visibility: 'hidden'
};

const Radio = props => (
  <div className={Styles.subSection}>
    {
      props.radios.map(e => (
        <div className={Styles.radioDiv}>
          <Control.radio
            model={props.model}
            id={props.model}
            value={e.value}
            isToggle
          />
          <label htmlFor={props.htmlFor}>{e.label}</label>
        </div>
      ))
    }
    {
      props.noText ? (<div />) :
        (
            <div className={Styles.text}>
              <label style={hiddenStyle} htmlFor={`${props.textModelPreface}${props.checkConditions(props.condition)}`}>
                Name
              </label>
              <Control.text
                model={`${props.textModelPreface}${props.checkConditions(props.condition)}`}
                id={`${props.textModelPreface}${props.checkConditions(props.condition)}`}
              />
            </div>
        )
    }
  </div>
);

export default Radio;
