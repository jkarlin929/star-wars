import React from 'react';

class Film extends React.Component{
  render(){
    return(
      <div className='Film'>
        {this.props.title}
        {this.props.chars}
      </div>
    )
  }
}

export default Film;
