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


function myFunction(){
    return alert("Hello");
}

// llamada de funcion
console.log(myFunction());




////   Parametros de funcion 

