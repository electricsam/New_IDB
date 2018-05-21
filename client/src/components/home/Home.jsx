import React from 'react';
import lavaFlow from "../../assets/lava_flow.jpg";
import killerWhale from '../../assets/killer_whale.jpg';
import Styles from './HomeStyle.css';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';

const inlineStyles = {
  backgroundImage: `url(${killerWhale})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

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