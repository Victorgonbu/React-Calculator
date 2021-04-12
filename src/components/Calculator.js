import React, { useState } from 'react';
import Navbar from './Navbar';
import Calculate from '../logic/calculate';
import * as calcStyles from '../styles/calculator.module.css';
import * as styles from '../styles/components.module.css';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
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
      <Navbar />
      <div className={`${styles.container} ${styles.flexRow}`} data-testid="calculator-container">
        <Header text="Let's do some math!" />
        <div className={calcStyles.calculator}>
          <Display result={next || total || '0'} />
          <ButtonPanel handleClick={handleClick} />
        </div>
      </div>
    </>

  );
};

export default Calculator;
