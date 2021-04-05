import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/button.module.css';

function Button(props) {
  const { name, handleClick } = props;
  const getButtonClass = string => {
    const operationRegex = /[X,+,÷,-]/;
    if (string === '+/-') return styles.number;
    if (operationRegex.test(string)) return styles.operators;
    return styles.number;
  };

  return (
    <button onClick={() => { handleClick(name); }} type="button" className={`${getButtonClass(name)} ${styles.button}`}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
