import React, { Component } from 'react';
import Lottery from './Lottery';
import CoinFlip from './CoinFlip';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
        <CoinFlip />
      </div>
    );
  }
}

export default App;
