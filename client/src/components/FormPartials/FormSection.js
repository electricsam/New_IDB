import React from 'react';

import DropDown from "./DropDown.jsx";
import Radio from "./Radio";
import MinMax from "./MinMax";

const FormSection = props => (
  <div className={props.sectionStyle}>
    {console.log("PROPS: ******************************** ",props)}
    <div className={props.headerStyle}>
      <h3>{props.title}</h3>
      <div className={props.expandCollapseStyle}>
        {
          props.showSection ?
            <i className="material-icons" onClick={props.toggleSection}>&#xE5CE;</i> :
            <i className="material-icons" onClick={props.toggleSection}>&#xE5CF;</i>
        }
      </div>
    </div>
    {
      props.showSection?
        <div className={props.innerSectionStyle}>
          {
            props.formData.map(e => {
              if(e.type === 'DROPDOWN'){
                return (
                    <div className={e.styles.wrapper}>
                      <div className={e.styles.title}>{e.title}</div>
                      <DropDown title={e.title} model={e.model} data={e.data}/>
                    </div>
                )
              } else if(e.type === 'DROPDOWNOR'){
                return (
                    <div className={e.styles.wrapper}>
                      <div className={e.styles.title}>{e.title}</div>
                      <DropDown title={e.title} model={e.model} data={e.data}
                                disabled={() => props.checkDropDownDisabled(e.disabled)}/>
                    </div>
                )
              }else if(e.type === 'RADIO'){
                return (
                  <Radio
                    radios={e.radios}
                    radioSectionStyle={e.sectionStyle}
                    titleStyle={e.titleStyle}
                    title={e.title}
                    htmlFor={e.htmlFor}
                    checkConditions={props.checkConditions}
                    textModelPreface={e.textModelPreface}
                    model={e.model}
                  />
                )
              }
              else if(e.type === 'MINMAX'){
                return (
                  <div className={e.sectionStyle}>
                    <div className={e.titleStyle}>{e.title}</div>
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
                  </div>
                )
              }
              else if(e.type = 'MULTIMINMAX'){
                return (
                    <div className={e.sectionStyle}>
                      <div className={e.titleStyle}>{e.title}</div>
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
                    </div>
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