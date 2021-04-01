import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
    let result;
    let x = new Big(numberOne);
    let y = new Big(numberTwo);

    switch(operation) {
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
    }

    return result;
}

export default operate;