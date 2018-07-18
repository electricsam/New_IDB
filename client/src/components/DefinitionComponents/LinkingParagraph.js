import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkingParagraph = props => (
    <p>{props.text}<Link to={props.linkTo}>{props.linkText}</Link></p>
);


export default LinkingParagraph;

LinkingParagraph.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};