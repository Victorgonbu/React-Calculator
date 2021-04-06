import React, { useState } from 'react';
import Navbar from './Navbar';
import CalculatorContainer from './CalculatorContainer';
import Calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [next, setNext] = useState(null);

  const handleClick = buttonName => {
    const newState = Calculate({ total, next, operation }, buttonName);
    setTotal(newState.total);
    setOperation(newState.operation);
    setNext(newState.next);
  };

  return (
    <>
      <Navbar val="Calculator" />
      <CalculatorContainer handleClick={handleClick} total={total} next={next} />
    </>

  );
};

export default App;
