/*

1.  Busque el índice del elemento y utilícelo para quitarlo."Eagles""Eagles"

2.  Haga una nueva matriz a partir de esta, llamada , que contenga solo pájaros de la matriz original cuyos nombres comiencen con la letra "E". Tenga en cuenta que startsWith() es una excelente manera de verificar si una cadena comienza con un carácter determinado.eBirds
Si funciona, debería aparecer en la página."Emus,Egrets"

*/

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here



// 1. Buscar el índice de "Eagles"
let eagleIndex = birds.indexOf("Eagles");

// 2. Quitar "Eagles" con splice()
if (eagleIndex !== -1) {
  birds.splice(eagleIndex, 1);
}

// 3. Crear nuevo array solo con los que empiezan con "E"
let eBirds = birds.filter(bird => bird.startsWith("E"));

// 4. Convertirlo a string
let result = eBirds.join(",");



// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);