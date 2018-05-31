import React, { PropTypes } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer.jsx';
import TsunamiContainer from './Tsunamis/TsunamiEventDataDisplay/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';
import Home from './home/Home.jsx';
import { history } from '../store';
import FourZeroFour from './FourZeroFour/FourZeroFour';
import TsunamiSearchContainer from './Tsunamis/TsunamiEventSearch/TsunamiSearchContainer.jsx';
import TsunamiInsertContainer from './Tsunamis/TsunamiEventInsert/TsunamiInsertContainer';
import RunupInsertContainer from './Tsunamis/TsunamiRunupInsert/RunupInsertContainer';
import RunupSearchContainer from './Tsunamis/TsunamiRunupSearch/RunupSearchContainer';
import UpdateTsunamiContainer from './Tsunamis/TsunamiEventUpdate/UpdateTsunamiContainer';
import UpdateRunupContainer from './Tsunamis/TsunamiRunupUpdate/UpdateRunupContainer';
import RunupContainer from './Tsunamis/TsunamiRunupDataDisplay/RunupContainer';
import TsunamiLanding from './Tsunamis/TsunamiLandingPage/TsunamiLanding';
import EarthquakeSearchContainer from './Earthquakes/EarthquakeSearch/EarthquakeSearchContainer';
import EarthquakeContainer from './Earthquakes/EarthquakeDataDisplay/EarthquakeContainer';
import EarthquakeInsertContainer from './Earthquakes/EarthquakeInsert/EarthquakeInsertContainer';
import EarthquakeUpdateContainer from './Earthquakes/EarthquakeUpdate/EarthquakeUpdateContainer';
import ReferenceContainer from './References/ReferenceDataDisplay/ReferenceContainer';
import ReferenceSearchContainer from './References/ReferenceSearch/ReferenceSearchContainer';
import ReferenceInsertContainer from './References/ReferenceInsert/ReferenceInsertContainer';
import ReferenceUpdateContainer from './References/ReferenceUpdate/ReferenceUpdateContainer';
import EarthquakeLanding from './Earthquakes/EarthquakeLanding/EarthquakeLanding';
import VolcanoContainer from './Volcanoes/VolcanoDataDisplay/VolcanoContainer';
import VolcanoEventSearchContainer from './Volcanoes/VolcanoEventSearch/VolcanoEventSearchContainer';
import VolcanoLocContainer from './Volcanoes/VolcanoLocDataDisplay/VolcanoLocContainer';
import VolcanoLocSearchContainer from './Volcanoes/VolcanoLocSearch/VolcanoLocSearchContainer';
import VolcanoEventInsertContainer from './Volcanoes/VolcanoEventInsert/VolcanoEventInsertContainer';
import VolcanoLocInsertContainer from './Volcanoes/VolcanoLocInsert/VolcanoLocInsertContainer';
import VolcanoEventUpdateContainer from './Volcanoes/VolcanoEventUpdate/VolcanoEventUpdateContainer';
import VolcanoLocUpdateContainer from './Volcanoes/VolcanoLocUpdate/VolcanoLocUpdateContainer';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className={Styles.container}>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="/*" component={Navbar} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact strict path="/tsunami/event/data" component={TsunamiContainer} />
            <Route exact path="/tsunami/runup/data" component={RunupContainer} />
            <Route exact path="/tsunami/eventsearch" component={TsunamiSearchContainer} />
            <Route exact path="/tsunami/insertevent" component={TsunamiInsertContainer} />
            <Route exact path="/tsunami/insertrunup/:eventId" component={RunupInsertContainer} />
            <Route exact path="/tsunami/runupsearch" component={RunupSearchContainer} />
            <Route exact path="/tsunami/updatetsunami/:id" component={UpdateTsunamiContainer} />
            <Route exact path="/tsunami/updaterunup/:runupId/:eventId" component={UpdateRunupContainer} />
            <Route exact path="/tsunami/landing" component={TsunamiLanding} />
            <Route exact path="/earthquake/eventsearch" component={EarthquakeSearchContainer} />
            <Route exact path="/earthquake/event/data" component={EarthquakeContainer} />
            <Route exact path="/earthquake/insert" component={EarthquakeInsertContainer} />
            <Route exact path="/earthquake/update/:id" component={EarthquakeUpdateContainer} />
            <Route exact path="/earthquake/landing" component={EarthquakeLanding} />
            <Route exact path="/reference/data" component={ReferenceContainer} />
            <Route exact path="/reference/search" component={ReferenceSearchContainer} />
            <Route exact path="/reference/insert" component={ReferenceInsertContainer} />
            <Route exact path="/reference/update/:id" component={ReferenceUpdateContainer} />
            <Route exact path="/volcano/event/data" component={VolcanoContainer} />
            <Route exact path="/volcano/event/search" component={VolcanoEventSearchContainer} />
            <Route exact path="/volcano/loc/data" component={VolcanoLocContainer} />
            <Route exact path="/volcano/loc/search" component={VolcanoLocSearchContainer} />
            <Route exact path="/volcano/event/insert/:volLocId" component={VolcanoEventInsertContainer} />
            <Route exact path="/volcano/loc/insert" component={VolcanoLocInsertContainer} />
            <Route exact path="/volcano/event/update/:hazEventId/:volId" component={VolcanoEventUpdateContainer} />
            <Route exact path="/volcano/loc/update/:id" component={VolcanoLocUpdateContainer} />
            {/* Must have 404 component listed last */}
            <Route path="*" component={FourZeroFour} />
          </Switch>
          <Route path="/*" component={Footer} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
