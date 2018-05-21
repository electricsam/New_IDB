import React from 'react';
import Styles from './NewNavbarStyle.css';
import { Link } from 'react-router-dom';

import noaa_logo from '../../assets/noaa_logo.png'

const NewNavbar = () => (

  <div className={Styles.container}>

    <div className={Styles.logoContainer}>
      <div className={Styles.imgContianer}>
        <img src={noaa_logo}/>
      </div>
      <div className={Styles.noaaTitle}>
        <a href="http://www.noaa.gov/">NOAA</a>
      </div>
    </div>

    <div className={Styles.hazardPages}>
      <ul className={Styles.mainMenuUl}>

        <li className={Styles.mainMenuListItem}>
          <Link to="/home" className={Styles.mainLink}>HOME</Link>
        </li>

        <li className={Styles.mainMenuListItem}>
          <Link to="/about" className={Styles.mainLink}>ABOUT</Link>
        </li>

        <li className={Styles.mainMenuListItemDropper}>
          <Link to="/hazardPages" className={Styles.hazLink}>
            HAZARD PAGES<i className="material-icons">&#xE5CF;</i>
          </Link>

          <ul className={Styles.hpContentUl}>
            <li className={Styles.hpContentLi}>
              <Link to="/earthquakes">EARTHQUAKES<i className="material-icons">&#xE5CF;</i></Link>
            </li>

            <li className={Styles.hpContentLi}>
              <Link to="/volcanoes">VOLCANOES<i className="material-icons">&#xE5CF;</i></Link>

              <ul className={Styles.nestedUl}>

                <li className={Styles.nestedLi}><Link to="/earthquake/eventsearch">EVENTS....</Link></li>

              </ul>

            </li>

            <li className={Styles.nestedList}>
              <Link to="/tsunami/landing" className={Styles.tsunamiLink}>TSUNAMIS<i className="material-icons">&#xE5CF;</i>
              </Link>

              <ul className={Styles.nestedUl}>

                <li className={Styles.nestedLi}><Link to="/tsunami/eventsearch">EVENTS</Link></li>

                <li className={Styles.nestedLi}><Link to="/tsunami/runupsearch">RUNUPS</Link> </li>

                <li className={Styles.nestedLi}><Link to="/tsunami/deposits">DEPOSITS</Link></li>

              </ul>

            </li>

          </ul>

        </li>

      </ul>


    </div>
  </div>


)

export default NewNavbar