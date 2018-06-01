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
    url: '/reference/search',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  }

];

class HazardsLanding extends React.Component {
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
