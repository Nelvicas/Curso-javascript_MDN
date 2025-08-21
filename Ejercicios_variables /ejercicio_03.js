/*
La tarea final por ahora — en este caso, se te proporciona un código existente, que tiene dos errores presentes. El panel de resultados debería mostrar el nombre Chris y una declaración sobre la edad que tendrá Chris dentro de 20 años. ¿Cómo puedes solucionar el problema y corregir la salida?

Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

*/


// Add your code here

let myName = 'Default';
myName = 'Chris';

let myAge = 42;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
    