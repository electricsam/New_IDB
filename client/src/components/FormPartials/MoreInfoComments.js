import React from 'react';
import Styles from './MoreInfoCommentsStyles.css';

const MoreInfoComments = props => (
    <div className={Styles.container}>
      <h1>Comments</h1>
      <p className={Styles.para}>
        {props.comments? props.comments : "No Comments Available"}
      </p>
    </div>
);


export default MoreInfoComments