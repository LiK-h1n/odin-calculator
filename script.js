function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function operate(operator, number1, number2) {
    if (operator === "+") {
        add(number1, number2);
    } else if (operator === "-") {
        subtract(number1, number2);
    } else if (operator === "*") {
        multiply(number1, number2);
    } else if (operator === "/") {
        divide(number1, number2);
    }
}

let number1;
let operator;
let number2;
