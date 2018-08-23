import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './TextareaStyles.css';

/**
 * Container to display and validate textarea input.
 *
 * @class
 */
export class Textarea extends React.Component{

  /**
   * Constructor sets initial values of the counter's styling an initializes the counter's count to 0
   *
   * @param props
   * @constructor
   */
  constructor(props){
    super(props);
    this.state={
      counterStyle: {
        color: 'green',
        display: 'block',
        fontWeight: 'bold'
      },
      counterData: {
        count: 0
      }
    }
  }

  /**
   * Function that validates the length of the counter and updates state accordingly. If the count exceeds the given max
   * then the color of the displayed count changes to red and invalidates the input.
   *
   * @param val
   * @param max
   * @return {boolean}
   */
  validateLength = (val, max) => {
    if(!val){
      this.setState({counterStyle: {color: 'green', display: 'block'}});
      this.setState({counterData: {count: 0}});
      return true;
    }else if(val.length > max) {
      this.setState({counterStyle: {color: 'red', display: 'block'}});
      this.setState({counterData: {count: val.length}});
      return false;
    }else{
      this.setState({counterStyle: {color: 'green', display: 'block'}});
      this.setState({counterData: {count: val.length}});
      return true;
    }
  };

  render(){
    if(this.props.needsVal){
      return (
        <div className={Styles.container}>
          <label className={Styles.label} htmlFor={this.props.model}>{this.props.title}</label>
          <Control.textarea
            model={this.props.model}
            id={this.props.model}
            validators={{valid: val => this.validateLength(val, this.props.maxLength)}}
            validateOn="change"
          />
          <p style={this.state.counterStyle}>
            {this.state.counterData.count} characters of 3,600
          </p>
        </div>
      )
    }else{
      return (
        <div className={Styles.container}>
           <label className={Styles.label} htmlFor={this.props.model}>{this.props.title}</label>
           <Control.textarea
               model={this.props.model}
               id={this.props.model}
           />
        </div>)
    }
  }
}
