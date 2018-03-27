import React from 'react'
import { Control, Errors } from 'react-redux-form/immutable';

import { validationConstants } from "./constants";

import MinMax from '../searchFormPartials/MinMax';
import Styles from './TsunamiSearchContainerStyle.css';

const TotalTsunamiEffects = props => (
  <div className={Styles.formSectionThree}>
    <div className={Styles.header}>
      <h3>Total Tsunami Effects</h3>
    </div>

    <div className={Styles.numRunups}>
      <div>Number of Runups</div>
      <MinMax
        model=".tsunami.search.numberofrunupsmin"
        title="Min"
        min={validationConstants.numberOfRunups.min}
        max={validationConstants.numberOfRunups.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.numberofrunupsmax"
        title="Max"
        min={validationConstants.numberOfRunups.min}
        max={validationConstants.numberOfRunups.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.maxWater}>
      <div>Maximum Water Height</div>
      <MinMax
        model=".tsunami.search.waterheightmin"
        title="Min"
        min={validationConstants.waterHeight.min}
        max={validationConstants.waterHeight.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.waterheightmax"
        title="Max"
        min={validationConstants.waterHeight.min}
        max={validationConstants.waterHeight.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.numDeaths}>
      <div>Number of Deaths</div>
      <MinMax
        model=".tsunami.search.numberofdeathsmin"
        title="Min"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.numberofdeathsmax"
        title="Max"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.deathDescrip}>
      <div>Death Description</div>
      <MinMax
        model=".tsunami.search.deathdescriptionmin"
        title="Min"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.deathdescriptionmax"
        title="Max"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.numInjuries}>
      <div>Number of Injuries</div>
      <MinMax
        model=".tsunami.search.numberofinjuriesmin"
        title="Min"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.numberofinjuriesmax"
        title="Max"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.injuryDescrip}>
      <div>Injuries Description</div>
      <MinMax
        model=".tsunami.search.injurydescriptmin"
        title="Min"
        min={validationConstants.injuryDescription.min}
        max={validationConstants.injuryDescription.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.injurydescriptmax"
        title="Max"
        min={validationConstants.injuryDescription.min}
        max={validationConstants.injuryDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.damage}>
      <div>Damage in Millions of Dollars</div>
      <MinMax
        model=".tsunami.search.damageinmillionsmin"
        title="Min"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.damageinmillionsmax"
        title="Max"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.damageDescrip}>
      <div>Damage Description</div>
      <MinMax
        model=".tsunami.search.damagedescriptmin"
        title="Min"
        min={validationConstants.damageDescription.min}
        max={validationConstants.damageDescription.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.damagedescriptmax"
        title="Max"
        min={validationConstants.damageDescription.min}
        max={validationConstants.damageDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.numHouses}>
      <div>Number of Houses Destroyed</div>
      <MinMax
        model=".tsunami.search.numhousesdestroyedmin"
        title="Min"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.numhousesdestroyedmax"
        title="Max"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div className={Styles.housesDescrip}>
      <div>Houses Destroyed Description</div>
      <MinMax
        model=".tsunami.search.housesdescriptmin"
        title="Min"
        min={validationConstants.housesDestroyedDescription.min}
        max={validationConstants.housesDestroyedDescription.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.search.housesdescriptmax"
        title="Max"
        min={validationConstants.housesDestroyedDescription.min}
        max={validationConstants.housesDestroyedDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

  </div>
)

export default TotalTsunamiEffects;