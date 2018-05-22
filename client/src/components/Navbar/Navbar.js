import React from 'react';
import Styles from './NewNavbarStyle.css';
import { Link } from 'react-router-dom';

import noaa_logo from '../../assets/noaa_logo.png'
import Menu from "../Menu/Menu";
import MenuItem from '../MenuItem/MenuItem'
import SubMenu from "../SubMenu/SubMenu";

// const NewNavbar = () => (
//
//   <div className={Styles.container}>
//
//     <div className={Styles.logoContainer}>
//       <div className={Styles.imgContianer}>
//         <img src={noaa_logo}/>
//       </div>
//       <div className={Styles.noaaTitle}>
//         <a href="http://www.noaa.gov/">NOAA</a>
//       </div>
//     </div>
//
//     <div className={Styles.hazardPages}>
//       <ul className={Styles.mainMenuUl}>
//
//         <li className={Styles.mainMenuListItem}>
//           <Link to="/home" className={Styles.mainLink}>HOME</Link>
//         </li>
//
//         <li className={Styles.mainMenuListItem}>
//           <Link to="/about" className={Styles.mainLink}>ABOUT</Link>
//         </li>
//
//         <li className={Styles.mainMenuListItemDropper}>
//           <Link to="/hazardPages" className={Styles.hazLink}>
//             HAZARD PAGES<i className="material-icons">&#xE5CF;</i>
//           </Link>
//
//           <ul className={Styles.hpContentUl}>
//             <li className={Styles.hpContentLi}>
//               <Link to="/earthquakes">EARTHQUAKES<i className="material-icons">&#xE5CF;</i></Link>
//             </li>
//
//             <li className={Styles.hpContentLi}>
//               <Link to="/volcanoes">VOLCANOES<i className="material-icons">&#xE5CF;</i></Link>
//               <ul className={Styles.nestedUl}>
//                 <li className={Styles.nestedLi}><Link to="/earthquake/eventsearch">EVENTS....</Link></li>
//               </ul>
//             </li>
//
//             <li className={Styles.nestedList}>
//               <Link to="/tsunami/landing" className={Styles.tsunamiLink}>TSUNAMIS<i className="material-icons">&#xE5CF;</i>
//               </Link>
//               <ul className={Styles.nestedUl}>
//                 <li className={Styles.nestedLi}><Link to="/tsunami/eventsearch">EVENTS</Link></li>
//                 <li className={Styles.nestedLi}><Link to="/tsunami/runupsearch">RUNUPS</Link> </li>
//                 <li className={Styles.nestedLi}><Link to="/tsunami/deposits">DEPOSITS</Link></li>
//               </ul>
//
//             </li>
//
//           </ul>
//
//         </li>
//
//       </ul>
//
//
//     </div>
//   </div>
//
//
// );

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  handleItemMouseOver() {
    console.log("aljdflasdkjfdlkajdslfkjalskfjldkjasldkfjlajdsfljasflj")
  }

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

              <li className={Styles.mainMenuListItemDropper}>
                <Link to="/hazardPages" className={Styles.hazLink}>
                  HAZARD PAGES<i className="material-icons">&#xE5CF;</i>
                </Link>
                <Menu>
                  <MenuItem
                      linkText="EARTHQUAKES"
                      address="/earthquake/eventsearch"
                      handleMouseEvent={this.handleItemMouseOver}>
                    <SubMenu>
                      <MenuItem
                          linkText="EVENTS"
                          address={'/earthquake/eventsearch'}
                          handleMouseEvent={this.handleItemMouseOver}/>
                    </SubMenu>
                  </MenuItem>
                  <MenuItem linkText="VOLCANOES" address="/volcano/eventsearch"/>
                  <MenuItem linkText="TSUNAMIS" address="/tsunami/landing">
                    <SubMenu>
                      <MenuItem linkText="Events" address="/tsunami/eventsearch" handleMouseEvent={this.handleItemMouseOver}/>
                      <MenuItem linkText="Runups" address="/tsunami/runupsearch" handleMouseEvent={this.handleItemMouseOver}/>
                      <MenuItem linkText="Deposit" address="/tsunami/depositsearch" handleMouseEvent={this.handleItemMouseOver}/>
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