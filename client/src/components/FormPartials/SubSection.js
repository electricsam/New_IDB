import React from 'react'
import Styles from "./SubSectionStyles.css"


const SubSection = props => (
    <div className={Styles.subSection}>
      <div className={Styles.subSectionTitle}>{props.title}</div>
      {props.children}
    </div>
);


export default SubSection;