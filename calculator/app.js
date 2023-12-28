let buffer = '0';
let previousOperator = null;
let runningTotal = 0;

const screen = document.querySelector('.screen');

function handleClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  if (buffer === '0') {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleMath(value) {
  if (buffer === '0') {
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  buffer = '0';
  previousOperator = value;
}

function flushOperation(intBuffer) {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '÷') {
    runningTotal /= intBuffer;
  } else if (previousOperator === '×') {
    runningTotal *= intBuffer;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '=':
      flushOperation(parseInt(buffer));
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case '+':
    case '-':
    case '÷':
    case '×':
      handleMath(symbol);
      break;
  }
}

function init() {
  const buttons = document
    .querySelector('.calc-buttons')
    .addEventListener('click', function (event) {
      handleClick(event.target.innerText);
    });
}

function rerender() {
  screen.innerText = buffer;
}

init();
