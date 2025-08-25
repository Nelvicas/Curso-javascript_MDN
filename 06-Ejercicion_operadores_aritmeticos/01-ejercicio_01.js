/*
Crea cuatro variables que contengan numeros. Llama a las variables razonablemente.
Agrega las dos primeras variables juntas y guarda el resultado en otra variable.
Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
Multiplique los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada finalResult. El producto debe ser 48. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
Finalmente, escribe un cálculo que verifique si finalResult es un número par. Almacene el resultado en una variable llamada evenOddResult.

*/



let finalResult;

let evenOddResult;

// Add your code here
var num1 = 6;
var num2 = 6;
var num3 = 10;
var num4 = 6;

var sum = num1 + num2;
var rest = num3 - num4;

finalResult = sum * rest; 

evenOddResult = finalResult % 2 === 0;


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);