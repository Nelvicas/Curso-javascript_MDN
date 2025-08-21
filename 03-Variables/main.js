const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("¿Cuál es tu nombre?");
  alert("¡Hola " + name + ", encantado de verte!");
};






////  Declarar variables 



let myName = "Juan";
let myAge = 33;
let myDog = "Rover";



////    otro ejemplo con funcion y con var 


myName2 = "Chris";

function logName() {
  console.log(myName2);
}

logName();

var myName2;



//// tipos de variables 

// numeros 

let myAge2 = 17;


////   string 

let dolphinGoodbye = "Hasta luego y gracias por todos los peces";



/// Booleanos 

let iAmAlive = true;

    /// en el uso 
    let test = 6 < 3;




///   Arreglos

let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

    ///  Acceder al vaor 

    myNameArray[0]; // debería devolver 'Chris'
    myNumberArray[2]; // debe devolver 40



///  Objetos 

let dog = { 
    name: "Spot", 
    breed: "Dalmatian" 
};

    // obtener informacion 

    dog.name;


///   tipado dimamico


let myNumber = "500"; // Vaya, esto sigue siendo una cadena
typeof myNumber;
myNumber = 500; // mucho mejor — ahora este es un número
typeof myNumber;







///////// Constantes 

const daysInWeek =  7;
const hoursDay = 24;