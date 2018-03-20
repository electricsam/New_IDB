import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, canadianProvince, states, regions, validationConstants} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';

const RunupSourceInfo = props => (
  <div>
    <div>
      <h3>Tsunami Source Information</h3>
    </div>

    <div>
      <div >Year:</div>
      <MinMax
        model=".tsunami.rnpsearch.tsminyear"
        title="Min"
        validMessage={{valid: "Invalid Year"}}
        min={validationConstants.year.min}
        max={validationConstants.year.max}
        validMinMax={props.validateMinMax}/>
      <MinMax
        model=".tsunami.rnpsearch.tsmaxyear"
        title="Max"
        validMessage={{valid: "Invalid Year"}}
        min={validationConstants.year.min}
        max={validationConstants.year.max}
        validMinMax={props.validateMinMax}/>
    </div>

    <DropDown title="Region" model=".tsunami.rnpsearch.tsregion" data={regions} />

    <DropDown title="Country" model=".tsunami.rnpsearch.tscountry" data={countries} />
  </div>

)


export default RunupSourceInfo;