//  objetos de eventos ( esta representado como event, evt, e)  dentro de la funcion controlador 



const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {   // objeto de evento e) 
  const rndCol = `rgb((${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
