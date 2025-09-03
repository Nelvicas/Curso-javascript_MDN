/*
Para la tarea final, se le dan cuatro variables:

machineActive: Contiene un indicador de si la máquina de inicio de sesión está encendida o no (/).truefalse
pwd: Contiene la contraseña de inicio de sesión del usuario.
machineResult: Comienza sin inicializar, pero luego se usa para almacenar una respuesta que se imprimirá en el panel de salida, lo que permite al usuario saber si la máquina está encendida.
pwdResult: Comienza sin inicializar, pero luego se usa para almacenar una respuesta que se imprimirá en el panel de salida, lo que le permitirá al usuario saber si su intento de inicio de sesión fue exitoso.
Para completar la tarea:

1.  Cree una estructura que verifique si la máquina está encendida y coloque un mensaje en la variable que le indique al usuario si está encendida o apagada.if...else machineResult

2.  Si la máquina está encendida, también queremos que se ejecute un segundo condicional que verifique si the es igual a . Si es así, debe asignar una cadena para decirle al usuario que inició sesión correctamente. De lo contrario, debe asignar una cadena diferente para decirle al usuario que su intento de inicio de sesión no fue exitoso. Nos gustaría que hicieras esto en una sola línea, usando algo que no sea una estructura.pwd cheese pwdResult pwdResult if...else
*/


let machineActive = true;
let pwd = "cheesr";

let machineResult;
let pwdResult;

// Add your code here

if(machineActive){
    console.log(machineResult = "La maquina esta encendida");
    console.log(pwdResult =
    pwd === "cheese"
      ? "Login successful."
      : "Password incorrect; login failed.");
}else{
    console.log(machineResult = "El equipo esta apagado");
}

// Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// para1.textContent = machineResult;
// para2.textContent = pwdResult;
// section.appendChild(para1);
// section.appendChild(para2);