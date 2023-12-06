document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };
  let miImage = document.querySelector("img");
  miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox-icon.png") {
      miImage.setAttribute("src", "images/firefox2.png");
    } else {
      miImage.setAttribute("src", "images/firefox-icon.png");
    }
  };
  let miBoton = document.querySelector("button");
  let miTitulo = document.querySelector("h1");
  function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
  }
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  }
  miBoton.onclick = function () {
    estableceNombreUsuario();
  };