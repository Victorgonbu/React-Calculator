import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
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
    case 'X':
      result = x.times(y);
      break;
    case '÷':
      result = x.div(y);
      break;
    default:
      break;
  }

  return result.toString();
};

export default Operate;
