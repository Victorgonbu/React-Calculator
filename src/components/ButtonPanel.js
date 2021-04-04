import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  function renderButton(button) {
    const { handleClick } = props;
    return <Button key={button} handleClick={handleClick} name={button} />;
  }

  const buttonGroups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  function renderGroup(groupIndex) {
    return (
      <div className="group">
        { buttonGroups[groupIndex].map(button => renderButton(button)) }
      </div>
    );
  }

  return (
    <div className="button-panel">
      {renderGroup(0)}
      {renderGroup(1)}
      {renderGroup(2)}
      {renderGroup(3)}
      {renderGroup(4)}
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
