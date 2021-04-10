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
           it('return buttonName concatenated with property if buttonName is a number ', ()=> {
                buttonName = '5';
                const dataWitTotal = {...data, total: '5'};
                const result = Calculate(dataWitTotal, buttonName);
                expect(result.total).toEqual('55');
           }); 
        });
       
    });
});

