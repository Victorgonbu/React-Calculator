import Calculate from '../logic/calculate';

describe('Calcualate', () => {
    describe('return an object with three properties if arguments given (data, buttonName)', () => {
        let data = {
            total: null,
            next: null,
            operation: null
        }
        let buttonName = null;

        describe('if data properties have null value and buttonName is given', () => {

            describe('return a property with buttonName as value within object returned', () => {
                it('return total property if buttonName is a number', () => {
                    buttonName = '5'
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
                const dataWitTotal = {...data, total: '5'};
                it('return buttonName concatenated if buttonName is a number ', ()=> {
                    buttonName = '5';
                    const result = Calculate(dataWitTotal, buttonName);
                    expect(result.total).toEqual('55');
                }); 
                it('return buttonName as operator property within object returned if buttonName is an operator', () => {
                    buttonName = '-';
                    const result = Calculate(dataWitTotal, buttonName);
                    expect(result).toHaveProperty('total', dataWitTotal.total);
                    expect(result).toHaveProperty('operation', '-');

                    
                })

                it("return total multiplied by -1 if buttonName is '+/-'", () => {
                    buttonName = '+/-';

                    const result = Calculate(dataWitTotal, buttonName);
                    expect(result).toHaveProperty('total', '-5');
                });
           });

           describe('when operation is not null', () => {
            const dataWithOperator = {...data, operation: '+'}
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
                    expect(result).toHaveProperty('operation', dataWithOperator.operation)
                });
            });
            
            describe('when next is not null', () => {
                const dataWithNext = {...data, next: '4'};
                it('return buttonName as total property if buttonName is a number', () => {
                    buttonName = '6';
                    const result = Calculate(dataWithNext, buttonName);
                    expect(result).toHaveProperty('next', '4');
                    expect(result).toHaveProperty('total', '6')
                });

                it('return buttonName as operation if buttonName is an operator', ()=> {
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
       
    });
});

