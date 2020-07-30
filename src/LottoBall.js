import React, { Component } from 'react';
import './LottoBall.css';
class LottoBall extends Component {
  render() {
    const { randNum } = this.props;
    return <div className="ball">{randNum}</div>;
  }
}

export default LottoBall;

// return (
//   <div>
//     <h1> {this.props.title} </h1>
//     <p className="ball">
//       {randNum[0]} {randNum[1]} {randNum[2]} {randNum[3]} {randNum[4]}{' '}
//       {randNum[5]}
//     </p>
//     <h2>Lottery Component</h2>
//   </div>
// );
