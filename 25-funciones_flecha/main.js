///  funciones fecha 

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});




/////   Si la función solo toma un parámetro, puede omitir los paréntesis alrededor del parámetro:


textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});




//// , si la función contiene solo una línea que es una instrucción, también puede omitir las llaves y la palabra clave y devolver implícitamente la expresión


const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]