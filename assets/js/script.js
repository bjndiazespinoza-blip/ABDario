// Definiendo colores //
const colores = ["green", "blue", "red"];

//Etiquetas h5//
const etiquetasH5 = document.querySelectorAll("h5");

//Función que retorna color aleatorio del arreglo//

function obtenerColorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * colores.length);
  return colores[indiceAleatorio];
}

//Recorriendo cada etiqueta h5 y asignando un color aleatorio//
etiquetasH5.forEach(function(etiqueta) {
    etiqueta.addEventListener("click", function() {
        const colorAleatorio = obtenerColorAleatorio();
        etiqueta.style.color = colorAleatorio;
    }
})