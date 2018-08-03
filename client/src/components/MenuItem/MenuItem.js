import React from 'react';
import Styles from './MenuItemStyles.css';
import { Link } from "react-router-dom";

import expandMore from '../../assets/expand_more.svg';
import expandLess from '../../assets/expand_less.svg';
import SvgIcon from "../../assets/SvgIcon";


class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: "#6c6d6d",
      expand: expandMore
    }
  }

  handleMouseEnter = () => {
    this.setState({color: "#00FFFF", expand: expandLess});
    this.props.handleMouseEnter();
  };

  handleMouseLeave = () => {
    this.setState({color: "#6c6d6d", expand: expandMore});
    this.props.handleMouseLeave()
  };

  render(){
    const {hasExpander} = this.props;
    return (
        <li className={Styles.hpContentLi}
            onMouseEnter={()=>this.handleMouseEnter()}
            onMouseLeave={()=>this.handleMouseLeave()}
        >
          <Link to={this.props.address} className={Styles.link} style={{color: this.state.color}}>

            <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
              <p>{this.props.linkText}</p>

              {hasExpander ?
                  <SvgIcon color={this.state.color} icon={this.state.expand}/>:
                  <div style={{display: 'none'}}></div>
              }

            </div>
          </Link>
          {this.props.children}
        </li>
    );
  }
}


export default MenuItem;