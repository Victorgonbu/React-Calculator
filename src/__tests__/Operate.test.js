import Operate from '../logic/operate';

describe('Operate', () => {

    describe('return an operation between the 2 numbers given', () => {
        it("when operation is '+' return  a sum", () => {
            const result = Operate(2, 2, '+');
            expect(result).toEqual('4');
        });
    
        it("when operator is '+' return a subtraction", () => {
            const result = Operate(2, 2, '-');
            expect(result).toEqual('0');
        });
        it("when operation is 'X' return a multiplication", () => {
            const result = Operate(6, 2, 'X');
            expect(result).toEqual('12');
        });

        it("when operation is '÷' return a division", () => {
            const result = Operate(9, 3, '÷');
            expect(result).toEqual('3');
        });
    });
});