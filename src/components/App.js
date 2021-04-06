import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import * as styles from '../styles/calculator.module.css';

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
    <div className={styles.calculator}>
      <Display result={next || total || '0'} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
