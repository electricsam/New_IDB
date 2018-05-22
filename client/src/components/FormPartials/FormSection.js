import React from 'react';

import { Control, Errors  } from 'react-redux-form/lib/immutable'

import DropDown from "./DropDown.jsx";
import Radio from "./Radio";
import MinMax from "./MinMax";
import SubSection from "./SubSection"

import Styles from "./FormSectionStyles.css"

const FormSection = props => (
  <div className={Styles.formOuterSection}>
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
      props.showSection?
        <div className={Styles.formInnerSection}>
          {
            props.formData.map(e => {
              if(e.type === 'DROPDOWN'){
                return (
                    <SubSection title={e.title}>
                      <DropDown model={e.model} data={e.data}/>
                    </SubSection>
                )
              } else if(e.type === 'DROPDOWNOR'){
                return (
                    <SubSection title={e.title}>
                      {
                        e.dropDowns.map(x => (
                            <DropDown  model={x.model} data={x.data}
                                       disabled={()=>props.checkDropDownDisabled(x.disabled)}/>
                        ))
                      }
                    </SubSection>
                )
              }else if(e.type === 'RADIO'){
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
                )
              }
              else if(e.type === 'MINMAX'){
                return (
                    <SubSection title={e.title}>
                      <MinMax
                          model={e.min.model}
                          title="Min"
                          min={e.minThreshold}
                          max={e.maxThreshold}
                          validMinMax={props.validateMinMax}
                          validMessage={{valid: e.min.validMessage}}
                      />
                      <MinMax
                          model={e.max.model}
                          title="Max"
                          min={e.minThreshold}
                          max={e.maxThreshold}
                          validMinMax={props.validateMinMax}
                          validMessage={{valid: e.max.validMessage}}
                      />
                    </SubSection>
                )
              }
              else if(e.type === 'MULTIMINMAX'){
                return (
                    <SubSection title={e.title}>
                      {
                        e.data.map(x => {
                          return(
                            <MinMax
                              model={x.model}
                              title={x.title}
                              min={x.minThreshold}
                              max={x.maxThreshold}
                              validMinMax={props.validateMinMax}
                              validMessage={{valid: x.validMessage}}
                            />
                          )
                        })
                      }
                    </SubSection>
                )
              }else if (e.type === 'TEXT'){
                return (
                    <SubSection title={e.title}>
                      <MinMax
                          model={e.model}
                          title=""
                          min={e.minThreshold}
                          max={e.maxThreshold}
                          validMinMax={props.validateMinMax}
                          validMessage={{valid: e.validMessage}}
                      />
                    </SubSection>
                )
              }else if (e.type === 'TEXTNOVAL'){
                return (
                    <SubSection title={e.title}>
                      <Control.text model={e.model} id={e.model}/>
                    </SubSection>
                )
              }else if(e.type === "RADIONOTEXT"){
                return (
                    <SubSection title={e.title}>
                      {
                        e.data.map(x => (
                            <div>
                              <Control.radio model={e.model}
                                             id={e.id}
                                             value={x.value}
                                             isToggle={true}
                                             checked={x.checked}/>
                              <label htmlFor={x.htmlFor}> {x.label} </label>
                            </div>
                        ))
                      }
                    </SubSection>
                )
              }else if(e.type === "TEXTAREA"){
                return (
                    <SubSection title={e.title}>
                      <Control.textarea model={e.model} id={e.id}/>
                    </SubSection>
                )
              }
            })
          }
        </div>:
        <div></div>
    }
  </div>
);


export default FormSection;