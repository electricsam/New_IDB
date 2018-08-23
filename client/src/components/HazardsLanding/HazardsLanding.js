import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import store from '../../store';
import Styles from './HazardsLandingStyles.css';
import HazardsLandingPartial from "./HazardsLandingPartial";

const buttons = [
  {
    title: 'Earthquakes',
    url: '/earthquake/landing',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Tsunamis',
    url: '/tsunami/landing',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Volcanoes',
    url: '/volcano/landing',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'References',
    url: '/reference/landing',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  }

];

/**
 * Container for Hazards landing page.  Provides clickable divs that will navigate user to different parts of the data
 * set
 *
 * @class
 */
class HazardsLanding extends React.Component {

  /**
   * Constructor
   *
   * @param props
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Pushes history object to given url
   *
   * @param value
   */
  handleClick(value) {
    store.dispatch(push(value));
  }

  render() {
    return (
        <div className={Styles.container}>
          <div className={Styles.innerGrid}>
            {buttons.map(e => (
                <HazardsLandingPartial
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

export default connect(mapStateToProps)(HazardsLanding);
