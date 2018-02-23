import React, {PropTypes} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer.jsx';
import TsunamiContainer from './tsunami/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';
import Home from './home/Home.jsx';
import { history } from '../store';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className={Styles.container}>
          <Route exact path = '/' render={()=>(<Redirect to="/home"/>)}/>
          <Route path = "/home/*" component={Navbar}/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/home/tsunamis" component={TsunamiContainer} />
            <Route exact path="/home/about" component={AboutPage} />
          </Switch>
          <Route path = "/home/*" component={Footer}/>
        </div>
      </ConnectedRouter>


    );
  }
}


export default App;
