import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';
import {countries, canadianProvince, states, regions, validationConstants, rnpMeasureType} from "../tsunamiForms/constants";

import DropDown from '../searchFormPartials/DropDown.jsx'
import MinMax from '../searchFormPartials/MinMax'

import Styles from './TsunamiSearchContainerStyle.css';


const TotalTsunamiandSourceEffects = props => (
  <div className={Styles.formSectionFour}>

    <div className={Styles.header}>
      <h3>Tsunami Source Parameters</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showTotalTsunamiSourceForm ?
            <i className="material-icons" onClick={props.toggleTotalTsunamiSourceForm}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleTotalTsunamiSourceForm}>&#xE5CF;</i>
        }
      </div>
    </div>

    {
      props.showTotalTsunamiSourceForm ?
        <div className={Styles.formInnerSectionFour}>
          <div className={Styles.deathsTotal}>
            <div className={Styles.minMaxTitle}>Total Number of Deaths</div>
            <MinMax model=".tsunami.search.totaldeathsmin"
                    title="Min"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Total Deaths"}}
            />
            <MinMax model=".tsunami.search.totaldeathsmax"
                    title="Max"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Total Deaths"}}
            />
          </div>

          <div className={Styles.deathTotalDescrip}>
            <div className={Styles.minMaxTitle}>Total Death Description</div>
            <MinMax model=".tsunami.search.totaldeathdescripmin"
                    title="Min"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Total Death Description"}}
            />
            <MinMax model=".tsunami.search.totaldeathdescripmax"
                    title="Max"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Total Death Description"}}
            />
          </div>

          {/*<DropDown title="Validity of Runup" model=".tsunami.search.runupvalidity" data=/>*/}


          <div className={Styles.typeMeasure}>
            <div className={Styles.minMaxTitle}> Type of Measurement</div>
            <DropDown title="Type of Measurement" model=".tsunami.search.rnpmeasuretype" data={rnpMeasureType}/>
          </div>

          <div className={Styles.vertHt}>
            <div className={Styles.minMaxTitle}>Vertical Height at Runup Location</div>
            <MinMax model=".tsunami.search.rnphtmin"
                    title="Min"
                    min={validationConstants.waterHeight.min}
                    max={validationConstants.waterHeight.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Height"}}
            />
            <MinMax model=".tsunami.search.rnphtmax"
                    title="Max"
                    min={validationConstants.waterHeight.min}
                    max={validationConstants.waterHeight.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Height"}}
            />
          </div>


          <div className={Styles.rnpDeaths}>
            <div className={Styles.minMaxTitle}>Number of Deaths at Runup Location</div>
            <MinMax model=".tsunami.search.rnpdeathmin"
                    title="Min"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Deaths"}}
            />
            <MinMax model=".tsunami.search.rnpdeathmax"
                    title="Max"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Deaths"}}
            />
          </div>

          <div className={Styles.rnpDeathDescrip}>
            <div className={Styles.minMaxTitle}>Death Description</div>
            <MinMax model=".tsunami.search.rnpdeathdescripmin"
                    title="Min"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Death Description"}}
            />
            <MinMax model=".tsunami.search.rnpdeathdescripmax"
                    title="Max"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Death Description"}}
            />
          </div>

          <div className={Styles.rnpInjuries}>
            <div className={Styles.minMaxTitle}>Number of Injuries at Runup Location</div>
            <MinMax model=".tsunami.search.rnpinjurymin"
                    title="Min"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Injuries"}}
            />
            <MinMax model=".tsunami.search.rnpinjurymax"
                    title="Max"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Injuries"}}
            />
          </div>

          <div className={Styles.rnpInjuryDescrip}>
            <div className={Styles.minMaxTitle}>Injury Description</div>
            <MinMax model=".tsunami.search.rnpinjurydescripmin"
                    title="Min"
                    min={validationConstants.injuryDescription.min}
                    max={validationConstants.injuryDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Injury Description"}}
            />
            <MinMax model=".tsunami.search.rnpinjurydescripmax"
                    title="Max"
                    min={validationConstants.injuryDescription.min}
                    max={validationConstants.injuryDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Injury Description"}}
            />
          </div>

          <div className={Styles.rnpDamage}>
            <div className={Styles.minMaxTitle}>Damage in Millions of Dollars</div>
            <MinMax model=".tsunami.search.rnpdamagemin"
                    title="Min"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Damage"}}
            />
            <MinMax model=".tsunami.search.rnpdamagemax"
                    title="Max"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Damage"}}
            />
          </div>

          <div className={Styles.rnpDamageDescrip}>
            <div className={Styles.minMaxTitle}>Damage Description</div>
            <MinMax model=".tsunami.search.rnpdamagedescripmin"
                    title="Min"
                    min={validationConstants.damageDescription.min}
                    max={validationConstants.damageDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Damage Description"}}
            />
            <MinMax model=".tsunami.search.rnpdamagedescripmax"
                    title="Max"
                    min={validationConstants.damageDescription.min}
                    max={validationConstants.damageDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Damage Description"}}
            />
          </div>

          <div className={Styles.rnpHouses}>
            <div className={Styles.minMaxTitle}>Number of Houses Destroyed at Runup Location</div>
            <MinMax model=".tsunami.search.rnphousesmin"
                    title="Min"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Houses Destroyed"}}
            />
            <MinMax model=".tsunami.search.rnphousesmax"
                    title="Max"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Houses Destroyed"}}
            />
          </div>

          <div className={Styles.rnpHousesDescrip}>
            <div className={Styles.minMaxTitle}>Houses Destoryed Description</div>
            <MinMax model=".tsunami.search.rnphousesdescripmin"
                    title="Min"
                    min={validationConstants.housesDestroyedDescription.min}
                    max={validationConstants.housesDestroyedDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Houses Destroyed Description"}}
            />
            <MinMax model=".tsunami.search.rnphousesdescripmax"
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

export default TotalTsunamiandSourceEffects;