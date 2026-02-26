// Función que se ejecuta al redimensionar la ventana
function redimensionar() {
    // Ancho y alto total de la ventana del navegador (incluye barras de desplazamiento)
    let anchoViewport = window.innerWidth;
    let altoViewport = window.innerHeight;

    // Ancho y alto del área de contenido visible (sin barras de desplazamiento)
    let anchoContenido = document.documentElement.clientWidth;
    let altoContenido = document.documentElement.clientHeight;

    let inputAncho = document.getElementById("ancho");
    inputAncho.textContent = anchoContenido + " px";
    let inputAlto = document.getElementById("alto");
    inputAlto.textContent = altoContenido + " px";
}

// Añadir un event listener para el evento 'resize'
window.addEventListener('resize', redimensionar);

// Llamar una vez al cargar para obtener el tamaño inicial
redimensionar();
