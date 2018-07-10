import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import store from '../../../store';
import Styles from './TsunamiLandingStyles.css';
import TsunamiLandingPartial from './TsunamiLandingPartial';

const buttons = [
  {
    title: 'Add Event',
    url: '/tsunami/insertevent',
    outerStyle: Styles.addEvent,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Search Events',
    url: '/tsunami/eventsearch',
    outerStyle: Styles.searchEvent,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Search Runups',
    url: '/tsunami/runupsearch',
    outerStyle: Styles.searchRunup,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Search Deposits',
    url: '/tsunami/depositsearch',
    outerStyle: Styles.searchDeposit,
    innerStyle: Styles.buttonTitle,
  },
];

class TsunamiLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(value) {
    store.dispatch(push(value));
  }

  render() {
    return (
      <div className={Styles.container}>
        <h1 className={Styles.title}>Tsunami</h1>
        <div className={Styles.innerGrid}>
          {buttons.map(e => (
            <TsunamiLandingPartial
              outerStyle={e.outerStyle}
              url={e.url}
              innerStyle={e.innerStyle}
              title={e.title}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TsunamiLanding);
