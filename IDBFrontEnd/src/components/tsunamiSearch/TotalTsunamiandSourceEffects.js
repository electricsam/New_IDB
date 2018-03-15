import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, canadianProvince, states, regions, validationConstants, rnpMeasureType} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx'
import MinMax from '../searchFormPartials/MinMax'

import Styles from './TsunamiSearchContainerStyle.css';


const TotalTsunamiandSourceEffects = props => (
  <div className={Styles.formSectionFour}>

    <div className={Styles.header}>
      <h3>Tsunami Source Parameters</h3>
    </div>

    <div>
      <div>Total Number of Deaths</div>
      <MinMax model=".tsunami.search.totaldeathsmin"
              title="Min"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.totaldeathsmax"
              title="Max"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Total Death Description</div>
      <MinMax model=".tsunami.search.totaldeathdescripmin"
              title="Min"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.totaldeathdescripmax"
              title="Max"
              min={validationConstants.deathDescription.min}
              max={validationConstants.deathDescription.max}
              validMinMax={props.validateMinMax}/>
    </div>

    //TODO: add migration to DB to change "doubtful" column such that valid is not null - instead it reads "Valid" or some other number

    {/*<DropDown title="Validity of Runup" model=".tsunami.search.runupvalidity" data=/>*/}

    <DropDown title="Type of Measurement" model=".tsunami.search.rnpmeasuretype" data={rnpMeasureType}/>

    <div>
      <div>Vertical Height at Runup Location</div>
      <MinMax model=".tsunami.search.rnphtmin"
              title="Min"
              min={validationConstants.waterHeight.min}
              max={validationConstants.waterHeight.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnphtmax"
              title="Max"
              min={validationConstants.waterHeight.min}
              max={validationConstants.waterHeight.max}
              validMinMax={props.validateMinMax}/>
    </div>


    <div>
      <div>Number of Deaths at Runup Location</div>
      <MinMax model=".tsunami.search.rnpdeathmin"
              title="Min"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpdeathmax"
              title="Max"
              min={validationConstants.numberOfDeaths.min}
              max={validationConstants.numberOfDeaths.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Death Description</div>
      <MinMax model=".tsunami.search.rnpdeathdescripmin"
              title="Min"
              min={validationConstants.deathDescription.min}
              max={validationConstants.deathDescription.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpdeathdescripmax"
              title="Max"
              min={validationConstants.deathDescription.min}
              max={validationConstants.deathDescription.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Number of Injuries at Runup Location</div>
      <MinMax model=".tsunami.search.rnpinjurymin"
              title="Min"
              min={validationConstants.numberOfInjuries.min}
              max={validationConstants.numberOfInjuries.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpinjurymax"
              title="Max"
              min={validationConstants.numberOfInjuries.min}
              max={validationConstants.numberOfInjuries.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Injury Description</div>
      <MinMax model=".tsunami.search.rnpinjurydescripmin"
              title="Min"
              min={validationConstants.injuryDescription.min}
              max={validationConstants.injuryDescription.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpinjurydescripmax"
              title="Max"
              min={validationConstants.injuryDescription.min}
              max={validationConstants.injuryDescription.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Damage in Millions of Dollars</div>
      <MinMax model=".tsunami.search.rnpdamagemin"
              title="Min"
              min={validationConstants.damageInMillions.min}
              max={validationConstants.damageInMillions.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpdamagemax"
              title="Max"
              min={validationConstants.damageInMillions.min}
              max={validationConstants.damageInMillions.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Damage Description</div>
      <MinMax model=".tsunami.search.rnpdamagedescripmin"
              title="Min"
              min={validationConstants.damageDescription.min}
              max={validationConstants.damageDescription.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnpdamagedescripmax"
              title="Max"
              min={validationConstants.damageDescription.min}
              max={validationConstants.damageDescription.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Number of Houses Destroyed at Runup Location</div>
      <MinMax model=".tsunami.search.rnphousesmin"
              title="Min"
              min={validationConstants.numberOfHousesDestroyed.min}
              max={validationConstants.numberOfHousesDestroyed.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnphousesmax"
              title="Max"
              min={validationConstants.numberOfHousesDestroyed.min}
              max={validationConstants.numberOfHousesDestroyed.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Houses Destoryed Description</div>
      <MinMax model=".tsunami.search.rnphousesdescripmin"
              title="Min"
              min={validationConstants.housesDestroyedDescription.min}
              max={validationConstants.housesDestroyedDescription.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.search.rnphousesdescripmax"
              title="Max"
              min={validationConstants.housesDestroyedDescription.min}
              max={validationConstants.housesDestroyedDescription.max}
              validMinMax={props.validateMinMax}/>
    </div>

  </div>


)

export default TotalTsunamiandSourceEffects;