// Función que se llama cuando se selecciona un lugar de la lista
function selectLocation(location) {
  const input = document.getElementById("location-input");
  input.value = location; // Asigna el lugar seleccionado al input
  hideDropdown(); // Oculta la lista después de seleccionar
}

// Mostrar el dropdown de lugares
function showDropdown() {
  document.getElementById("location-list").style.display = "block";
}

// Ocultar el dropdown de lugares
function hideDropdown() {
  setTimeout(() => {
    document.getElementById("location-list").style.display = "none";
  }, 200); // Permitir hacer clic antes de ocultar
}
