/*
1. Cree una matriz de tres elementos y guárdela en una variable llamada . Los artículos pueden ser lo que quieras, ¿qué tal tus comidas o bandas favoritas?myArray

2.  A continuación, modifique los dos primeros elementos de la matriz utilizando la notación y asignación de corchetes.

3.  Finalmente, agregue un nuevo elemento al comienzo de la matriz.

*/

// Add your code here

let myArray = ["Pizza","Tacos", "Hamburguesas"];

myArray[0] = "Hotdog";
myArray[1] = "Lazaña";
console.log(myArray);

myArray.unshift("PIZZA");
console.log(myArray)

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
section.appendChild(para1);