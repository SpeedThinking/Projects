
function displayMessage(msgText, msgType) {
    let html = document.querySelector("html");

    let panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    html.appendChild(panel);
    
    let msg = document.createElement("p");
    msg.textContent = msgText;

    panel.appendChild(msg);
    
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);
    
    closeBtn.onclick = function () {
      panel.parentNode.removeChild(panel);
    };
 


}displayMessage();
let btn = document.querySelector("button");
btn.onclick = function () {
    displayMessage("Your inbox is almost full — delete some mails", 'warning!');
  };
  if (msgType === 'warning') {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }


  
 