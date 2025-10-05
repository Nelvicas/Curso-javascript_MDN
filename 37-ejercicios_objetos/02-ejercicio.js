/*

Para completar la tarea:

Cree un literal de objeto denominado , que contenga las siguientes propiedades: band
name: Una cadena que representa el nombre de la banda.
nationality: Una cuerda que representa el país del que proviene la banda.
genre: Qué tipo de música toca la banda.
members: Un número que representa el número de miembros que tiene la banda.
formed: Un número que representa el año en que se formó la banda.
split: Un número que representa el año en que la banda se separó, o si todavía están juntos.false
albums: Matriz que representa los álbumes lanzados por la banda. Cada elemento de matriz debe ser un objeto que contenga los siguientes miembros:
   name: Una cadena que representa el nombre del álbum.
   released: Un número que representa el año en que se lanzó el álbum.

Nota: Incluya al menos dos álbumes en la matriz.albums

Escribe una cadena a la variable , que contendrá una pequeña biografía que detalla su nombre, nacionalidad, años activos y estilo, y el título y la fecha de lanzamiento de su primer álbum.bandInfo

*/


let bandInfo;

// Don't edit the code above here!

// Add your code here

const band = {
    name: "luky",
    nationality: "UK",
    genre: "Rock",
    members: 5,
    formed: 2000,
    split: 2025,
    albums:  [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
   ]

}


bandInfo = `The ${band.nationality} ${band.genre} band ${band.name} were active between ${band.formed} and ${band.split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`;



// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);