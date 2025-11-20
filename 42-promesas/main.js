//  base de la programacion asincrona las promesas



/*

La programación asincrónica es una técnica que permite al programa iniciar una tarea potencialmente de larga duración y seguir respondiendo a otros eventos mientras se ejecuta esa tarea, en lugar de tener que esperar hasta que esa tarea haya finalizado. Una vez finalizada esa tarea, se presenta el resultado del programa.

*/


const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");






//  Encadenamiento de promesas

const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise2.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});




///  Arrojando un error


const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise3
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);  //  error
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });



  ///   Deteccion de errores

const fetchPromise4 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise4
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
