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
    }
  }

  handleHazMouseEnter = () => {
    let prevState = this.state;
    //TODO change this to copy of this.state
    prevState.hazDisplay = 'block';
    this.setState(prevState);
  };

  handleHazMouseLeave = () => {
    let prevState = this.state;
    prevState.hazDisplay = 'none'
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

              <li onMouseEnter={()=>this.handleHazMouseEnter()}
                  onMouseLeave={()=>this.handleHazMouseLeave()}
                  className={Styles.mainMenuListItemDropper}>
                <Link to="/hazardPages" className={Styles.hazLink}>
                  HAZARD PAGES<i className="material-icons">&#xE5CF;</i>
                </Link>
                <Menu display={this.state.hazDisplay}>
                  <MenuItem linkText="EARTHQUAKES"
                            address="/earthquake/landing"
                            handleMouseEnter={this.handleEqMouseEnter}
                            handleMouseLeave={this.handleEqMouseLeave}
                            color={this.state.menuItemColor}
                  >
                    <SubMenu display={this.state.eqSubMenuDisplay}>
                      <MenuItem linkText="Events" address={'/earthquake/eventsearch'}/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem
                      linkText="VOLCANOES"
                      address="/volcano/eventsearch"
                      handleMouseEnter={this.handleVolMouseEnter}
                      handleMouseLeave={this.handlevolMouseLeave}
                  >
                    <SubMenu display={this.state.volSubMenuDisplay}>
                      <MenuItem linkText="Events" address="/volcano/event/search"/>
                      <MenuItem linkText="Locations" address='/volcano/loc/search'/>
                      <MenuItem linkText="Insert Location" address='/volcano/loc/insert'/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem linkText="TSUNAMIS" address="/tsunami/landing"
                            handleMouseEnter={this.handleTsMouseEnter}
                            handleMouseLeave={this.handleTsMouseLeave}>
                    <SubMenu display={this.state.tsSubMenuDisplay}>
                      <MenuItem linkText="Events" address="/tsunami/eventsearch" />
                      <MenuItem linkText="Runups" address="/tsunami/runupsearch" />
                      <MenuItem linkText="Deposit" address="/tsunami/depositsearch" />
                    </SubMenu>
                  </MenuItem>
                  <MenuItem linkText="REFERENCES" address="/reference/landing"
                            handleMouseEnter={this.handleRefMouseEnter}
                            handleMouseLeave={this.handleRefMouseLeave}>
                    <SubMenu display={this.state.refSubMenuDisplay}>
                      <MenuItem linkText="References" address="/reference/search"/>
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