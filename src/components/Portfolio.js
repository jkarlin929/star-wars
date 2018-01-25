import React, { Component } from 'react';
import Film from './Film';
import Profile from './Profile'

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
         {this.state.film ? <Film title={film.title} chars={film.characters} poop={film.episode_id} director={film.director} producer={film.producer} release_date={film.release_date} opening_crawl={film.opening_crawl}/> : <div>Boo Starwars</div>}
       </div>
    )})
  }

  render() {
    return(
      <div className='Portfolio'>
        <div>
          <Profile />
          {this.state.film ? <div>{this.passFilmData(this.state.film)}</div> : ''}
        </div>
      </div>
    )
  }
}

export default Portfolio;
