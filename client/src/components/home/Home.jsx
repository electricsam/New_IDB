import React from 'react';
import killerWhale from '../../assets/killer_whale.jpg';
import Styles from './HomeStyle.css';

const inlineStyles = {
  backgroundImage: `url(${killerWhale})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

/**
 * Component for the display of the home page
 *
 * @module Home
 */
const Home = () => {
  return (
    <div className={Styles.container} style={inlineStyles}>
      <div className={Styles.welcome}>
        <h1 id="hello" className={Styles.title}>Natural Hazards Data</h1>
      </div>
    </div>
  );
}

export default Home;