// Función para convertir "dd/mm/yyyy" a objeto Date
function parseDate(fechaString) {
  const [day, month, year] = fechaString.split("/");
  return new Date(`${year}-${month}-${day}`);
}

// Función para renderizar tarjetas
function renderCards(eventos) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  // No se encontraron carreras
  if (eventos.length === 0) {
    container.innerHTML = `
      <div class="no-events">
      <h3>No se encontraron eventos en esta ubicación.</h3>
        <img src="/images/no-races.jpg" alt="No se encontraron eventos" class="no-events-img" />
        
      </div>
    `;
    return;
  }

  eventos.forEach((evento, index) => {
    const card = `
      <div class="card">
        <img src="${evento.imagen}" alt="${evento.nombre}" />
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

// Fetch inicial para obtener todos los eventos (opcional para caché)
let allEvents = [];
fetch("/data/races.json")
  .then((response) => response.json())
  .then((data) => {
    allEvents = data.map((evento) => ({
      ...evento,
      fecha: parseDate(evento.fecha),
    }));
  })
  .catch((error) =>
    console.error("Error al cargar los datos iniciales:", error)
  );
