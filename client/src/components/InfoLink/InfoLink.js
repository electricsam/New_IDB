import React from 'react';
import {Link} from 'react-router-dom';

import infoIcon from '../../assets/infoIconOutline.svg';

const InfoLink = props => (
    <Link to={props.to} style={{textDecoration: "none"}}>
      <img alt="More Info Icon" src={infoIcon}/>
    </Link>
);

export default InfoLink;