import React from 'react'

import noaaLogo from '../../assets/noaa_blue_white.png'
import Styles from './FooterStyle.css'

const inlineStyles = {
  color: 'rgb(102,102,102)',
  textAlign: 'center',
}

const Footer = () => (
  <div className={Styles.container}>

    <div className={Styles.aboutContainer}>
      <p className={Styles.about}>About Us</p>
    </div>

    <div className={Styles.workContainer}>
      <p className={Styles.work}>Our Work</p>
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
          <i className="fab fa-facebook-f" style={inlineStyles}></i>
        </a>
      </div>

      <div className={Styles.instagram}>
        <a href="https://www.instagram.com/noaa/" target="_blank">
          <i className="fab fa-instagram" style={inlineStyles}></i>
        </a>
      </div>

      <div className={Styles.youtube}>
        <a href="https://www.youtube.com/usnoaagov" target="_blank">
          <i className="fab fa-youtube" style={inlineStyles}></i>
        </a>
      </div>
    </div>

    <div className={Styles.addLinkContainer}>
      <p> Lorem | Ipsum | Sit | Dolor | Amet | Consectetur | Adipiscing | elit | sed | do | eismod </p>
    </div>

  </div>

)

export default Footer;