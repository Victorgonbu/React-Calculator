import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import * as styles from '../styles/components.module.css';

function ButtonPanel(props) {
  function getButtonProps(button) {
    const operationRegex = /[X,+,÷,=,-]/;
    const buttonProps = { color: 'gray', width: 1 };

    if (button === '+/-') return buttonProps;
    if (operationRegex.test(button)) return { buttonProps, color: 'orange' };
    if (button === '0') return { buttonProps, width: 2 };
    return buttonProps;
  }

  function renderButton(button) {
    const { handleClick } = props;
    const { color, width } = getButtonProps(button);
    return <Button name={button} handleClick={handleClick} color={color} width={width} />;
  }

  const buttonGroups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  function renderGroup(group) {
    return (
      <div className={styles.group}>
        { group.map(button => renderButton(button)) }
      </div>
    );
  }

  function renderPanel() {
    return (
      <div className={styles.buttonPanel}>
        { buttonGroups.map(buttonGroup => renderGroup(buttonGroup)) }
      </div>
    );
  }

  return (
    renderPanel()
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
