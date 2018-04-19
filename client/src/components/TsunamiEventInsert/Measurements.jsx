import React from 'react';
import {Control, Errors} from 'react-redux-form/lib/immutable';

import { validationConstants } from "../tsunamiForms/constants";
import MinMax from '../searchFormPartials/MinMax';
import Styles from './InsertTsunamiStyles.css';

const Measurements = props => (
    <div className={Styles.formSectionTwo}>
        <div className={Styles.header}>
            <h3>Event Measurements</h3>
        </div>
        <div className={Styles.formInnerSectionTwo}>
            <div className={Styles.eqDepth}>
                <div className={Styles.minMaxTitle}>Earthquake Depth</div>
                <MinMax model=".tsunami.insert.eqDepth"
                        title=""
                        min={validationConstants.eqDepth.min}
                        max={validationConstants.eqDepth.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Depth"}}/>
            </div>
            <div className={Styles.eqMag}>
                <div className={Styles.minMaxTitle}>Earthquake Magnitude</div>
                <MinMax model=".tsunami.insert.eqMagUnk"
                        title="UNK"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.insert.eqMagMb"
                        title="MB"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.insert.eqMagMs"
                        title="MS"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.insert.eqMagMw"
                        title="MW"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.insert.eqMagMfa"
                        title="Mfa"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
                <MinMax model=".tsunami.insert.eqMagMl"
                        title="ML"
                        min={validationConstants.eqMag.min}
                        max={validationConstants.eqMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Earthquake Magnitude"}}
                />
            </div>

            <div className={Styles.cause}>
                <div className={Styles.minMaxTitle}>Cause Code</div>
                <MinMax model=".tsunami.insert.causeCode"
                        title=""
                        min={validationConstants.cause.min}
                        max={validationConstants.cause.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Cause Code"}}
                />
            </div>
            <div className={Styles.validity}>
                <div className={Styles.minMaxTitle}>Event Validity</div>
                <MinMax model=".tsunami.insert.eventValidity"
                        title=""
                        min={validationConstants.validity.min}
                        max={validationConstants.validity.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Event Validity"}}
                />
            </div>
            <div className={Styles.maxWaterHt}>
                <div className={Styles.minMaxTitle}>Maximum Water Height (meters)</div>
                <MinMax model=".tsunami.insert.maxEventRunup"
                        title=""
                        min={validationConstants.waterHeight.min}
                        max={validationConstants.waterHeight.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Maximum Water Height"}}
                />
            </div>

            <div className={Styles.tsunamiMagnitude}>
                <div className={Styles.minMaxTitle}>Tsunami Magnitude</div>
                <MinMax model=".tsunami.insert.eqMtAbe"
                        title="Abe"
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Abe"}}
                />
                <MinMax model=".tsunami.insert.eqMtII"
                        title="Iida-Imamura"
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Iida-Imamura"}}
                />
            </div>

            <div className={Styles.intensity}>
                <div className={Styles.minMaxTitle}>Tsunami Intensity: Soloviev</div>
                <MinMax model=".tsunami.insert.tsIntensity"
                        title=""
                        min={validationConstants.tsMag.min}
                        max={validationConstants.tsMag.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Tsunami Intensity"}}
                />
            </div>

            <div className={Styles.warning}>
                <div className={Styles.minMaxTitle}>Tsunami Warning Status</div>
                <MinMax model=".tsunami.insert.warningStatusId"
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