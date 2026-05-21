let index = 0;
const track = document.querySelector('.carrusel-contenedor');
const cards = document.querySelectorAll('.carrusel_item');
const carousel = document.querySelector('.carrusel');

let cardWidth = cards[0].offsetWidth + 40;

function updateWidth() {
    cardWidth = cards[0].offsetWidth + 40;
    showSlide(index);
}

function showSlide(i) {
    if (i < 0) {
        index = 0;
    } else if (i >= cards.length) {
        index = cards.length - 1;
    } else {
        index = i;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

window.addEventListener('resize', updateWidth);

updateWidth();