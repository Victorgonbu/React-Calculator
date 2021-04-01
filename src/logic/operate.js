import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  switch (operation) {
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    default:
      break;
  }

  return result;
};

export default operate;
