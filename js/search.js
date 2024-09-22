// Lógica del botón "Buscar"

document.getElementById("search-button").addEventListener("click", () => {
  const locationInput = document
    .getElementById("location-input")
    .value.toLowerCase();

  // Filtrar eventos deportivos según el lugar o estado
  const eventosFiltrados = eventosDeportivos.filter(
    (evento) =>
      evento.lugar.toLowerCase() === locationInput ||
      evento.estado.toLowerCase() === locationInput
  );

  // Guardar la ubicación seleccionada en localStorage
  localStorage.setItem("selectedLocation", locationInput);

  // Mostrar las tarjetas con los eventos filtrados
  renderCards(eventosFiltrados);
});
