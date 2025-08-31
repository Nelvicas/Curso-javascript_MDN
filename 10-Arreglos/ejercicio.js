/*
Volvamos al ejemplo que describimos anteriormente — imprima los nombres de los productos y los precios en una factura, luego, sume los precios e imprímelos en la parte inferior. En el ejemplo editable a continuación, hay comentarios que contienen números — cada uno de estos marca un lugar donde debe agregar algo al código. Ellos son los siguientes:

1.  Debajo de // number 1 hay un número de cadena, cada una de las cuales contiene un nombre de producto y un precio separados por dos puntos. Nos gustaría que conviertas esto en un arreglo y lo almacenamos en un arreglo llamda products.

2.  En la misma línea que el comentario // number 2 es el comienzo de un ciclo for. En esta línea, actualmente tenemos i <= 0, que es una prueba condicional que hace que el bucle for se detenga inmediatamente, porque dice "detener cuando i es menor o igual 0", y i comienza en 0. Nos gustaría que reemplazaras esto con una prueba condicional que detenga el ciclo cuando i no sea inferior a la longitud del arreglo products .

3.  Justo debajo del comentario // number 3 queremos que escriba una línea de código que divide el elemento actual del arreglo (nombre:precio) en dos elementos separados, uno que contiene solo el nombre y otros que contienen solo el precio. Si no está seguro de cómo hacerlo, consulte el artículo Métodos de cadenas útiles para obtener ayuda o, mejor aún, consulte la sección Conversión entre cadenas y matrices de este artículo.

4.  Como parte de la línea de código anterior, también querras convertir el precio de una cadena a un número. Si no pudes recordar como hacerlo, consulta el primer artículo de cadenas.

5.  Hay una variable llamada total que se crea y se le da un valor de 0 en la parte superior del código. Dentro del ciclo (debajo de // number 4) queremos que agregues una línea que añade el precio actual del artículo a ese total en cada iteración del ciclo, de modo que al final del código el total correcto se imprima en la factura. Es posible que necesites un operador de asignación para hacer esto.


6.  Queremos que cambies la línea justo de bajo // number 5 para que la variable itemText se iguale a "nombre de elemnto actual — $precio de elemento actual", por ejemplo "Zapatos — $23.99" en cada caso, por lo que la información correcta del artículo está impreso en la factura. Esto es simplemente una concatenación de cadenas, lo que debería ser familiar para ti.


*/


var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);