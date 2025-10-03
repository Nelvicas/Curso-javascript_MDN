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




/// Notacion de puntos 


console.log(person2.age);
console.log(person2.bio());


person2.age;
person2.name.first;



// Objetos con propiedades de objetos

const person4 = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age : 17,
  // …
};

console.log(person4.name.first);
//console.log(name.last);



// Notacion entre corchetes 


console.log(person4["age"]);
console.log(person4["name"]["first"]);
console.log(person4["name"]["last"]);



///  Metodo this 

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

console.log(person1.introduceSelf());


const perso2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

console.log(perso2.introduceSelf());



///   Instroduccion a contadorees  


/*
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

   //  para llamar al constructor 


const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

console.log("////////////////")
console.log(salva)


const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."