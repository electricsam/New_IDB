import React from 'react';
import Styles from "./MenuStyles.css";

const Menu = props => (
  <ul className={Styles.container}>
    {props.children}
  </ul>
);

export default Menu;