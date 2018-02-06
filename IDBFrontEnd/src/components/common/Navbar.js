import React from 'react';


import noaa_logo from '../../assets/noaa_logo.png';
import doc_logo from '../../assets/doc_logo.png';
import Styles from './NavbarStyle.css';

class Navbar extends React.Component {
  componentDidMount() {
    console.log('coming from navbar: ', Styles.noaa);
  }

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.noaa}>
          <a href="http://www.noaa.gov/" target="_blank">
            <img src={noaa_logo} />
          </a>
        </div>

        <div className={Styles.noaaTitleLarge}>
          NOAA
        </div>

        <div className={Styles.noaaTitle}>
          <a href="http://www.noaa.gov/" target="_blank">
            National Oceanic and Atmospheric Administration
          </a>
          <a href="https://www.commerce.gov/" target="_blank">
            U.S. Department of Commerce
          </a>
        </div>

        <div className={Styles.doc}>
          <a href="http://www.commerce.gov/" target="_blank">
            <img src={doc_logo} />
          </a>
        </div>

      </div>
    );
  }
}

export default Navbar;
