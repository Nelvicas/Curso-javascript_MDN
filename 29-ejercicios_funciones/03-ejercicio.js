/*

En esta tarea, se vuelve al problema planteado en la Tarea 1, con el objetivo de realizar tres mejoras en el mismo.

Para completar la tarea:

Refactorice el código que genera el número aleatorio en una función separada llamada , que toma como parámetros dos límites genéricos entre los que debe estar el número aleatorio y devuelve el resultado.random()

Actualice la función para que haga uso de la función de número aleatorio, tome la matriz para elegir como parámetro (haciéndola más flexible) y devuelva el resultado.chooseName()

Imprima el resultado devuelto en el párrafo ().paratextContent

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

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);