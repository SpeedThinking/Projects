const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const fullImage = document.querySelector('.full-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array de rutas de imágenes y textos alternativos
const imagePaths = [
  { src: 'images/pic1.jpg', alt: 'Closeup of a human eye' },
  { src: 'images/pic2.jpg', alt: 'nose2' },
  { src: 'images/pic3.jpg', alt: 'nose3' },
  { src: 'images/pic4.jpg', alt: 'nose4' },
  { src: 'images/pic5.jpg', alt: 'nose5' },
];

// Crear miniaturas de imágenes y agregar eventos
imagePaths.forEach((image, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', image.src);
  thumbnail.setAttribute('alt', image.alt);
  thumbnail.addEventListener('click', () => {
    displayedImage.setAttribute('src', image.src);
    displayedImage.setAttribute('alt', image.alt);
  });
  thumbBar.appendChild(thumbnail);
});

// Función para oscurecer/clarar la imagen
btn.addEventListener('click', () => {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  }
});




