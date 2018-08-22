import React from 'react';

const h5Style = {
  textDecoration: 'underline',
  color: 'blue',
  cursor: 'pointer',
  margin: '.5% 0 .5% 0'
};

/**
 * Component for the display of extra data, typically used as a child inside of the {@link DefinitionModal}
 *
 * @class
 */
class SecondaryData extends React.Component{
  /**
   * Set isOpen to false on instantiation
   *
   * @param props
   */
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
    }
  }

  /**
   * No argument function used to toggle the boolean value of this.state.isOpen
   */
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