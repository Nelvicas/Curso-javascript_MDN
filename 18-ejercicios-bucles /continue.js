

/*

textContent → maneja solo texto plano.

innerText → parecido, pero respeta estilos CSS (puede no mostrar texto oculto).

innerHTML → interpreta etiquetas HTML dentro (puede insertar HTML dinámico).

*/





///  Continue 


const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});