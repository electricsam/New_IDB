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
    this.setState({color: "cyan"});
    this.props.handleMouseEnter();
  };

  handleMouseLeave = () => {
    this.setState({color: "black"})
    this.props.handleMouseLeave()
  };


  render(){
    return (
        <li className={Styles.hpContentLi}
            onMouseEnter={()=>this.handleMouseEnter()}
            onMouseLeave={()=>this.handleMouseLeave()}
        >

          <Link to={this.props.address}
                className={Styles.link}
                style={{color: this.state.color}}
          >

            {this.props.linkText}<i className="material-icons">&#xE5CF;</i>
          </Link>
          {this.props.children}
        </li>
    );
  }
}


export default MenuItem;