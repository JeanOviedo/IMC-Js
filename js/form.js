let boton = document.querySelector("#adicionar-paciente");
boton.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log("click boton");

  let ElForm = document.querySelector("#formulario");
  let paciente = CapturaDataPaciente(ElForm);
  let pacienteTR = ConstruyeTr(paciente);
  let tambla = document.querySelector("#tabla-pacientes");
  tambla.appendChild(pacienteTR);
  ElForm.reset();
});

function CapturaDataPaciente(ElForm) {
  let donpaciente = {
    nombre: ElForm.nombre.value,
    peso: ElForm.peso.value,
    altura: ElForm.altura.value,
    gordura: ElForm.gordura.value,
    imc: CalculaIMC(ElForm.peso.value, ElForm.altura.value),
  };
  return donpaciente;
}

function ConstruyeTr(paciente) {
  let pacienteTR = document.createElement("tr");
  pacienteTR.classList.add("paciente");

  pacienteTR.appendChild(construirTd(paciente.nombre, "info-nombre"));
  pacienteTR.appendChild(construirTd(paciente.peso, "info-peso"));
  pacienteTR.appendChild(construirTd(paciente.altura, "info-altura"));
  pacienteTR.appendChild(construirTd(paciente.gordura, "info-gordura"));
  pacienteTR.appendChild(construirTd(paciente.imc, "info-imc"));

  return pacienteTR;
}

function construirTd(dato, clase) {
  let td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}
