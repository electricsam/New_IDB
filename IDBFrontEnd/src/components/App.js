import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './common/Navbar';
import UserContainer from './user/UserContainer';
import AboutPage from './about/AboutPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserContainer} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
