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
import FourZeroFour from "./FourZeroFour/FourZeroFour";

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className={Styles.container}>
          <Route exact path = '/' render={()=>(<Redirect to="/home"/>)}/>
          <Route path = "/*" component={Navbar}/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/tsunamis" component={TsunamiContainer} />
            <Route exact path="/about" component={AboutPage} />
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
