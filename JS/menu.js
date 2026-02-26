    const btnMenu = document.getElementById('btnMenu');
    
// AL HACER CLICK EN EL BOTÓN DE HAMBURGUESA, INTERCAMBIAMOS LA CLASE .menuDesplegado
btnMenu.addEventListener('click', () => {
    const cajaMenu = document.querySelector('.menuDesktop');
    const open = cajaMenu.classList.toggle('menuDesplegado');
});
