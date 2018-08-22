import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';

import Styles from './IconStyle.css';

/**
 * Component to specify display of FontAwesomeIcons as links. For example usage see {@link module:Footer}
 *
 * @module Icon
 * @param props
 */
const Icon = props => (
  <div className={Styles.container}>
    <a
      className={Styles.anchor}
      href={props.href}
      target='_blank'
      aria-label='Opens in new window'
      title={props.title}
    >
      <FontAwesomeIcon color={props.color} icon={props.icon}/>
    </a>
  </div>
);

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Icon;
