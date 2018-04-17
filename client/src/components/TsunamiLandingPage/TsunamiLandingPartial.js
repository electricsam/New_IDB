import React from 'react';

const TsunamiLandingPartial = props => (
  <div className={props.outerStyle} onClick={() => props.handleClick(props.url)}>
    <div className={props.innerStyle}>{props.title}</div>
  </div>

);

export default TsunamiLandingPartial