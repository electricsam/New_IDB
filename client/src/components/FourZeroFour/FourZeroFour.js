import React from 'react';

import Styles from './FourZeroFourStyle.css';

const FourZeroFour = () => (
  <div className={Styles.container}>
    <div>
      <h2 className={Styles.header}>404 page not found</h2>
      <p className={Styles.body}>
        We are sorry but the page you are looking for does not exist.
      </p>
    </div>
  </div>
);

export default FourZeroFour;
