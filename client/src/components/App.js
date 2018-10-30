import React, { Component } from 'react';
import HomeContainer from './home/home';
import './App.scss';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <p>
            TravelNHost on Node is coming soon!
          </p>
          <HomeContainer />
        </header>
      </div>
    );
  }
}

export default App;
