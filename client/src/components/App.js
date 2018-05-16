import React, {PropTypes} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import NewNavbar from './newNavbar/NewNavbar';
import Footer from './footer/Footer.jsx';
import TsunamiContainer from './TsunamiEventDataDisplay/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';
import Home from './home/Home.jsx';
import {history} from '../store';
import FourZeroFour from "./FourZeroFour/FourZeroFour";
import TsunamiSearchContainer from "./TsunamiEventSearch/TsunamiSearchContainer.jsx";
import TsunamiInsertContainer from "./TsunamiEventInsert/TsunamiInsertContainer";
import RunupInsertContainer from "./TsunamiRunupInsert/RunupInsertContainer";
import RunupSearchContainer from "./TsunamiRunupSearch/RunupSearchContainer";
import UpdateTsunamiContainer from "./TsunamiEventUpdate/UpdateTsunamiContainer";
import UpdateRunupContainer from "./TsunamiRunupUpdate/UpdateRunupContainer";
import RunupContainer from "./TsunamiRunupDataDisplay/RunupContainer";
import TsunamiLanding from "./TsunamiLandingPage/TsunamiLanding";
import EarthquakeSearchContainer from "./EarthquakeSearch/EarthquakeSearchContainer";

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className={Styles.container}>
          <Route exact path = '/' render={()=>(<Redirect to="/home"/>)}/>
          <Route path = "/*" component={NewNavbar}/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={AboutPage} />
            <Route exact strict path="/tsunami/event/data" component={TsunamiContainer}/>
            <Route exact path="/tsunami/runup/data" component={RunupContainer}/>
            <Route exact path="/tsunami/eventsearch" component={TsunamiSearchContainer}/>
            <Route exact path="/tsunami/insertevent" component={TsunamiInsertContainer}/>
            <Route exact path="/tsunami/insertrunup/:eventId" component={RunupInsertContainer}/>
            <Route exact path="/tsunami/runupsearch" component={RunupSearchContainer}/>
            <Route exact path="/tsunami/updatetsunami/:id" component={UpdateTsunamiContainer}/>
            <Route exact path='/tsunami/updaterunup/:runupId/:eventId' component={UpdateRunupContainer}/>
            <Route exact path='/tsunami/landing' component={TsunamiLanding}/>
            <Route exact path='/earthquake/eventsearch' component={EarthquakeSearchContainer}/>
            {/*Must have 404 component listed last*/}
            <Route path ="*" component={FourZeroFour}/>
          </Switch>
          <Route path = "/*" component={Footer}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
