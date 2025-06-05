const items = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.carousel-indicators');
const nextBtn = document.querySelector('.carousel-control.next');
const prevBtn = document.querySelector('.carousel-control.prev');

let currentIndex = 0;
let autoSlideInterval;

// Create indicators dynamically
items.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetAutoSlide();
  });
  indicatorsContainer.appendChild(dot);
});

const indicators = document.querySelectorAll('.carousel-indicators span');

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });

  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});


// Auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize
showSlide(currentIndex);
startAutoSlide();