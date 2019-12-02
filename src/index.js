const Calculator = require('./calculator');

const run = async () => {
  const times = 321;
  const calculator = new Calculator(times);

  const result = await calculator.multiplies(2, times)
  console.log(`2 * ${times} = `, result);
  const result2 = await calculator.multiplies(3, times)
  console.log(`3 * ${times} = `, result2); 
}

run();
