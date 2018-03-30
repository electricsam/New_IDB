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
import Styles from './TsunamiSearchContainerStyle.css';


const InsertTsunami = props => (
  <div>
    <MinMax model=".tsunami.insert.year"
            title="Year"
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Year"}}
    />
    <MinMax model=".tsunami.insert.month"
            title="Month"
            min={validationConstants.month.min}
            max={validationConstants.month.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Month"}}
    />
    <MinMax model=".tsunami.insert.day"
            title="Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Day"}}
    />
    <MinMax model=".tsunami.insert.hour"
            title="Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Hour"}}
    />
    <MinMax model=".tsunami.insert.minute"
            title="Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Minute"}}
    />
    <MinMax model=".tsunami.insert.second"
            title="Second"
            min={validationConstants.second.min}
            max={validationConstants.second.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Second"}}
    />
    <MinMax model=".tsunami.insert.latitude"
            title="Latitude"
            min={validationConstants.latitude.min}
            max={validationConstants.latitude.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Latitude"}}
    />
    <MinMax model=".tsunami.insert.longitude"
            title="Longitude"
            min={validationConstants.longitude.min}
            max={validationConstants.longitude.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Longitude"}}
    />
    <MinMax model=".tsunami.insert.eqDepth"
            title="Earthquake Depth"
            min={validationConstants.eqDepth.min}
            max={validationConstants.eqDepth.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Earthquake Depth"}}
    />
    <div>
      <label htmlFor=".tsunami.insert.locationName">Location Name</label>
      <Control.text
        model=".tsunami.insert.locationName"
        id=".tsunami.insert.locationName"
      />
    </div>
    <DropDown title="Country" model=".tsunami.insert.country" data={countries}/>
    <DropDown title="Region" model=".tsunami.insert.region" data={regions}/>

    <div>
      <div>Area</div>
      <DropDown title="State" model=".tsunami.insert.area" data={states}/>
      <DropDown title="Canadian Province" model=".tsunami.insert.area" data={canadianProvince}/>
      <DropDown title="Japanese Prefecture" model=".tsunami.insert.area" data={japanesePrefecture}/>
      <DropDown title="Indonesian Province" model=".tsunami.insert.area" data={indonesianProvince}/>
    </div>

    <div>
      <div>Earthquake Magnitude</div>
      <MinMax model=".tsunami.insert.eqMagUnk"
              title="UNK"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
      <MinMax model=".tsunami.insert.eqMagMb"
              title="MB"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
      <MinMax model=".tsunami.insert.eqMagMs"
              title="MS"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
      <MinMax model=".tsunami.insert.eqMagMw"
              title="MW"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
      <MinMax model=".tsunami.insert.eqMagMfa"
              title="Mfa"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
      <MinMax model=".tsunami.insert.eqMagMl"
              title="ML"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}
      />
    </div>

    <MinMax model=".tsunami.insert.causeCode"
            title="Cause Code"
            min={validationConstants.cause.min}
            max={validationConstants.cause.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Cause Code"}}
    />
    <MinMax model=".tsunami.insert.eventValidity"
            title="Event Validity"
            min={validationConstants.validity.min}
            max={validationConstants.validity.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Event Validity"}}
    />
    <MinMax model=".tsunami.insert.maxEventRunup"
            title="Maximum Water Height (meters)"
            min={validationConstants.waterHeight.min}
            max={validationConstants.waterHeight.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Maximum Water Height"}}
    />

    <div>
      <div>Tsunami Magnitude</div>
      <MinMax model=".tsunami.insert.eqMtAbe"
              title="Abe"
              min={validationConstants.tsMag.min}
              max={validationConstants.tsMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Abe"}}
      />
      <MinMax model=".tsunami.insert.eqMtII"
              title="Iida-Imamura"
              min={validationConstants.tsMag.min}
              max={validationConstants.tsMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Iida-Imamura"}}
      />
    </div>

    <MinMax model=".tsunami.insert.tsIntensity"
            title="Tsunami Intensity: Soloviev"
            min={validationConstants.tsMag.min}
            max={validationConstants.tsMag.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Tsunami Intensity"}}
    />

    <MinMax model=".tsunami.insert.warningStatusId"
            title="Tsunami Warning Status"
            min={validationConstants.warningStatus.min}
            max={validationConstants.warningStatus.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Warning Status"}}
    />

    <div>
      <div>Damage</div>
      <MinMax
        model=".tsunami.insert.damageMillionsofDollars"
        title="Damage in Millions of Dollars"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Damage"}}
      />
      <MinMax
        model=".tsunami.insert.damageAmountOrder"
        title="Damage Description"
        min={validationConstants.damageDescription.min}
        max={validationConstants.damageDescription.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Damage Description"}}
      />
    </div>

    <div>
      <div>Houses Destoyed</div>
      <MinMax
        model=".tsunami.insert.housesDestroyed"
        title="Number of Houses Destroyed"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Houses Destroyed"}}
      />
      <MinMax
        model=".tsunami.insert.housesAmountOrder"
        title="Houses Destroyed Description"
        min={validationConstants.housesDestroyedDescription.min}
        max={validationConstants.housesDestroyedDescription.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Houses Destroyed Description"}}
      />
    </div>

    <div>
      <div>Deaths</div>
      <MinMax
        model=".tsunami.insert.deaths"
        title="Number of Deaths"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Deaths"}}
      />
      <MinMax
        model=".tsunami.insert.deathsAmountOrder"
        title="Death Description"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Deaths Description"}}
      />
    </div>

    <div>
      <div>Injuries</div>
      <MinMax
        model=".tsunami.insert.injuries"
        title="Number of Injuries"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Injuries"}}
      />
      <MinMax
        model=".tsunami.insert.injuriesAmountOrder"
        title="Injury Description"
        min={validationConstants.injuryDescription.min}
        max={validationConstants.injuryDescription.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Injury Description"}}
      />
    </div>

    <div>
      <div>Missing</div>
      <MinMax
        model=".tsunami.insert.missing"
        title="Number of Missing"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Missing"}}
      />
      <MinMax
        model=".tsunami.insert.missingAmountOrder"
        title="Missing Description"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
        validMessage={{valid: "Invalid Missing Description"}}
      />
    </div>


    <div>
      <div>Tsunami and Source Event Total Effects: </div>
      <div>
        <div>Total Damage in Millions of Dollars</div>
        <MinMax
          model=".tsunami.insert.damageMillionsofDollarsTotal"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage"}}
        />
        <MinMax
          model=".tsunami.insert.damageAmountOrderTotal"
          title="Damage Description"
          min={validationConstants.damageDescription.min}
          max={validationConstants.damageDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage Description"}}
        />
      </div>

      <div>
        <div>Total Houses Destoyed</div>
        <MinMax
          model=".tsunami.insert.housesDestroyedTotal"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Houses Destroyed"}}
        />
        <MinMax
          model=".tsunami.insert.housesAmountOrderTotal"
          title="Houses Destroyed Description"
          min={validationConstants.housesDestroyedDescription.min}
          max={validationConstants.housesDestroyedDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Houses Destroyed"}}
        />
      </div>

      <div>
        <div>Total Deaths</div>
        <MinMax
          model=".tsunami.insert.deathsTotal"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Deaths"}}
        />
        <MinMax
          model=".tsunami.insert.deathsAmountOrderTotal"
          title="Death Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Deaths Description"}}
        />
      </div>

      <div>
        <div>Total Injuries</div>
        <MinMax
          model=".tsunami.insert.injuriesTotal"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Injuries"}}
        />
        <MinMax
          model=".tsunami.insert.injuriesAmountOrderTotal"
          title="Injury Description"
          min={validationConstants.injuryDescription.min}
          max={validationConstants.injuryDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Injury Description"}}
        />
      </div>

      <div>
        <div>Total Missing</div>
        <MinMax
          model=".tsunami.insert.missingTotal"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Missing"}}
        />
        <MinMax
          model=".tsunami.insert.missingAmountOrderTotal"
          title="Missing Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Total Missing Description"}}
        />
      </div>
    </div>

    <div>
      <label htmlFor=".tsunami.insert.comments"></label>
      <Control.textarea
        model=".tsunami.insert.comments"
        id=".tsunami.insert.comments"
      />
    </div>

  </div>
)

export default InsertTsunami;