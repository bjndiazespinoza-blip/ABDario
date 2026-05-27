//* Creación código script.js *//

// Definiendo colores //
const colores = ["#008000", "#0000FF", "#FF0000"];

//Etiquetas H3 y h5//
const etiquetasH3 = document.querySelectorAll("h1, h3, h5");

//Función que retorna color aleatorio del arreglo//

function obtenerColorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * colores.length);
  return colores[indiceAleatorio];
}

// Recorriendo cada etiqueta H3 y h5 y asignando un color aleatorio
etiquetasH3.forEach(function(etiqueta) {
    etiqueta.addEventListener("click", function() {
        this.style.color = obtenerColorAleatorio();
    });
});
