import React from 'react';



const Button = props => (
    <button onClick={props.history.push(props.address)}>
      {props.title}
    </button>
);


export default Button;