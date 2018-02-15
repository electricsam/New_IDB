import React from 'react'

import noaaLogo from '../../assets/noaa_blue_white.png'
import Styles from './FooterStyle.css'

const inlineStyles = {
  color: 'white',
  textAlign: 'center',
  marginTop: '40%',
}

const Footer = () => (
  <div className={Styles.container}>
    <p className={Styles.about}>About Us</p>
    <p className={Styles.work}>Our Work</p>
    <div className={Styles.logo}>
      <a href="http://www.noaa.gov/" target="_blank">
        <img className={Styles.logoImg} src={noaaLogo} />
      </a>
      <p>
        Science.Service.Stewardship
      </p>
    </div>

    <p className={Styles.stayConnected}>Stay Connected</p>

    <div className={Styles.social}>
      <div className = {Styles.twitter}>
        <i className="fab fa-twitter" style={inlineStyles}></i>
      </div>

      <div className={Styles.facebook}>
        <i class="fab fa-facebook-f" style={inlineStyles}></i>
      </div>

      <div className={Styles.instagram}>
        <i class="fab fa-instagram" style={inlineStyles}></i>
      </div>

      <div className={Styles.youtube}>
        <i class="fab fa-youtube" style={inlineStyles}></i>
      </div>
    </div>

  </div>

)

export default Footer;