function convertBinary() {
  const binaryInput = document.getElementById("binaryInput").value;
  const binaryArray = binaryInput.trim().split(" ");

  let result = "";

  for (let i = 0; i < binaryArray.length; i++) {
    const binaryChar = binaryArray[i];
    const decimalValue = parseInt(binaryChar, 2);
    const char = String.fromCharCode(decimalValue);
    result += char;
  }

  document.getElementById("result").value = result;
}

function separateBits() {
  const binaryInput = document.getElementById("binaryInput");
  let value = binaryInput.value.replace(/\s/g, ""); // Remove existing spaces
  let newValue = "";
  for (let i = 0; i < value.length; i++) {
    newValue += value[i];
    if ((i + 1) % 8 === 0 && i !== value.length - 1) {
      newValue += " ";
    }
  }
  binaryInput.value = newValue;
}

function restrictInput(event) {
  const allowedKeys = ["0", "1", "Backspace", "Delete"];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}

function copiarContenido() {
  // Selecciona el textarea
  const textarea = document.getElementById("result");

  // Selecciona el texto dentro del textarea
  textarea.select();
  
  // Copia el texto seleccionado
  document.execCommand("copy");

  // Deselecciona el texto para evitar que se resalte
  textarea.setSelectionRange(0, 0);

  // Notifica al usuario que el texto ha sido copiado
  alert("¡El contenido ha sido copiado!");
}

const btn = document.getElementById("btnBinaryToText")

btn.addEventListener("click", convertBinary)

const textArea = document.getElementById("binaryInput")

textArea.addEventListener('input', separateBits);

textArea.addEventListener('keydown', restrictInput);

const btnCopy = document.getElementById("btnBinaryToTextCopy")

btnCopy.addEventListener("click", copiarContenido)