import React from 'react'

import noaaLogo from '../../assets/noaa_blue_white.png'
import Styles from './FooterStyle.css'

import {library} from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import Icon from "./Icon/Icon";
library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faYoutube);


const inlineStyles = {
  color: 'rgb(102,102,102)',
  textAlign: 'center',
};

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
      <Icon
          icon={faTwitter}
          color='rgb(102,102,102'
          href='https://twitter.com/NOAA'
          title='NOAA Twitter'/>

      <Icon
          icon={faFacebook}
          color='rgb(102,102,102'
          href='https://www.facebook.com/NOAA'
          title='NOAA Facebook'/>

      <Icon
        icon={faInstagram}
        color='rgb(102,102,102'
        href='https://www.instagram.com/noaa/'
        title='NOAA Instagram'/>

      <Icon
          icon={faYoutube}
          color='rgb(102,102,102'
          href='https://www.youtube.com/usnoaagov'
          title='NOAA YouTube'/>
    </div>

    <div className={Styles.addLinkContainer}>
      <p> Lorem | Ipsum | Sit | Dolor | Amet | Consectetur | Adipiscing | elit | sed | do | eismod </p>
    </div>

  </div>

)

export default Footer;