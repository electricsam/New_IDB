import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import {
    validationConstants,
    effectDescriptions,
    damageMillions
} from "../tsunamiForms/constants";

import DropDown from '../FormPartials/DropDown.jsx';
import MinMax from '../FormPartials/MinMax';
import Styles from "./RunupInsertStyle.css";

const Effects = props => (
    <div className={Styles.formSectionThree}>
        <div className={Styles.header}>
            <h3>Runup Effects</h3>
        </div>
        <div className={Styles.formInnerSectionThree}>
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

export default Effects;