// bucles 

// for ... of 
 // La herramienta básica para recorrer una colección es un for 

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}



///    Map()

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

function toUpper(string) {
  return string.toUpperCase();  // combierte todos los string en ayusculas 
}

const upperCats = cats2.map(toUpper);

console.log(upperCats);



///  filter()

function lCat(cat3) {      
  return cat3.startsWith("L");  // sirve para comprobar si una cadena de texto (string) comienza con un valor específico.
}

const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats3.filter(lCat);

console.log(filtered);


console.log("/////////////////");

//  Expresiones de funciones 

const cats4 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered2 = cats4.filter((cat4) => cat4.startsWith("L"));
console.log(filtered2);





/*
estandar para un bucle for 

for (initializer; condition; final-expression) {
  // code to run
}

*/





///////// for of    Bucle a través de colecciones con un bucle for


const cats5 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion", "Pantera", "Puma"];

for (const cat5 of cats5) {
  console.log(cat5);
}


console.log("///////");
///  la forma basica 

const cats6 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats6.length; i++) {
  console.log(cats6[i]);
}




//  ejeplo for ... of 

const cats7 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat7 of cats7) {
  myFavoriteCats += `${cat7}, `;
}

console.log(myFavoriteCats);





///