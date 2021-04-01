import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator">
        <Display result={total || next} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
