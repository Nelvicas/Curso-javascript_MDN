/*
En esta tarea se le proporcionan dos variables:

season — contiene una cadena que dice cuál es la temporada actual.
response — comienza sin inicializar, pero luego se usa para almacenar una respuesta que se imprimirá en el panel de salida.
Para completar la tarea:

1.  Cree un condicional que verifique si contiene la cadena "verano" y, de ser así, asigne una cadena que le dé al usuario un mensaje apropiado sobre la temporada. Si no, debería asignar una cadena genérica que le diga al usuario que no sabemos qué temporada es.seasonresponseresponse
2.  Agregue otro condicional que verifique si contiene la cadena "winter" y nuevamente asigne una cadena apropiada a .seasonresponse
*/


let season = "summe";
let response;

// Add your code here
if(season === "summer"){
    console.log("Correcto estamos en verano")
}else if (season === "winter"){
    console.log("Estamos en invierno")
}else{
    console.log("No sabemos que temporada es")
}


// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = response;
section.appendChild(para1);