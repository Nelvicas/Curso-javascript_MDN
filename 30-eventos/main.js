
// eventos


const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("mouseover", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


/*
// otra forma pero con funciones 



const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);



*/



///  eliminar el oyente 

btn.removeEventListener("click", changeBackground);


/////   Agregar varios oyentes 


myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);



/////    Propiedades de controladores de eventos 

//  propiedad onclick

const btn2 = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn2.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
