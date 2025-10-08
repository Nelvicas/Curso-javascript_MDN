//  Realizar solicitudes de red 

// API fetch

/*

utiliza archivos JSON 
JSON, que es un buen formato para transferir datos estructurados,


*/

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});


function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;
}
