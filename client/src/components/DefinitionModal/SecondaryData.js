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
  color: 'blue',
  cursor: 'pointer',
  margin: '.5% 0 .5% 0'
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
          <h4 style={h5Style} onClick={this.toggleOpen}>{this.props.title}</h4>
          <p style={{display: this.state.isOpen? 'block': 'none', textIndent: '2%'}}>{this.props.data}</p>
        </div>
    )
  }
}

export default SecondaryData;