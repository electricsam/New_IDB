

import React from 'react';

const handleEdit = (e, obj) =>{
  e.preventDefault();
  console.log("obj: ", obj);
}


const TestCell = props => (
  <div>
    <button type="button" onClick={()=> console.log(props)}>Edit</button>
  </div>
)

export default TestCell