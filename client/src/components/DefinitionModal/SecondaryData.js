import React from 'react';

// const SecondaryData = props => (
//     <div>
//       <p style={{fontWeight: 'bold', fontFamily: 'sans-serif'}}>{props.title}</p>
//       <p>{props.data}</p>
//     </div>
// );
//
// export default SecondaryData;

const h5Style = {
  textDecoration: 'underline',
  cursor: 'pointer',
};


class SecondaryData extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
    }
  }

  toggleOpen = () => {this.setState({isOpen: !this.state.isOpen})}

  render(){
    return (
        <div>
          <h5 onClick={this.toggleOpen}>{this.props.title}</h5>
          <p style={{display: this.state.isOpen? 'block': 'none'}}>{this.props.data}</p>
        </div>
    )
  }
}

export default SecondaryData;