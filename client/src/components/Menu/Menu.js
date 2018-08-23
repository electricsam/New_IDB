import React from 'react';
import Styles from './MenuStyles.css';

/**
 * Component specifying display of an unordered list as a menu
 *
 * @param props
 */
const Menu = props => (
  <ul className={Styles.container} style={{ display: props.display }}>
    {props.children}
  </ul>
);

export default Menu;
