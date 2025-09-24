/*
Para completar nuestra primera tarea de funciones:

Defina una función: imprima un nombre aleatorio de la matriz proporcionada () en el párrafo proporcionado ().chooseName()namespara
Llame a la función una vez.chooseName()

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