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

import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './UpdateTsunamiStyles.css';

const TotalEffects = props => (
    <div className={Styles.formSectionFour}>
        <div className={Styles.header}>
            <h3>Total Event Effects</h3>
        </div>
        <div className={Styles.formInnerSectionFour}>
            <div className={Styles.damageTotal}>
                <div className={Styles.minMaxTitle}>Total Damage in Millions of Dollars</div>
                <MinMax
                    model=".tsunami.tsEvent[0].damageMillionsDollarsTotal"
                    title="Damage in Millions of Dollars"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Damage"}}
                />
                <MinMax
                    model=".tsunami.tsEvent[0].damageAmountOrderTotal"
                    title="Damage Description"
                    min={validationConstants.damageDescription.min}
                    max={validationConstants.damageDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Damage Description"}}
                />
            </div>

            <div className={Styles.housesDestroyedTotal}>
                <div className={Styles.minMaxTitle}>Total Houses Destoyed</div>
                <MinMax
                    model=".tsunami.tsEvent[0].housesDestroyedTotal"
                    title="Number of Houses Destroyed"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Houses Destroyed"}}
                />
                <MinMax
                    model=".tsunami.tsEvent[0].housesAmountOrderTotal"
                    title="Houses Destroyed Description"
                    min={validationConstants.housesDestroyedDescription.min}
                    max={validationConstants.housesDestroyedDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Houses Destroyed Description"}}
                />
            </div>

            <div className={Styles.deathsTotal}>
                <div className={Styles.minMaxTitle}>Total Deaths</div>
                <MinMax
                    model=".tsunami.tsEvent[0].deathsTotal"
                    title="Number of Deaths"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Number of Total Deaths"}}
                />

                <MinMax
                    model=".tsunami.tsEvent[0].deathsAmountOrderTotal"
                    title="Death Description"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Deaths Description"}}
                />
            </div>

            <div className={Styles.injuriesTotal}>
                <div className={Styles.minMaxTitle}>Total Injuries</div>
                <MinMax
                    model=".tsunami.tsEvent[0].injuriesTotal"
                    title="Number of Injuries"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Number of Total Injuries"}}
                />
                <MinMax
                    model=".tsunami.tsEvent[0].injuriesAmountOrderTotal"
                    title="Injury Description"
                    min={validationConstants.injuryDescription.min}
                    max={validationConstants.injuryDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Injury Description"}}
                />
            </div>

            <div className={Styles.missingTotal}>
                <div className={Styles.minMaxTitle}>Total Missing</div>
                <MinMax
                    model=".tsunami.tsEvent[0].missingTotal"
                    title="Number of Missing"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Number of Missing"}}
                />
                <MinMax
                    model=".tsunami.tsEvent[0].missingAmountOrderTotal"
                    title="Missing Description"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Missing Description "}}
                />
            </div>

            <div className={Styles.comments}>
                <div className={Styles.minMaxTitle}>Comments</div>
                <Control.textarea
                    model=".tsunami.tsEvent[0].comments"
                    id=".tsunami.tsEvent[0].comments"
                />
            </div>
        </div>
    </div>
);

export default TotalEffects