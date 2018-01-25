import React, { Component } from 'react';
import Film from './Film';

class Portfolio extends Component {
  constructor () {
   super();
   this.state = {
     title: null,
     chars: null,
     film: null,
     currrentFilm: null
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

  passFilmData(film) {
    return film.map((film) => {
      console.log(film.key, 'thisis the key');
      return (
       <div key={film.episode_id}>
         {this.state.film ? <Film title={film.title} chars={film.characters} poop={film.episode_id}  /> : <div>Boo Starwars</div>}
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
