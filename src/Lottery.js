import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBall: 6,
    maxNum: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.maxBall })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  genRandNum() {
    this.setState(currState => ({
      numbers: currState.numbers.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
    // console.log(this.state.numbers);
  }

  handleClick() {
    this.genRandNum();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <div>
          {' '}
          {this.state.numbers.map((n, idx) => (
            <LottoBall key={idx} randNum={n} />
          ))}{' '}
        </div>
        <br></br>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
