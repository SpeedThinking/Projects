const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    const para = document.createElement('p');

function chooseName() { 
const randomIndex = Math.floor(Math.random() * names.length);
  
  // Get the randomly selected name
  const randomName = names[randomIndex];
  
  // Set the paragraph's text content to the random name
  para.textContent = `Randomly chosen name: ${randomName}`;
  
}

chooseName();



    const section = document.querySelector('section');

    section.appendChild(para);

    ConvolverNode = new ConvolverNode       