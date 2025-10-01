/*

Nuestra primera tarea relacionada con eventos implica un <botón> que, cuando se hace clic, actualiza su etiqueta de texto. El HTML no debe cambiarse; solo el JavaScript.

Para completar la tarea, cree un detector de eventos que haga que el texto dentro del botón () cambie cuando se haga clic en él y vuelva a cambiar cuando se vuelva a hacer clic en él.btn



*/


const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.className === "on") {
    btn.textContent = "Machine is off";
    btn.className = "off";
  } else {
    btn.textContent = "Machine is on";
    btn.className = "on";
  }
});