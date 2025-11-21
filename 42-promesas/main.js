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



  ///   Deteccion de errores con uso de catch 

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
  .catch((error) => {   /// con catch capturamos el error 
    console.error(`Could not get products: ${error}`);
  });




  ///    Terminologia de promesas 

/*
pendiente: El estado inicial. La operación aún no se ha completado (ni tuvo éxito ni fracasó).

cumplida: La operación tuvo éxito. Es entonces cuando llaman al encargado de la promesa..then()

rechazado: La operación fracasó. Es entonces cuando llaman al encargado de la promesa..catch()

*/




///   combinar  multiples promesas 



const fetchPromise5 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise6 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise7 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise5, fetchPromise6, fetchPromise7])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });