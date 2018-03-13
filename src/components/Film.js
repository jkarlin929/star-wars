import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

class Film extends React.Component{
  render(){
    const titletest = this.props.title;
    return(
      <div className='Film' id='Films'>

        {this.props.title}
        <Link to={{ pathname: `/:${this.props.title}` ,
        state: {
          title: this.props.title,
          director: this.props.director,
          producer: this.props.producer,
          release_date: this.props.release_date,
          opening_crawl: this.props.opening_crawl
        } }}> See This Film's Details </Link>
        <br/>
      </div>
    )
  }
}

export default Film;
