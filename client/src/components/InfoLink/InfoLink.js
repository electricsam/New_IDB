import React from 'react';
import {Link} from 'react-router-dom';

import infoIcon from '../../assets/infoIconOutline.svg';

/**
 * Component for the display of a linked infoIcon, where the link is passed via props
 *
 * @module InfoLink
 * @param props
 */
const InfoLink = props => (
    <Link to={props.to} style={{textDecoration: "none"}}>
      <img alt="More Info Icon" src={infoIcon}/>
    </Link>
);

export default InfoLink;