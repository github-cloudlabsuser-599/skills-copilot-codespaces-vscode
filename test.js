// Simple Calculator in JavaScript

class Calculator {
    constructor() {
      this.value = 0;
    }
  
    add(number) {
      this.value += number;
      return this;
    }
  
    subtract(number) {
      this.value -= number;
      return this;
    }
  
    multiply(number) {
      this.value *= number;
      return this;
    }
  
    divide(number) {
      if (number === 0) {
        console.log("Cannot divide by zero.");
        return this;
      }
      this.value /= number;
      return this;
    }
  
    clear() {
      this.value = 0;
      return this;
    }
  
    getValue() {
      return this.value;
    }
  }
  
  // Example usage
  const calc = new Calculator();
  console.log(calc.add(5).multiply(2).subtract(3).divide(4).getValue()); // Should output 2.5