// Función para renderizar tarjetas
function renderCards(eventos) {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

  if (eventos.length === 0) {
    container.innerHTML = `
      <div class="no-events">
        <img src="/images/no-races.jpg" alt="No se encontraron eventos" class="no-events-img" />
        <p>No se encontraron eventos en esta ubicación.</p>
      </div>
    `;
    return;
  }

  eventos.forEach((evento, index) => {
    const card = `
      <div class="card">
        <img src="/images/image-placeholder.jpg" alt="${evento.nombre}" />
        <h3>${evento.nombre}</h3>
        <p>${evento.lugar}, ${evento.estado}</p>
        <p>Distancias: ${evento.distancias.join(", ")}</p>
        <p>Fecha: ${new Date(evento.fecha).toLocaleDateString()}</p>
        <button class="info-btn" data-id="${index}">Quiero Información</button>
        <button>Inscribirme</button>
      </div>
    `;
    container.innerHTML += card; // Agrega la tarjeta al contenedor
  });

  // Después de renderizar las tarjetas, añadir eventos a los botones
  document.querySelectorAll(".info-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const eventId = this.getAttribute("data-id");
      const evento = eventos[eventId];
      openModal(evento); // Llama a la función openModal con el evento correcto
    });
  });
}
