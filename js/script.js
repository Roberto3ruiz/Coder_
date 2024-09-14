// Función para renderizar tarjetas
function renderCards(eventos) {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

  if (eventos.length === 0) {
    container.innerHTML = "<p>No se encontraron eventos en esta ubicación.</p>";
    return;
  }

  eventos.forEach((evento) => {
    const card = `
      <div class="card">
        <img src="/images/image-placeholder.jpg" alt="${evento.nombre}" />
        <h3>${evento.nombre}</h3>
        <p>${evento.lugar}, ${evento.estado}</p>
        <p>Distancias: ${evento.distancias.join(", ")}</p>
        <p>Fecha: ${evento.fecha.toLocaleDateString()}</p>
        <button>Quiero Información</button>
      </div>
    `;
    container.innerHTML += card; // Agrega la tarjeta al contenedor
  });
}
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
