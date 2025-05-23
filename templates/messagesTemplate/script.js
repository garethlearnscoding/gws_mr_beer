const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${width * currentIndex}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

updateCarousel();
