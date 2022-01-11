let Paciente = document.querySelectorAll(".paciente");

Paciente.forEach((Paciente) => {
  Paciente.addEventListener("dblclick", function () {
    this.remove();
  });
});
