/// Arreglos 


let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);


let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];

console.log(sequence);
console.log(random);


let frutas = ["manzana", "Pera", "Fresa"] ;

console.log(frutas);


//  Acceder a los elementos de un arreglo


console.log(shopping[0]);
console.log(frutas[1]);


//  Modificar elemento


shopping[0] = "tahini";
console.log(shopping);



/////   Un arreglo dentro de otro arreglo se llama matriz

///   aceder a los elementos de un segundo arreglo

let ropa = ["Pantalones", "Camisas", ["faldas", "Blusa", "Pans", "gorra", "zapatos"]];


console.log(random[2][2]);

console.log(ropa[2][1]);


/// longitud de un arreglo


console.log(sequence.length);
console.log(ropa.length);
console.log(ropa[2].length);


//// length  normalmente se utiliza para recorrer todos los elementos de un arreglo y pare


let sequence2 = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence2.length; i++) {
  console.log(sequence2[i]);
}




////  Metodos para arreglos 

// split

let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

let myArray = myData.split(",");
console.log(myArray);


//   recuperar elemntos de la matriz

console.log(myArray.length);   // tamaño de la nueva matriz
console.log(myArray[0]); // el primer elemento del arreglo
console.log(myArray[1]); // el segundo elemento del arreglo
console.log(myArray[myArray.length - 1]); // el último elemento del arreglo


// metodo join() para separar los elementos

let myNewString = myArray.join(",");
console.log(myNewString);




// metodo toString

let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); //Rocket,Flash,Bella,Slugger





// agregar y eliminar elemetos de un arreglo


