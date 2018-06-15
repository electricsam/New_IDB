import React from 'react';

import { Control, Errors } from 'react-redux-form/lib/immutable';

import DropDown from './DropDown.jsx';
import Radio from './Radio';
import MinMax from './MinMax';
import SubSection from './SubSection';
import DateTime from './DateTime';
import Styles from './FormSectionStyles.css';
import DropDownList from "./DropDownList";
import Text from "./Text";

const FormSection = props => (
  <section className={Styles.formOuterSection}>
    <div className={Styles.header}>
      <h3>{props.title}</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showSection ?
            <i className="material-icons" onClick={props.toggleSection}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleSection}>&#xE5CF;</i>
        }
      </div>
    </div>
    {
      props.showSection ?
        <div className={Styles.formInnerSection}>
          {
            props.formData.map((e) => {
              if (e.type === 'DROPDOWN') {
                return (
                    <DropDown model={e.model} data={e.data} title={e.title}/>
                );
              } else if (e.type === 'DROPDOWNOR') {
                return (
                  <SubSection title={e.title}>
                    <DropDownList list={e.dropDowns}/>
                  </SubSection>
                );
              } else if (e.type === 'RADIO') {
                console.log(props);
                return (
                  <Radio
                    radios={e.radios}
                    radioSectionStyle={Styles.subSection}
                    titleStyle={Styles.subSectionTitle}
                    title={e.title}
                    htmlFor={e.htmlFor}
                    checkConditions={props.checkConditions}
                    condition={e.condition}
                    textModelPreface={e.textModelPreface}
                    model={e.model}
                  />
                );
              } else if (e.type === 'MINMAX') {
                return (
                  <SubSection title={e.title}>
                    <MinMax
                      model={e.min.model}
                      title="Min"
                      min={e.minThreshold}
                      max={e.maxThreshold}
                      validMinMax={props.validateMinMax}
                      validMessage={{ valid: e.min.validMessage }}
                    />
                    <MinMax
                      model={e.max.model}
                      title="Max"
                      min={e.minThreshold}
                      max={e.maxThreshold}
                      validMinMax={props.validateMinMax}
                      validMessage={{ valid: e.max.validMessage }}
                    />
                  </SubSection>
                );
              } else if (e.type === 'DATETIME') {
                return (
                  <SubSection title={e.title}>
                    <DateTime
                      model={e.model}
                      title="YYYY-MM-DD HH:MM:SS"
                      validDateTime={props.validateDateTime}
                      validMessage={{ valid: e.validMessage }}
                    />
                  </SubSection>
                );
              } else if (e.type === 'MULTIMINMAX') {
                return (
                  <SubSection title={e.title}>
                    {
                      e.data.map(x => (
                        <MinMax
                          model={x.model}
                          title={x.title}
                          min={x.minThreshold}
                          max={x.maxThreshold}
                          validMinMax={props.validateMinMax}
                          validMessage={{ valid: x.validMessage }}
                        />
                      ))
                    }
                  </SubSection>
                );
              } else if (e.type === 'TEXT') {
                return (

                    <Text
                      model={e.model}
                      title={e.title}
                      min={e.minThreshold}
                      max={e.maxThreshold}
                      validMinMax={props.validateMinMax}
                      validMessage={{ valid: e.validMessage }}
                      needsVal={true}
                    />

                );
              } else if (e.type === 'TEXTNOVAL') {
                return (
                  <Text
                    model={e.model}
                    title={e.title}
                    needsVal={false}
                  />
                );
              } else if (e.type === 'RADIONOTEXT') {
                return (
                  <SubSection title={e.title}>
                    {
                      e.data.map(x => (
                        <div>
                          <Control.radio
                            model={e.model}
                            id={e.id}
                            value={x.value}
                            isToggle
                            checked={x.checked}
                          />
                          <label htmlFor={x.htmlFor}> {x.label} </label>
                        </div>
                      ))
                    }
                  </SubSection>
                );
              } else if (e.type === 'TEXTAREA') {
                return (
                  <SubSection title={e.title}>
                    <Control.textarea model={e.model} id={e.id} />
                  </SubSection>
                );
              }
            })
          }
        </div> :
        <div />
    }
  </section>
);


export default FormSection;
