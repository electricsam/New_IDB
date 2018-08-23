import React from 'react';

import loadWheel from '../../assets/loading_wheel.gif';
import Styles from './LoadingStyle.css';

/**
 * Component for loading wheel
 *
 * @module Loading
 */
const Loading = () => (
  <div className={Styles.container}>
    <img src={loadWheel} className={Styles.item} />
  </div>
);

export default Loading;
