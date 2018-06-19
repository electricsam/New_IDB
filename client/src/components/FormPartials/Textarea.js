import React from 'react';
import { Control, Errors } from 'react-redux-form/lib/immutable';
import PropTypes from 'prop-types';

import Styles from './TextareaStyles.css';

// export const Textarea = props => {
//   if (props.needsVal) {
//     const insertForm = props.commentForm.insert;
//     debugger;
//     return (
//         <div className={Styles.container}>
//           <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
//           <Control.textarea
//               model={props.model}
//               id={props.id}
//               validators={{
//                 valid: val => props.validLength(val, 10)
//               }}
//               validateOn="change"
//           />
//           <p style={{color: !insertForm || insertForm.comments.valid ? 'green' : 'red', fontWeight: 'bold'}}>
//             {!insertForm || !insertForm.comments.value ? 0: insertForm.comments.value.length} characters of {props.maxLength}
//           </p>
//         </div>
//     )
//   } else {
//     return (<div className={Styles.container}>
//       <label className={Styles.label} htmlFor={props.model}>{props.title}</label>
//       <Control.textarea
//           model={props.model}
//           id={props.id}
//       />
//     </div>)
//   }
// };
//
// Textarea.propTypes = {
//   model: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   htmlFor: PropTypes.string.isRequired,
// };



export class Textarea extends React.Component{
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

  componentDidMount(){
    console.log("at least we mounted")
  }

  validateLength = (val, max) => {
    if(val.length > max) {
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
    return (
      <div className={Styles.container}>
        <label className={Styles.label} htmlFor={this.props.model}>{this.props.title}</label>
        <Control.textarea
          model={this.props.model}
          id={this.props.id}
          validators={{valid: val => this.validateLength(val, this.props.maxLength)}}
          validateOn="change"
        />
        <p style={this.state.counterStyle}>
          {this.state.counterData.count} characters of 3,600
        </p>
      </div>
    )
  }
}
