import Calculate from '../logic/calculate';

describe('Calculate', () => {
  describe('return an object with three properties if arguments given (data, buttonName)', () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    let buttonName = null;

    describe('if data properties have null value and buttonName is given', () => {
      describe('return a property with buttonName as value within object returned', () => {
        it('return total property if buttonName is a number', () => {
          buttonName = '5';
          const result = Calculate(data, buttonName);

          expect(result).toHaveProperty('total', buttonName);
          expect(result).toHaveProperty('next', null);
          expect(result).toHaveProperty('operation', null);
        });

        it('return operator property if buttonName is an operator', () => {
          buttonName = '+';

          const result = Calculate(data, buttonName);

          expect(result).toHaveProperty('total', null);
          expect(result).toHaveProperty('next', null);
          expect(result).toHaveProperty('operation', buttonName);
        });
      });
    });

    describe('if one data property is not null and buttonName is given', () => {
      describe('when total is not null', () => {
        const dataWitTotal = { ...data, total: '5' };
        it('return buttonName concatenated if buttonName is a number ', () => {
          buttonName = '5';
          const result = Calculate(dataWitTotal, buttonName);
          expect(result.total).toEqual('55');
        });
        it('return buttonName as operator property within object returned if buttonName is an operator', () => {
          buttonName = '-';
          const result = Calculate(dataWitTotal, buttonName);
          expect(result).toHaveProperty('total', dataWitTotal.total);
          expect(result).toHaveProperty('operation', '-');
        });

        it("return total multiplied by -1 if buttonName is '+/-'", () => {
          buttonName = '+/-';

          const result = Calculate(dataWitTotal, buttonName);
          expect(result).toHaveProperty('total', '-5');
        });
      });

      describe('when operation is not null', () => {
        const dataWithOperator = { ...data, operation: '+' };
        it('return buttonName as total property if button name is a number', () => {
          buttonName = '5';

          const result = Calculate(dataWithOperator, buttonName);
          expect(result).toHaveProperty('total', '5');
          expect(result).toHaveProperty('operation', '+');
        });

        it('return an object with buttonName as new operation property if buttonName is an operator', () => {
          buttonName = 'X';

          const result = Calculate(dataWithOperator, buttonName);
          expect(result).toHaveProperty('operation', 'X');
        });

        it("return buttonName as total property if buttonName is '-'", () => {
          buttonName = '-';
          const result = Calculate(dataWithOperator, buttonName);
          expect(result).toHaveProperty('total', '-');
          expect(result).toHaveProperty('operation', dataWithOperator.operation);
        });
      });

      describe('when next is not null', () => {
        const dataWithNext = { ...data, next: '4' };
        it('return buttonName as total property if buttonName is a number', () => {
          buttonName = '6';
          const result = Calculate(dataWithNext, buttonName);
          expect(result).toHaveProperty('next', '4');
          expect(result).toHaveProperty('total', '6');
        });

        it('return buttonName as operation if buttonName is an operator', () => {
          buttonName = '+';
          const result = Calculate(dataWithNext, buttonName);
          expect(result).toHaveProperty('next', dataWithNext.next);
          expect(result).toHaveProperty('operation', '+');
        });

        it("return next multiplied by -1 if buttonName is '+/-'", () => {
          buttonName = '+/-';
          const result = Calculate(dataWithNext, buttonName);
          expect(result).toHaveProperty('next', '-4');
        });
      });
    });

    describe('if two data properties are not null and buttonName is given', () => {
      describe('when total and operation are not null', () => {
        const dataWithTwoProperties = { ...data, total: '5', operation: '-' };
        it('return buttonName as next property if buttonName is a number', () => {
          buttonName = '6';
          const result = Calculate(dataWithTwoProperties, buttonName);
          expect(result).toHaveProperty('total', dataWithTwoProperties.total);
          expect(result).toHaveProperty('next', '6');
          expect(result).toHaveProperty('operation', dataWithTwoProperties.operation);
        });

        it('return buttonName as the new operation property if buttonName is an operator', () => {
          buttonName = 'X';
          const result = Calculate(dataWithTwoProperties, buttonName);
          expect(result).toHaveProperty('operation', 'X');
          expect(result).toHaveProperty('total', dataWithTwoProperties.total);
          expect(result).toHaveProperty('next', null);
        });
      });

      describe('when operation and next are given', () => {
        const dataWithTwoProperties = { ...data, next: '6', operation: '+' };
        it('return buttonName as total property if buttonName is a number', () => {
          buttonName = '7';
          const result = Calculate(dataWithTwoProperties, buttonName);
          expect(result).toHaveProperty('total', '7');
          expect(result).toHaveProperty('next', dataWithTwoProperties.next);
          expect(result).toHaveProperty('operation', dataWithTwoProperties.operation);
        });

        it('return buttonName as new operation property if buttonName is an operator', () => {
          buttonName = '-';
          const result = Calculate(dataWithTwoProperties, 'X');
          expect(result).toHaveProperty('total', null);
          expect(result).toHaveProperty('next', dataWithTwoProperties.next);
          expect(result).toHaveProperty('operation', 'X');
        });

        it("return buttonName as total property if buttonName is '-'", () => {
          buttonName = '-';
          const result = Calculate(dataWithTwoProperties, buttonName);
          expect(result).toHaveProperty('total', '-');
          expect(result).toHaveProperty('operation', dataWithTwoProperties.operation);
          expect(result).toHaveProperty('next', dataWithTwoProperties.next);
        });
      });
    });

    describe('if all data properties and buttonName are given', () => {
      const allProperties = { total: '5', operation: 'X', next: '5' };
      it("return the result between all properties as total property within object returned if buttonName is an operator or '='", () => {
        buttonName = '+';
        let result = Calculate(allProperties, buttonName);
        expect(result).toHaveProperty('total', '25');
        expect(result).toHaveProperty('next', null);
        expect(result).toHaveProperty('operation', '+');

        buttonName = '='
        result = Calculate(allProperties, buttonName);
        expect(result).toHaveProperty('total', '25');
        expect(result).toHaveProperty('next', null);
        expect(result).toHaveProperty('operation', null);
      });
      
      it('return buttonName concatenated with next property if buttonName is a number', () => {
        buttonName = '6';
        const result = Calculate(allProperties, buttonName);
        expect(result).toHaveProperty('total', allProperties.total);
        expect(result).toHaveProperty('next', allProperties.next + '6');
        expect(result).toHaveProperty('operation', allProperties.operation);
      });
    });
  });
});
