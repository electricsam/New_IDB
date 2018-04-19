import React from 'react'
import { Control, Errors } from 'react-redux-form/lib/immutable';

import { validationConstants, rnpMeasureType, firstMotion } from "../tsunamiForms/constants";
import DropDown from '../searchFormPartials/DropDown.jsx';
import MinMax from '../searchFormPartials/MinMax';
import Styles from './UpdateRunupStyles.css';


const Measurements = props => (
    <div className={Styles.formSectionTwo}>
        <div className={Styles.header}>
            <h3>Runup Measurements</h3>
        </div>
        <div className={Styles.formInnerSectionTwo}>
            <div className={Styles.arrival}>
                <div className={Styles.minMaxTitle}>Arrival Time</div>
                <MinMax model=".tsunami.runupData[0].arrDay"
                        title="Arrival Day"
                        min={validationConstants.day.min}
                        max={validationConstants.day.max}
                        validMinMax={props.validateMinMax}/>
                <MinMax model=".tsunami.runupData[0].arrHour"
                        title="Arrival Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}/>
                <MinMax model=".tsunami.runupData[0].arrMinute"
                        title="Arrival Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.travel}>
                <div className={Styles.minMaxTitle}>Travel Time</div>
                <MinMax model=".tsunami.runupData[0].travHours"
                        title="Travel Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}/>
                <MinMax model=".tsunami.runupData[0].travMins"
                        title="Travel Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.maxWave}>
                <div className={Styles.minMaxTitle}>Max Wave Arrival</div>
                <MinMax model=".tsunami.runupData[0].maxWaveArrDay"
                        title="Arrival Day"
                        min={validationConstants.day.min}
                        max={validationConstants.day.max}
                        validMinMax={props.validateMinMax}/>
                <MinMax model=".tsunami.runupData[0].maxWaveArrHour"
                        title="Arrival Hour"
                        min={validationConstants.hour.min}
                        max={validationConstants.hour.max}
                        validMinMax={props.validateMinMax}/>
                <MinMax model=".tsunami.runupData[0].maxWaveArrMin"
                        title="Arrival Minute"
                        min={validationConstants.minute.min}
                        max={validationConstants.minute.max}
                        validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.firstMotion}>
                <div className={Styles.minMaxTitle}>First Motion</div>
                <DropDown title="First Motion" model=".tsunami.runupData[0].firstMotion" data={firstMotion}/>
            </div>
            <div className={Styles.period}>
                <div className={Styles.minMaxTitle}>Period</div>
                <MinMax model=".tsunami.runupData[0].period"
                        title=""
                        min={validationConstants.period.min}
                        max={validationConstants.period.max}
                        validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.runupHt}>
                <div className={Styles.minMaxTitle}>Runup Height</div>
                <MinMax
                    model=".tsunami.runupData[0].runupHt"
                    title=""
                    min={validationConstants.runupHt.min}
                    max={validationConstants.runupHt.max}
                    validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.runupHoriz}>
                <div className={Styles.minMaxTitle}>Horizontal Inundation</div>
                <MinMax
                    model=".tsunami.runupData[0].runupHoriz"
                    title=""
                    min={validationConstants.runupHt.min}
                    max={validationConstants.runupHt.max}
                    validMinMax={props.validateMinMax}/>
            </div>
            <div className={Styles.measureType}>
                <div className={Styles.minMaxTitle}>Type of Measurement</div>
                <DropDown title="Measurement Type" model=".tsunami.runupData[0].typeOfMeasurementId" data={rnpMeasureType}/>
            </div>
        </div>
    </div>
);

export default Measurements