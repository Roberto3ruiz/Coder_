const eventosDeportivos = [
  {
    id: 1,
    nombre: "Ultra Trail Oso Negro",
    tipo: "Carrera",
    distancias: ["25km, 42km, 75km, 100km"],
    lugar: "Santiago",
    estado: "Nuevo León",
    fecha: new Date(2024, 1, 13),
  },
  {
    id: 2,
    nombre: "Trail Urbano Xalapa",
    tipo: "Carrera",
    distancias: ["5km"],
    lugar: "Xallitic",
    estado: "Veracruz",
    fecha: new Date(2024, 1, 13),
  },
  {
    id: 3,
    nombre: "Trail Villa del Carbón",
    tipo: "Carrera",
    distancias: ["14km, 26km"],
    lugar: "Villa del Carbón",
    estado: "Edo. De México",
    fecha: new Date(2024, 1, 14),
  },
  {
    id: 4,
    nombre: "Trail Pahuatlán",
    tipo: "Carrera",
    distancias: ["11km, 5km, 21km"],
    lugar: " Pahuatlán",
    estado: "Puebla",
    fecha: new Date(2024, 1, 20),
  },
  {
    id: 5,
    nombre: "Ultra Huachi",
    tipo: "Carrera",
    distancias: ["15km, 30km, 60km"],
    lugar: "Huauchinango",
    estado: "Puebla",
    fecha: new Date(2024, 1, 26),
  },
  {
    id: 6,
    nombre: "IZTA 4,000 Solo Para Salvajes",
    tipo: "Carrera",
    distancias: ["25km"],
    lugar: "San Rafael",
    estado: "Estado de México",
    fecha: new Date(2024, 1, 28),
  },
  {
    id: 7,
    nombre: "Mexicali Desert Trail",
    tipo: "Carrera",
    distancias: ["13km, 30km"],
    lugar: "Mexicali",
    estado: "Baja California",
    fecha: new Date(2024, 1, 28),
  },
  {
    id: 8,
    nombre: "Tenacatitatrail",
    tipo: "Carrera",
    distancias: ["10km, 21km"],
    lugar: "Tenacatita",
    estado: "Jalisco",
    fecha: new Date(2024, 2, 4),
  },
  {
    id: 9,
    nombre: "Trail Run Morelia",
    tipo: "Carrera",
    distancias: ["5km, 10km, 21km"],
    lugar: "Morelia",
    estado: "Michoacán",
    fecha: new Date(2024, 2, 11),
  },
  {
    id: 10,
    nombre: "Desafio de las nubes, GOLDEN TRAIL SERIES MÉXICO",
    tipo: "Carrera",
    distancias: ["13km, 22km, 37km, 48km"],
    lugar: "Xicotepec",
    estado: "Puebla",
    fecha: new Date(2024, 2, 17),
  },
  {
    id: 11,
    nombre: "Xtrail San Joaquín",
    tipo: "Carrera",
    distancias: ["8km, 13km, 19km, 25km"],
    lugar: "San Joaquín",
    estado: "Querétaro",
    fecha: new Date(2024, 2, 24),
  },
  {
    id: 12,
    nombre: "Sky Malinche FINAL TRIPLE CORONA",
    tipo: "Carrera",
    distancias: ["10km, 13km"],
    lugar: "Malinche",
    estado: "Tlaxcala",
    fecha: new Date(2024, 2, 25),
  },
  {
    id: 13,
    nombre: "Niebla Trail",
    tipo: "Carrera",
    distancias: ["7km, 13km, 23km"],
    lugar: "Huachinango",
    estado: "Puebla",
    fecha: new Date(2024, 3, 1),
  },
  {
    id: 14,
    nombre: "Ultra Primavera",
    tipo: "Carrera",
    distancias: ["6km, 17km, 30km, 50km"],
    lugar: "Bosque de la primavera",
    estado: "Jalisco",
    fecha: new Date(2024, 3, 2),
  },
  {
    id: 15,
    nombre: "Ultra Maraton Caballo Blanco",
    tipo: "Carrera",
    distancias: ["21km, 42km, 80km"],
    lugar: "Urique",
    estado: "Chihuahua",
    fecha: new Date(2024, 3, 3),
  },
  {
    id: 16,
    nombre: "Villa del Carbón trail Series Pueblos Mágicos",
    tipo: "Carrera",
    distancias: ["6km, 12km, 21km"],
    lugar: "Villa del Carbón",
    estado: "Estado de México",
    fecha: new Date(2024, 3, 10),
  },
  {
    id: 17,
    nombre: "Spartan Trail Puebla",
    tipo: "Carrera",
    distancias: ["5km, 10km"],
    lugar: "Puebla",
    estado: "Puebla",
    fecha: new Date(2024, 3, 16),
  },
  {
    id: 18,
    nombre: "UTB Baja Trail",
    tipo: "Carrera",
    distancias: ["30km, 50km"],
    lugar: "Tijuana",
    estado: "Baja California",
    fecha: new Date(2024, 3, 17),
  },
  {
    id: 19,
    nombre: "UMAM",
    tipo: "Carrera",
    distancias: ["105km, 75km, 12km, 55km"],
    lugar: "Pico de Orizaba",
    estado: "Veracruz",
    fecha: new Date(2024, 3, 22),
  },
  {
    id: 20,
    nombre: "Trail Marathon Chignahuapan",
    tipo: "Carrera",
    distancias: ["21km, 15km, 42km"],
    lugar: "Chignahuapan",
    estado: "Puebla",
    fecha: new Date(2024, 3, 29),
  },
  {
    id: 21,
    nombre: "Trail Marathon Zacatlán",
    tipo: "Carrera",
    distancias: ["9km, 15km, 28km, 43km"],
    lugar: "Zacatlan",
    estado: "Puebla",
    fecha: new Date(2024, 4, 13),
  },
  {
    id: 22,
    nombre: "Ultra Otomí",
    tipo: "Carrera",
    distancias: ["9km, 17km, 32km, 55km"],
    lugar: "méxico",
    estado: "Estado de México",
    fecha: new Date(2024, 4, 13),
  },
  {
    id: 23,
    nombre: "Cerro rojo Ultra trail",
    tipo: "Carrera",
    distancias: ["15km, 30km, 50km"],
    lugar: "Tlatlauquitepec",
    estado: "Puebla",
    fecha: new Date(2024, 4, 26),
  },
  {
    id: 24,
    nombre: "Spartan Trail San Luis",
    tipo: "Carrera",
    distancias: ["5km, 10km"],
    lugar: "San Luis Potosí",
    estado: "San Luis Potosí",
    fecha: new Date(2024, 5, 4),
  },
  {
    id: 25,
    nombre: "Aztek Race México",
    tipo: "Carrera",
    distancias: ["5km,15km, 30km, 65km, 120km"],
    lugar: "Tepatlaxco",
    estado: "Veracruz",
    fecha: new Date(2024, 5, 11),
  },
  {
    id: 26,
    nombre: "Travesia de la Sierras",
    tipo: "Carrera",
    distancias: ["50km, 100km, 160km"],
    lugar: "Villa del Carbón",
    estado: "Estado de México",
    fecha: new Date(2024, 5, 18),
  },
  {
    id: 27,
    nombre: "México Sky Challenge Orizaba",
    tipo: "Carrera",
    distancias: ["6km, 14km, 24km, 35km"],
    lugar: "Orizaba",
    estado: "Veracruz",
    fecha: new Date(2024, 5, 24),
  },
  {
    id: 28,
    nombre: "De Corpus Temascalcingo",
    tipo: "Carrera",
    distancias: ["14km, 6km, 21km"],
    lugar: "temascalcingo",
    estado: "Querétaro",
    fecha: new Date(2024, 5, 26),
  },
  {
    id: 29,
    nombre: "Trail de la mixteca Oaxaqueña GOLDEN TRAIL SERIES MEXICO",
    tipo: "Carrera",
    distancias: ["12km, 30km"],
    lugar: "San Matero Tlapiltepec",
    estado: "Oaxaca",
    fecha: new Date(2024, 6, 10),
  },
  {
    id: 30,
    nombre: "Ultratrail del Tenate",
    tipo: "Carrera",
    distancias: ["7km, 18km, 60km, 35km"],
    lugar: "Coatepec",
    estado: "Veracruz",
    fecha: new Date(2024, 6, 16),
  },
  {
    id: 31,
    nombre: "Bernal Viñedos",
    tipo: "Carrera",
    distancias: ["5km, 10km, 15km, 21km"],
    lugar: "Peña de Bernal",
    estado: "Querétaro",
    fecha: new Date(2024, 6, 22),
  },
  {
    id: 32,
    nombre: "Amanalco Trail",
    tipo: "Carrera",
    distancias: ["10km, 20km, 35km"],
    lugar: "Amanalco",
    estado: "Estado de México",
    fecha: new Date(2024, 6, 27),
  },
  {
    id: 33,
    nombre: "El chico trail fest",
    tipo: "Carrera",
    distancias: ["5km, 10km, 16km, 25km"],
    lugar: "Mineral del Chico",
    estado: "Hidalgo",
    fecha: new Date(2024, 7, 6),
  },
  {
    id: 34,
    nombre: "Utra Tequila",
    tipo: "Carrera",
    distancias: ["15km, 8km, 41km, 60km"],
    lugar: "Tequila",
    estado: "Jalisco",
    fecha: new Date(2024, 7, 6),
  },
  {
    id: 35,
    nombre: "Utra Cohahuila",
    tipo: "Carrera",
    distancias: ["12km, 30km, 83km, 50km, 100km, 163km"],
    lugar: "Arteaga",
    estado: "Cohahuila",
    fecha: new Date(2024, 7, 12),
  },
  {
    id: 36,
    nombre: "Cadereyta",
    tipo: "Carrera",
    distancias: ["8km, 11km, 15km, 22km"],
    lugar: "Cadereyta",
    estado: "Querétaro",
    fecha: new Date(2024, 8, 10),
  },
  {
    id: 37,
    nombre: "Bosque de niebla",
    tipo: "Carrera",
    distancias: ["8km, 18km, 30km"],
    lugar: "Amealco",
    estado: "Querétaro",
    fecha: new Date(2024, 8, 18),
  },
  {
    id: 38,
    nombre: "Ultra trail Ajusco",
    tipo: "Carrera",
    distancias: ["10km, 21km, 35km"],
    lugar: "Ajusco",
    estado: "CDMX",
    fecha: new Date(2024, 8, 30),
  },
  {
    id: 39,
    nombre: "Trans navajas",
    tipo: "Carrera",
    distancias: ["12km, 20km, 40km, 80km"],
    lugar: "Sierra de las Navajas",
    estado: "Hidalgo",
    fecha: new Date(2024, 9, 6),
  },
  {
    id: 40,
    nombre: "Tune Up Trail Ajusco",
    tipo: "Carrera",
    distancias: ["21km, 10km, 5km"],
    lugar: "Ajusco",
    estado: "CDMX",
    fecha: new Date(2024, 9, 7),
  },
  {
    id: 41,
    nombre: "Ultra trail Tapalpa",
    tipo: "Carrera",
    distancias: ["10km, 6km, 15km, 30km, 50km"],
    lugar: "Tapalpa",
    estado: "Jalisco",
    fecha: new Date(2024, 9, 20),
  },
  {
    id: 42,
    nombre: "Ixtapa FINAL GOLDEN TRAIL SERIES MEXICO",
    tipo: "Carrera",
    distancias: ["5km, 12km, 17km, 25km"],
    lugar: "Ixtapa Zihuatanejo",
    estado: "Guerrero",
    fecha: new Date(2024, 9, 28),
  },
  {
    id: 43,
    nombre: "Reto Cerro Grande",
    tipo: "Carrera",
    distancias: ["6km, 10km, 16km, 23km"],
    lugar: "Tequisquiapán",
    estado: "Querétaro",
    fecha: new Date(2024, 10, 20),
  },
  {
    id: 44,
    nombre: "Trail Nocturno Ajusco",
    tipo: "Carrera",
    distancias: ["10km, 21km"],
    lugar: "Ajusco",
    estado: "CDMX",
    fecha: new Date(2024, 10, 26),
  },
  {
    id: 45,
    nombre: "Las Ánimas",
    tipo: "Carrera",
    distancias: ["10km, 20km"],
    lugar: "El Zembo",
    estado: "Hidalgo",
    fecha: new Date(2024, 10, 26),
  },
  {
    id: 46,
    nombre: "Tune Up Trail La marquesa",
    tipo: "Carrera",
    distancias: ["21km, 10km, 5km"],
    lugar: "la marquesa",
    estado: "Estado de México",
    fecha: new Date(2024, 11, 10),
  },
  {
    id: 47,
    nombre: "Tehuacán Infinity Loop",
    tipo: "Carrera",
    distancias: ["2km"],
    lugar: "Puebla",
    estado: "Puebla",
    fecha: new Date(2024, 12, 1),
  },
  {
    id: 48,
    nombre: "Spartan Trail Campeche",
    tipo: "Carrera",
    distancias: ["5km, 10km"],
    lugar: "Campeche",
    estado: "Campeche",
    fecha: new Date(2024, 12, 10),
  },
];

const ubicacionIngresada = prompt(
  "Ingresa tu ubicación (lugar o estado de México):"
);

const eventosFiltrados = eventosDeportivos.filter(
  (evento) =>
    evento.lugar.toLowerCase() === ubicacionIngresada.toLowerCase() ||
    evento.estado.toLowerCase() === ubicacionIngresada.toLowerCase()
);

if (eventosFiltrados.length === 0) {
  alert("No se encontraron eventos en la ubicación ingresada.");
} else {
  let index = 0;

  function mostrarSiguienteEvento() {
    if (index < eventosFiltrados.length) {
      const evento = eventosFiltrados[index];
      alert(
        `Evento: ${evento.nombre}\nDistancias: ${evento.distancias.join(
          ", "
        )}\nFecha: ${evento.fecha.toLocaleDateString()}`
      );
      index++;
      mostrarSiguienteEvento(); // Llama a sí mismo para mostrar el siguiente evento
    }
  }

  mostrarSiguienteEvento(); // Comienza el procesoooooo
}

const distanciaIngresada = prompt("Ingresa la distancia que buscas:");

const eventosEncontrados = eventosDeportivos.filter((evento) =>
  evento.distancias.some((distancia) => distancia.includes(distanciaIngresada))
);

if (eventosEncontrados.length > 0) {
  eventosEncontrados.forEach((evento) => {
    alert(
      `Evento: ${evento.nombre}\nDistancias: ${evento.distancias.join(
        ", "
      )}\nLugar: ${evento.lugar}\nEstado: ${
        evento.estado
      }\nFecha: ${evento.fecha.toLocaleDateString()}`
    );
  });
} else {
  alert("No se encontró ningún evento con esa distancia.");
}
