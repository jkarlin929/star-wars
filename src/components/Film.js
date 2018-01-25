import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
class Film extends React.Component{
  render(){
    return(
      <div className='Film'>
        {this.props.title}
        This movie number {this.props.poop}
        <Link to={{ pathname: `/:${this.props.poop}` , state: {test: 'hello'} }}> See Film's Characters </Link>
        <br/>
      </div>
    )
  }
}

export default Film;
