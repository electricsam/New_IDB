import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';

import Styles from './RadioStyles.css';

const Radio = props => (
  <div className={Styles.subSection}>
    <div className={Styles.subSectionTitle}>{props.title}</div>
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
        (<Control.text
          model={`${props.textModelPreface}${props.checkConditions(props.condition)}`}
          id={`${props.textModelPreface}${props.checkConditions()}`}
        />)
    }
  </div>
);

export default Radio;
