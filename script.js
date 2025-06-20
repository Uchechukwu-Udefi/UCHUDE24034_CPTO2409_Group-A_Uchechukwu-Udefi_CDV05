// Hamburger menu functionality
  // Toggle navigation menu on hamburger click
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('show');
  });

  // Optional: Close menu when a link is clicked (for better UX)
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('navMenu').classList.remove('show');
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu.contains(event.target) && !document.getElementById('hamburger').contains(event.target)) {
      navMenu.classList.remove('show');
    }
  });
  

// Form functionality

  document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    if (name) {
      document.getElementById("userName").textContent = name;
      document.getElementById("userName2").textContent = name;
      document.getElementById("greetingContainer").style.display = "block";
      nameInput.value = ""; // Clear the input
    }

    // Hide the form after submission
    document.getElementById("nameForm").style.display = "none";

  });


// Carousel functionality
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

// Project card toggle functionality
document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.project-card');
    const cardNumber = card.getAttribute('data-card');
    const details = document.getElementById(`details-${cardNumber}`);
    const icon = header.querySelector('.toggle-icon');

    const isActive = details.classList.contains('active');

    // Close all first
    document.querySelectorAll('.card-details').forEach(detail => detail.classList.remove('active'));
    document.querySelectorAll('.toggle-icon').forEach(ic => ic.textContent = '+');

    // Then toggle the clicked one
    if (!isActive) {
      details.classList.add('active');
      icon.textContent = '-';
    }
  });
});

// Optional: Close all when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.project-card')) {
    document.querySelectorAll('.card-details').forEach(detail => detail.classList.remove('active'));
    document.querySelectorAll('.toggle-icon').forEach(icon => icon.textContent = '+');
  }
});
