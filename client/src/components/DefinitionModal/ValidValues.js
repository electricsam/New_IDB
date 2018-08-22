import React from 'react';

/**
 * Conditionally displays props.value based upon its value
 *
 * @module ValidValues
 * @param props
 */
const ValidValues = props => {
  if(props.value){
    return (
        <h3>Valid Values: {props.value}</h3>
    )
  }else{
    return <div style={{display: 'none'}}></div>
  }
};

export default ValidValues;
