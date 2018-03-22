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
    <MinMax model=".tsunami.tsEvent.year"
            title="Year"
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.month"
            title="Month"
            min={validationConstants.month.min}
            max={validationConstants.month.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.day"
            title="Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.hour"
            title="Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.minute"
            title="Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.second"
            title="Second"
            min={validationConstants.second.min}
            max={validationConstants.second.max}
            validMinMax={props.validateMinMax}/>
    <Control.text
      model=".tsunami.tsEvent.latitude"
      id=".tsunami.tsEvent.latitude"
    />
    <MinMax model=".tsunami.tsEvent.latitude"
            title="Latitude"
            min={validationConstants.latitude.min}
            max={validationConstants.latitude.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.longitude"
            title="Longitude"
            min={validationConstants.longitude.min}
            max={validationConstants.longitude.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.eqDepth"
            title="Earthquake Depth"
            min={validationConstants.eqDepth.min}
            max={validationConstants.eqDepth.max}
            validMinMax={props.validateMinMax}/>
    <div>
      <label htmlFor=".tsunami.tsEvent.locationName">Location Name</label>
      <Control.text
        model=".tsunami.tsEvent.locationName"
        id=".tsunami.tsEvent.locationName"
      />
    </div>
    <DropDown title="Country" model=".tsunami.tsEvent.country" data={countries}/>
    <DropDown title="Region" model=".tsunami.tsEvent.regionCode" data={regions}/>

    <div>
      <div>Area</div>
      <DropDown title="State" model=".tsunami.tsEvent.area" data={states}/>
      <DropDown title="Canadian Province" model=".tsunami.tsEvent.area" data={canadianProvince}/>
      <DropDown title="Japanese Prefecture" model=".tsunami.tsEvent.area" data={japanesePrefecture}/>
      <DropDown title="Indonesian Province" model=".tsunami.tsEvent.area" data={indonesianProvince}/>
    </div>

    <div>
      <div>Earthquake Magnitude</div>
      <MinMax model=".tsunami.tsEvent.eqMagUnk"
              title="UNK"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.eqMagMb"
              title="MB"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.eqMagMs"
              title="MS"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.eqMagMw"
              title="MW"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.eqMagMfa"
              title="Mfa"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.eqMagMl"
              title="ML"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <MinMax model=".tsunami.tsEvent.causeCode"
            title="Cause Code"
            min={validationConstants.cause.min}
            max={validationConstants.cause.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.eventValidity"
            title="Event Validity"
            min={validationConstants.validity.min}
            max={validationConstants.validity.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.tsEvent.maxEventRunup"
            title="Maximum Water Height (meters)"
            min={validationConstants.waterHeight.min}
            max={validationConstants.waterHeight.max}
            validMinMax={props.validateMinMax}/>

    <div>
      <div>Tsunami Magnitude</div>
      <MinMax model=".tsunami.tsEvent.tsMtAbe"
              title="Abe"
              min={validationConstants.tsMag.min}
              max={validationConstants.tsMag.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.tsEvent.tsMtII"
              title="Iida-Imamura"
              min={validationConstants.tsMag.min}
              max={validationConstants.tsMag.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <MinMax model=".tsunami.tsEvent.tsIntensity"
            title="Tsunami Intensity: Soloviev"
            min={validationConstants.tsMag.min}
            max={validationConstants.tsMag.max}
            validMinMax={props.validateMinMax}/>

    <MinMax model=".tsunami.tsEvent.warningStatusId"
            title="Tsunami Warning Status"
            min={validationConstants.warningStatus.min}
            max={validationConstants.warningStatus.max}
            validMinMax={props.validateMinMax}/>

    <div>
      <div>Damage</div>
      <MinMax
        model=".tsunami.tsEvent.damageMillionsDollars"
        title="Damage in Millions of Dollars"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.tsEvent.damageAmountOrder"
        title="Damage Description"
        min={validationConstants.damageDescription.min}
        max={validationConstants.damageDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div>
      <div>Houses Destoyed</div>
      <MinMax
        model=".tsunami.tsEvent.housesDestroyed"
        title="Number of Houses Destroyed"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.tsEvent.housesAmountOrder"
        title="Houses Destroyed Description"
        min={validationConstants.housesDestroyedDescription.min}
        max={validationConstants.housesDestroyedDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div>
      <div>Deaths</div>
      <MinMax
        model=".tsunami.tsEvent.deaths"
        title="Number of Deaths"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.tsEvent.deathsAmountOrder"
        title="Death Description"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div>
      <div>Injuries</div>
      <MinMax
        model=".tsunami.tsEvent.injuries"
        title="Number of Injuries"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.tsEvent.injuriesAmountOrder"
        title="Injury Description"
        min={validationConstants.injuryDescription.min}
        max={validationConstants.injuryDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>

    <div>
      <div>Missing</div>
      <MinMax
        model=".tsunami.tsEvent.missing"
        title="Number of Missing"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <MinMax
        model=".tsunami.tsEvent.missingAmountOrder"
        title="Missing Description"
        min={validationConstants.deathDescription.min}
        max={validationConstants.deathDescription.max}
        validMinMax={props.validateMinMax}
      />
    </div>


    <div>
      <div>Tsunami and Source Event Total Effects: </div>
      <div>
        <div>Damage in Millions of Dollars</div>
        <MinMax
          model=".tsunami.tsEvent.damageMillionsDollarsTotal"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
        />
        <MinMax
          model=".tsunami.tsEvent.damageAmountOrderTotal"
          title="Damage Description"
          min={validationConstants.damageDescription.min}
          max={validationConstants.damageDescription.max}
          validMinMax={props.validateMinMax}
        />
      </div>

      <div>
        <div>Houses Destoyed</div>
        <MinMax
          model=".tsunami.tsEvent.housesDestroyedTotal"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
        />
        <MinMax
          model=".tsunami.tsEvent.housesAmountOrderTotal"
          title="Houses Destroyed Description"
          min={validationConstants.housesDestroyedDescription.min}
          max={validationConstants.housesDestroyedDescription.max}
          validMinMax={props.validateMinMax}
        />
      </div>

      <div>
        <div>Deaths</div>
        <MinMax
          model=".tsunami.tsEvent.deathsTotal"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
        />
        <MinMax
          model=".tsunami.tsEvent.deathsAmountOrderTotal"
          title="Death Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
        />
      </div>

      <div>
        <div>Injuries</div>
        <MinMax
          model=".tsunami.tsEvent.injuriesTotal"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
        />
        <MinMax
          model=".tsunami.tsEvent.injuriesAmountOrderTotal"
          title="Injury Description"
          min={validationConstants.injuryDescription.min}
          max={validationConstants.injuryDescription.max}
          validMinMax={props.validateMinMax}
        />
      </div>

      <div>
        <div>Missing</div>
        <MinMax
          model=".tsunami.tsEvent.missingTotal"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
        />
        <MinMax
          model=".tsunami.tsEvent.missingAmountOrderTotal"
          title="Missing Description"
          min={validationConstants.deathDescription.min}
          max={validationConstants.deathDescription.max}
          validMinMax={props.validateMinMax}
        />
      </div>
    </div>

    <div>
      <label htmlFor=".tsunami.tsEvent.comments">Comments</label>
      <Control.textarea
        model=".tsunami.tsEvent.comments"
        id=".tsunami.tsEvent.comments"
      />
    </div>

  </div>
)

export default UpdateTsunami;