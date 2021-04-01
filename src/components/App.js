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
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
