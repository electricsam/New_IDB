import React from 'react';

import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import DropDown from '../DropDown/DropDown.jsx';
import Radio from '../Radio/Radio';
import MinMax from '../MinMax/MinMax';
import SubSection from '../SubSection/SubSection';
import DateTime from '../DateTime/DateTime';
import Styles from './FormSectionStyles.css';
import DropDownList from "../DropDownList/DropDownList";
import Text from "../Text/Text";
import {Textarea} from "../Textarea/Textarea";
import expandMore from '../../../assets/expand_more.svg'
import expandLess from '../../../assets/expand_less.svg'
import SvgIcon from "../../../assets/SvgIcon";

/**
 * A Component that generates a section of a form based on passed props.  It iterates over the formData prop and
 * generates the specified form inputs to go into that section, like text, radio, or texareas.
 *
 * @module FormSection
 * @param props
 * @return {*}
 */
const FormSection = props => (
  <section className={Styles.formOuterSection}>
    <div className={Styles.header}>
      <h3>{props.title}</h3>
      <div className={Styles.expandCollapse}>
        {
          props.showSection ?
              <SvgIcon color='#6c6d6d' icon={expandLess} handleClick={props.toggleSection}/>:
              <SvgIcon color='#6c6d6d' icon={expandMore} handleClick={props.toggleSection}/>
        }
      </div>
    </div>
    {
      props.showSection && Array.isArray(props.formData) ?
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
                    <DropDownList list={e.dropDowns} checkDropDownDisabled={props.checkDropDownDisabled}/>
                  </SubSection>
                );
              } else if (e.type === 'RADIO') {
                return (
                    <SubSection title={e.title}>
                      <Radio
                          radios={e.radios}
                          radioSectionStyle={Styles.subSection}
                          titleStyle={Styles.subSectionTitle}
                          htmlFor={e.htmlFor}
                          checkConditions={props.checkConditions}
                          condition={e.condition}
                          textModelPreface={e.textModelPreface}
                          model={e.model}
                      />
                    </SubSection>

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
                      title="YYYY-MM-DD"
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
                        <div style={{display: 'inline-block', marginRight: '2%'}}>
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
                  <Textarea
                      title={e.title}
                      model={e.model}
                      count={props.count}
                      validLength={props.validLength}
                      maxLength={e.maxLength}
                      validComments={props.validComments}
                      needsVal={true}
                      commentForm={props.commentForm}
                  />
                );
              }else if (e.type === 'TEXTAREANOVAL') {
                return (
                    <Textarea
                        title={e.title}
                        model={e.model}
                        count={props.count}
                        validLength={props.validLength}
                        maxLength={e.maxLength}
                        validComments={props.validComments}
                        needsVal={false}
                    />
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

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  showSection: PropTypes.bool.isRequired,
  formData: PropTypes.array.isRequired,
  checkConditions: PropTypes.func,
  validateMinMax: PropTypes.func,
  validateDateTime: PropTypes.func,
  checkDropDownDisabled: PropTypes.func,
  toggleSelection: PropTypes.func,
};