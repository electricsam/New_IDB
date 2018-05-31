import React from 'react';

const EarthquakeLandingPartial = props => (
  <div className={props.outerStyle} onClick={() => props.handleClick(props.url)}>
    <div className={props.innerStyle}>{props.title}</div>
  </div>

);

export default EarthquakeLandingPartial;
