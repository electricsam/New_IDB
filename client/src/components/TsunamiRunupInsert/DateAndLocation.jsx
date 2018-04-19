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
} from "../tsunamiForms/constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from "./RunupInsertStyle.css";

const DateAndLocation = props => (
  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Runup Date And Location</h3>
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
    </div>
  </div>
);

export default DateAndLocation;