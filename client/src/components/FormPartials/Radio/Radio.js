import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './RadioStyles.css';

const hiddenStyle = {
  visibility: 'hidden'
};

/**
 * Component to display radio inputs with a conditionally displayed, text input that is related to the same data as the
 * radio input.  Ex. Users are enabled to search by location name and the radio buttons let them toggle how they want to
 * search that string they are entering in the text input.  They can search "includes", "matches", "starts with", etc.
 *
 * @module Radio
 * @param props
 */
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

Radio.propTypes = {
  radios: PropTypes.array.isRequired,
  model: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};