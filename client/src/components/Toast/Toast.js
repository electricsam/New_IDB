import React from 'react';
import {toast, ToastContainer } from 'react-toastify';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"

export class Toast extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  toastId = '';

  notify = () => this.toastId = toast(`${this.props.actionMessage}`, {autoClose: false});

  updateSuccess = () => this.toastId = toast.update(this.toastId, {
    type: toast.TYPE.SUCCESS,
    render: `${this.props.successMessage}`,
    autoClose: 3000
  });

  updateFail = () => this.toastId = toast.update(this.toastId, {
    type: toast.TYPE.ERROR,
    render: `${this.props.failMessage}`,
    autoClose: 3000
  });

  render(){
    if(this.props.launch){
      this.notify();
    }
    if(this.props.success){
      this.updateSuccess();
    }
    if(this.props.fail){
      this.updateFail();
    }
    return (
      <ToastContainer/>
    )
  }
}

