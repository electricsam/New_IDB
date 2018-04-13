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
} from "../tsunamiForms/constants";


import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './UpdateRunupStyles.css';


const UpdateRunup = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Update Runup</h3>
    </div>
    <div className={Styles.formInnerSectionOne}>
      <div className={Styles.year}>
        <div className={Styles.minMaxTitle}>Year</div>
      <MinMax model=".tsunami.runupData[0].year"
              title=""
              min={validationConstants.year.min}
              max={validationConstants.year.max}
              validMinMax={props.validateMinMax}/>
      </div>
      <div className={Styles.month}>
        <div className={Styles.minMaxTitle}>Month</div>
      <MinMax model=".tsunami.runupData[0].month"
              title=""
              min={validationConstants.month.min}
              max={validationConstants.month.max}
              validMinMax={props.validateMinMax}/>
      </div>
      <div className={Styles.day}>
        <div className={Styles.minMaxTitle}>Day</div>
      <MinMax model=".tsunami.runupData[0].day"
              title=""
              min={validationConstants.day.min}
              max={validationConstants.day.max}
              validMinMax={props.validateMinMax}/>
      </div>
      <div className={Styles.arrival}>
        <div className={Styles.minMaxTitle}>Arrival Time</div>
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
      </div>
      <div className={Styles.travel}>
        <div className={Styles.minMaxTitle}>Travel Time</div>
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
      </div>

      <div className={Styles.maxWave}>
        <div className={Styles.minMaxTitle}>Max Wave Arrival</div>
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
      </div>

      <div className={Styles.location}>
        <div className={Styles.minMaxTitle}>Location</div>
        <Control.text
          model=".tsunami.runupData[0].locationName"
          id=".tsunami.runupData[0].locationName"
        />
      </div>

      <div className={Styles.region}>
        <div className={Styles.minMaxTitle}>Region</div>
        <DropDown title="Region" model=".tsunami.runupData[0].regionCode" data={regions}/>
      </div>

      <div className={Styles.country}>
        <div className={Styles.minMaxTitle}>Country</div>
        <DropDown title="Country" model=".tsunami.runupData[0].country" data={countries}/>
      </div>

      <div className={Styles.area}>
        <div className={Styles.minMaxTitle}>Area</div>
        <DropDown title="State" model=".tsunami.runupData[0].area" data={states}/>
        <DropDown title="Canadian Province" model=".tsunami.runupData[0].area" data={canadianProvince}/>
        <DropDown title="Japanese Prefecture" model=".tsunami.runupData[0].area" data={japanesePrefecture}/>
        <DropDown title="Indonesian Province" model=".tsunami.runupData[0].area" data={indonesianProvince}/>
      </div>


      <div className={Styles.firstMotion}>
        <div className={Styles.minMaxTitle}>First Motion</div>
        <DropDown title="First Motion" model=".tsunami.runupData[0].firstMotion" data={firstMotion}/>
      </div>

      <div className={Styles.period}>
        <div className={Styles.minMaxTitle}>Period</div>
        <MinMax model=".tsunami.runupData[0].period"
                title=""
                min={validationConstants.period.min}
                max={validationConstants.period.max}
                validMinMax={props.validateMinMax}/>
      </div>
      <div className={Styles.latitude}>
        <div className={Styles.minMaxTitle}>Latitude</div>
        <MinMax model=".tsunami.runupData[0].latitude"
                title=""
                min={validationConstants.latitude.min}
                max={validationConstants.latitude.max}
                validMinMax={props.validateMinMax}/>
      </div>
      <div className={Styles.longitude}>
        <div className={Styles.minMaxTitle}>Longitude</div>
        <MinMax model=".tsunami.runupData[0].longitude"
                title=""
                min={validationConstants.longitude.min}
                max={validationConstants.longitude.max}
                validMinMax={props.validateMinMax}/>
      </div>


      <div className={Styles.runupHt}>
        <div className={Styles.minMaxTitle}>Runup Height</div>
        <MinMax
          model=".tsunami.runupData[0].runupHt"
          title=""
          min={validationConstants.runupHt.min}
          max={validationConstants.runupHt.max}
          validMinMax={props.validateMinMax}/>
      </div>

      <div className={Styles.runupHoriz}>
        <div className={Styles.minMaxTitle}>Horizontal Inundation</div>
        <MinMax
          model=".tsunami.runupData[0].runupHoriz"
          title=""
          min={validationConstants.runupHt.min}
          max={validationConstants.runupHt.max}
          validMinMax={props.validateMinMax}/>
      </div>

      <div className={Styles.measureType}>
        <div className={Styles.minMaxTitle}>Type of Measurement</div>
        <DropDown title="Measurement Type" model=".tsunami.runupData[0].typeOfMeasurementId" data={rnpMeasureType}/>
      </div>


      <div className={Styles.damage}>
        <div className={Styles.minMaxTitle}>Damage</div>
        <MinMax
          model=".tsunami.runupData[0].damageMillionsofDollars"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Damage Description"
                  model=".tsunami.runupData[0].damageAmountOrder"
                  data={damageMillions}
        />
      </div>

      <div className={Styles.housesDestroyed}>
        <div className={Styles.minMaxTitle}>Houses Destoyed</div>
        <MinMax
          model=".tsunami.runupData[0].housesDestroyed"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Houses Destroyed Description"
                  model=".tsunami.runupData[0].housesAmountOrder"
                  data={effectDescriptions}
        />

      </div>

      <div className={Styles.deaths}>
        <div className={Styles.minMaxTitle}>Deaths</div>
        <MinMax
          model=".tsunami.runupData[0].deaths"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Death Description" model=".tsunami.runupData[0].deathsAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.injuries}>
        <div className={Styles.minMaxTitle}>Injuries</div>
        <MinMax
          model=".tsunami.runupData[0].injuries"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Injury Description" model=".tsunami.runupData[0].injuriesAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.missing}>
        <div className={Styles.minMaxTitle}>Missing</div>
        <MinMax
          model=".tsunami.runupData[0].missing"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Missing Description" model=".tsunami.runupData[0].missingAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.housesDamaged}>
        <div className={Styles.minMaxTitle}>Houses Damaged</div>
        <MinMax
          model=".tsunami.runupData[0].housesDamaged"
          title="Number of Houses Damaged"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
        />
        <div className={Styles.minMaxTitle}>OR</div>
        <DropDown title="Houses Damaged Description"
                  model=".tsunami.runupData[0].housesDamagedAmountOrder"
                  data={effectDescriptions}
        />
      </div>

      <div className={Styles.comments}>
        <div className={Styles.minMaxTitle}>Comments</div>
        <Control.textarea
          model=".tsunami.runupData[0].comments"
          id=".tsunami.runupData[0].comments"
        />
      </div>

    </div>
  </div>
)

export default UpdateRunup;