// Get the carousel container and the individual slides
const carousel = document.querySelector('.carouselInside');
const slides = document.querySelectorAll('.slide');

// Calculate the width of each slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Get the navigation dots
const dots = document.querySelectorAll('.dot');

// Function to move the carousel
function moveCarousel(newPosition) {
  // @ts-ignore
  carousel.style.transform = `translateX(-${newPosition}px)`;
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', e => {
    let newPosition;
    switch (index) {
      case 0: // Left dot
        newPosition = 0;
        break;
      case 1: // Center dot
        // Center the middle 4 images (assuming 7 total images and showing 4 at a time)
        newPosition = Math.floor((slides.length - 4) / 2) * slideWidth;
        break;
      case 2: // Right dot
        // Move to the last image (assuming 7 total images and showing 4 at a time)
        newPosition = (slides.length - 4) * slideWidth;
        break;
    }
    moveCarousel(newPosition);
  });
});