import React from 'react';
import Button from './Button';

function ButtonPanel() {
  function renderButton(button) {
    return <Button name={button} />;
  }

  return (
    <div className="button-panel">
      <div className="group1">
        { renderButton('AC') }
        { renderButton('+/-') }
        { renderButton('%') }
        { renderButton('÷') }
      </div>
      <div className="group2">
        { renderButton('7') }
        { renderButton('8') }
        { renderButton('9') }
        { renderButton('X') }

      </div>
      <div className="group3">
        { renderButton('4') }
        { renderButton('5') }
        { renderButton('6') }
        { renderButton('-') }

      </div>
      <div className="group4">
        { renderButton('1') }
        { renderButton('2') }
        { renderButton('3') }
        { renderButton('+') }
      </div>
      <div className="group5">
        { renderButton('O') }
        { renderButton('.') }
        { renderButton('=') }
      </div>
    </div>
  );
}

export default ButtonPanel;
