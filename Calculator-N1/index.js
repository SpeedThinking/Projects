const display = document.getElementById("number-area");
const keypad = document.getElementById("key-pad");
const buttons = keypad.getElementsByClassName("keypad-button");
display.indexHTML = "0";


function setUp() {
  randomTitleColor();

  for (let button of buttons) {
    button.addEventListener("click", (e) => {
    if(e.target.getElementsByClassName('keypad-button')) {
      handleButtonClick(e.target);
    } else {
      //none
    }
  });
  }

}
function randomTitleColor() {
  function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const title = document.getElementById("title");
    title.style.color = "#" + randomColor;
  }

  // Call the changeColor function every 1 second (1000 milliseconds)
  setInterval(changeColor, 1000);
}

function handleButtonClick(button) {
  const buttonText = button.innerHTML;

  if (buttonText === 'C' || buttonText === 'CE') {
    clearScreen();
  } else if (buttonText === '←') {
    removeLastCharacter();
  } else if (buttonText === '=') {
    calculate(display);
  } else if (buttonText === '-') {
    handleNegative();
  } else if (buttonText === '√') {
    calculateRoot(2); // Square root
  } else if (buttonText === '∛') {
    calculateRoot(3); // Cube root
  } else {
    updateScreen(buttonText);
  }
}

function calculateRoot(root) {
  const currentDisplay = parseFloat(display.innerHTML);
  if (!isNaN(currentDisplay)) {
    const result = Math.pow(currentDisplay, 1 / root);
    display.innerHTML = result;
  } else {
    display.innerHTML = 'Error';
  }
}

function handleNegative() {
  const currentDisplay = display.innerHTML;
  if (currentDisplay === '0') {
    display.innerHTML = '-';
  } else if (currentDisplay.includes('-')) {
    display.innerHTML = `-${currentDisplay}`;
  } else {
    display.innerHTML = currentDisplay.substring(1); // Remove the existing '-'
  }
}


function calculate(display) {
  try {
    let displayActual = display.innerHTML;
    let result = evaluateExpression(displayActual);
    if (result === undefined || isNaN(result)) {
      display.innerHTML = 'Error';
    } else if (!isFinite(result)) {
      display.innerHTML = 'Cannot divide by zero';
    } else {
      display.innerHTML = result;
    }
    return result;
  } catch (error) {
    display.innerHTML = wrongInput(display.innerHTML, '=');
  }
}


function evaluateExpression(expression) {
  const sanitizedExpression = expression.replace(/÷/g, '/').replace(/x/g, '*').replace(/−/g, '-').replace(/√x/g, 'Math.sqrt').replace(/%/g, '/100')
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}
function clearScreen() {
  display.innerHTML = "0";
}

function removeLastCharacter() {
  if(display.innerHTML === '0') {
    return
  } else if(display.innerHTML.length === 1) {
    display.innerHTML = display.innerHTML.slice(0, -1);
    display.innerHTML = '0';
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
}

function updateScreen(text) {
  if (text === '.') {
    if (!display.innerHTML.includes('.')) {
      display.innerHTML += text;
    }
  } else if (display.innerHTML === '0') {
    display.innerHTML = text;
  } else {
    display.innerHTML += text;
  }
}


function wrongInput(number, symbol) {
  return `Wrong input: ${display.innerHTML} ${SyntaxError}`
}

window.addEventListener('load', setUp, false);  // Starts the script




