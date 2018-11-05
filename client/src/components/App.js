import React, { Component } from 'react';
import HomeContainer from './home/home';
// import HeaderContainer from './header/header_container';
import './App.scss';
import Favicon from 'react-favicon';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (

      <div className="App">
        <Favicon title="TravelNHost" url="https://s3.amazonaws.com/vector-icons/backpackicon-01.png"/>

          <HomeContainer />
      </div>
    );
  }
}

export default App;
