import React from 'react'

import noaaLogo from '../../assets/noaa_blue_white.png'
import Styles from './FooterStyle.css'

const inlineStyles = {
  color: 'white',
  textAlign: 'center',
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
        <a href="https://twitter.com/NOAA" target="_blank">
          <i className="fab fa-twitter" style={inlineStyles}></i>
        </a>
      </div>

      <div className={Styles.facebook}>
        <a href="https://www.facebook.com/NOAA" target="_blank">
          <i class="fab fa-facebook-f" style={inlineStyles}></i>
        </a>
      </div>

      <div className={Styles.instagram}>
        <a href="https://www.instagram.com/noaa/" target="_blank">
          <i class="fab fa-instagram" style={inlineStyles}></i>
        </a>
      </div>

      <div className={Styles.youtube}>
        <a href="https://www.youtube.com/usnoaagov" target="_blank">
          <i class="fab fa-youtube" style={inlineStyles}></i>
        </a>
      </div>
    </div>

  </div>

)

export default Footer;