function convertText() {
  const textInput = document.getElementById("textInput").value;
  let binaryResult = "";

  for (let i = 0; i < textInput.length; i++) {
    const charCode = textInput.charCodeAt(i);
    const binaryString = charCode.toString(2).padStart(8, "0");
    binaryResult += binaryString + " ";
  }
  document.getElementById("binaryResult").value = binaryResult.trim();
}

function copiarContenido() {
  // Selecciona el textarea
  const textarea = document.getElementById("binaryResult");

  // Selecciona el texto dentro del textarea
  textarea.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Deselecciona el texto para evitar que se resalte
  textarea.setSelectionRange(0, 0);

  // Notifica al usuario que el texto ha sido copiado
  alert("¡El contenido ha sido copiado!");
}

const btnT = document.getElementById("btnTextToBinary");

btnT.addEventListener("click", convertText);

const btnC = document.getElementById("btnTextToBinaryCopy");

btnC.addEventListener("click", copiarContenido)
