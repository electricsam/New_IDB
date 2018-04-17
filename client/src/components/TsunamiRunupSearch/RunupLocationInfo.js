import React from 'react';
import { Control, Errors } from 'react-redux-form/immutable';
import PropTypes from 'prop-types';
import {countries, regions, validationConstants} from "../tsunamiForms/constants";

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './RunupSearchContainerStyle.css'

const RunupLocationInfo = props => (
  <div className={Styles.formSectionTwo}>
    <div className={Styles.header}>
      <h3>Tsunami Runup Location Information</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showRunupLocation ?
            <i className="material-icons" onClick={props.toggleShowRunupLocation}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleShowRunupLocation}>&#xE5CF;</i>
        }
      </div>
    </div>

    {
      props.showRunupLocation?
        <div className={Styles.formInnerSectionTwo}>
          <div className={Styles.rnpRegion}>
            <div className={Styles.minMaxTitle}>Region</div>
            <DropDown title="Region" model=".tsunami.rnpsearch.region" data={regions}/>
          </div>

          <div className={Styles.rnpCountry}>
            <div className={Styles.minMaxTitle}>Country</div>
            <DropDown title="Country" model=".tsunami.rnpsearch.country" data={countries}/>
          </div>

          <div className={Styles.rnpLocType}>
            <div className={Styles.minMaxTitle}>Location</div>
            <Control.radio
              model=".tsunami.runupLocType"
              id=".tsunami.runupLocType"
              value="locstart"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.runupLocType"> Starts With </label>

            <Control.radio
              model=".tsunami.runupLocType"
              id=".tsunami.runupLocType"
              value="locend"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.runupLocType">Ends With</label>

            <Control.radio
              model=".tsunami.runupLocType"
              id=".tsunami.runupLocType"
              value="locincludes"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.runupLocType"> Includes </label>

            <Control.radio
              model=".tsunami.runupLocType"
              id=".tsunami.runupLocType"
              value="locmatch"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.runupLocType"> Matches </label>

            <Control.radio
              model=".tsunami.runupLocType"
              id=".tsunami.runupLocType"
              value="locnot"
              isToggle={true}
            ></Control.radio>
            <label htmlFor=".tsunami.runupLocType"> or Does Not Match</label>
          </div>


          <div className={Styles.rnpLoc}>
            {(()=>{
              let locType = props.checkLocType();
              if(locType === 'locstart'){
                return (
                  <div className={Styles.location}>
                    <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locstart" id=".tsunami.rnpsearch.locstart"></Control.text>
                  </div>
                )
              }else if(locType === 'locend'){
                return(
                  <div className={Styles.location}>
                    <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locend" id=".tsunami.rnpsearch.locend"></Control.text>
                  </div>
                )
              }else if(locType === 'locmatch'){
                return (
                  <div className={Styles.location}>
                <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locmatch" id=".tsunami.rnpsearch.locmatch"></Control.text>
                  </div>
                )

              }else if(locType === 'locincludes'){
                return(
                  <div className={Styles.location}>
                <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locincludes" id=".tsunami.rnpsearch.locincludes"></Control.text>
                  </div>
                )
              }else if(locType === 'locnot'){
                return(
                  <div className={Styles.location}>
                <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locnot" id=".tsunami.rnpsearch.locnot"></Control.text>
                  </div>
                )

              }else{
                return (
                  <div className={Styles.location}>
                <div className={Styles.minMaxTitle}>Location</div>
                    <Control.text model=".tsunami.rnpsearch.locnot" id=".tsunami.rnpsearch.locnot" disabled={true}></Control.text>
                  </div>
                )
              }
            })()}

          </div>

          <div className={Styles.distance}>
            <div className={Styles.minMaxTitle}>Distance of Runup Location</div>
            <MinMax model=".tsunami.rnpsearch.distancemin"
                    title="Min"
                    min={validationConstants.distanceRnpLoc.min}
                    max={validationConstants.distanceRnpLoc.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Min Distance"}}
            />
            <MinMax model=".tsunami.rnpsearch.distancemax"
                    title="Max"
                    min={validationConstants.distanceRnpLoc.min}
                    max={validationConstants.distanceRnpLoc.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Max Distance"}}
            />
          </div>

          <div className={Styles.rnpCoordinates}>
            <div className={Styles.minMaxTitle}>Range of Coordinates in decimal degrees for the Runup Location</div>
            <MinMax
              model=".tsunami.rnpsearch.latnorth"
              title="Northernmost Latitude"
              min={validationConstants.latitude.min}
              max={validationConstants.latitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Latitude"}}
              validMessage={{valid: "Invalid Latitude"}}
            />
            <MinMax
              model=".tsunami.rnpsearch.latsouth"
              title="Southernmost Latitude"
              min={validationConstants.latitude.min}
              max={validationConstants.latitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Latitude"}}
              validMessage={{valid: "Invalid Latitude"}}
            />
            <MinMax
              model=".tsunami.rnpsearch.longwest"
              title="Westernmost Longitude"
              min={validationConstants.longitude.min}
              max={validationConstants.longitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Longitude"}}
              validMessage={{valid: "Invalid Longitude"}}
            />
            <MinMax
              model=".tsunami.rnpsearch.longeast"
              title="Easternmost Longitude"
              min={validationConstants.longitude.min}
              max={validationConstants.longitude.max}
              validMinMax={props.validateMinMax}
              validMessage={{valid: "Invalid Longitude"}}
              validMessage={{valid: "Invalid Longitude"}}
            />

          </div>
        </div>:
        <div></div>
    }


    
    


  </div>

);


export default RunupLocationInfo;