import Operate from './operate';

const Calculate = (data, buttonName) => {
  
  let { total, next, operation } = data;
  const operationRegex = /[X,+,÷,-]/;

  const allClear = () => {
    total = null;
    next = null;
    operation = null;
  };

  switch (buttonName) {
    case 'AC':
      allClear();
      break;
    case '+/-':
      if (next) { next = Operate(next, -1, 'X'); break; }
      if (total) { total = Operate(total, -1, 'X'); }
      break;
    case '%':
      if (next) { next = Operate(next, 100, '÷'); break; }
      if (total) { total = Operate(total, 100, '÷'); }
      break;
    case operationRegex.test(buttonName) && buttonName:
      if (operation && next && next !== '-') {
        total = Operate(total, next, operation);
        next = null;
      } else if (!total && buttonName === '-' && total !== '-') {
        total = buttonName;
      } else if (operation && total && buttonName === '-' && next !== '-' && total !== '-') {
        next = buttonName;
      } else if (total !== '-' && next !== '-') {
        operation = buttonName;
      }
      break;
    case '.':
      if (next) { next = `${next}.`; break; }
      if (total) { total = `${total}.`; break; }

      total = '0.';
      break;
    case '=':
      if (operation && next) {
        total = Operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      if (operation && total) { next = next ? next + buttonName : buttonName; break; }
      total = total ? total + buttonName : buttonName;

      break;
  }

  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
