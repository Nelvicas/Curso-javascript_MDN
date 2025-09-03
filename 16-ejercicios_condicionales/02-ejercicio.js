/*
Para esta tarea, se le dan tres variables:

machineActive: Contiene un indicador de si el contestador automático está encendido o no (/).truefalse
score: Contiene tu puntuación en un juego imaginario. Esta puntuación se introduce en el contestador automático, que proporciona una respuesta para indicar lo bien que lo hiciste.
response: Comienza sin inicializar, pero luego se usa para almacenar una respuesta que se imprimirá en el panel de salida.
Para completar la tarea:

1.  Cree una estructura que verifique si la máquina está encendida y coloque un mensaje en la variable si no lo está, diciéndole al usuario que encienda la máquina.if...elseresponse

2.  Dentro del primero, anide otro que coloque los mensajes apropiados en la variable dependiendo de cuál sea el valor de, si la máquina está encendida. Las diferentes pruebas condicionales (y las respuestas resultantes) son las siguientes: if...elseif...else responses core
    Puntuación de menos de 0 o más de 100: "Esto no es posible, se ha producido un error".
    Puntuación de 0 a 19 - "Esa fue una puntuación terrible, ¡falla total!"
    Puntuación de 20 a 39 — "Sabes algunas cosas, pero es una puntuación bastante mala. Necesita mejorar".
    Puntuación de 40 a 69 — "¡Hiciste un trabajo aceptable, no está mal!"
    Puntuación de 70 a 89: "Esa es una gran puntuación, realmente sabes lo que haces".
    Puntuación de 90 a 100 — "¡Qué puntuación tan increíble! ¿Hiciste trampa? ¿Eres real?"
Después de escribir el código, intente cambiar a , y a algunos valores diferentes para ver si funciona. Tenga en cuenta que, para el alcance de este ejercicio, la cadena permanecerá en la pantalla independientemente del valor de la variable.machineActivetruescoreYour score is __machineActive

*/

let response;
let score = 75;
let machineActive = true;

// Add your code here

if(machineActive){
    if (score < 0 || score > 100) {
        console.log(response = "This is not possible, an error has occurred.");
    } else if (score >= 0 && score < 20) {
        response = "That was a terrible score — total fail!";
    } else if (score >= 20 && score < 40) {
        response =
        "You know some things, but it's a pretty bad score. Needs improvement.";
    } else if (score >= 40 && score < 70) {
        response = "You did a passable job, not bad!";
    } else if (score >= 70 && score < 90) {
        console.log(response = "That's a great score, you really know your stuff.");
    } else if (score >= 90 && score <= 100) {
        response = "What an amazing score! Did you cheat? Are you for real?";
    }

}else{
    console.log("Debe encender la maquina");
}

// Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// para1.textContent = `Your score is ${score}`;
// para2.textContent = response;
// section.appendChild(para1);
// section.appendChild(para2);