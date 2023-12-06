var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Mostrar solución";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solución") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solución";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solución";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n 'Socks:5.99',\n 'T-shirt:14.99',\n 'Trousers:31.99',\n 'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(':');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + ' — $' + price;\n\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// detener la tecla de tabulación fuera del área de texto y
// hacer que escriba una tabulación en la posición del cursor

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Actualice el código de usuario guardado cada vez que el usuario actualice el código de área de texto

textarea.onkeyup = function () {
  // Solo queremos guardar el estado cuando se muestra el código de usuario,
  // no la solución, para que esa solución no se guarde sobre el código de usuario.
  if (solution.value === "Mostrar solución") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
