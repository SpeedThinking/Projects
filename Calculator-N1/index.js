const display = document.getElementById("number-area");
const keypad = document.getElementById("key-pad");
const buttons = keypad.getElementsByClassName("keypad-button");
display.indexHTML = "0";


function setUp() {
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

function handleButtonClick(button) {
  const buttonText = button.innerHTML;

  if(buttonText === 'C' || buttonText === 'CE') {
    clearScreen();
  } else if(buttonText === '←') {
    removeLastCharacter();
  } else if(buttonText === '=') {
    calculate();
  } else {
    updateScreen(buttonText);
  }
}



function clearScreen() {
  display.innerHTML = "0";
}

function removeLastCharacter() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function updateScreen(text) {
  if (display.innerHTML === '0') {
    display.innerHTML = text;
  } else if (text === '.' && !display.innerHTML.endsWith('0')) { // Problems with the zero and point too
    display.innerHTML += '0' + text;
  } else {
    display.innerHTML += text;
  }
}


function wrongInput(number, symbol) {
  return `Wrong input: ${number} ${symbol} ${display.innerHTML}`
}

window.addEventListener('load', setUp, false);  // Starts the script




