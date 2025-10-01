/*

En la siguiente tarea relacionada con eventos, pruebe su conocimiento de la propagación de eventos. Nos gustaría que establecieras un detector de eventos en el elemento padre de s () que, cuando se invoca haciendo clic en cualquiera de los botones, establecerá el fondo de the en el color contenido en el atributo del botón.<button><div class="button-bar"> … </div>button-bardata-color

Queremos que resuelvas esto sin tener que recorrer todos los botones y darle a cada uno su propio detector de eventos.

*/



const buttonBar = document.querySelector(".button-bar");

function setColor(e) {
  buttonBar.style.backgroundColor = e.target.getAttribute("data-color");
}

buttonBar.addEventListener("click", setColor);