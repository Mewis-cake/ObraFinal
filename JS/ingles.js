console.log("JS Iniciado");

// SELECCIONA TODOS LOS ELEMENTOS HTML CON CLASE .eng
let ingles = document.querySelectorAll(".eng");
// LES AÑADE LA CLASE .oculta
ingles.forEach(elemento => 
    elemento.classList.add("oculta")
);
// SELECCIONA TODOS LOS ELEMENTOS HTML CON CLASE .cast
let cast = document.querySelectorAll(".cast");

function cambiaOculta(muestra, oculta) {
    // LES AÑADE LA CLASE .oculta
    oculta.forEach(elemento => 
        elemento.classList.add("oculta")
    );  
    // LES QUITA LA CLASE .oculta
    muestra.forEach(elemento => 
        elemento.classList.remove("oculta")
    );  
}

// SELECCIONA LA IMAGEN BANDERA ESP.
let iconoEsp = document.querySelector("#iconoEsp");
iconoEsp.addEventListener("click", () => {
    cambiaOculta(cast, ingles);
});
// SELECCIONA LA IMAGEN BANDERA ING.
let iconoIng = document.querySelector("#iconoIng");
iconoIng.addEventListener("click", () => {
    cambiaOculta(ingles, cast);
});
