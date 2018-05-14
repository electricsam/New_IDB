import React from 'react';
import {Control, Errors} from 'react-redux-form/lib/immutable';

import { validationConstants } from "../tsunamiForms/constants";
import MinMax from '../FormPartials/MinMax';
import Styles from './InsertTsunamiStyles.css';

const TotalEffects = props => (
    <div className={Styles.formSectionFour}>
        <div className={Styles.header}>
            <h3>Total Event Effects</h3>
        </div>
        <div className={Styles.formInnerSectionFour}>
            <div className={Styles.damageTotal}>
                <div className={Styles.minMaxTitle}>Total Damage in Millions of Dollars</div>
                <MinMax
                    model=".tsunami.insert.damageMillionsofDollarsTotal"
                    title="Damage in Millions of Dollars"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Damage"}}
                />
                <MinMax
                    model=".tsunami.insert.damageAmountOrderTotal"
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
                    model=".tsunami.insert.housesDestroyedTotal"
                    title="Number of Houses Destroyed"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Houses Destroyed"}}
                />
                <MinMax
                    model=".tsunami.insert.housesAmountOrderTotal"
                    title="Houses Destroyed Description"
                    min={validationConstants.housesDestroyedDescription.min}
                    max={validationConstants.housesDestroyedDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Houses Destroyed"}}
                />
            </div>

            <div className={Styles.deathsTotal}>
                <div className={Styles.minMaxTitle}>Total Deaths</div>
                <MinMax
                    model=".tsunami.insert.deathsTotal"
                    title="Number of Deaths"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Deaths"}}
                />
                <MinMax
                    model=".tsunami.insert.deathsAmountOrderTotal"
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
                    model=".tsunami.insert.injuriesTotal"
                    title="Number of Injuries"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Injuries"}}
                />
                <MinMax
                    model=".tsunami.insert.injuriesAmountOrderTotal"
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
                    model=".tsunami.insert.missingTotal"
                    title="Number of Missing"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Missing"}}
                />
                <MinMax
                    model=".tsunami.insert.missingAmountOrderTotal"
                    title="Missing Description"
                    min={validationConstants.deathDescription.min}
                    max={validationConstants.deathDescription.max}
                    validMinMax={props.validateMinMax}
                    validMessage={{valid: "Invalid Total Missing Description"}}
                />
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

export default TotalEffects;