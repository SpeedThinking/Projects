document.querySelector("html").onclick = function () {};
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/gatofacha.png") {
    miImage.setAttribute("src", "images/gato.png");
  } else {
    miImage.setAttribute("src", "images/gatofacha.png");
  }
};
function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
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