import React from 'react';
import Styles from './SubMenuStyles.css';

const SubMenu = props => (
    <ul className={Styles.container} style={{display: props.display}}>
      {props.children}
    </ul>
);

export default SubMenu;