let operandoA = "";
let operandoB = "";
let operation = "";

function agregarNumero(num) {
  if (operation === "") {
    operandoA += num;
    document.calculadora.display.value = operandoA;
  } else {
    operandoB += num;
    document.calculadora.display.value = operandoB;
  }
}

function operacion(op) {
  if (operation === "") {
    operation = op;
  } else {
    calcular();
    operation = op;
  }
}

function calcular() {
  let resultado = 0;
  switch (operation) {
    case "+":
      resultado = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "-":
      resultado = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "*":
      resultado = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      if (operandoB !== "0") {
        resultado = parseFloat(operandoA) / parseFloat(operandoB);
      } else {
        alert("No se puede dividir por cero.");
        resultado = "";
      }
      break;
  }
  operandoA = resultado;
  operandoB = "";
  operation = "";
  document.calculadora.display.value = resultado;
}

function limpiar() {
  operandoA = "";
  operandoB = "";
  operation = "";
  document.calculadora.display.value = "";
}
