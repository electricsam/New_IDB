import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import {
  regions,
  states,
  canadianProvince,
  countries,
  japanesePrefecture,
  indonesianProvince,
  validationConstants
} from "../tsunamiForms/constants";

import DropDown from '../FormPartials/DropDown.jsx';
import MinMax from '../FormPartials/MinMax';
import Styles from './InsertTsunamiStyles.css';

const DateAndLocation = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Event Date and Location</h3>
    </div>
    <div className={Styles.formInnerSectionOne}>
      <div className={Styles.year}>
        <div className={Styles.minMaxTitle}>Year</div>
        <MinMax model=".tsunami.insert.year"
                title=""
                min={validationConstants.year.min}
                max={validationConstants.year.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Year"}}/>
      </div>
      <div className={Styles.month}>
        <div className={Styles.minMaxTitle}>Month</div>
        <MinMax model=".tsunami.insert.month"
                title=""
                min={validationConstants.month.min}
                max={validationConstants.month.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Month"}}/>
      </div>
      <div className={Styles.day}>
        <div className={Styles.minMaxTitle}>Day</div>
        <MinMax model=".tsunami.insert.day"
                title=""
                min={validationConstants.day.min}
                max={validationConstants.day.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Day"}}/>
      </div>
      <div className={Styles.hour}>
        <div className={Styles.minMaxTitle}>Hour</div>
        <MinMax model=".tsunami.insert.hour"
                title=""
                min={validationConstants.hour.min}
                max={validationConstants.hour.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Hour"}}/>
      </div>
      <div className={Styles.minute}>
        <div className={Styles.minMaxTitle}>Minute</div>
        <MinMax model=".tsunami.insert.minute"
                title=""
                min={validationConstants.minute.min}
                max={validationConstants.minute.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Minute"}}/>
      </div>
      <div className={Styles.second}>
        <div className={Styles.minMaxTitle}>Second</div>
        <MinMax model=".tsunami.insert.second"
                title=""
                min={validationConstants.second.min}
                max={validationConstants.second.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Second"}}/>
      </div>
      <div className={Styles.latitude}>
        <div className={Styles.minMaxTitle}>Latitude</div>
        <MinMax model=".tsunami.insert.latitude"
                title=""
                min={validationConstants.latitude.min}
                max={validationConstants.latitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Latitude"}}/>
      </div>
      <div className={Styles.longitude}>
        <div className={Styles.minMaxTitle}>Longitude</div>
        <MinMax model=".tsunami.insert.longitude"
                title=""
                min={validationConstants.longitude.min}
                max={validationConstants.longitude.max}
                validMinMax={props.validateMinMax}
                validMessage={{valid: "Invalid Longitude"}}/>
      </div>
      <div className={Styles.location}>
        <div className={Styles.minMaxTitle}>Location</div>
        <Control.text
          model=".tsunami.insert.locationName"
          id=".tsunami.insert.locationName"
        />
      </div>
      <div className={Styles.country}>
        <div className={Styles.minMaxTitle}>Country</div>
        <DropDown title="Country" model=".tsunami.insert.country" data={countries}/>
      </div>
      <div className={Styles.region}>
        <div className={Styles.minMaxTitle}>Region</div>
        <DropDown title="Region" model=".tsunami.insert.region" data={regions}/>
      </div>
      <div className={Styles.area}>
        <div className={Styles.minMaxTitle}>Area</div>
        <DropDown title="State" model=".tsunami.insert.area" data={states}/>
        <DropDown title="Canadian Province" model=".tsunami.insert.area" data={canadianProvince}/>
        <DropDown title="Japanese Prefecture" model=".tsunami.insert.area" data={japanesePrefecture}/>
        <DropDown title="Indonesian Province" model=".tsunami.insert.area" data={indonesianProvince}/>
      </div>
    </div>
  </div>
);

export default DateAndLocation;