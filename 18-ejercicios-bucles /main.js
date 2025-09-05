const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));



/*

document.querySelector()

Es un método de JavaScript que sirve para seleccionar un elemento del DOM(HTML)

*/


/*

addEventListener()

Es un método que escucha eventos en un elemento y ejecuta una función cuando ocurren.


/////////  ejemplo 

elemento.addEventListener("tipoEvento", funcion);
"tipoEvento" → el evento que quieres escuchar ("click", "mouseover", "keydown", etc.).

funcion → lo que quieres que pase cuando ocurra ese evento.




*/