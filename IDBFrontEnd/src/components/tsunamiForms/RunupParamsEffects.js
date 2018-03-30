import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, regions, rnpMeasureType, validationConstants} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from "./RunupSearchContainerStyle.css";

const RunupParamsEffects = props => (
  <div className={Styles.formSectionThree}>
    <div className={Styles.header}>
      <h3>Tsunami Runup Parameters and Effects Information</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showParamsEffect ?
            <i className="material-icons" onClick={props.toggleShowRunupParams}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleShowRunupParams}>&#xE5CF;</i>
        }
      </div>
    </div>

    {
      props.showParamsEffect?
      <div className={Styles.formInnerSectionThree}>
        <div className={Styles.typeOfMeasure}>
          <DropDown title="Type of Measurement" model=".tsunami.rnpsearch.typeofmeasure" data={rnpMeasureType}/>
        </div>

        <div className={Styles.waterHt}>
          <div>Water Height</div>
          <MinMax model=".tsunami.rnpsearch.minwaterht"
                  title="Min"
                  min={validationConstants.waterHeight.min}
                  max={validationConstants.waterHeight.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Min Water Height"}}
          />
          <MinMax model=".tsunami.rnpsearch.maxwaterht"
                  title="Max"
                  min={validationConstants.waterHeight.min}
                  max={validationConstants.waterHeight.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Max Water Height"}}
          />
        </div>

        <div className={Styles.deaths}>
          <div>Number of Deaths at Runup Location</div>
          <MinMax model=".tsunami.rnpsearch.deathsmin"
                  title="Min"
                  min={validationConstants.numberOfDeaths.min}
                  max={validationConstants.numberOfDeaths.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Min Deaths"}}
          />
          <MinMax model=".tsunami.rnpsearch.deathsmax"
                  title="Max"
                  min={validationConstants.numberOfDeaths.min}
                  max={validationConstants.numberOfDeaths.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Max Deaths"}}
          />
        </div>

        <div className={Styles.damage}>
          <div>Damage in Millions of Dollars at the Runup Location</div>
          <MinMax model=".tsunami.rnpsearch.damagemillionsmin"
                  title="Min"
                  min={validationConstants.damageInMillions.min}
                  max={validationConstants.damageInMillions.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Min Damage"}}
          />
          <MinMax model=".tsunami.rnpsearch.damagemillionsmax"
                  title="Max"
                  min={validationConstants.damageInMillions.min}
                  max={validationConstants.damageInMillions.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Max Damage"}}
          />
        </div>

      </div>:
      <div></div>
    }


  </div>

)


export default RunupParamsEffects;