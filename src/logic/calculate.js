import operate from './operate';

const calculate = (data, buttonName) => {
    let {total, next, operation} = data;
    let result = operate(total, next, operation);

    switch(buttonName) {
        case 'AC':
        result = 0;
        break;
        case '+/-':
        result *= -1;
        break;
        case '%':
        result /= 100;
        break;
    }

    return result;


};

export default calculate;