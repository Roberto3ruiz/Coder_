// Lógica del botón "Buscar"
document.getElementById("search-button").addEventListener("click", () => {
  const locationInput = document
    .getElementById("location-input")
    .value.toLowerCase();

  // Cargar los eventos desde races.json
  fetch("/data/races.json")
    .then((response) => response.json())
    .then((data) => {
      // Convertir las fechas de los eventos a objetos Date
      data.forEach((evento) => {
        evento.fecha = parseDate(evento.fecha); // Convertir la fecha a objeto Date
      });

      // Filtrar eventos deportivos según el lugar o estado
      const eventosFiltrados = data.filter(
        (evento) =>
          evento.lugar.toLowerCase() === locationInput ||
          evento.estado.toLowerCase() === locationInput
      );

      // Guardar la ubicación seleccionada en localStorage
      localStorage.setItem("selectedLocation", locationInput);

      // Mostrar las tarjetas con los eventos filtrados
      renderCards(eventosFiltrados);
    })
    .catch((error) => console.error("Error al cargar los datos:", error));
});
