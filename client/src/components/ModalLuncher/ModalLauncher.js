import React from 'react';

import launchIcon from '../../assets/launchIconOutline.svg';

const ModalLauncher = props => (
  <img alt="Modal Launch Icon"
       src={launchIcon}
       onClick={props.handleClick}
       onKeyPress={(e) => {
         if(e.key === 'Enter'){
           props.handleClick(props.arg);
         }
       }}
       tabIndex="0"
       aria-label="Modal Launch Clickable Icon"
  />
);

export default ModalLauncher;