import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import { validationConstants, effectDescriptions, damageMillions } from "../tsunamiForms/constants";
import DropDown from '../FormPartials/DropDown.jsx';
import MinMax from '../FormPartials/MinMax';
import Styles from './UpdateRunupStyles.css';


const Effects = props => (
    <div className={Styles.formSectionThree}>
        <div className={Styles.header}>
            <h3>Runup Effects</h3>
        </div>
        <div className={Styles.formInnerSectionThree}>
            <div className={Styles.damage}>
                <div className={Styles.minMaxTitle}>Damage</div>
                <MinMax
                    model=".tsunami.runupData[0].damageMillionsofDollars"
                    title="Damage in Millions of Dollars"
                    min={validationConstants.damageInMillions.min}
                    max={validationConstants.damageInMillions.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Damage Description"
                          model=".tsunami.runupData[0].damageAmountOrder"
                          data={damageMillions}
                />
            </div>
            <div className={Styles.housesDestroyed}>
                <div className={Styles.minMaxTitle}>Houses Destoyed</div>
                <MinMax
                    model=".tsunami.runupData[0].housesDestroyed"
                    title="Number of Houses Destroyed"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Houses Destroyed Description"
                          model=".tsunami.runupData[0].housesAmountOrder"
                          data={effectDescriptions}
                />
            </div>
            <div className={Styles.deaths}>
                <div className={Styles.minMaxTitle}>Deaths</div>
                <MinMax
                    model=".tsunami.runupData[0].deaths"
                    title="Number of Deaths"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Death Description"
                          model=".tsunami.runupData[0].deathsAmountOrder"
                          data={effectDescriptions}/>
            </div>
            <div className={Styles.injuries}>
                <div className={Styles.minMaxTitle}>Injuries</div>
                <MinMax
                    model=".tsunami.runupData[0].injuries"
                    title="Number of Injuries"
                    min={validationConstants.numberOfInjuries.min}
                    max={validationConstants.numberOfInjuries.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Injury Description"
                          model=".tsunami.runupData[0].injuriesAmountOrder"
                          data={effectDescriptions}/>
            </div>
            <div className={Styles.missing}>
                <div className={Styles.minMaxTitle}>Missing</div>
                <MinMax
                    model=".tsunami.runupData[0].missing"
                    title="Number of Missing"
                    min={validationConstants.numberOfDeaths.min}
                    max={validationConstants.numberOfDeaths.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Missing Description"
                          model=".tsunami.runupData[0].missingAmountOrder"
                          data={effectDescriptions}/>
            </div>
            <div className={Styles.housesDamaged}>
                <div className={Styles.minMaxTitle}>Houses Damaged</div>
                <MinMax
                    model=".tsunami.runupData[0].housesDamaged"
                    title="Number of Houses Damaged"
                    min={validationConstants.numberOfHousesDestroyed.min}
                    max={validationConstants.numberOfHousesDestroyed.max}
                    validMinMax={props.validateMinMax}
                />
                <div className={Styles.minMaxTitle}>OR</div>
                <DropDown title="Houses Damaged Description"
                          model=".tsunami.runupData[0].housesDamagedAmountOrder"
                          data={effectDescriptions}
                />
            </div>
            <div className={Styles.comments}>
                <div className={Styles.minMaxTitle}>Comments</div>
                <Control.textarea
                    model=".tsunami.runupData[0].comments"
                    id=".tsunami.runupData[0].comments"
                />
            </div>
        </div>
    </div>
);

export default Effects;