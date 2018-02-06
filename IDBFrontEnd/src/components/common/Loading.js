import React from 'react';

import loadWheel from '../../assets/loading_wheel.gif';
import Styles from './LoadingStyle.css';


const Loading = () => (
  <div className={Styles.container}>
    <img src={loadWheel} className={Styles.item} />
  </div>
);


export default Loading;
