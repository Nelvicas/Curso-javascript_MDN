/////  Sintaxis de bucle  while

/*

    initializer
    while (condition) {
    // code to run

    final-expression
    }

*/


const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats);





////////////     do ... while

/// Sintaxis


/*

initializer
do {
  // code to run

  final-expression
} while (condition)

*/


const cats2 = ["Pet", "Bigg", "Jasmi"];

let myFavoriteCats2 = "My cats are called ";

let j = 0;

do {
  if (j === cats2.length - 1) {
    myFavoriteCats2 += `and ${cats2[j]}.`;
  } else {
    myFavoriteCats2 += `${cats2[j]}, `;
  }

  j++;
} while (j < cats2.length);

console.log(myFavoriteCats2);