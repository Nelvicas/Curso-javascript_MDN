/*

Tarea 4
En esta tarea, tenemos una matriz de nombres y estamos usando Array.filter() para obtener una matriz que contiene solo los nombres de menos de 5 caracteres. Al filtro se le está pasando actualmente una función con nombre. Esto comprueba la longitud del nombre, devolviendo si el nombre tiene menos de 5 caracteres, y de lo contrario.isShort()truefalse

Para completar la tarea, actualice el código para que la funcionalidad que contiene se incluya directamente dentro de la llamada como una función de flecha. Vea lo compacto que puede hacerlo.isShort()filter()

*/


const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// Don't edit the code above here!

// Update the code below here

const shortNames = names.filter((name) => name.length < 5);
para.textContent = shortNames;