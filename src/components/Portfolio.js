import React, { Component } from 'react';
import Film from './components/Film';

class Portfolio extends Component {
  constructor () {
   super();
   this.state = {
     title: null,
     chars: null,
     film: null
   };
   this.passFilmData = this.passFilmData.bind(this);
  }

  componentDidMount() {
   fetch('https://swapi.co/api/films')
   .then(res => res.json())
   .then(data => {
     console.log(data)
     this.setState({
       film: data.results,
     })
   })
  }


  passFilmData(data) {
    return data.results.map((film) => {
      return (
       <div key={film.id}>
         {this.state.film ? <Film title={film.title} chars={film.chars} /> : <div>Fuck Starwars</div>}
       </div>
    )})
  }

  render() {
    return(
      <div className='Portfolio'>
        <div>
          {this.state.film ? <div>{this.passFilmData(this.state.film)}</div> : ''}
        </div>
      </div>
    )
  }
}

export default Portfolio;
