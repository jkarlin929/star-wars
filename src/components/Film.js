import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

class Film extends React.Component{
  render(){
    const titletest = this.props.title;
    return(
      <div className='Film'>
        {this.props.title}
        This movie number {this.props.poop}
        <Link to={{ pathname: `/:${this.props.poop}` ,
        state: {
          title: this.props.title,
          director: this.props.director,
          producer: this.props.producer,
          release_date: this.props.release_date,
          opening_crawl: this.props.opening_crawl
        } }}> See Film's Characters </Link>
        <br/>
      </div>
    )
  }
}

export default Film;
