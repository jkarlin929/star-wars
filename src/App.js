import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Profile from './components/Profile'; ;
import Film from './components/Film'; 
import Footer from '/components/Footer'; 
import Portfolio from '/components/Portfolio'; 
import Characters from '/components/Characters';
import {Route, Switch, Redirect} from 'react-router-dom';   

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Profile />
          
          <main>
      <Switch>
        <Route path='/:id' component={Characters} />
        <Route exact path="/" component={Portfolio} />
      </Switch>
        </main>
          

        
      </div>
    );
  }
}

export default App;
