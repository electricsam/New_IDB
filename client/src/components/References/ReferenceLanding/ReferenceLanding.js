import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import store from '../../../store';
import Styles from './ReferenceLandingStyles.css';
import ReferenceLandingPartial from './ReferenceLandingPartial';

const buttons = [
  {
    title: 'Add Reference',
    url: '/reference/insert',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
  {
    title: 'Search References',
    url: '/reference/search',
    outerStyle: Styles.button,
    innerStyle: Styles.buttonTitle,
  },
];

class ReferenceLanding extends React.Component {
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
            <ReferenceLandingPartial
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

export default connect(mapStateToProps)(ReferenceLanding);
