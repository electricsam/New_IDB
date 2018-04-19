import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import { validationConstants } from "../tsunamiForms/constants";

import MinMax from '../searchFormPartials/MinMax';
import Styles from './UpdateTsunamiStyles.css';

const Measurements = props => (
    <div className={Styles.formSectionTwo}>
        <div className={Styles.header}>
            <h3>Event Measurements</h3>
        </div>
        <div className={Styles.formInnerSectionTwo}>
            <div className={Styles.eqDepth}>
                <div className={Styles.minMaxTitle}>Earthquake Depth</div>
                <MinMax model=".tsunami.tsEvent[0].eqDepth"
                        title=""
                        min={validationConstants.eqDepth.min}
                        max={validationConstants.eqDepth.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Depth"}}
                />
            </div>
            <div className={Styles.eqMag}>
                <div className={Styles.minMaxTitle}>Earthquake Magnitude</div>
                <MinMax model=".tsunami.tsEvent[0].eqMagUnk"
                        title="UNK"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.tsEvent[0].eqMagMb"
                        title="MB"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.tsEvent[0].eqMagMs"
                        title="MS"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.tsEvent[0].eqMagMw"
                        title="MW"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.tsEvent[0].eqMagMfa"
                        title="Mfa"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.tsEvent[0].eqMagMl"
                        title="ML"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
            </div>

            <div className={Styles.cause}>
                <div className={Styles.minMaxTitle}>Cause Code</div>
                <MinMax model=".tsunami.tsEvent[0].causeCode"
                        title=""
                        min={validationConstants.cause.min}
                        max={validationConstants.cause.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Cause Code"}}
                />
            </div>
            <div className={Styles.validity}>
                <div className={Styles.minMaxTitle}>Event Validity</div>
                <MinMax model=".tsunami.tsEvent[0].eventValidity"
                        title=""
                        min={validationConstants.validity.min}
                        max={validationConstants.validity.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Event Validity"}}
                />
            </div>
            <div className={Styles.maxRunup}>
                <div className={Styles.minMaxTitle}>Maximum Water Height (meters)</div>
                <MinMax model=".tsunami.tsEvent[0].maxEventRunup"
                        title=""
                        min={validationConstants.waterHeight.min}
                        max={validationConstants.waterHeight.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
            </div>

            <div className={Styles.tsunamiMagnitude}>
                <div className={Styles.minMaxTitle}>Tsunami Magnitude</div>
                <MinMax model=".tsunami.tsEvent[0].tsMtAbe"
                        title="Abe"
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Abe"}}
                />
                <MinMax model=".tsunami.tsEvent[0].tsMtII"
                        title="Iida-Imamura"
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Iida-Imamura"}}
                />
            </div>


            <div className={Styles.intensity}>
                <div className={Styles.minMaxTitle}>Tsunami Intensity: Soloviev</div>
                <MinMax model=".tsunami.tsEvent[0].tsIntensity"
                        title=""
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Tsunami Intensity"}}
                />
            </div>

            <div className={Styles.warning}>
                <div className={Styles.minMaxTitle}>Tsunami Warning Status</div>
                <MinMax model=".tsunami.tsEvent[0].warningStatusId"
                        title=""
                        min={validationConstants.warningStatus.min}
                        max={validationConstants.warningStatus.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Warning Status"}}
                />
            </div>
        </div>
    </div>
);

export default Measurements;