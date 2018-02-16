import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer.jsx';
import TsunamiContainer from './tsunami/TsunamiContainer';
import AboutPage from './about/AboutPage';
import Styles from './AppStyle.css';

class App extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={TsunamiContainer} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
