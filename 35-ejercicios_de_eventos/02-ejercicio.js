/*

Para completar esta tarea, cree un detector de eventos que mueva el círculo alrededor del lienzo proporcionado cuando se presionan las teclas WASD en el teclado. El círculo se dibuja con la función , que toma los siguientes parámetros como entradas:drawCircle()

x — la coordenada x del círculo.
y — la coordenada y del círculo.
size — el radio del círculo.

*/


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);
// Don't edit the code above here!

// Add your code here

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      x -= 5;
      break;
    case "d":
      x += 5;
      break;
    case "w":
      y -= 5;
      break;
    case "s":
      y += 5;
      break;
  }

  drawCircle(x, y, size);
});