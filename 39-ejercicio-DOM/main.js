/*

Para empezar, descargue una copia de nuestro archivo de inicio de shopping-list.html y haga una copia en algún lugar. Verás que tiene un CSS mínimo, un div con una etiqueta, una entrada y un botón, y una lista vacía y un elemento <script>. Estarás haciendo todas tus adiciones dentro del script.

Cree tres variables que contengan referencias a los elementos list (<ul>), <input> y <button>.

Cree una función que se ejecutará en respuesta al botón en el que se hace clic.

Dentro del cuerpo de la función, comience almacenando el valor actual del elemento de entrada en una variable.

A continuación, vacíe el elemento de entrada estableciendo su valor en una cadena vacía — .""

Cree tres nuevos elementos: un elemento de lista (<li>), <span> y <button>, y guárdelos en variables.

Anexe el intervalo y el botón como elementos secundarios del elemento de lista.

Establezca el contenido de texto del intervalo en el valor del elemento de entrada que guardó anteriormente y el contenido de texto del botón en 'Eliminar'.

Anexe el elemento de lista como elemento secundario de la lista.

Adjunte un controlador de eventos al botón de eliminación para que, al hacer clic en él, elimine todo el elemento de la lista ().<li>...</li>

Finalmente, use el método focus() para enfocar el elemento de entrada listo para ingresar el siguiente elemento de la lista de compras.


*/



//  Crear una lista de compras dinamica 

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  ul.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    ul.removeChild(listItem);
  });

  input.focus();
});




// const list = document.querySelector("ul");
// const input = document.querySelector("input");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const myItem = input.value;
//   input.value = "";

//   const listItem = document.createElement("li");
//   const listText = document.createElement("span");
//   const listBtn = document.createElement("button");

//   listItem.appendChild(listText);
//   listText.textContent = myItem;
//   listItem.appendChild(listBtn);
//   listBtn.textContent = "Delete";
//   list.appendChild(listItem);

//   listBtn.addEventListener("click", () => {
//     list.removeChild(listItem);
//   });

//   input.focus();
// });