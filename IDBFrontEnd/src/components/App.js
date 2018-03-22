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
            <Route exact path="/tsunamis/events" component={TsunamiSearchContainer}/>
            <Route exact path={'/userdisplay'} component={UserDisplay}/>
            <Route exact path="/tsunamis/insertevent" component={TsunamiInsertContainer}/>
            <Route exact path="/tsunamis/insertrunup" component={RunupInsertContainer}/>
            <Route exact path="/tsunamis/runups" component={RunupSearchContainer}/>
            <Route exact path="/tsunamis/update/:id" component={UpdateTsunamiContainer}/>
            <Route exact path="/tsunamis" component={TsunamiContainer} />
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
