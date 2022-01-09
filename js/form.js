let boton = document.querySelector("#adicionar-paciente");
boton.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log("click boton");

  let tambla = document.querySelector("#tabla-pacientes");
  let ElForm = document.querySelector("#formulario");
  let paciente = CapturaDataPaciente(ElForm);

  console.log(nombre);

  let ElPaciente = document.createElement("tr");
  let PesoPaciente = document.createElement("td");
  let NombrePaciente = document.createElement("td");
  let AlturaPaciente = document.createElement("td");
  let GorduraPaciente = document.createElement("td");
  let IMCPaciente = document.createElement("td");

  console.log(NombrePaciente);

  NombrePaciente.textContent = paciente.nombre;
  AlturaPaciente.textContent = paciente.altura;
  PesoPaciente.textContent = paciente.peso;
  GorduraPaciente.textContent = paciente.gordura;
  IMCPaciente.textContent = paciente.imc;
  console.log(paciente.nombre);

  ElPaciente.appendChild(NombrePaciente);
  ElPaciente.appendChild(PesoPaciente);
  ElPaciente.appendChild(AlturaPaciente);
  ElPaciente.appendChild(GorduraPaciente);
  ElPaciente.appendChild(IMCPaciente);
  tambla.appendChild(ElPaciente);

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
});
