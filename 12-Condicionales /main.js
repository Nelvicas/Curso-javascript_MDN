///   Condicionales 

// if ...  else 
// sintaxis basica 
/*
if (condition) {
  // code to run if condition is true 
 } else {
  // run some other code instead 
}

*/

let shoppingDone = true;
let childAllowance;

if (shoppingDone === true) {
  console.log(childAllowance = 10);
} else {
  console.log(childAllowance = 5);
}





////    ejemplo 

let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}



let shoppingDone2 = false;
let childAllowance2;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone2) {
  console.log(childAllowance2 = 10);
} else {
  console.log(childAllowance2 = 5);
}



///// if else


//   if (choice === "sunny") {
//     if (temperature < 86) {
//       para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//     } else if (temperature >= 86) {
//       para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//     }
// }





///////   Operadores logicos   ( AND, OR, NOT )


//  AND   && 

if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}


//  OR   ||


if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}


/////   NOT  ! 


if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}