class Calculator {
  constructor() {
    this.total = 0;
  }

  async multiplies (value, times) {
    this.times = times;

    if (this.times === 0) {
      const result = this.total
      this.reset();

      return result;
    }

    this.total += value;
    this.times -= 1;

    return this.multiplies(value, this.times);
  };

  reset () {
    this.total = 0;
  };
}

module.exports = Calculator;