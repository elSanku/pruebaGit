let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    const offset = -index * 100; // Cambia el 100% al tamaño del slide
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000); // Cambia cada 5 segundos
