/*

Bucles 1
En nuestra primera tarea de bucle, queremos que escriba un bucle básico que recorra en iteración todos los elementos proporcionados myArray y los imprima en la pantalla dentro de los elementos de la lista (elementos <li>). Deben adjuntarse a la extensión.list

*/


const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}




// const myArray2 = ["jose", "ivan", "pedro", "tere", "juan"];
// const list2 = document.createElement("ul");
// const section2 = document.querySelector("section");
// section.appendChild(list);


// for(let name of myArray2){
//     const names = document.createElement("ul");
//     names.textContent = name;
//     list.appendChild(names);
// }