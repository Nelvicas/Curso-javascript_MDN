/*

Bucles 2
En la siguiente tarea, queremos que escribas un programa simple que, dado un nombre, busque una matriz de objetos que contengan nombres y números de teléfono y, si encuentra el nombre, genere el nombre y el número de teléfono en un párrafo.

Para empezar, se le dan tres variables:

name: Contiene un nombre para buscar.
para: Contiene una referencia a un párrafo, que se utilizará para informar de los resultados.
phonebook: Contiene las entradas de la agenda telefónica que se van a buscar.

1.  Escriba un bucle que itera a través de la matriz () y busque el archivo . Debe usar un tipo de bucle que no haya usado en la tarea anterior.phonebookname

2.  Si se encuentra el, escríbalo y el asociado en el del párrafo provisto (), en la forma "<nombre> el número es <número>". Después de eso, salga del bucle antes de que haya seguido su curso.namenumbertextContentpara

3 .Si ninguno de los objetos contiene el , escriba "Nombre no encontrado en la guía telefónica" en el párrafo proporcionado.nametextContent

*/


const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here


for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}.`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "Name not found in the phonebook";
  }
}