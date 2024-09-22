let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const texts = ["Hero 1", "Hero2", "Hero3"];

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length; // Cicla entre las imágenes
  slides[currentSlide].classList.add("active");

  // Cambia el texto del carrusel
  document.getElementById("carousel-text").innerText = texts[currentSlide];
}

// Cambia de imagen cada 3 segundos
setInterval(showNextSlide, 3000);
