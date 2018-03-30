import React from 'react'
import { Control, Errors } from 'react-redux-form/immutable';

import {
  regions,
  states,
  canadianProvince,
  countries,
  japanesePrefecture,
  indonesianProvince,
  validationConstants, rnpMeasureType, effectDescriptions, damageMillions, firstMotion
} from "./constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './TsunamiSearchContainerStyle.css';


const UpdateRunup = props => (
  <div>
    <MinMax model=".tsunami.runupData[0].year"
            title="Year"
            min={validationConstants.year.min}
            max={validationConstants.year.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].month"
            title="Month"
            min={validationConstants.month.min}
            max={validationConstants.month.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].day"
            title="Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}/>

    <MinMax model=".tsunami.runupData[0].arrDay"
            title="Arrival Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].arrHour"
            title="Arrival Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].arrMinute"
            title="Arrival Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].travHours"
            title="Travel Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].travMins"
            title="Travel Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}/>

    <MinMax model=".tsunami.runupData[0].maxWaveArrDay"
            title="Arrival Day"
            min={validationConstants.day.min}
            max={validationConstants.day.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].maxWaveArrHour"
            title="Arrival Hour"
            min={validationConstants.hour.min}
            max={validationConstants.hour.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].maxWaveArrMin"
            title="Arrival Minute"
            min={validationConstants.minute.min}
            max={validationConstants.minute.max}
            validMinMax={props.validateMinMax}/>

    <div>
      <label htmlFor=".tsunami.runupData[0].locationName">Location Name</label>
      <Control.text
        model=".tsunami.runupData[0].locationName"
        id=".tsunami.runupData[0].locationName"
      />
    </div>
    <div>
      <DropDown title="Region" model=".tsunami.runupData[0].regionCode" data={regions}/>
    </div>

    <div>
      <DropDown title="Country" model=".tsunami.runupData[0].country" data={countries}/>
    </div>

    <div>
      <div>Area</div>
      <DropDown title="State" model=".tsunami.runupData[0].area" data={states}/>
      <DropDown title="Canadian Province" model=".tsunami.runupData[0].area" data={canadianProvince}/>
      <DropDown title="Japanese Prefecture" model=".tsunami.runupData[0].area" data={japanesePrefecture}/>
      <DropDown title="Indonesian Province" model=".tsunami.runupData[0].area" data={indonesianProvince}/>
    </div>


    <div>
      <DropDown title="First Motion" model=".tsunami.runupData[0].firstMotion" data={firstMotion}/>
    </div>

    <MinMax model=".tsunami.runupData[0].period"
            title="period"
            min={validationConstants.period.min}
            max={validationConstants.period.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].latitude"
            title="Latitude"
            min={validationConstants.latitude.min}
            max={validationConstants.latitude.max}
            validMinMax={props.validateMinMax}/>
    <MinMax model=".tsunami.runupData[0].longitude"
            title="Longitude"
            min={validationConstants.longitude.min}
            max={validationConstants.longitude.max}
            validMinMax={props.validateMinMax}/>


    <MinMax
      model=".tsunami.runupData[0].runupHt"
      title="Max Water Height"
      min={validationConstants.runupHt.min}
      max={validationConstants.runupHt.max}
      validMinMax={props.validateMinMax}/>
    <MinMax
      model=".tsunami.runupData[0].runupHoriz"
      title="Max Horizontal Innundation"
      min={validationConstants.runupHt.min}
      max={validationConstants.runupHt.max}
      validMinMax={props.validateMinMax}/>

        <div>
      <DropDown title="Measurement Type" model=".tsunami.runupData[0].typeOfMeasurementId" data={rnpMeasureType}/>
    </div>


    <div>
      <div>Damage</div>
      <MinMax
        model=".tsunami.runupData[0].damageMillionsofDollars"
        title="Damage in Millions of Dollars"
        min={validationConstants.damageInMillions.min}
        max={validationConstants.damageInMillions.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Damage Description"
                model=".tsunami.runupData[0].damageAmountOrder"
                data={damageMillions}
      />
    </div>

    <div>
      <div>Houses Destoyed</div>
      <MinMax
        model=".tsunami.runupData[0].housesDestroyed"
        title="Number of Houses Destroyed"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Houses Destroyed Description"
                model=".tsunami.runupData[0].housesAmountOrder"
                data={effectDescriptions}
      />

    </div>

    <div>
      <div>Deaths</div>
      <MinMax
        model=".tsunami.runupData[0].deaths"
        title="Number of Deaths"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Death Description" model=".tsunami.runupData[0].deathsAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <div>Injuries</div>
      <MinMax
        model=".tsunami.runupData[0].injuries"
        title="Number of Injuries"
        min={validationConstants.numberOfInjuries.min}
        max={validationConstants.numberOfInjuries.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Injury Description" model=".tsunami.runupData[0].injuriesAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <div>Missing</div>
      <MinMax
        model=".tsunami.runupData[0].missing"
        title="Number of Missing"
        min={validationConstants.numberOfDeaths.min}
        max={validationConstants.numberOfDeaths.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Missing Description" model=".tsunami.runupData[0].missingAmountOrder" data={effectDescriptions}/>
    </div>

    <div>
      <div>Houses Damaged</div>
      <MinMax
        model=".tsunami.runupData[0].housesDamaged"
        title="Number of Houses Damaged"
        min={validationConstants.numberOfHousesDestroyed.min}
        max={validationConstants.numberOfHousesDestroyed.max}
        validMinMax={props.validateMinMax}
      />
      <div>OR</div>
      <DropDown title="Houses Damaged Description"
                model=".tsunami.runupData[0].housesDamagedAmountOrder"
                data={effectDescriptions}
      />

    </div>

    <div>
      <label htmlFor=".tsunami.runupData[0].comments">Comments</label>
      <Control.textarea
        model=".tsunami.runupData[0].comments"
        id=".tsunami.runupData[0].comments"
      />
    </div>

  </div>
)

export default UpdateRunup;