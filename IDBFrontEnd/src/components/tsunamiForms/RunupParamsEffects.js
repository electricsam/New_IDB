import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, regions, rnpMeasureType, validationConstants} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';

const RunupParamsEffects = props => (
  <div>
    <div>
      <h3>Tsunami Runup Parameters and Effects Information</h3>
    </div>

    <DropDown title="Type of Measurement" model=".tsunami.rnpsearch.typeofmeasure" data={rnpMeasureType}/>

    <div>
      <div>Water Height</div>
      <MinMax model=".tsunami.rnpsearch.minwaterht"
              title="Min"
              min={validationConstants.waterHeight.min}
              max={validationConstants.waterHeight.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpsearch.maxwaterht"
              title="Max"
              min={validationConstants.waterHeight.min}
              max={validationConstants.waterHeight.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Number of Deaths at Runup Location</div>
      <MinMax model=".tsunami.rnpsearch.deathsmin"
              title="Min"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpsearch.deathsmax"
              title="Max"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Damage in Millions of Dollars at the Runup Location</div>
      <MinMax model=".tsunami.rnpsearch.damagemillionsmin"
              title="Min"
              min={validationConstants.damageInMillions.min}
              max={validationConstants.damageInMillions.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpsearch.damagemillionsmax"
              title="Max"
              min={validationConstants.damageInMillions.min}
              max={validationConstants.damageInMillions.max}
              validMinMax={props.validateMinMax}/>
    </div>

  </div>

)


export default RunupParamsEffects;