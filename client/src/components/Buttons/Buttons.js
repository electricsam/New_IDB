import React from 'react';
import PropTypes from 'prop-types';

import Styles from "./ButtonsStyles.css";

const Buttons = props => (
    <div className={Styles.container}>
      {props.buttons.map(e => (
          <button className={Styles.button} onClick={() => e.handleClick()}>{e.title}</button>
      ))}

    </div>

);

export default Buttons;

Buttons.propTypes = {
    buttons: PropTypes.array.isRequired
};
