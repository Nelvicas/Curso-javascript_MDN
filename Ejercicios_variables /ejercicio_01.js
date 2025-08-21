
/*
En esta tarea queremos que:

Declares una variable llamada myName.
Inicies myName con un valor adecuado, en una línea separada (puedes usar tu nombre real o algo más).
Declares una variable llamada myAge la inicies con un valor, en la misma línea.
Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:
*/






// Add your code here
let myName;
let myAge = 33;

myName = "Juan";

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);