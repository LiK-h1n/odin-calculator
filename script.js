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
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  }
}

function updateNumber(value) {
  number = operate("*", number, 10);
  number = operate("+", number, value);
}

function storeNumber() {
  result = number;
}

function resetNumber() {
  number = 0;
}

function resetOperator() {
  operator = "";
}

function resetResult() {
  result = 0;
}

function updateDisplay(value) {
  display.textContent = value;
}

function isResultFormatted() {
  let resultString = String(result);

  if (resultString.includes(".")) {
    let partAfterDecimal = resultString.split(".")[1];

    if (partAfterDecimal.length > 2) {
      return false;
    }
  }

  return true;
}

function roundResult() {
  result = Math.round(result * 100) / 100;
}

function divideByZero() {
  return "( ｡ •̀ ᴖ •́ ｡)💢";
}

function setOperator(buttonID) {
  if (buttonID == "minus") {
    return "-";
  } else if (buttonID == "divide") {
    return "/";
  } else if (buttonID == "multiply") {
    return "*";
  } else if (buttonID == "plus") {
    return "+";
  }
}

function resetWasEqualTo() {
  wasEqualTo = false;
}

function setWasEqualTo() {
  wasEqualTo = true;
}

function setWasNumberAssigned() {
  wasNumberAssigned = true;
}

function resetWasNumberAssigned() {
  wasNumberAssigned = false;
}

function backspaceNumber() {
  number = Math.floor(operate("/", number, 10));
}

function backspaceResult() {
  result = Math.floor(operate("/", result, 10));
}

let result = 0;
let operator = "";
let number = 0;
let wasEqualTo = false;
let wasNumberAssigned = false;

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
    if (wasEqualTo) {
      resetNumber();
      resetWasNumberAssigned();
      resetResult();
      resetOperator();
      updateNumber(Number(buttonID));
      updateDisplay(number);
    } else {
      if (!wasNumberAssigned) {
        setWasNumberAssigned();
      }

      updateNumber(Number(buttonID));
      updateDisplay(number);
    }

    resetWasEqualTo();
  } else if (buttonID === "equal") {
    if (operator !== "") {
      if (operator === "/" && number === 0) {
        resetNumber();
        resetWasNumberAssigned();
        resetResult();
        resetOperator();
        updateDisplay(divideByZero());
        resetWasEqualTo();
      } else {
        result = operate(operator, result, number);

        if (!isResultFormatted()) {
          roundResult();
        }

        updateDisplay(result);
        setWasEqualTo();
      }
    }
  } else if (buttonID === "clear") {
    resetNumber();
    resetWasNumberAssigned();
    resetResult();
    resetOperator();
    updateDisplay(result);
    resetWasEqualTo();
  } else if (buttonID === "clear-entry") {
    resetNumber();
    resetWasNumberAssigned();
    updateDisplay(number);
    resetWasEqualTo();
  } else if (buttonID === "backspace") {
      if (wasEqualTo) {
        backspaceResult();
        updateDisplay(result);
      } else {
        backspaceNumber();
        updateDisplay(number);
      }
  } else if (buttonID === "minus" || buttonID === "divide" || buttonID === "multiply" || buttonID === "plus"){
    if (operator !== "") {
      if (wasNumberAssigned) {
        if (!wasEqualTo) {
          if (operator === "/" && number === 0) {
            resetNumber();
            resetWasNumberAssigned();
            resetResult();
            resetOperator();
            updateDisplay(divideByZero());
            resetWasEqualTo();
          } else {
            result = operate(operator, result, number);

            if (!isResultFormatted()) {
              roundResult();
            }

            updateDisplay(result);
            resetNumber();
            resetWasNumberAssigned();
            resetWasEqualTo();
            operator = setOperator(buttonID);
          }
        } else {
          resetNumber();
          resetWasNumberAssigned();
          resetWasEqualTo();
          operator = setOperator(buttonID);
        }
      }
      else {
        operator = setOperator(buttonID);
      }
    } else {
      storeNumber();
      resetNumber();
      resetWasNumberAssigned();
      operator = setOperator(buttonID);
    }
  }
});
