import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import store from '../../../store';
import Styles from './EarthquakeLandingStyles.css';
import EarthquakeLandingPartial from './EarthquakeLandingPartial';

const buttons = [
  {
    title: 'Add Event',
    url: '/earthquake/insert',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Search Events',
    url: '/earthquake/eventsearch',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },

];

class EarthquakeLanding extends React.Component {
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
        <h1 className={Styles.title}>Earthquakes</h1>
        <div className={Styles.innerGrid}>
          {buttons.map(e => (
            <EarthquakeLandingPartial
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

const mapStateToProps = state => ({ earthquake: state.deep.earthquake });

export default connect(mapStateToProps)(EarthquakeLanding);
