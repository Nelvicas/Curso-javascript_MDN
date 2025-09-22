
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString);


//// Funciones con alores de retorno


function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}