
function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'NO DEBEBISTE HACERLO GRAN IDIOTA';
    document.body.appendChild(para);
  }
  const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
