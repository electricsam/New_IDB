import React from 'react';
import {Control, Errors} from 'react-redux-form/lib/immutable';

import { validationConstants } from "../tsunamiForms/constants";
import MinMax from '../searchFormPartials/MinMax';
import Styles from './InsertTsunamiStyles.css'

const Effects = props => (
    <div className={Styles.formSectionThree}>
        <div className={Styles.header}>
            <h3>Event Effects</h3>
        </div>
        <div className={Styles.formInnerSectionThree}>
            <div className={Styles.damage}>
                <div className={Styles.minMaxTitle}>Damage</div>
                <MinMax
                    model=".tsunami.insert.damageMillionsofDollars"
                    title="Damage in Millions of Dollars"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Damage"}}
                />
                <MinMax
                    model=".tsunami.insert.damageAmountOrder"
                    title="Damage Description"
                    min={validationConstants.damageDescription.min}
                    max={validationConstants.damageDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Damage Description"}}
                />
            </div>

            <div className={Styles.housesDestroyed}>
                <div className={Styles.minMaxTitle}>Houses Destoyed</div>
                <MinMax
                    model=".tsunami.insert.housesDestroyed"
                    title="Number of Houses Destroyed"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Houses Destroyed"}}
                />
                <MinMax
                    model=".tsunami.insert.housesAmountOrder"
                    title="Houses Destroyed Description"
                    min={validationConstants.housesDestroyedDescription.min}
                    max={validationConstants.housesDestroyedDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Houses Destroyed Description"}}
                />
            </div>

            <div className={Styles.deaths}>
                <div className={Styles.minMaxTitle}>Deaths</div>
                <MinMax
                    model=".tsunami.insert.deaths"
                    title="Number of Deaths"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Deaths"}}
                />
                <MinMax
                    model=".tsunami.insert.deathsAmountOrder"
                    title="Death Description"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Deaths Description"}}
                />
            </div>

            <div className={Styles.injuries}>
                <div className={Styles.minMaxTitle}>Injuries</div>
                <MinMax
                    model=".tsunami.insert.injuries"
                    title="Number of Injuries"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Injuries"}}
                />
                <MinMax
                    model=".tsunami.insert.injuriesAmountOrder"
                    title="Injury Description"
                    min={validationConstants.injuryDescription.min}
                    max={validationConstants.injuryDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Injury Description"}}
                />
            </div>

            <div className={Styles.missing}>
                <div className={Styles.minMaxTitle}>Missing</div>
                <MinMax
                    model=".tsunami.insert.missing"
                    title="Number of Missing"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Missing"}}
                />
                <MinMax
                    model=".tsunami.insert.missingAmountOrder"
                    title="Missing Description"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Missing Description"}}
                />
            </div>
        </div>
    </div>
);

export default Effects;