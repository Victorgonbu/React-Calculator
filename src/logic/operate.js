import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
    let result;
    switch(operation) {
        case '-':
        result = numberOne - numberTwo;
        break;
        case '+':
        result = numberOne + numberTwo;
        break;
        case '*':
        result = numberOne * numberTwo;
        break;
        case '/':
        result = numberOne / numberTwo
    }

    return result;
}

export default Operate;