import React from 'react';
import lavaFlow from "../../assets/lava_flow.jpg";
import killerWhale from '../../assets/killer_whale.jpg';
import Styles from './HomeStyle.css';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer.jsx';

const inlineStyles = {
  backgroundImage: `url(${killerWhale})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const Home = () => {
  return (
    <div className={Styles.container} style={inlineStyles}>
      <div className={Styles.welcome}>
        <h1 id="hello" className={Styles.title}>Welcome to the IDB</h1>
        <Link className={Styles.link} to='/tsunamis'>Tsunamis</Link>
        <p className={Styles.placeholder}>PlaceHolder</p>
      </div>
    </div>
  );
}



export default Home;