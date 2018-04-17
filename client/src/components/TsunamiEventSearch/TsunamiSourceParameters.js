import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, canadianProvince, states, regions, validationConstants} from "../tsunamiForms/constants";

import DropDown from '../searchFormPartials/DropDown.jsx'
import MinMax from '../searchFormPartials/MinMax'

import Styles from './TsunamiSearchContainerStyle.css';

const TsunamiSourceParameters = props => (

  <div className={Styles.formSectionOne}>
    <div className={Styles.header}>
      <h3>Tsunami Source Parameters</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showSourceForm ?
            <i className="material-icons" onClick={props.toggleSourceForm}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleSourceForm}>&#xE5CF;</i>
        }
      </div>
    </div>
    {
      props.showSourceForm?
        <div className={Styles.formInnerSectionOne}>
          <div className={Styles.year}>
            <div className={Styles.minMaxTitle}>Year</div>
            <MinMax
              model=".tsunami.search.minyear"
              title="Min"
              validMessage={{valid: "Invalid Year"}}
              min={validationConstants.year.min}
              max={validationConstants.year.max}
              validMinMax={props.validateMinMax}/>
            <MinMax
              model=".tsunami.search.maxyear"
              title="Max"
              validMessage={{valid: "Invalid Year"}}
              min={validationConstants.year.min}
              max={validationConstants.year.max}
              validMinMax={props.validateMinMax}/>
          </div>

          <div className={Styles.region}>
            <div className={Styles.minMaxTitle}>Region</div>
            <DropDown title="Region" model=".tsunami.search.region" data={regions}/>
          </div>

          <div className={Styles.country}>
            <div className={Styles.minMaxTitle}>Country</div>
            <DropDown title="Country" model=".tsunami.search.country" data={countries}/>
          </div>

          <div className={Styles.state}>
            <div className={Styles.minMaxTitle}>U.S. State / Territory</div>
            <DropDown title="U.S. State / Territory"
                      model=".tsunami.search.area"
                      data={states}
                      disabled={props.country === "USA"? false: true} />

          </div>

          <div className={Styles.province}>
            <div className={Styles.minMaxTitle}>Canadian Province</div>
            <DropDown title="Canadian Province"
                      model=".tsunami.search.area"
                      data={canadianProvince}
                      disabled={props.country === "CANADA"? false: true}
            />
          </div>


          <div className={Styles.latLong}>
            <div className={Styles.minMaxTitle}>Lat / Long</div>
            <MinMax
              model=".tsunami.search.latnorth"
              title="Northernmost Latitude"
              min={validationConstants.latitude.min}
              max={validationConstants.latitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Latitude"}}/>
            <MinMax
              model=".tsunami.search.latsouth"
              title="Southernmost Latitude"
              min={validationConstants.latitude.min}
              max={validationConstants.latitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Latitude"}}/>
            <MinMax
              model=".tsunami.search.longwest"
              title="Westernmost Longitude"
              min={validationConstants.longitude.min}
              max={validationConstants.longitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Longitude"}}/>
            <MinMax
              model=".tsunami.search.longeast"
              title="Easternmost Longitude"
              min={validationConstants.longitude.min}
              max={validationConstants.longitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Longitude"}}/>
          </div>

          <div className={Styles.validity}>
            <div className={Styles.minMaxTitle}>Validity</div>
            <MinMax
              model=".tsunami.search.minvalidity"
              title="Min"
              min={validationConstants.validity.min}
              max={validationConstants.validity.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Validity"}}/>
            <MinMax
              model=".tsunami.search.maxvalidity"
              title="Max"
              min={validationConstants.validity.min}
              max={validationConstants.validity.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Validity"}}/>
          </div>

          <div className={Styles.cause}>
            <div className={Styles.minMaxTitle}>Cause of Tsunami</div>
            <MinMax
              model=".tsunami.search.mincause"
              title="Min"
              min={validationConstants.cause.min}
              max={validationConstants.cause.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Cause"}}/>
            <MinMax
              model=".tsunami.search.maxcause"
              title="Max"
              min={validationConstants.cause.min}
              max={validationConstants.cause.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Cause"}}/>
          </div>

          <div className={Styles.eqMag}>
            <div className={Styles.minMaxTitle}>Earthquake Magnitude</div>
            <MinMax
              model=".tsunami.search.eqmagmin"
              title="Min"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}/>
            <MinMax
              model=".tsunami.search.eqmagmax"
              title="Max"
              min={validationConstants.eqMag.min}
              max={validationConstants.eqMag.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Earthquake Magnitude"}}/>
          </div>


          <div className={Styles.locType}>
            <Control.radio
              model=".tsunami.locType"
              id=".tsunami.locType"
              value="locstart"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.locType"> Starts With </label>

            <Control.radio
              model=".tsunami.locType"
              id=".tsunami.locType"
              value="locend"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.locType">Ends With</label>

            <Control.radio
              model=".tsunami.locType"
              id=".tsunami.locType"
              value="locincludes"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.locType"> Includes </label>

            <Control.radio
              model=".tsunami.locType"
              id=".tsunami.locType"
              value="locmatch"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.locType"> Matches </label>

            <Control.radio
              model=".tsunami.locType"
              id=".tsunami.locType"
              value="locnot"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.locType"> or Does Not Match</label>
          </div>


          <div className={Styles.loc}>
            {(()=>{
              let locType = props.checkLocType();
              if(locType === 'locstart'){
                return (
                  <div>
                    <label htmlFor=".tsunami.search.locstart">Location</label>
                    <Control.text model=".tsunami.search.locstart" id=".tsunami.search.locstart"></Control.text>
                  </div>
                )
              }else if(locType === 'locend'){
                return(
                  <div>
                    <label htmlFor=".tsunami.search.locend">Location</label>
                    <Control.text model=".tsunami.search.locend" id=".tsunami.search.locend"></Control.text>
                  </div>
                )
              }else if(locType === 'locmatch'){
                return (
                  <div>
                    <label htmlFor=".tsunami.search.locmatch">Location</label>
                    <Control.text model=".tsunami.search.locmatch" id=".tsunami.search.locmatch"></Control.text>
                  </div>
                )

              }else if(locType === 'locincludes'){
                return(
                  <div>
                    <label htmlFor=".tsunami.search.locincludes">Location</label>
                    <Control.text model=".tsunami.search.locincludes" id=".tsunami.search.locincludes"></Control.text>
                  </div>
                )
              }else if(locType === 'locnot'){
                return(
                  <div>
                    <label htmlFor=".tsunami.search.locnot">Location</label>
                    <Control.text model=".tsunami.search.locnot" id=".tsunami.search.locnot"></Control.text>
                  </div>
                )

              }else{
                return (
                  <div>
                    <label htmlFor=".tsunami.search.locnot">Location</label>
                    <Control.text model=".tsunami.search.locnot" id=".tsunami.search.locnot" disabled={true}></Control.text>
                  </div>
                )
              }
            })()}

          </div>
        </div>:
        <div></div>
    }




  </div>



);

export default TsunamiSourceParameters;