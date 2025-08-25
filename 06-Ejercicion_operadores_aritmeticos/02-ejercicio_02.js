/*
Escribe un cálculo que multiplique result y result2 y asigne el resultado de nuevo a result.
Escriba una línea de código que tome el resultado y lo formatee con 2 decimales, almacenando el resultado de esto en una variable llamada finalResult.
Verifique el tipo de dato de finalResult usando typeof; ¡Probablemente verás que en realidad es del tipo string! Escriba una línea de código que lo convierta en un tipo number, almacenando el resultado en una variable llamada finalNumber.
El valor de finalNumber debe ser 10.42. Regrese y actualice los cálculos originales que se le proporcionaron para que den este resultado final. No actualice los números ni los operadores.

*/



let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;
let finalResult;

result = result * (result2 / 444.63);

finalResult = (result).toFixed(2);

let finalNumber = Number(finalResult);


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = typeof finalNumber === 'number' ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);
    