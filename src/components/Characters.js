import React from 'react';

class Characters extends React.Component{
  render(){
      const props = this.props.location.state;
    return(
      <div>
      <div className="title"> {props.title} </div>
      <div className="director"> {props.director}</div>
      <div className="producer"> {props.producer}</div>
      <div className="release_date"> {props.release_date} </div>
      <div className="opening_crawl"> {props.opening_crawl} </div>
    </div>
    )
  }
}

export default Characters;
