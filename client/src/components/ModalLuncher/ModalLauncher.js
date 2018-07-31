import React from 'react';

import launchIcon from '../../assets/launchIconOutline.svg';

const ModalLauncher = props => (
  <img alt="Modal Launch Icon"
       src={launchIcon}
       onClick={props.handleClick}
       onKeyPress={(e) => {
         console.log("you have pressed a button ")
         console.log("key: ", e.key)
         if(e.key === 'Enter'){
           console.log('lets look at this');
           props.handleClick();
         }
       }}
       tabIndex="0"
       aria-label="Modal Launch Clickable Icon"
  />
);

export default ModalLauncher;