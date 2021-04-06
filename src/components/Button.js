import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/components.module.css';

function Button(props) {
  const { name, handleClick } = props;
  function getButtonClass() {
    if (props.width === 2) return styles.bigButton;
    if (props.color === 'orange') return styles.operators;
    return styles.numbers;
  }
  return (
    <button onClick={() => { handleClick(name); }} type="button" className={`${getButtonClass(name)} ${styles.button}`}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
