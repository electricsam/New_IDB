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

/**
 * Container for Earthquake Landing page.  Dedicated to the direction of users to the subsections of the earthquake
 * data set, like search, insert, etc.
 *
 * @class
 */
class EarthquakeLanding extends React.Component {
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * dispatches action to push to a new route
   *
   * @param value
   */
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
