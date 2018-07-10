import React from 'react';

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
