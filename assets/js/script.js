/* Creación código script.js */

// Definiendo colores
const colores = ["green", "blue", "red"];


//Etiquetas H3 y h5
const etiquetasH3 = document.querySelectorAll("h3, h5");

//Función que retorna color aleatorio del arreglo
function obtenerColorAleatorio(colorActual) {
  let indiceAleatorio = () => Math.floor(Math.random() * colores.length);
  let nuevoColor = colores[indiceAleatorio()]

  while (colorActual === nuevoColor) {
      nuevoColor = colores[indiceAleatorio()];
  }

  return nuevoColor;
}

// Recorriendo cada etiqueta H3 y h5 y asignando un color aleatorio
etiquetasH3.forEach(function(etiqueta) {
  etiqueta.addEventListener("click", function(event) {
     const colorDelHeader = event.target.style.color;
     event.target.style.color = obtenerColorAleatorio(colorDelHeader);
  });
});
