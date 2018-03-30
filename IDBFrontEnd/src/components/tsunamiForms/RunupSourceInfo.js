import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, canadianProvince, states, regions, validationConstants} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from "./RunupSearchContainerStyle.css"


const RunupSourceInfo = props => (

  <div className={Styles.formSectionOne}>
    {
      console.log(props)
    }
    <div className={Styles.header}>
      <h3>Runup Source Information</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showRunupSource ?
            <i className="material-icons" onClick={props.toggleShowRunupSource}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleShowRunupSource}>&#xE5CF;</i>
        }
      </div>
    </div>

    {
      props.showRunupSource ?
      <div className={Styles.formInnerSectionOne}>
        <div className={Styles.year}>
          <div >Year:</div>
          <MinMax
            model=".tsunami.rnpsearch.tsminyear"
            title="Min"
            validMessage={{valid: "Invalid Year"}}
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Year"}}
          />
          <MinMax
            model=".tsunami.rnpsearch.tsmaxyear"
            title="Max"
            validMessage={{valid: "Invalid Year"}}
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Year"}}
          />
        </div>

        <div className={Styles.region}>
          <DropDown title="Region" model=".tsunami.rnpsearch.tsregion" data={regions}/>
        </div>
        <div className={Styles.country}>
          <DropDown title="Country" model=".tsunami.rnpsearch.tscountry" data={countries} />
        </div>
      </div>:
      <div></div>

    }

  </div>

);


export default RunupSourceInfo;