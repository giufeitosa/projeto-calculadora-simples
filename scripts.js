  let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function appendDot() {
  const parts = display.innerText.split(/[\+\-\*\/]/);
  const lastNumber = parts[parts.length - 1];
  if (!lastNumber.includes(".")) {
    display.innerText += ".";
  }
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Erro";
  }
}

function clearDisplay() {
  display.innerText = "0";
}

