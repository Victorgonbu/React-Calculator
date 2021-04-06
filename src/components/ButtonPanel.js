import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import * as styles from '../styles/components.module.css';

function ButtonPanel(props) {
  function renderButton(button) {
    const { handleClick } = props;
    return <Button key={button} handleClick={handleClick} name={button} />;
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
