import React from 'react';

import launchIcon from '../../assets/launchIconOutline.svg';

/**
 * Component to display an svg, that when clicked will trigger the launch of a modal.  Used in the {@link module:TableHeader}
 * component
 *
 * @module ModalLauncher
 * @param props
 */
const ModalLauncher = props => (
  <img alt="Modal Launch Icon"
       src={launchIcon}
       onClick={props.handleClick}
       onKeyPress={(e) => {
         if(e.key === 'Enter'){
           props.handleClick();
         }
       }}
       tabIndex="0"
       aria-label="Modal Launch Clickable Icon"
  />
);

export default ModalLauncher;