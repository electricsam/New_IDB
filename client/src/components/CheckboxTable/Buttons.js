import React from 'react';


import Styles from "./ButtonsStyles.css";

const Buttons = props => (
    <div className={Styles.container}>
      {props.buttons.map(e => (
          <button onClick={() => e.handleClick()}>{e.title}</button>
      ))}

    </div>

);

export default Buttons;
