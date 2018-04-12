import React from 'react'
import { Control, Errors } from 'react-redux-form/immutable';

import {
  regions,
  states,
  canadianProvince,
  countries,
  japanesePrefecture,
  indonesianProvince,
  validationConstants
} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './UpdateTsunamiStyles.css';



const UpdateTsunami = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Update Tsunami</h3>
    </div>
    <div className={Styles.formInnerSectionOne}>
      <div className={Styles.year}>
        <div className={Styles.minMaxTitle}>Year</div>
        <MinMax model=".tsunami.tsEvent[0].year"
                title=""
                min={validationConstants.year.min}
                max={validationConstants.year.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Year"}}
        />
      </div>
      <div className={Styles.month}>
        <div className={Styles.minMaxTitle}>Month</div>
        <MinMax model=".tsunami.tsEvent[0].month"
                title=""
                min={validationConstants.month.min}
                max={validationConstants.month.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Month"}}
        />
      </div>
      <div className={Styles.day}>
        <div className={Styles.minMaxTitle}>Day</div>
        <MinMax model=".tsunami.tsEvent[0].day"
                title=""
                min={validationConstants.day.min}
                max={validationConstants.day.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Day"}}
        />
      </div>
      <div className={Styles.hour}>
        <div className={Styles.minMaxTitle}>Hour</div>
        <MinMax model=".tsunami.tsEvent[0].hour"
                title=""
                min={validationConstants.hour.min}
                max={validationConstants.hour.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Hour"}}
        />
      </div>
      <div className={Styles.minute}>
        <div className={Styles.minMaxTitle}>Minute</div>
        <MinMax model=".tsunami.tsEvent[0].minute"
                title=""
                min={validationConstants.minute.min}
                max={validationConstants.minute.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Minute"}}
        />
      </div>
      <div className={Styles.second}>
        <div className={Styles.minMaxTitle}>Second</div>
        <MinMax model=".tsunami.tsEvent[0].second"
                title=""
                min={validationConstants.second.min}
                max={validationConstants.second.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Second"}}
        />
      </div>
      <div className={Styles.latitude}>
        <div className={Styles.minMaxTitle}>Latitude</div>
        <MinMax model=".tsunami.tsEvent[0].latitude"
                title=""
                min={validationConstants.latitude.min}
                max={validationConstants.latitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Latitude"}}
        />
      </div>
      <div className={Styles.longitude}>
        <div className={Styles.minMaxTitle}>Longitude</div>
        <MinMax model=".tsunami.tsEvent[0].longitude"
                title=""
                min={validationConstants.longitude.min}
                max={validationConstants.longitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Longitude"}}
        />
      </div>
      <div className={Styles.eqDepth}>
        <div className={Styles.minMaxTitle}>Earthquake Depth</div>
        <MinMax model=".tsunami.tsEvent[0].eqDepth"
                title=""
                min={validationConstants.eqDepth.min}
                max={validationConstants.eqDepth.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Depth"}}
        />
      </div>
      <div className={Styles.location}>
        <div className={Styles.minMaxTitle}>Location</div>
        <Control.text
          model=".tsunami.tsEvent[0].locationName"
          id=".tsunami.tsEvent[0].locationName"
        />
      </div>


      <div className={Styles.country}>
        <div className={Styles.minMaxTitle}>Country</div>
        <DropDown title="Country" model=".tsunami.tsEvent[0].country" data={countries}/>
      </div>
      <div className={Styles.region}>
        <div className={Styles.minMaxTitle}>Region</div>
        <DropDown title="Region" model=".tsunami.tsEvent[0].regionCode" data={regions}/>
      </div>

      <div className={Styles.area}>
        <div className={Styles.minMaxTitle}>Area</div>
        <DropDown title="State" model=".tsunami.tsEvent[0].area" data={states}/>
        <DropDown title="Canadian Province" model=".tsunami.tsEvent[0].area" data={canadianProvince}/>
        <DropDown title="Japanese Prefecture" model=".tsunami.tsEvent[0].area" data={japanesePrefecture}/>
        <DropDown title="Indonesian Province" model=".tsunami.tsEvent[0].area" data={indonesianProvince}/>
      </div>

      <div className={Styles.eqMag}>
        <div className={Styles.minMaxTitle}>Earthquake Magnitude</div>
        <MinMax model=".tsunami.tsEvent[0].eqMagUnk"
                title="UNK"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
        <MinMax model=".tsunami.tsEvent[0].eqMagMb"
                title="MB"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
        <MinMax model=".tsunami.tsEvent[0].eqMagMs"
                title="MS"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
        <MinMax model=".tsunami.tsEvent[0].eqMagMw"
                title="MW"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
        <MinMax model=".tsunami.tsEvent[0].eqMagMfa"
                title="Mfa"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
        <MinMax model=".tsunami.tsEvent[0].eqMagMl"
                title="ML"
                min={validationConstants.eqMag.min}
                max={validationConstants.eqMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
      </div>

      <div className={Styles.cause}>
        <div className={Styles.minMaxTitle}>Cause Code</div>
        <MinMax model=".tsunami.tsEvent[0].causeCode"
                title=""
                min={validationConstants.cause.min}
                max={validationConstants.cause.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Cause Code"}}
        />
      </div>
      <div className={Styles.validity}>
        <div className={Styles.minMaxTitle}>Event Validity</div>
        <MinMax model=".tsunami.tsEvent[0].eventValidity"
                title=""
                min={validationConstants.validity.min}
                max={validationConstants.validity.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Event Validity"}}
        />
      </div>
      <div className={Styles.maxRunup}>
        <div className={Styles.minMaxTitle}>Maximum Water Height (meters)</div>
        <MinMax model=".tsunami.tsEvent[0].maxEventRunup"
                title=""
                min={validationConstants.waterHeight.min}
                max={validationConstants.waterHeight.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Earthquake Magnitude"}}
        />
      </div>

      <div className={Styles.tsunamiMagnitude}>
        <div className={Styles.minMaxTitle}>Tsunami Magnitude</div>
        <MinMax model=".tsunami.tsEvent[0].tsMtAbe"
                title="Abe"
                min={validationConstants.tsMag.min}
                max={validationConstants.tsMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Abe"}}
        />
        <MinMax model=".tsunami.tsEvent[0].tsMtII"
                title="Iida-Imamura"
                min={validationConstants.tsMag.min}
                max={validationConstants.tsMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Iida-Imamura"}}
        />
      </div>


      <div className={Styles.intensity}>
        <div className={Styles.minMaxTitle}>Tsunami Intensity: Soloviev</div>
        <MinMax model=".tsunami.tsEvent[0].tsIntensity"
                title=""
                min={validationConstants.tsMag.min}
                max={validationConstants.tsMag.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Tsunami Intensity"}}
        />
      </div>

      <div className={Styles.warning}>
        <div className={Styles.minMaxTitle}>Tsunami Warning Status</div>
        <MinMax model=".tsunami.tsEvent[0].warningStatusId"
                title=""
                min={validationConstants.warningStatus.min}
                max={validationConstants.warningStatus.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Warning Status"}}
        />
      </div>

      <div className={Styles.damage}>
        <div className={Styles.minMaxTitle}>Damage</div>
        <MinMax
          model=".tsunami.tsEvent[0].damageMillionsDollars"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].damageAmountOrder"
          title="Damage Description"
          min={validationConstants.damageDescription.min}
          max={validationConstants.damageDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage Description"}}
        />
      </div>

      <div className={Styles.housesDestroyed}>
        <div className={Styles.minMaxTitle}>Houses Destoyed</div>
        <MinMax
          model=".tsunami.tsEvent[0].housesDestroyed"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Houses Destroyed"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].housesAmountOrder"
          title="Houses Destroyed Description"
          min={validationConstants.housesDestroyedDescription.min}
          max={validationConstants.housesDestroyedDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Houses Destroyed Description"}}
        />
      </div>

      <div className={Styles.deaths}>
        <div className={Styles.minMaxTitle}>Deaths</div>
        <MinMax
          model=".tsunami.tsEvent[0].deaths"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Number of Deaths"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].deathsAmountOrder"
          title="Death Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Death Description "}}
        />
      </div>

      <div className={Styles.injuries}>
        <div className={Styles.minMaxTitle}>Injuries</div>
        <MinMax
          model=".tsunami.tsEvent[0].injuries"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Number of Injuries"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].injuriesAmountOrder"
          title="Injury Description"
          min={validationConstants.injuryDescription.min}
          max={validationConstants.injuryDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Injury Description"}}
        />
      </div>

      <div className={Styles.missing}>
        <div className={Styles.minMaxTitle}>Missing</div>
        <MinMax
          model=".tsunami.tsEvent[0].missing"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Number of Missing"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].missingAmountOrder"
          title="Missing Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Missing Description"}}
        />
      </div>


      <div className={Styles.damageTotal}>
        <div className={Styles.minMaxTitle}>Damage in Millions of Dollars</div>
        <MinMax
          model=".tsunami.tsEvent[0].damageMillionsDollarsTotal"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].damageAmountOrderTotal"
          title="Damage Description"
          min={validationConstants.damageDescription.min}
          max={validationConstants.damageDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage Description"}}
        />
      </div>

      <div className={Styles.housesDestroyedTotal}>
        <div className={Styles.minMaxTitle}>Houses Destoyed</div>
        <MinMax
          model=".tsunami.tsEvent[0].housesDestroyedTotal"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Houses Destroyed"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].housesAmountOrderTotal"
          title="Houses Destroyed Description"
          min={validationConstants.housesDestroyedDescription.min}
          max={validationConstants.housesDestroyedDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Houses Destroyed Description"}}
        />
      </div>

      <div className={Styles.deathsTotal}>
        <div className={Styles.minMaxTitle}>Deaths</div>
        <MinMax
          model=".tsunami.tsEvent[0].deathsTotal"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Number of Total Deaths"}}
        />

        <MinMax
          model=".tsunami.tsEvent[0].deathsAmountOrderTotal"
          title="Death Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Deaths Description"}}
        />
      </div>

      <div className={Styles.injuriesTotal}>
        <div className={Styles.minMaxTitle}>Injuries</div>
        <MinMax
          model=".tsunami.tsEvent[0].injuriesTotal"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Number of Total Injuries"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].injuriesAmountOrderTotal"
          title="Injury Description"
          min={validationConstants.injuryDescription.min}
          max={validationConstants.injuryDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Injury Description"}}
        />
      </div>

      <div className={Styles.missingTotal}>
        <div className={Styles.minMaxTitle}>Missing</div>
        <MinMax
          model=".tsunami.tsEvent[0].missingTotal"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Number of Missing"}}
        />
        <MinMax
          model=".tsunami.tsEvent[0].missingAmountOrderTotal"
          title="Missing Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Missing Description "}}
        />
      </div>

      <div className={Styles.comments}>
        <div className={Styles.minMaxTitle}>Comments</div>
        <Control.textarea
          model=".tsunami.tsEvent[0].comments"
          id=".tsunami.tsEvent[0].comments"
        />
      </div>
    </div>


  </div>
)


export default UpdateTsunami;