import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import store from '../../../store';
import Styles from './VolcanoLandingStyles.css'
import VolcanoLandingPartial from "./VolcanoLandingPartial";


const buttons = [
  {
    title: 'Search Events',
    url: '/earthquake/eventsearch',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Add Location',
    url: '/volcano/loc/insert',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle
  },
  {
    title: 'Search Volcano Locations',
    url: "/volcano/loc/search",
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle
  }

];

class VolcanoLanding extends React.Component {
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
                <VolcanoLandingPartial
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

const mapStateToProps = state => ({ volcano: state.deep.volcano });

export default connect(mapStateToProps)(VolcanoLanding);
