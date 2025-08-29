/*

En esta tarea, se te proporcionan dos variables, quote y substring, que contienen dos cadenas. Nos gustaría que:

Recuperes la longitud de la cita y la guardes en una variable llamada quoteLength.
Busques la posición del índice donde aparece substring en quote, y almacenes ese valor en una variable llamada index.
Uses una combinación de las variables que tienes y las propiedades/métodos de cadena disponibles para recortar la cita original a "No me gustan los huevos verdes y el jamón", y la guardes en una variable llamada revisedQuote.
Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

*/

const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here

let quoteLength = quote.length;
let index = quote.indexOf(substring);
let revisedQuote = quote.slice(0, 33);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);