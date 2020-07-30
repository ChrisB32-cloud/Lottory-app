import React, { Component } from 'react';
import Lottery from './Lottery';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Lottery maxBall={6} />
      </div>
    );
  }
}

export default App;
