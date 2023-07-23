class Calculator {
    constructor(number1, number2) {
        this.number1 = number1
        this.number2 = number2
    }

    sum() {
        return this.number1 + this.number2
    }

    subtraction() {
        return this.number1 - this.number2
    }

    multiplication() {
        return this.number1 * this.number2
    }

    division() {
        return this.number1 / this.number2
    }
}

const calculator = new Calculator(10, 5)

console.log(calculator.sum())
console.log(calculator.subtraction())
console.log(calculator.multiplication())
console.log(calculator.division())


