const btnMenu = document.getElementById('btnhamburguesa');

btnMenu.addEventListener('click', () => {
    const cajaMenu = document.querySelector('.menuDesktop');
    cajaMenu.classList.toggle('menuDesplegado');
});