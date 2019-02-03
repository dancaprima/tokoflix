import generatePrice from './generatePrice';
describe('generatePrice helpers', () => {
  it('should return 0 if rating is lower than 1', () => {
    expect(generatePrice(0)).toEqual(0);
  });

  it('should return 0 if rating is lower than 4 and greater or equal with 1', () => {
    expect(generatePrice(1.5)).toEqual(3500);
    expect(generatePrice(2)).toEqual(3500);
    expect(generatePrice(3)).toEqual(3500);
  });

  it('should return 0 if rating is lower than 7 and greater than 3', () => {
    expect(generatePrice(3.1)).toEqual(8250);
    expect(generatePrice(4)).toEqual(8250);
    expect(generatePrice(5)).toEqual(8250);
    expect(generatePrice(6)).toEqual(8250);
  });

  it('should return 0 if rating is lower or equal with 8 and greaterthan 6', () => {
    expect(generatePrice(6.1)).toEqual(16350);
    expect(generatePrice(7)).toEqual(16350);
    expect(generatePrice(8)).toEqual(16350);
  });

  it('should return 0 if rating is equal with 10 and lower than 8', () => {
    expect(generatePrice(8.1)).toEqual(21250);
    expect(generatePrice(9)).toEqual(21250);
    expect(generatePrice(10)).toEqual(21250);
  });
});
