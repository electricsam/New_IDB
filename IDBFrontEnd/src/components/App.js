import React, {PropTypes} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import NewNavbar from './newNavbar/NewNavbar';
import Footer from './footer/Footer.jsx';
import TsunamiContainer from './tsunami/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';
import Home from './home/Home.jsx';
import {history} from '../store';
import FourZeroFour from "./FourZeroFour/FourZeroFour";
import TsunamiSearchContainer from "./tsunamiForms/TsunamiSearchContainer.jsx";
import UserDisplay from "./user/UserDisplay";
import TsunamiInsertContainer from "./tsunamiForms/TsunamiInsertContainer";
import RunupInsertContainer from "./tsunamiForms/RunupInsertContainer";
import RunupSearchContainer from "./tsunamiForms/RunupSearchContainer";
import UpdateTsunamiContainer from "./tsunamiForms/UpdateTsunamiContainer";
import TestContainer from "./testComponents/TestContainer";
import UpdateRunupContainer from "./tsunamiForms/UpdateRunupContainer";
import RunupContainer from "./Runup/RunupContainer";

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
            <Route exact strict path="/tsunamisdata" component={TsunamiContainer} />
            <Route exact path="/runupdata" component={RunupContainer}/>
            <Route exact path="/tsunamieventsearch" component={TsunamiSearchContainer}/>
            <Route exact path="/inserttsunamievent" component={TsunamiInsertContainer}/>
            <Route exact path="/inserttsunamirunup/:eventId" component={RunupInsertContainer}/>
            <Route exact path="/tsunamirunupsearch" component={RunupSearchContainer}/>
            <Route exact path="/updatetsunami/:id" component={UpdateTsunamiContainer}/>
            <Route exact path={'/userdisplay'} component={UserDisplay}/>
            <Route exact path='/updaterunup/:runupId/:eventId' component={UpdateRunupContainer}/>
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
