/*
1.  Convierta la cadena en una matriz, eliminando los caracteres en el proceso. Guarde el resultado en una variable llamada .+myArray

2.  Almacene la longitud de la matriz en una variable llamada .arrayLength

3.  Almacene el último elemento de la matriz en una variable llamada .lastItem

*/


const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here

let myArray = myString.split("+");
console.log(myArray);


let arrayLength = myArray.length;
console.log(arrayLength);


let lastItem = myArray.pop();
console.log(lastItem);


// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);