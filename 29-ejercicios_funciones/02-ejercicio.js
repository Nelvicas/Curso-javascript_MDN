/*

Esta tarea requiere que cree una función que dibuje un rectángulo en la variable de referencia proporcionada (contexto disponible en ), en función de las cinco variables de entrada proporcionadas:<canvas>canvasctx

x — la coordenada x del rectángulo.
y — la coordenada y del rectángulo.
width — la anchura del rectángulo.
height — la altura del rectángulo.
color — el color del rectángulo.

*/



const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";


function drawSquare(x, y, width, height, color) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);

