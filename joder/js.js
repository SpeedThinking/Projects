const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
input.addEventListener("change", () => {

    function squared(num) {
        return num * num;
      }
      
      function cubed(num) {
        return num * num * num;
      }
      
      function factorial(num) {
        var x = num;
        while (x > 1) {
          num *= x - 1;
          x--;
        }
        return num;
      }
      
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
    } else {
      para.textContent = `${num} squared is ${squared(num)}. `;
      para.textContent += `${num} cubed is ${cubed(num)}. `;
      para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
  });
  