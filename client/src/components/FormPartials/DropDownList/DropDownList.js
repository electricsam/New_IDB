import React from 'react';
import { Control } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './DropDownListStyles.css'

/**
 * Component that generates a number of dropdown menus based upon passed props
 *
 * @module DropDownList
 * @param props
 * @return {*}
 */
const DropDownList = props => {
  return (
    <div className={Styles.container}>
      {
        props.list.map(e => (
            <div className={Styles.drop}>
              <label htmlFor={e.model}>{e.title}</label>
              <Control.select model={e.model} id={e.model} disabled={() => props.checkDropDownDisabled(e.disabled)}>
                {e.data.map(x => <option value={x.value}>{x.name}</option>)}
              </Control.select>
            </div>
        ))
      }
    </div>
  );
};

export default DropDownList;

DropDownList.propTypes = {
  list: PropTypes.array.isRequired,
  checkDropDownDisabled: PropTypes.func.isRequired
};