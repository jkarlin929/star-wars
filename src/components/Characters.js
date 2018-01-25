import React from 'react';

class Characters extends React.Component{
  render(){
      console.log('PROPS',this.props);
      console.log('this is params', this.props.match.params);
    return(

      <div> cam sucks {this.props.match.params.test} {this.props.test}</div>
    )
  }
}

export default Characters;
