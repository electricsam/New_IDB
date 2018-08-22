import React from 'react';

/**
 * Component for the display of divs that, when clicked, will push to the subsection of the earthquake data set.
 *
 * @module EarthquakeLandingPartial
 * @param props
 */
const EarthquakeLandingPartial = props => (
  <div className={props.outerStyle} onClick={() => props.handleClick(props.url)}>
    <div className={props.innerStyle}>{props.title}</div>
  </div>

);

export default EarthquakeLandingPartial;
