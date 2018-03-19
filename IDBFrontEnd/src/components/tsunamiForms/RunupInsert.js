import React from 'react'
import { Control, Errors } from 'react-redux-form/immutable';

import {
  regions,
  states,
  canadianProvince,
  countries,
  japanesePrefecture,
  indonesianProvince,
  validationConstants,
  rnpMeasureType,
  firstMotion,
  effectDescriptions, damageMillions
} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';

const RunupInsert = props => (
  <div>
    <MinMax model=".tsunami.rnpinsert.year"
            title="Year"
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.rnpinsert.month"
            title="Month"
            min={validationConstants.month.min}
            max={validationConstants.month.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.rnpinsert.day"
            title="Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}/>
    <div>
      <label htmlFor=".tsunami.rnpinsert.locationName">Location Name</label>
      <Control.text
        model=".tsunami.rnpinsert.locationName"
        id=".tsunami.rnpinsert.locationName"
      />
    </div>
    <DropDown title="Country" model=".tsunami.rnpinsert.country" data={countries}/>
    <DropDown title="Region" model=".tsunami.rnpinsert.region" data={regions}/>

    <div>
      <div>Area</div>
      <DropDown title="State" model=".tsunami.rnpinsert.area" data={states}/>
      <DropDown title="Canadian Province" model=".tsunami.rnpinsert.area" data={canadianProvince}/>
      <DropDown title="Japanese Prefecture" model=".tsunami.rnpinsert.area" data={japanesePrefecture}/>
      <DropDown title="Indonesian Province" model=".tsunami.rnpinsert.area" data={indonesianProvince}/>
    </div>
    <DropDown title="Type of Measurement" model=".tsunami.rnpinsert.typeOfMeasurementId" data={rnpMeasureType}/>
    <MinMax model=".tsunami.rnpinsert.runupHt"
            title="Maximum Height (meters) "
            min={validationConstants.waterHeight.max}
            max={validationConstants.waterHeight.min}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.rnpinsert.runupHoriz"
            title="Maximum Horizontal Inundation (meters) "
            min={validationConstants.horizInnundation.max}
            max={validationConstants.horizInnundation.min}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.rnpinsert.period"
            title="Period"
            min={validationConstants.period.max}
            max={validationConstants.period.min}
            validMinMax={props.validateMinMax}/>
    <DropDown title="First Motion" model=".tsunami.rnpinsert.firstMotion" data={firstMotion}/>
    <MinMax model=".tsuanmi.rnpinsert.latitude"
            title="Latitude"
            min={validationConstants.latitude.min}
            max={validationConstants.latitude.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsuanmi.rnpinsert.longitude"
            title="Longitude"
            min={validationConstants.longitude.min}
            max={validationConstants.longitude.max}
            validMinMax={props.validateMinMax}/>

    <div>
      <div>Arrival Time</div>
      <MinMax model=".tsunami.rnpinsert.arrDay"
              title="Day"
              min={validationConstants.day.min}
              max={validationConstants.day.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpinsert.arrHour"
              title="Hour"
              min={validationConstants.hour.min}
              max={validationConstants.hour.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpinsert.arrMin"
              title="Minute"
              min={validationConstants.minute.min}
              max={validationConstants.minute.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Travel Time</div>
      <MinMax model=".tsunami.rnpinsert.travHours"
              title="Hour"
              min={validationConstants.hour.min}
              max={validationConstants.hour.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpinsert.travMins"
              title="Minute"
              min={validationConstants.minute.min}
              max={validationConstants.minute.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Max Arrival Time</div>
      <MinMax model=".tsunami.rnpinsert.maxWaveArrDay"
              title="Day"
              min={validationConstants.day.min}
              max={validationConstants.day.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpinsert.maxWaveArrHour"
              title="Hour"
              min={validationConstants.hour.min}
              max={validationConstants.hour.max}
              validMinMax={props.validateMinMax}/>
      <MinMax model=".tsunami.rnpinsert.maxWaveArrMin"
              title="Minute"
              min={validationConstants.minute.min}
              max={validationConstants.minute.max}
              validMinMax={props.validateMinMax}/>
    </div>

    <div>
      <div>Doubtfulness</div>
      <Control.radio
        model=".tsunami.rnpinsert.doubtful"
        id=".tsunami.rnpinsert.doubtful"
        value="null"
        isToggle={true}
        checked="checked"
      ></Control.radio>
      <label htmlFor=".tsunami.rnpinsert.doubtful"> Ok </label>
      <Control.radio
        model=".tsunami.rnpinsert.doubtful"
        id=".tsunami.rnpinsert.doubtful"
        value="?"
        isToggle={true}
      ></Control.radio>
      <label htmlFor=".tsunami.rnpinsert.doubtful"> Doubtful </label>
      <Control.radio
        model=".tsunami.rnpinsert.doubtful"
        id=".tsunami.rnpinsert.doubtful"
        value="M"
        isToggle={true}
      ></Control.radio>
      <label htmlFor=".tsunami.rnpinsert.doubtful"> Meteorological </label>
    </div>



    <div>
      <div>Damage</div>
      <MinMax
        model=".tsunami.rnpinsert.damageMillionsofDollars"
        title="Damage in Millions of Dollars"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Damage Description"
                model=".tsunami.rnpinsert.damageAmountOrder"
                data={damageMillions}
      />
    </div>

    <div>
      <div>Houses Destoyed</div>
      <MinMax
        model=".tsunami.rnpinsert.housesDestroyed"
        title="Number of Houses Destroyed"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Houses Destroyed Description"
                model=".tsunami.rnpinsert.housesAmountOrder"
                data={effectDescriptions}
      />

    </div>

    <div>
      <div>Deaths</div>
      <MinMax
        model=".tsunami.rnpinsert.deaths"
        title="Number of Deaths"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Death Description" model=".tsunami.rnpinsert.deathsAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <div>Injuries</div>
      <MinMax
        model=".tsunami.rnpinsert.injuries"
        title="Number of Injuries"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Injury Description" model=".tsunami.rnpinsert.injuriesAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <div>Missing</div>
      <MinMax
        model=".tsunami.rnpinsert.missing"
        title="Number of Missing"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Missing Description" model=".tsunami.rnpinsert.missingAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <label htmlFor=".tsunami.insert.comments"></label>
      <Control.textarea
        model=".tsunami.insert.comments"
        id=".tsunami.insert.comments"
      />
    </div>


  </div>
);

export default RunupInsert;