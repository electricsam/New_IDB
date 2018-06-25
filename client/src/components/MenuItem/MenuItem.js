import React from 'react';
import Styles from './MenuItemStyles.css';
import { Link } from "react-router-dom";


class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: "black",
      expand: 'expand_more'
    }
  }

  handleMouseEnter = () => {
    this.setState({color: "cyan", expand: 'expand_less'});
    this.props.handleMouseEnter();
  };

  handleMouseLeave = () => {
    this.setState({color: "black", expand: 'expand_more'});
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


            {this.props.linkText}

            {hasExpander ?
                <i className="material-icons">{this.state.expand}</i> :
                <div style={{display: 'none'}}></div>
            }
          </Link>
          {this.props.children}
        </li>
    );
  }
}


export default MenuItem;