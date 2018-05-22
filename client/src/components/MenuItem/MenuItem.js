import React from 'react';
import Styles from './MenuItemStyles.css';
import { Link } from "react-router-dom";

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: "black"
    }
  }

  handleMouseEnter = () => {
    this.setState({color: "blue"})
  };

  handleMouseLeave = () => {
    this.setState({color: "black"})
  };


  render(){
    return (
        <li className={Styles.hpContentLi}>
          <Link to={this.props.address}
                className={Styles.link}
                style={{color: this.state.color}}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
          >

            {this.props.linkText}<i className="material-icons">&#xE5CF;</i>
          </Link>
          {this.props.children}
        </li>
    );
  }
}


export default MenuItem;