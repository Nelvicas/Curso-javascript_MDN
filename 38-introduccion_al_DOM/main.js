// Introduccion a la secuencia de comandos DOM 

//  MANIPULACION BASICA DEL DOM 

//  hay muchas formas de seleccionar un elemento y almacenar una referencia a él en una variable.

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";



// creacion y colocacion de nuevos nodos 

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);


const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);   /// agregar un nuevo parrafo 




////   Mover y quitar elementos 


sect.appendChild(linkPara);  // moover el parrafo al final de la seccion

sect.removeChild(linkPara);   //  eliminar un nodo referencia al nodo

linkPara.remove();   ///   referencia a si mismo





///////    Manupulacion de estilos



para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";