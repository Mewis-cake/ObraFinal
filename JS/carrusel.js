let segundos = 3;
let index = 0;
const track = document.querySelector('.carrusel-contenedor');
const cards = document.querySelectorAll('.carrusel_item');
const carousel = document.querySelector('.carrusel');

let autoplay;
let isPlaying = true;
let cardWidth = carousel.offsetWidth;

function updateWidth() {
    cardWidth = carousel.offsetWidth;
    showSlide(index);
}

function showSlide(i) {
    index = (i + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function startAutoplay() {
    autoplay = setInterval(() => {
        showSlide(index + 1);
    }, segundos * 1000);
    isPlaying = true;
    playPauseBtn.textContent = "⏸ Pausa";
}

function stopAutoplay() {
    clearInterval(autoplay);
    isPlaying = false;
    playPauseBtn.textContent = "▶ Play";
}

document.querySelector('.next').addEventListener('click', () => {
    stopAutoplay();
    showSlide(index + 1);
    startAutoplay();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoplay();
    showSlide(index - 1);
    startAutoplay();
});

// Botón Play / Pause
const playPauseBtn = document.getElementById('playPause');
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

// Recalcular al cambiar tamaño
window.addEventListener('resize', updateWidth);

// Inicializar
updateWidth();
startAutoplay();
