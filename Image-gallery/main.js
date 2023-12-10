const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const pictures = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']; 
const picAltNames = {
    'images/pic1.jpg': 'Closeup of a human eye',
    'images/pic2.jpg': 'Brown waves',
    'images/pic3.jpg': 'Purple flowers',
    'images/pic4.jpg': 'Egypt Hieroglyphics',
    'images/pic5.jpg': 'Butterfly over a leaf',
};    

/* Looping through images */
for (const image of pictures) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', picAltNames[image]);
    thumbBar.appendChild(newImage)

    thumbBar.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
    })

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {

if(btn.getAttribute('class') == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Ligthen';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    }else {
    btn.textContent = 'Darken';
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
}
})