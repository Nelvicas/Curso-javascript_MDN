/*
En este ejemplo vamos a mostrar un uso mucho más simple — aquí te daremos un sitio de búsqueda falso, con un cuadro de búsqueda. La idea es que cuando los términos se ingresan en un cuadro de búsqueda, se muetren el top 5 de términos de búsqueda previos en la lista. Cuando el número de términos supera el 5, el último término comienza a borrarse cada vez que agregas un nuevo término a la parte superior, por lo que siempre se muestran los 5 términos anteriores.


1.  Agregar una línea debajo del comentario // number 1 que agrega el valor actual ingresado en la entrada de la búsqueda al inicio del arreglo. Esto se puede recuperar usando searchInput.value.


2.  Agrega una línea debajo del comentario // number 2 que elimina el valor actualmente al final del arreglo.


*/


var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // Solo permitiremos que se ingrese un término si la entrada de búsqueda no está vacía.
  if (searchInput.value !== '') {
    // number 1

    // Vacíe la lista para no mostrar entradas duplicadas. La pantalla
    // se regenera cada vez que se ingresa un término de búsqueda.
    list.innerHTML = '';

    // recorrer el arreglo y mostrar todos los términos de búsqueda en la lista
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Si la longitud del arreglo es 5 o más, elimine el término de búsqueda más antiguo
    if (myHistory.length >= 5) {
      // number 2

    }

    // vacíe la entrada de búsqueda y enfóquela, listo para ingresar el siguiente término
    searchInput.value = '';
    searchInput.focus();
  }
}