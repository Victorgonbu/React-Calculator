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
            
            it('return total property with buttonName as value within object returned if buttonName is a number', () => {
                buttonName = '5'
                const result = Calculate(data, buttonName);
    
                expect(result).toHaveProperty('total', buttonName);
                expect(result).toHaveProperty('next', null);
                expect(result).toHaveProperty('operation', null);
    
            });
        });

       
    });
});

