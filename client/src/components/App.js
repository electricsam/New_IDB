import React, {PropTypes} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer.jsx';
import TsunamiContainer from './Tsunami/TsunamiEventDataDisplay/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';
import Home from './home/Home.jsx';
import {history} from '../store';
import FourZeroFour from './FourZeroFour/FourZeroFour';
import TsunamiSearchContainer from './Tsunami/TsunamiEventSearch/TsunamiSearchContainer.jsx';
import TsunamiInsertContainer from './Tsunami/TsunamiEventInsert/TsunamiInsertContainer';
import RunupInsertContainer from './Tsunami/TsunamiRunupInsert/RunupInsertContainer';
import RunupSearchContainer from './Tsunami/TsunamiRunupSearch/RunupSearchContainer';
import UpdateTsunamiContainer from './Tsunami/TsunamiEventUpdate/UpdateTsunamiContainer';
import UpdateRunupContainer from './Tsunami/TsunamiRunupUpdate/UpdateRunupContainer';
import RunupContainer from './Tsunami/TsunamiRunupDataDisplay/RunupContainer';
import TsunamiLanding from './Tsunami/TsunamiLandingPage/TsunamiLanding';
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
import MoreTsunamiEventInfoContainer from "./Tsunami/MoreEventInfo/MoreTsunamiEventInfoContainer";
import MoreRunupInfoContainer from "./Tsunami/MoreRunupInfo/MoreRunupInfoContainer";
import MoreVolcanoEventInfoContainer from "./Volcanoes/MoreEventInformation/MoreVolcanoEventInfoContainer";
import MoreEqEventInfoContainer from "./Earthquakes/MoreEventInfo/MoreEqEventInfoContainer";
import VolcanoLanding from "./Volcanoes/VolcanoLanding/VolcanoLanding";
import HazardsLanding from "./HazardsLanding/HazardsLanding";
import RelateEarthquake from "./Earthquakes/RelateEarthquake/RelateEarthquake";
import RelateTsunamiEvent from "./Tsunami/RelateTsunamiEvent/RelateTsunamiEvent";
import RelateVolcanoEvent from "./Volcanoes/RelateVolcanoEvent/RelateVolcanoEvent";
import RelateReference from "./References/RelateReference/RelateReference";
import ReferenceLanding from "./References/ReferenceLanding/ReferenceLanding";
import store from "../store";
import {DefinitionModal} from "./DefinitionModal/DefinitionModal";

Modal.setAppElement('#root');

const action = obj => store.dispatch(obj);

/**
 * Container component that returns all routing logic nested inside a ConnectedRouter component
 *
 * @class
 */
class App extends React.Component {
  /**
   * Constructor
   *
   */
  constructor(props){
    super(props);
  }

  /**
   * dispatches action CLOSE_MODAL.  Called in the {@link module:DefinitionModal} component.
   */
  closeModal = () => action({type: "CLOSE_MODAL"});

  render() {
    const {appUi} = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className={Styles.container}>
          <DefinitionModal
              handleCloseModal={this.closeModal}
              isOpen={appUi.get('modalIsOpen')}
              validValues={appUi.get('modalValidValues')}
              title={appUi.get('modalTitle')}
              data={appUi.get('modalData')}
              secondaryData={appUi.get('modalSecondaryData') ? appUi.get('modalSecondaryData').asMutable().toJS() : null}
              component={appUi.get('modalComponent') ? appUi.get('modalComponent').asMutable().toJS() : null}
          />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="/*" component={Navbar} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/hazards/landing" component={HazardsLanding}/>
            <Route exact strict path="/tsunami/event/data" component={TsunamiContainer} />
            <Route exact path="/tsunami/runup/data" component={RunupContainer} />
            <Route exact path="/tsunami/eventsearch" component={TsunamiSearchContainer} />
            <Route exact path="/tsunami/insertevent" component={TsunamiInsertContainer} />
            <Route exact path="/tsunami/insertrunup/:eventId" component={RunupInsertContainer} />
            <Route exact path="/tsunami/runupsearch" component={RunupSearchContainer} />
            <Route exact path="/tsunami/updatetsunami/:id" component={UpdateTsunamiContainer} />
            <Route exact path="/tsunami/updaterunup/:runupId/:eventId" component={UpdateRunupContainer} />
            <Route exact path="/tsunami/landing" component={TsunamiLanding} />
            <Route exact path="/tsunami/event/moreinfo/:eventId" component={MoreTsunamiEventInfoContainer}/>
            <Route exact path="/tsunami/runup/moreinfo/:runupId/:eventId" component={MoreRunupInfoContainer}/>
            <Route exact path="/earthquake/eventsearch" component={EarthquakeSearchContainer} />
            <Route exact path="/earthquake/event/data" component={EarthquakeContainer} />
            <Route exact path="/earthquake/insert" component={EarthquakeInsertContainer} />
            <Route exact path="/earthquake/update/:id" component={EarthquakeUpdateContainer} />
            <Route exact path="/earthquake/landing" component={EarthquakeLanding} />
            <Route exact path="/earthquake/event/moreinfo/:eqId" component={MoreEqEventInfoContainer}/>
            <Route exact path="/reference/data" component={ReferenceContainer} />
            <Route exact path="/reference/search" component={ReferenceSearchContainer} />
            <Route exact path="/reference/insert" component={ReferenceInsertContainer} />
            <Route exact path="/reference/landing" component={ReferenceLanding}/>
            <Route exact path="/reference/update/:id" component={ReferenceUpdateContainer} />
            <Route exact path="/volcano/event/data" component={VolcanoContainer} />
            <Route exact path="/volcano/event/search" component={VolcanoEventSearchContainer} />
            <Route exact path="/volcano/loc/data" component={VolcanoLocContainer} />
            <Route exact path="/volcano/loc/search" component={VolcanoLocSearchContainer} />
            <Route exact path="/volcano/event/insert/:volLocId" component={VolcanoEventInsertContainer} />
            <Route exact path="/volcano/loc/insert" component={VolcanoLocInsertContainer} />
            <Route exact path="/volcano/event/update/:hazEventId/:volId" component={VolcanoEventUpdateContainer} />
            <Route exact path="/volcano/loc/update/:id" component={VolcanoLocUpdateContainer} />
            <Route exact path="/volcano/event/moreinfo/:volcanoId" component={MoreVolcanoEventInfoContainer}/>
            <Route exact path="/volcano/landing" component={VolcanoLanding}/>
            <Route exact path="/earthquake/relate" component={RelateEarthquake}/>
            <Route exact path='/tsunami/relate' component={RelateTsunamiEvent}/>
            <Route exact path='/volcano/relate' component={RelateVolcanoEvent}/>
            <Route exact path='/reference/relate' component={RelateReference}/>
            {/* Must have 404 component listed last */}
            <Route path="*" component={FourZeroFour} />
          </Switch>
          <Route path="/*" component={Footer} />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({appUi: state.appUi});

export default connect(mapStateToProps)(App);