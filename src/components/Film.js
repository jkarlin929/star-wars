import React from 'react';

class Film extends React.Component{
  render(){
    return(
      <div className='Film'>
        {this.props.title}
        This movie number {this.props.key}
        {/* <Link to={`/:${this.props.key}`}> See Film's Characters </Link> */}
        <br/>
      </div>
    )
  }
}

export default Film;
