//  objetos sintaxis 

const person = {};

console.log(person);



/*

Los dos primeros elementos son elementos de datos y se denominan propiedades del objeto. Los dos últimos elementos son funciones que permiten que el objeto haga algo con esos datos y se denominan métodos del objeto.

*/



const person2 = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

console.log(person2);

console.log(person2.name);
console.log(person2.name[0]);
console.log(person2.age);
console.log(person2.bio());
// "Bob Smith is 32 years old."
console.log(person2.introduceSelf());




//    De ahora en adelante, usaremos esta sintaxis más corta.

console.log("///////");


const person3 = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} años.`);
  },
  introduceSelf() {
    console.log(`Hola! I'm ${this.name[0]}.`);
  },
};


console.log(person3);

console.log(person3.introduceSelf());


