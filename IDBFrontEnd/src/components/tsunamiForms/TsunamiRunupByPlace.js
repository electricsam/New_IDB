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
import Styles from './RunupSearchContainerStyle.css';

const TsunamiRunupByPlace = props => (

  <div className={Styles.formSectionTwo}>
    <div className={Styles.header}>
      <h3>Runup by Place</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showRunupPlaceForm ?
            <i className="material-icons" onClick={props.toggleRunupPlaceForm}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleRunupPlaceForm}>&#xE5CF;</i>
        }
      </div>
    </div>

    {
      props.showRunupPlaceForm?
      <div className={Styles.formInnerSectionTwo}>

        <div className={Styles.rnpRegion}>
          <DropDown title="Runup Region Name " model=".tsunami.search.runupregion" data={regions}/>
        </div>

        <div className={Styles.rnpCountries}>
          <DropDown title="Runup Country " model=".tsunami.search.runupcountry" data={countries}/>
        </div>

        <div className={Styles.rnpStates}>
          <DropDown title="Runup U.S. State / Territory " model=".tsunami.search.runuparea" data={states}/>
        </div>

        <div className={Styles.rnpProvince}>
          <DropDown title="Runup Canadian Province " model=".tsunami.search.runuparea" data={canadianProvince}/>
        </div>

        <div className={Styles.rnpIndoProv}>
          <DropDown title="Runup Indonesian Province" model=".tsunami.search.runuparea" data={indonesianProvince}/>
        </div>

        <div className={Styles.rnpJpPre}>
          <DropDown title="Runup Japanese Prefecture" model=".tsunami.search.runuparea" data={japanesePrefecture}/>
        </div>

        <div className={Styles.rnpDistance}>
          <div className={Styles.minMaxTitle}>Distance of Runup Location</div>
          <MinMax
            model=".tsunami.search.runupdistancemin"
            title="Min"
            min={validationConstants.runupDistance.min}
            max={validationConstants.runupDistance.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Distance"}}
          />
          <MinMax
            model=".tsunami.search.runupdistancemax"
            title="Max"
            min={validationConstants.runupDistance.min}
            max={validationConstants.runupDistance.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Distance"}}
          />
        </div>

        <div className={Styles.travHrs}>
          <div>Travel Time (Hours) </div>
          <MinMax
            model=".tsunami.search.runuptraveltimemin"
            title="Min"
            min={validationConstants.travelTime.min}
            max={validationConstants.travelTime.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Min Travel Time"}}
          />
          <MinMax
            model=".tsunami.search.runuptraveltimemax"
            title="Max"
            min={validationConstants.travelTime.min}
            max={validationConstants.travelTime.max}
            validMinMax={props.validateMinMax}
            validMessage={{valid: "Invalid Max Travel Time"}}
          />
        </div>

        <div className={Styles.rnpLocType}>
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
            let runupLocType = props.checkRunupLocType();
            if(runupLocType === 'locstart'){
              return (
                <div>
                  <label htmlFor=".tsunami.search.runuplocstart">Location</label>
                  <Control.text model=".tsunami.search.runuplocstart" id=".tsunami.search.runuplocstart"></Control.text>
                </div>
              )
            }else if(runupLocType === 'locend'){
              return(
                <div>
                  <label htmlFor=".tsunami.search.runuplocend">Location</label>
                  <Control.text model=".tsunami.search.runuplocend" id=".tsunami.search.runuplocend"></Control.text>
                </div>
              )
            }else if(runupLocType === 'locmatch'){
              return (
                <div>
                  <label htmlFor=".tsunami.search.runuplocmatch">Location</label>
                  <Control.text model=".tsunami.search.runuplocmatch" id=".tsunami.search.runuplocmatch"></Control.text>
                </div>
              )

            }else if(runupLocType === 'locincludes'){
              return(
                <div>
                  <label htmlFor=".tsunami.search.runuplocincludes">Location</label>
                  <Control.text model=".tsunami.search.runuplocincludes" id=".tsunami.search.runuplocincludes"></Control.text>
                </div>
              )
            }else if(runupLocType === 'locnot'){
              return(
                <div>
                  <label htmlFor=".tsunami.search.runuplocnot">Location</label>
                  <Control.text model=".tsunami.search.runuplocnot" id=".tsunami.search.runuplocnot"></Control.text>
                </div>
              )

            }else{
              return (
                <div>
                  <label htmlFor=".tsunami.search.runuplocnot">Location</label>
                  <Control.text model=".tsunami.search.runuplocnot" id=".tsunami.search.runuplocnot" disabled={true}></Control.text>
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

export default TsunamiRunupByPlace

//TODO: add propType constraints