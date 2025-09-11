///// Funciones anonimas 
/*

Funcion normal 

function myFunction() {
  alert("hello");
}

*/


/// funcion anonima o que no tenga nombre 

(function () {
  alert("hello");
});





/////////////// esta es una forma 

function logKey(event) {
  console.log(`You pressed "${event.key}".`);   //   event.key es una propiedad del objeto event
}

textBox.addEventListener("keydown", logKey);

///////  esta e sla misma forma solo que usando una fincion anonima o rsumida 


textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});