import React from 'react'
import { Control, Errors } from 'react-redux-form/immutable';

import { validationConstants } from "./constants";

import MinMax from '../searchFormPartials/MinMax';
import Styles from './TsunamiSearchContainerStyle.css';

const TotalTsunamiEffects = props => (
  <div className={Styles.formSectionThree}>
    <div className={Styles.header}>
      <h3>Total Tsunami Effects</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showTsunamiEffectsForm ?
            <i className="material-icons" onClick={props.toggleTsunamiEffectsForm}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleTsunamiEffectsForm}>&#xE5CF;</i>
        }
      </div>
    </div>
    {
      props.showTsunamiEffectsForm ?
      <div className={Styles.formInnerSectionThree}>
        <div className={Styles.numRunups}>
          <div className={Styles.minMaxTitle}>Number of Runups</div>
          <MinMax
            model=".tsunami.search.numberofrunupsmin"
            title="Min"
            min={validationConstants.numberOfRunups.min}
            max={validationConstants.numberOfRunups.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Number of Runups"}}
          />
          <MinMax
            model=".tsunami.search.numberofrunupsmax"
            title="Max"
            min={validationConstants.numberOfRunups.min}
            max={validationConstants.numberOfRunups.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Number of Runups"}}
          />
        </div>

        <div className={Styles.maxWater}>
          <div className={Styles.minMaxTitle}>Maximum Water Height</div>
          <MinMax
            model=".tsunami.search.waterheightmin"
            title="Min"
            min={validationConstants.waterHeight.min}
            max={validationConstants.waterHeight.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Water Height"}}
          />
          <MinMax
            model=".tsunami.search.waterheightmax"
            title="Max"
            min={validationConstants.waterHeight.min}
            max={validationConstants.waterHeight.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Water Height"}}
          />
        </div>

        <div className={Styles.numDeaths}>
          <div className={Styles.minMaxTitle}>Number of Deaths</div>
          <MinMax
            model=".tsunami.search.numberofdeathsmin"
            title="Min"
            min={validationConstants.numberOfDeaths.min}
            max={validationConstants.numberOfDeaths.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Deaths"}}
          />
          <MinMax
            model=".tsunami.search.numberofdeathsmax"
            title="Max"
            min={validationConstants.numberOfDeaths.min}
            max={validationConstants.numberOfDeaths.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid MAx Deaths"}}
          />
        </div>

        <div className={Styles.deathDescrip}>
          <div className={Styles.minMaxTitle}>Death Description</div>
          <MinMax
            model=".tsunami.search.deathdescriptionmin"
            title="Min"
            min={validationConstants.deathDescription.min}
            max={validationConstants.deathDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Death Description"}}
          />
          <MinMax
            model=".tsunami.search.deathdescriptionmax"
            title="Max"
            min={validationConstants.deathDescription.min}
            max={validationConstants.deathDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Death Description"}}
          />
        </div>

        <div className={Styles.numInjuries}>
          <div className={Styles.minMaxTitle}>Number of Injuries</div>
          <MinMax
            model=".tsunami.search.numberofinjuriesmin"
            title="Min"
            min={validationConstants.numberOfInjuries.min}
            max={validationConstants.numberOfInjuries.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Injuries"}}
          />
          <MinMax
            model=".tsunami.search.numberofinjuriesmax"
            title="Max"
            min={validationConstants.numberOfInjuries.min}
            max={validationConstants.numberOfInjuries.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Injuries"}}
          />
        </div>

        <div className={Styles.injuryDescrip}>
          <div className={Styles.minMaxTitle}>Injuries Description</div>
          <MinMax
            model=".tsunami.search.injurydescriptmin"
            title="Min"
            min={validationConstants.injuryDescription.min}
            max={validationConstants.injuryDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Injury Description"}}
          />
          <MinMax
            model=".tsunami.search.injurydescriptmax"
            title="Max"
            min={validationConstants.injuryDescription.min}
            max={validationConstants.injuryDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Injury Description"}}
          />
        </div>

        <div className={Styles.damage}>
          <div className={Styles.minMaxTitle}>Damage in Millions of Dollars</div>
          <MinMax
            model=".tsunami.search.damageinmillionsmin"
            title="Min"
            min={validationConstants.damageInMillions.min}
            max={validationConstants.damageInMillions.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Damage"}}
          />
          <MinMax
            model=".tsunami.search.damageinmillionsmax"
            title="Max"
            min={validationConstants.damageInMillions.min}
            max={validationConstants.damageInMillions.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Damage"}}
          />
        </div>

        <div className={Styles.damageDescrip}>
          <div className={Styles.minMaxTitle}>Damage Description</div>
          <MinMax
            model=".tsunami.search.damagedescriptmin"
            title="Min"
            min={validationConstants.damageDescription.min}
            max={validationConstants.damageDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Damage Description"}}
          />
          <MinMax
            model=".tsunami.search.damagedescriptmax"
            title="Max"
            min={validationConstants.damageDescription.min}
            max={validationConstants.damageDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Damage Description"}}
          />
        </div>

        <div className={Styles.numHouses}>
          <div className={Styles.minMaxTitle}>Number of Houses Destroyed</div>
          <MinMax
            model=".tsunami.search.numhousesdestroyedmin"
            title="Min"
            min={validationConstants.numberOfHousesDestroyed.min}
            max={validationConstants.numberOfHousesDestroyed.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Houses Destroyed"}}
          />
          <MinMax
            model=".tsunami.search.numhousesdestroyedmax"
            title="Max"
            min={validationConstants.numberOfHousesDestroyed.min}
            max={validationConstants.numberOfHousesDestroyed.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Houses Destroyed"}}
          />
        </div>

        <div className={Styles.housesDescrip}>
          <div className={Styles.minMaxTitle}>Houses Destroyed Description</div>
          <MinMax
            model=".tsunami.search.housesdescriptmin"
            title="Min"
            min={validationConstants.housesDestroyedDescription.min}
            max={validationConstants.housesDestroyedDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Houses Destroyed Description"}}
          />
          <MinMax
            model=".tsunami.search.housesdescriptmax"
            title="Max"
            min={validationConstants.housesDestroyedDescription.min}
            max={validationConstants.housesDestroyedDescription.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Houses Destroyed Description"}}
          />
        </div>
      </div>:
      <div></div>
    }


  </div>
)

export default TotalTsunamiEffects;