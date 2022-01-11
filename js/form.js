let boton = document.querySelector("#adicionar-paciente");
boton.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log("click boton");

  let ElForm = document.querySelector("#formulario");
  let paciente = CapturaDataPaciente(ElForm);
  let pacienteTR = ConstruyeTr(paciente);

  let errores = ValidaPaciente(paciente);
  if (errores.length > 0) {
    MostrarErrores(errores);
    return;
  }

  let tambla = document.querySelector("#tabla-pacientes");
  tambla.appendChild(pacienteTR);
  ElForm.reset();
  let LimpiaErrores = document.querySelector("#mensaje-error");
  LimpiaErrores.innerHTML = "";
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

function ValidaPaciente(paciente) {
  let errores = [];
  if (paciente.nombre.length == 0) {
    errores.push(" El nombre esta vacío ");
  }
  if (paciente.peso.length == 0) {
    errores.push(" Peso esta vacío ");
  }

  if (paciente.gordura.length == 0) {
    errores.push(" Gordura no debe estar vacío ");
  }

  if (!ValidarPeso(paciente.peso)) {
    errores.push(" El peso es incorrecto ");
  }

  if (!ValidarAltura(paciente.altura)) {
    errores.push(" Altura es incorrecta");
  }
  return errores;
}

function MostrarErrores(errores) {
  let ul = document.querySelector("#mensaje-error");
  ul.innerHTML = "";
  errores.forEach(function (error) {
    let li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}
