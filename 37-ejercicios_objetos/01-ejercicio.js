/*

En esta tarea, se le proporciona un objeto literal y queremos que trabaje en él.

Para completar la tarea:

Almacene el valor de la propiedad dentro de la variable, utilizando la notación de corchetes.namecatName

Ejecute el método usando notación de puntos (registrará el saludo en la consola).greeting()

Actualice el valor de la propiedad a .colorblack

*/

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here

const catName = cat["name"];
cat.greeting();
cat.color = "black";


// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);