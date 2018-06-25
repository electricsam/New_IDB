import React from 'react';

import Styles from './DefinitionListStyles.css'


const DefinitionList = props => (
    <ul className={Styles.container}>
      {props.definitions.map(e => (
          <li onClick={() => props.openModal(e.title, e.data, e.validValues)} className={Styles.listItem}>
            {e.title}
          </li>
      ))}
    </ul>
);

export default DefinitionList;