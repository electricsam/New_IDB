import React from 'react';
import expandMore from './expand_more.svg'

const SvgIcon = props => (
    <div onClick={props.handleClick? props.handleClick : () => {console.log('hello')}}>
      <svg fill={props.color} width="24" height="24" viewBox="0 0 24 24">
        <use xlinkHref={`${props.icon}#Outline  `}/>
      </svg>
    </div>
);

export default SvgIcon;