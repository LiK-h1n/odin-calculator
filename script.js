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

let number1 = 0;
let operator;
let number2 = 0;

function updateNumber(selection, value) {
  switch (selection) {
    case 1:
      number1 *= 10;
      number1 += value;
      break;
    case 2:
      number2 *= 10;
      number2 += value;
  }
}

function updateDisplay(value) {
  display.textContent = value;
}

const container = document.querySelector("#container");
const display = document.querySelector("#display");

container.addEventListener("click", (event) => {
  const buttonID = event.target.id;

  if (
    buttonID === "0" ||
    buttonID === "1" ||
    buttonID === "2" ||
    buttonID === "3" ||
    buttonID === "4" ||
    buttonID === "5" ||
    buttonID === "6" ||
    buttonID === "7" ||
    buttonID === "8" ||
    buttonID === "9"
  ) {
    updateNumber(1, Number(buttonID));
    updateDisplay(number1);
  }
});
