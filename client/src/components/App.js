import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home';
import './App.scss';
import Favicon from 'react-favicon';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Favicon title="TravelNHost" url="https://s3.amazonaws.com/vector-icons/backpackicon-01.png"/>
          <Route path="" component={HeaderContainer}/>
          <Route exact path="/signup" component={HomeContainer}/>
          <Route exact path="/login" component={HomeContainer}/>
          <Route exact path="/" component={HomeContainer}/>
      </div>
    );
  }
}

export default App;
