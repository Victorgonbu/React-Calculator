import operate from '../logic/operate';

describe('operate', () => {
  it('operates a simple operation', () => {
    const result = operate(1, 2, '+');
    expect(result).toEqual(3);
  });
});
