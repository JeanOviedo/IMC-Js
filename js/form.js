let boton = document.querySelector("#adicionar-paciente");
boton.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log("click boton");

  let tambla = document.querySelector("#tabla-pacientes");
  let ElForm = document.querySelector("#formulario");

  let nombre = ElForm.nombre.value;
  let peso = ElForm.peso.value;
  let altura = ElForm.altura.value;
  let gordura = ElForm.gordura.value;

  console.log(nombre);

  let ElPaciente = document.createElement("tr");
  let PesoPaciente = document.createElement("td");
  let NombrePaciente = document.createElement("td");
  let AlturaPaciente = document.createElement("td");
  let GorduraPaciente = document.createElement("td");
  let IMCPaciente = document.createElement("td");

  console.log(NombrePaciente);

  NombrePaciente.textContent = nombre;
  AlturaPaciente.textContent = altura;
  PesoPaciente.textContent = peso;
  GorduraPaciente.textContent = gordura;
  console.log(nombre);

  ElPaciente.appendChild(NombrePaciente);
  ElPaciente.appendChild(PesoPaciente);
  ElPaciente.appendChild(AlturaPaciente);
  ElPaciente.appendChild(GorduraPaciente);
  tambla.appendChild(ElPaciente);
});
