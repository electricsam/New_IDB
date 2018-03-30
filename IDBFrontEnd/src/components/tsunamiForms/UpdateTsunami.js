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


const UpdateTsunami = props => (
  <div>
    <MinMax model=".tsunami.tsEvent[0].year"
            title="Year"
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Year"}}
    />
    <MinMax model=".tsunami.tsEvent[0].month"
            title="Month"
            min={validationConstants.month.min}
            max={validationConstants.month.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Month"}}
    />
    <MinMax model=".tsunami.tsEvent[0].day"
            title="Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Day"}}
    />
    <MinMax model=".tsunami.tsEvent[0].hour"
            title="Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Hour"}}
    />
    <MinMax model=".tsunami.tsEvent[0].minute"
            title="Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Minute"}}
    />
    <MinMax model=".tsunami.tsEvent[0].second"
            title="Second"
            min={validationConstants.second.min}
            max={validationConstants.second.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Second"}}
    />
    <MinMax model=".tsunami.tsEvent[0].latitude"
            title="Latitude"
            min={validationConstants.latitude.min}
            max={validationConstants.latitude.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Latitude"}}
    />
    <MinMax model=".tsunami.tsEvent[0].longitude"
            title="Longitude"
            min={validationConstants.longitude.min}
            max={validationConstants.longitude.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Longitude"}}
    />
    <MinMax model=".tsunami.tsEvent[0].eqDepth"
            title="Earthquake Depth"
            min={validationConstants.eqDepth.min}
            max={validationConstants.eqDepth.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Earthquake Depth"}}
    />
    <div>
      <label htmlFor=".tsunami.tsEvent[0].locationName">Location Name</label>
      <Control.text
        model=".tsunami.tsEvent[0].locationName"
        id=".tsunami.tsEvent[0].locationName"
      />
    </div>
    <DropDown title="Country" model=".tsunami.tsEvent[0].country" data={countries}/>
    <DropDown title="Region" model=".tsunami.tsEvent[0].regionCode" data={regions}/>

    <div>
      <div>Area</div>
      <DropDown title="State" model=".tsunami.tsEvent[0].area" data={states}/>
      <DropDown title="Canadian Province" model=".tsunami.tsEvent[0].area" data={canadianProvince}/>
      <DropDown title="Japanese Prefecture" model=".tsunami.tsEvent[0].area" data={japanesePrefecture}/>
      <DropDown title="Indonesian Province" model=".tsunami.tsEvent[0].area" data={indonesianProvince}/>
    </div>

    <div>
      <div>Earthquake Magnitude</div>
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

    <MinMax model=".tsunami.tsEvent[0].causeCode"
            title="Cause Code"
            min={validationConstants.cause.min}
            max={validationConstants.cause.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Cause Code"}}
    />
    <MinMax model=".tsunami.tsEvent[0].eventValidity"
            title="Event Validity"
            min={validationConstants.validity.min}
            max={validationConstants.validity.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Event Validity"}}
    />
    <MinMax model=".tsunami.tsEvent[0].maxEventRunup"
            title="Maximum Water Height (meters)"
            min={validationConstants.waterHeight.min}
            max={validationConstants.waterHeight.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Earthquake Magnitude"}}
    />

    <div>
      <div>Tsunami Magnitude</div>
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

    <MinMax model=".tsunami.tsEvent[0].tsIntensity"
            title="Tsunami Intensity: Soloviev"
            min={validationConstants.tsMag.min}
            max={validationConstants.tsMag.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Tsunami Intensity"}}
    />

    <MinMax model=".tsunami.tsEvent[0].warningStatusId"
            title="Tsunami Warning Status"
            min={validationConstants.warningStatus.min}
            max={validationConstants.warningStatus.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Warning Status"}}
    />

    <div>
      <div>Damage</div>
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

    <div>
      <div>Houses Destoyed</div>
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

    <div>
      <div>Deaths</div>
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

    <div>
      <div>Injuries</div>
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

    <div>
      <div>Missing</div>
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


    <div>
      <div>Tsunami and Source Event Total Effects: </div>
      <div>
        <div>Damage in Millions of Dollars</div>
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

      <div>
        <div>Houses Destoyed</div>
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

      <div>
        <div>Deaths</div>
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

      <div>
        <div>Injuries</div>
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

      <div>
        <div>Missing</div>
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
    </div>

    <div>
      <label htmlFor=".tsunami.tsEvent[0].comments">Comments</label>
      <Control.textarea
        model=".tsunami.tsEvent[0].comments"
        id=".tsunami.tsEvent[0].comments"
      />
    </div>

  </div>
)

export default UpdateTsunami;