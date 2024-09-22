// Función para abrir el modal
window.openModal = function (evento) {
  console.log("Modal abierto con:", evento); // Depuración
  modal.style.display = "block";

  // Formatear la fecha si no es un objeto Date
  const fecha = new Date(evento.fecha);

  // Actualizar contenido del modal con la información de la carrera
  document.getElementById("nombreCarrera").textContent = evento.nombre;
  document.getElementById("fechaCarrera").textContent =
    fecha.toLocaleDateString();
  document.getElementById("distanciasCarrera").textContent =
    evento.distancias.join(", ");

  // Calcular los días restantes
  const hoy = new Date();
  const diferenciaEnMs = fecha - hoy;
  const diasRestantes = Math.ceil(diferenciaEnMs / (1000 * 60 * 60 * 24));

  // Mostrar los días restantes en el modal
  document.getElementById(
    "diasFaltantes"
  ).textContent = `Días restantes: ${diasRestantes}`;

  // Verificar si videoUrl existe y no es undefined
  if (evento.videoUrl) {
    document.getElementById("raceVideo").src = evento.videoUrl;
  } else {
    // Si no hay video, puedes mostrar un mensaje o dejar el iframe vacío
    document.getElementById("raceVideo").src = "";
    console.warn("No se proporcionó una URL de video para este evento.");
  }
};

// Obtener el modal
const modal = document.getElementById("raceModal");

// Obtener el botón de cierre (la "x")
const closeModal = document.querySelector(".close"); // Asegurarse de que .close esté bien referenciado

// Función para cerrar el modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  // Limpiar el iframe al cerrar el modal
  document.getElementById("raceVideo").src = "";
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Detener el video al cerrar el modal
    document.getElementById("raceVideo").src = "";
  }
});
