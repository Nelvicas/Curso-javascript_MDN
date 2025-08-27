// Metodos 

// longitud de cadena 

let browserType = "mozilla";
console.log(browserType.length);


// extraer un caracter

browserType[0];
console.log(browserType[0]);


// extraer el ultimo caracter

console.log(browserType[browserType.length - 1]);



// buscar subcadena

console.log(browserType.indexOf("zilla"));


//  extraer de un rango a otro 

console.log(browserType.slice(0, 3));


// convertir todo a mayusculas o minusculas 

let radData = "Mi NoMbRe Es MuD";
console.log(radData.toLowerCase());      // minusculas
console.log(radData.toUpperCase());      // mayusculas



// actualiza partes de una cadena

console.log(browserType.replace("moz", "van"));



