import React, {Component} from 'react'


class Footer extendes Component {
  render() {
    return (
      <div>
      <div className='about'>
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
            <p>French
              Spanish
              Tagalog </p>
        </div>
        <div className='contact'>
          <h2>Contact Me</h2>
          <p>Email to:
          <a href="mailto:jkarlin929@gmail.com"</a>
          </p>
        </div>
        <div className='footerabove'>
          <h2>Around the Web</h2>
            <p>icons go here</p>
          <h2>Credits</h2>
            <p>Icons by: James Smith, Cameron, Casher, Andy Tham, Jason Karlin </p>
        </div>
        <div className='footerbelow'>Copyright: A Team</div>
      </div>
    )
  }
}





export default Footer;