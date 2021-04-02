import Operate from './operate';

const Calculate = (data, buttonName) => {
  // we know that the first lap all data values are goin to be null sooo
  let { total, next, operation } = data;
  const operationRegex = /[X,+,÷,-]/;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total === null ? total : Operate(total, -1, 'X');
      next = next === null ? next : Operate(next, -1, 'X');
      break;
    case '%':
      total = total === null ? total : Operate(total, 100, '÷');
      break;
    case operationRegex.test(buttonName) && buttonName:
      if (operation && next) {
        total = Operate(total, next, operation);
        next = null;
      } else {
        operation = buttonName;
      }
      break;
    case '.':
      if (next) {
        next = `${next}.`;
      } else if (total) {
        total = `${total}.`;
      } else {
        total = '0.';
      }
      break;
    case '=':
      if (operation && next) {
        total = Operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;
    default:
      if (operation && total) {
        next = next ? next + buttonName : buttonName;
      } else {
        total = total ? total + buttonName : buttonName;
      }
      break;
  }

  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
