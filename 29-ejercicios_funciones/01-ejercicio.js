/*
Para completar nuestra primera tarea de funciones:

Defina una función: imprima un nombre aleatorio de la matriz proporcionada () en el párrafo proporcionado ().chooseName()namespara
Llame a la función una vez.chooseName()

*/



/*

¿Qué es textContent?

textContent no es un objeto, sino una propiedad de un nodo del DOM (por ejemplo, un elemento HTML como <p>, <div>, etc.).

Su propósito es leer o modificar el contenido de texto de ese elemento.



*/


const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");


function chooseName(){
    const randomNumber = Math.floor(Math.random() * names.length);
    const choice = names[randomNumber];
    para.textContent = choice;
}

console.log(chooseName());