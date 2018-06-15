import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';

import Styles from './DropDownListStyles.css'

const DropDownList = props => {
  console.log(props)
  return (
    <div className={Styles.container}>
      {
        props.list.map(e => (
            <div className={Styles.drop}>
              <label htmlFor={e.model}>{e.title}</label>
              <Control.select model={e.model} id={e.model} disabled={e.disabled}>
                {e.data.map(x => <option value={x.value}>{x.name}</option>)}
              </Control.select>
            </div>
        ))
      }
    </div>
  );


};


export default DropDownList;