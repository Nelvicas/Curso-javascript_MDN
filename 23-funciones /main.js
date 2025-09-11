//   Funciones 

///   funcion replace()

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);


// la función de cadena replace() toma una cadena fuente, 
//  y una cadena objetivo y reemplaza la cadena fuente, 
//  con la cadena objetivo, y devuelve la nueva cadena formada.



//   Funcion join()

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

// La función join() toma un arreglo, une todos los elementos del arreglo en una sola cadena y devuelve esta nueva cadena.


/// funcion random 

const MyNumber = Math.random()
console.log(MyNumber);


// La función random() genera un número aleatorio entre 0 y hasta, pero sin incluir, 1, y devuelve ese número.




/*

Definicion entre funcion y metodo

funcion
Una función es un bloque de código que puedes definir y reutilizar en cualquier parte de tu programa.
No depende de un objeto específico.


metodo
Un método es también una función, pero asociada a un objeto.
Es decir, se ejecuta como una propiedad de ese objeto.

los metodos normalmente estan definidos dentro de un objeto 

*/





// Funciones de invocacion

/*

function myFunction(){
    return alert("Hello");
}

*/
// llamada de funcion
// console.log(myFunction());




////   Parametros de funcion 

  // ejemplo 

const myText2 = "I am a string";
const newString2 = myText2.replace("string", "sausage");  // replace  es una funcion que debe de llevar dos paramatros 
console.log(newString);




// parametros opcionales 

const myArray2 = ["I", "love", "chocolate", "frogs"];
const madeAString2 = myArray2.join(" ");
console.log(madeAString2);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray2.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'    // en este seccion se coloca una , porque no ahi una delimitavcion como los (" ")




//Parametros determinados


function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

console.log(hello("Ari")); // Hello Ari!
console.log(hello()); // Hello Chris!