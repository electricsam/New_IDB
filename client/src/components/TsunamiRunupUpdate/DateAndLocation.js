import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import {
  regions,
  states,
  canadianProvince,
  countries,
  japanesePrefecture,
  indonesianProvince,
  validationConstants, rnpMeasureType, effectDescriptions, damageMillions, firstMotion
} from "../tsunamiForms/constants";


import DropDown from '../FormPartials/DropDown.jsx';
import MinMax from '../FormPartials/MinMax';
import Styles from './UpdateRunupStyles.css';


const DateAndLocation = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Runup Date And Location</h3>
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
    </div>
  </div>
)

export default DateAndLocation;