import React, {Component} from 'react';

class About extends Component {
  render() {
    return(
    <div>
      <div className='about' id='contact'>
        <h2>About</h2>
          <h3>Who Am I</h3>
            <p>I am Jason</p>
          <h3>Web Development</h3>
            <p>Front End:
              JavaScript, React.js, jQuery, HTML5, CSS3, ERB, Elm
              Back End: Node, Express, Ruby on Rails
              Databases: PostgreSQL
              Deployment: Heroku</p>
          <h3>Sports Resume</h3>
            <p>1 Year of tennis coaching experience
              3 years of competitive tennis
              15 years of competitive soccer </p>
          <h3>Languages Spoken</h3>
            <p>Binary
              Ewokese
              Galactic Standard
              English </p>
        </div>
        <div className='contact'>
          <h2>Contact Me</h2>
          <p>Email to:
          <a href="mailto:jkarlin929@gmail.com">jkarlin929@gmail.com</a>
          </p>
        </div>
      </div>
    )
  }
}

export default About;