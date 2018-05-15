import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import {
    validationConstants,
    rnpMeasureType,
    firstMotion,
} from "../tsunamiForms/constants";

import DropDown from '../FormPartials/DropDown.jsx';
import MinMax from '../FormPartials/MinMax';
import Styles from "./RunupInsertStyle.css";

const Measurements = props => (
    <div className={Styles.formSectionTwo}>
        <div className={Styles.header}>
            <h3>Runup Measurements</h3>
        </div>
        <div className={Styles.formInnerSectionTwo}>
            <div className={Styles.measure}>
                <div className={Styles.minMaxTitle}>Type of Measurement</div>
                <DropDown title="Type of Measurement" model=".tsunami.rnpinsert.typeOfMeasurementId" data={rnpMeasureType}/>
            </div>

            <div className={Styles.maxHt}>
                <div className={Styles.minMaxTitle}>Maximum Height (meters) </div>
                <MinMax model=".tsunami.rnpinsert.runupHt"
                        title=""
                        min={validationConstants.waterHeight.min}
                        max={validationConstants.waterHeight.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Max Height"}}
                />
            </div>

            <div className={Styles.horiz}>
                <div className={Styles.minMaxTitle}>Maximum Horizontal Inundation (meters)</div>
                <MinMax model=".tsunami.rnpinsert.runupHoriz"
                        title=""
                        min={validationConstants.horizInnundation.min}
                        max={validationConstants.horizInnundation.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Horizontal Inundation"}}
                />
            </div>

            <div className={Styles.period}>
                <div className={Styles.minMaxTitle}>Period</div>
                <MinMax model=".tsunami.rnpinsert.period"
                        title=""
                        min={validationConstants.period.min}
                        max={validationConstants.period.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Period"}}
                />
            </div>

            <div className={Styles.firstMotion}>
                <div className={Styles.minMaxTitle}>First Motion</div>
                <DropDown title="First Motion" model=".tsunami.rnpinsert.firstMotion" data={firstMotion}/>
            </div>

            <div className={Styles.arrival}>
                <div className={Styles.minMaxTitle}>Arrival Time</div>
                <MinMax model=".tsunami.rnpinsert.arrDay"
                        title="Day"
                        min={validationConstants.day.min}
                        max={validationConstants.day.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Arrival Day"}}
                />
                <MinMax model=".tsunami.rnpinsert.arrHour"
                        title="Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Arrival Hour"}}
                />

                <MinMax model=".tsunami.rnpinsert.arrMin"
                        title="Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Arrival Minute"}}
                />

            </div>

            <div className={Styles.travel}>
                <div className={Styles.minMaxTitle}>Travel Time</div>
                <MinMax model=".tsunami.rnpinsert.travHours"
                        title="Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Travel Hour"}}
                />
                <MinMax model=".tsunami.rnpinsert.travMins"
                        title="Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Travel Minute"}}
                />
            </div>

            <div className={Styles.maxArrival}>
                <div className={Styles.minMaxTitle}>Max Arrival Time</div>
                <MinMax model=".tsunami.rnpinsert.maxWaveArrDay"
                        title="Day"
                        min={validationConstants.day.min}
                        max={validationConstants.day.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Maximum Arrival Day"}}
                />
                <MinMax model=".tsunami.rnpinsert.maxWaveArrHour"
                        title="Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Maximum Arrival Hour"}}
                />
                <MinMax model=".tsunami.rnpinsert.maxWaveArrMin"
                        title="Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}
                        validMessage={{valid: "Invalid Maximum Arrival Minute"}}
                />
            </div>

            <div className={Styles.doubtful}>
                <div className={Styles.minMaxTitle}>Doubtfulness</div>
                <Control.radio
                    model=".tsunami.rnpinsert.doubtful"
                    id=".tsunami.rnpinsert.doubtful"
                    value="null"
                    isToggle={true}
                    checked="checked"
                ></Control.radio>
                <label htmlFor=".tsunami.rnpinsert.doubtful"> Ok </label>
                <Control.radio
                    model=".tsunami.rnpinsert.doubtful"
                    id=".tsunami.rnpinsert.doubtful"
                    value="?"
                    isToggle={true}
                ></Control.radio>
                <label htmlFor=".tsunami.rnpinsert.doubtful"> Doubtful </label>
                <Control.radio
                    model=".tsunami.rnpinsert.doubtful"
                    id=".tsunami.rnpinsert.doubtful"
                    value="M"
                    isToggle={true}
                ></Control.radio>
                <label htmlFor=".tsunami.rnpinsert.doubtful"> Meteorological </label>
            </div>
        </div>
    </div>
);

export default Measurements;