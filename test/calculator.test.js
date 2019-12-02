const Calculator = require('../src/calculator');

beforeAll(async () => {
  calculator = new Calculator();
});

describe('Calculator test', () => {
  test('Multiply 2 * 321 must be 642', async () => {
    const result = await calculator.multiplies(2, 321);

    expect(result).toEqual(642);
  });

  test('Multiply 10 * 321 must be 3210', async () => {
    const result = await calculator.multiplies(10, 321);

    expect(result).toEqual(3210);
  });

  test('Multiply 0 * 321 must be 0', async () => {
    const result = await calculator.multiplies(0, 321);

    expect(result).toEqual(0);
  });

  test('Multiply -2 * 321 must be -642', async () => {
    const result = await calculator.multiplies(-2, 321);

    expect(result).toEqual(-642);
  });

  test('Multiply 1.5 * 321 must be 481.5', async () => {
    const result = await calculator.multiplies(1.5, 321);

    expect(result).toEqual(481.5);
  });

  test('Multiply 2 * 321 and 3 * 321 must be 642 and 963', async () => {
    const result = await calculator.multiplies(2, 321);
    const result2 = await calculator.multiplies(3, 321);

    expect(result).toEqual(642);
    expect(result2).toEqual(963);
  });
});