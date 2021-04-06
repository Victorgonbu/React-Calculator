import React from 'react';
import PropTypes from 'prop-types';
import * as calcStyles from '../styles/calculator.module.css';
import * as styles from '../styles/components.module.css';
import Header from './Header';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const CalculatorContainer = props => {
  const { handleClick, next, total } = props;
  return (
    <div className={`${styles.container} ${styles.flexRow}`}>
      <Header text="Let's do some math!" />
      <div className={calcStyles.calculator}>
        <Display result={next || total || '0'} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

CalculatorContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default CalculatorContainer;
