import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

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
} from "../tsunamiForms/constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from "./RunupInsertStyle.css";

const RunupInsert = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Insert Runup</h3>
    </div>
    <div className={Styles.formInnerSectionOne}>

      <div className={Styles.year}>
        <div className={Styles.minMaxTitle}>Year</div>
        <MinMax model=".tsunami.rnpinsert.year"
                title=""
                min={validationConstants.year.min}
                max={validationConstants.year.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Year"}}
        />
      </div>

      <div className={Styles.month}>
        <div className={Styles.minMaxTitle}>Month</div>
        <MinMax model=".tsunami.rnpinsert.month"
                title=""
                min={validationConstants.month.min}
                max={validationConstants.month.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Month"}}
        />
      </div>

      <div className={Styles.day}>
        <div className={Styles.minMaxTitle}>Day</div>
        <MinMax model=".tsunami.rnpinsert.day"
                title=""
                min={validationConstants.day.min}
                max={validationConstants.day.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Day"}}
        />
      </div>

      <div className={Styles.location}>
        <div className={Styles.minMaxTitle}>Location</div>
        <Control.text
          model=".tsunami.rnpinsert.locationName"
          id=".tsunami.rnpinsert.locationName"
        />
      </div>

      <div className={Styles.country}>
        <div className={Styles.minMaxTitle}>Country</div>
        <DropDown title="Country" model=".tsunami.rnpinsert.country" data={countries}/>
      </div>
      <div className={Styles.region}>
        <div className={Styles.minMaxTitle}>Region</div>
        <DropDown title="Region" model=".tsunami.rnpinsert.region" data={regions}/>
      </div>

      <div className={Styles.area}>
        <div className={Styles.minMaxTitle}>Area</div>
          <DropDown title="State" model=".tsunami.rnpinsert.area" data={states}/>
          <DropDown title="Canadian Province" model=".tsunami.rnpinsert.area" data={canadianProvince}/>
          <DropDown title="Japanese Prefecture" model=".tsunami.rnpinsert.area" data={japanesePrefecture}/>
          <DropDown title="Indonesian Province" model=".tsunami.rnpinsert.area" data={indonesianProvince}/>
      </div>

      <div className={Styles.measure}>
        <div className={Styles.minMaxTitle}>Type of Measurement</div>
        <DropDown title="Type of Measurement" model=".tsunami.rnpinsert.typeOfMeasurementId" data={rnpMeasureType}/>
      </div>

      <div className={Styles.maxHt}>
        <div className={Styles.minMaxTitle}>Maximum Height (meters) </div>
        <MinMax model=".tsunami.rnpinsert.runupHt"
                title=""
                min={validationConstants.waterHeight.min}
                max={validationConstants.waterHeight.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Max Height"}}
        />
      </div>

      <div className={Styles.horiz}>
        <div className={Styles.minMaxTitle}>Maximum Horizontal Inundation (meters)</div>
        <MinMax model=".tsunami.rnpinsert.runupHoriz"
                title=""
                min={validationConstants.horizInnundation.min}
                max={validationConstants.horizInnundation.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Horizontal Inundation"}}
        />
      </div>

      <div className={Styles.period}>
        <div className={Styles.minMaxTitle}>Period</div>
        <MinMax model=".tsunami.rnpinsert.period"
                title=""
                min={validationConstants.period.min}
                max={validationConstants.period.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Period"}}
        />
      </div>

      <div className={Styles.firstMotion}>
        <div className={Styles.minMaxTitle}>First Motion</div>
        <DropDown title="First Motion" model=".tsunami.rnpinsert.firstMotion" data={firstMotion}/>
      </div>

      <div className={Styles.lat}>
        <div className={Styles.minMaxTitle}>Latitude</div>
        <MinMax model=".tsuanmi.rnpinsert.latitude"
                title=""
                min={validationConstants.latitude.min}
                max={validationConstants.latitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Latitude"}}
        />
      </div>
      <div className={Styles.long}>
        <div className={Styles.minMaxTitle}>Longitude</div>
        <MinMax model=".tsuanmi.rnpinsert.longitude"
                title=""
                min={validationConstants.longitude.min}
                max={validationConstants.longitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Longitude"}}
        />
      </div>

      <div className={Styles.arrival}>
        <div className={Styles.minMaxTitle}>Arrival Time</div>
          <MinMax model=".tsunami.rnpinsert.arrDay"
                  title="Day"
                  min={validationConstants.day.min}
                  max={validationConstants.day.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Arrival Day"}}
          />
          <MinMax model=".tsunami.rnpinsert.arrHour"
                  title="Hour"
                  min={validationConstants.hour.min}
                  max={validationConstants.hour.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Arrival Hour"}}
          />

          <MinMax model=".tsunami.rnpinsert.arrMin"
                  title="Minute"
                  min={validationConstants.minute.min}
                  max={validationConstants.minute.max}
                  validMinMax={props.validateMinMax}
                  validMessage={{valid: "Invalid Arrival Minute"}}
          />

      </div>

      <div className={Styles.travel}>
        <div className={Styles.minMaxTitle}>Travel Time</div>
        <MinMax model=".tsunami.rnpinsert.travHours"
                title="Hour"
                min={validationConstants.hour.min}
                max={validationConstants.hour.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Travel Hour"}}
        />
        <MinMax model=".tsunami.rnpinsert.travMins"
                title="Minute"
                min={validationConstants.minute.min}
                max={validationConstants.minute.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Travel Minute"}}
        />
      </div>

      <div className={Styles.maxArrival}>
        <div className={Styles.minMaxTitle}>Max Arrival Time</div>
        <MinMax model=".tsunami.rnpinsert.maxWaveArrDay"
                title="Day"
                min={validationConstants.day.min}
                max={validationConstants.day.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Maximum Arrival Day"}}
        />
        <MinMax model=".tsunami.rnpinsert.maxWaveArrHour"
                title="Hour"
                min={validationConstants.hour.min}
                max={validationConstants.hour.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Maximum Arrival Hour"}}
        />
        <MinMax model=".tsunami.rnpinsert.maxWaveArrMin"
                title="Minute"
                min={validationConstants.minute.min}
                max={validationConstants.minute.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Maximum Arrival Minute"}}
        />
      </div>

      <div className={Styles.doubtful}>
        <div className={Styles.minMaxTitle}>Doubtfulness</div>
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

      <div className={Styles.damage}>
        <div className={Styles.minMaxTitle}>Damage</div>
        <MinMax
          model=".tsunami.rnpinsert.damageMillionsofDollars"
          title="Damage in Millions of Dollars"
          min={validationConstants.damageInMillions.min}
          max={validationConstants.damageInMillions.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Damage"}}
        />
        <div className={Styles.minMaxTitle}> OR Damage Description</div>
        <DropDown title="Damage Description"
                  model=".tsunami.rnpinsert.damageAmountOrder"
                  data={damageMillions}/>
      </div>

      <div className={Styles.housesDestroyed}>
        <div className={Styles.minMaxTitle}>Houses Destoyed</div>
        <MinMax
          model=".tsunami.rnpinsert.housesDestroyed"
          title="Number of Houses Destroyed"
          min={validationConstants.numberOfHousesDestroyed.min}
          max={validationConstants.numberOfHousesDestroyed.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Houses Destroyed"}}
        />
        <div className={Styles.minMaxTitle}> OR Houses Destroyed Description</div>
        <DropDown title="Houses Destroyed Description"
                  model=".tsunami.rnpinsert.housesAmountOrder"
                  data={effectDescriptions}/>
      </div>

      <div className={Styles.deaths}>
        <div className={Styles.minMaxTitle}>Deaths</div>
        <MinMax
          model=".tsunami.rnpinsert.deaths"
          title="Number of Deaths"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Deaths"}}
        />
        <div className={Styles.minMaxTitle}> OR Death Description</div>
        <DropDown title="Death Description" model=".tsunami.rnpinsert.deathsAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.injuries}>
        <div className={Styles.minMaxTitle}>Injuries</div>
        <MinMax
          model=".tsunami.rnpinsert.injuries"
          title="Number of Injuries"
          min={validationConstants.numberOfInjuries.min}
          max={validationConstants.numberOfInjuries.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Injuries"}}
        />
        <div className={Styles.minMaxTitle}> OR Injury Description</div>
        <DropDown title="Injury Description" model=".tsunami.rnpinsert.injuriesAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.missing}>
        <div className={Styles.minMaxTitle}>Missing</div>
        <MinMax
          model=".tsunami.rnpinsert.missing"
          title="Number of Missing"
          min={validationConstants.numberOfDeaths.min}
          max={validationConstants.numberOfDeaths.max}
          validMinMax={props.validateMinMax}
          validMessage={{valid: "Invalid Missing"}}
        />
        <div className={Styles.minMaxTitle}> OR Missing Description</div>
        <DropDown title="Missing Description" model=".tsunami.rnpinsert.missingAmountOrder" data={effectDescriptions}/>
      </div>

      <div className={Styles.comments}>
        <div className={Styles.minMaxTitle}>Comments</div>
        <Control.textarea
          model=".tsunami.insert.comments"
          id=".tsunami.insert.comments"
        />
      </div>


    </div>








  </div>
);

export default RunupInsert;