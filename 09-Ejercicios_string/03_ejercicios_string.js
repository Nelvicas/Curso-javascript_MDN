/*
En la siguiente tarea de cadenas, se te da la misma cita con la que terminaste en la tarea anterior, ¡pero está algo rota! Queremos que la arregles y actualices, así:

Cambia la letra mayúscula para corregir con mayúscula inicial la oración (todo en minúsculas, excepto la primera letra mayúscula). Almacena la nueva cita en una variable llamada fixedQuote.
En fixedQuote, reemplaza "huevos verdes con jamón" con otro alimento que realmente no te guste.
Hay una pequeña solución más por hacer: agrega un punto al final de la cita y guarda la versión final en una variable llamada finalQuote.

*/


const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.toLowerCase();

// 2. Reemplazamos "green eggs and ham" por la comida que no te guste
fixedQuote = fixedQuote.replace('green eggs and ham', 'broccoli');

// 3. Capitalizamos la primera letra
fixedQuote = fixedQuote.charAt(0).toUpperCase() + fixedQuote.slice(1);


let finalQuote = fixedQuote + ".";


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);