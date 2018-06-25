import React from 'react';
import Styles from './NewNavbarStyle.css';
import { Link } from 'react-router-dom';

import noaa_logo from '../../assets/noaa_logo.png'
import Menu from "../Menu/Menu";
import MenuItem from '../MenuItem/MenuItem'
import SubMenu from "../SubMenu/SubMenu";

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      eqSubMenuDisplay: 'none',
      tsSubMenuDisplay: 'none',
      refSubMenuDisplay: 'none',
      volSubMenuDisplay: 'none',
      hazDisplay: 'none',
      haz: {
        expand: 'expand_more'
      }
    }
  }

  handleHazMouseEnter = () => {
    let prevState = this.state;
    //TODO change this to copy of this.state
    prevState.hazDisplay = 'block';
    prevState.haz.expand = 'expand_less';
    this.setState(prevState);
  };

  handleHazMouseLeave = () => {
    let prevState = this.state;
    prevState.hazDisplay = 'none'
    prevState.haz.expand = 'expand_more'
    this.setState(prevState);
  };

  handleEqMouseEnter = () => {
    let prevState = this.state;
    prevState.eqSubMenuDisplay = 'block';
    this.setState(prevState);
  };

  handleEqMouseLeave = () => {
    let prevState = this.state;
    prevState.eqSubMenuDisplay = 'none';
    this.setState(prevState);
  };

  handleTsMouseEnter = () => {
    let prevState = this.state;
    prevState.tsSubMenuDisplay = 'block';
    this.setState(prevState);
  };

  handleTsMouseLeave = () => {
    let prevState = this.state;
    prevState.tsSubMenuDisplay = 'none';
    this.setState(prevState);
  };

  handleRefMouseEnter = () => {
    let prevState = this.state;
    prevState.refSubMenuDisplay = 'block';
    this.setState(prevState);
  };

  handleRefMouseLeave = () => {
    let prevState = this.state;
    prevState.refSubMenuDisplay = 'none';
    this.setState(prevState);
  };

  handleVolMouseEnter = () => {
    let prevState = this.state;
    prevState.volSubMenuDisplay = 'block';
    this.setState(prevState);
  };

  handlevolMouseLeave = () => {
    let prevState = this.state;
    prevState.volSubMenuDisplay = 'none';
    this.setState(prevState);
  };



  render() {
    return (
        <div className={Styles.container}>

          <div className={Styles.logoContainer}>
            <div className={Styles.imgContianer}>
              <img alt='NOAA Logo' src={noaa_logo}/>
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

              <li onMouseEnter={()=>this.handleHazMouseEnter()}
                  onMouseLeave={()=>this.handleHazMouseLeave()}
                  className={Styles.mainMenuListItemDropper}>
                <Link to="/hazards/landing" className={Styles.hazLink}>
                  HAZARD PAGES<i className="material-icons">{this.state.haz.expand}</i>
                </Link>
                <Menu display={this.state.hazDisplay}>
                  <MenuItem linkText="EARTHQUAKES"
                            address="/earthquake/landing"
                            handleMouseEnter={this.handleEqMouseEnter}
                            handleMouseLeave={this.handleEqMouseLeave}
                            color={this.state.menuItemColor}
                            hasExpander={true}
                  >
                    <SubMenu display={this.state.eqSubMenuDisplay}>
                      <MenuItem linkText="Events" address={'/earthquake/eventsearch'} hasExpander={false}/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem
                      linkText="VOLCANOES"
                      address="/volcano/landing"
                      handleMouseEnter={this.handleVolMouseEnter}
                      handleMouseLeave={this.handlevolMouseLeave}
                      hasExpander={true}
                  >
                    <SubMenu display={this.state.volSubMenuDisplay}>
                      <MenuItem linkText="Events" address="/volcano/event/search" hasExpander={false}/>
                      <MenuItem linkText="Locations" address='/volcano/loc/search' hasExpander={false}/>
                      <MenuItem linkText="Insert Location" address='/volcano/loc/insert' hasExpander={false}/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem linkText="TSUNAMIS" address="/tsunami/landing"
                            handleMouseEnter={this.handleTsMouseEnter}
                            handleMouseLeave={this.handleTsMouseLeave}
                            hasExpander={true}
                  >
                    <SubMenu display={this.state.tsSubMenuDisplay}>
                      <MenuItem linkText="Events" address="/tsunami/eventsearch" hasExpander={false}/>
                      <MenuItem linkText="Runups" address="/tsunami/runupsearch" hasExpander={false}/>
                      <MenuItem linkText="Deposit" address="/tsunami/depositsearch" hasExpander={false}/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem linkText="REFERENCES" address="/reference/landing"
                            handleMouseEnter={this.handleRefMouseEnter}
                            handleMouseLeave={this.handleRefMouseLeave}
                            hasExpander={true}
                  >
                    <SubMenu display={this.state.refSubMenuDisplay}>
                      <MenuItem linkText="References" address="/reference/search" hasExpander={false}/>
                    </SubMenu>

                  </MenuItem>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
    )
  }
};

export default Navbar