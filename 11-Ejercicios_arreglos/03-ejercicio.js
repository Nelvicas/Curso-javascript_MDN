/*

1. Elimine el último elemento de la matriz.

2. Agregue dos nuevos nombres al final de la matriz.

3. Iterar sobre cada elemento de la matriz y agregar su número de índice después del nombre entre paréntesis, por ejemplo. Tenga en cuenta que no enseñamos cómo hacer esto en el artículo Arrays, por lo que tendrá que investigar un poco.Ryu (0)

4.Finalmente, une los elementos de la matriz en una sola cadena llamada , con un separador de .myString"-"

*/

const myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

// Add your code here

myArray.pop();
console.log(myArray);


myArray.push("Juan", "Tere");
console.log(myArray)


for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i] + " (" + i + ")");
}


let myString = myArray.join(" - ");

console.log(myString);


// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);