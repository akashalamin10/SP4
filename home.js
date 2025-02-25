let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = slides.length - 1; 
    }
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

// Initially show the first slide
showSlide(currentSlide);
