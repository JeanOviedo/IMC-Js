let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdIMC = paciente.querySelector(".info-imc");

  pesoEsValido = ValidarPeso(peso);
  alturaEsValida = ValidarAltura(altura);

  if (!pesoEsValido) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (!alturaEsValida) {
    console.log("Altura incorrecta");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesoEsValido && alturaEsValida) {
    tdIMC.textContent = CalculaIMC(peso, altura);
  }
}

function CalculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function ValidarPeso(peso) {
  if (peso >= 1 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function ValidarAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}
