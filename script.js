document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.car-image');
    
    function animateCarGlow() {
        car.style.transition = 'filter 3s ease-in-out';
        car.style.filter = `
            drop-shadow(0 0 25px rgba(255, 255, 255, 0.6)) /* White glow */
            brightness(1.1) /* Slight increase in brightness */
        `;

        setTimeout(() => {
            car.style.transition = 'filter 2.5s ease-in-out';
            car.style.filter = `
                drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)) /* Softer white glow */
                brightness(0.95) /* Slight decrease in brightness */
            `;
        }, 3000);
    }
    
    animateCarGlow();
    
    setInterval(animateCarGlow, 8000);

    // Interaction with mouse hover
    car.addEventListener('mouseenter', () => {
        car.style.transition = 'filter 0.5s ease';
        car.style.filter = `
            drop-shadow(0 0 35px rgba(255, 255, 255, 0.9)) /* Intense white glow on hover */
            brightness(1.15) /* Brighten up when hovered */
        `;
    });
    
    car.addEventListener('mouseleave', () => {
        car.style.transition = 'filter 1s ease';
        car.style.filter = `
            drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) /* Softer glow after hover */
            brightness(1) /* Normal brightness */
        `;
    });
});

// JavaScript for handling the carousel interaction
let currentIndex = 0;
const cards = document.querySelectorAll('.service-card');
const dots = document.querySelectorAll('.dot');
const carouselWrapper = document.querySelector('.carousel-wrapper');

function updateCarousel() {
  // Reset all cards to inactive (opacity 0.3)
  cards.forEach(card => card.classList.remove('active'));
  
  // Set the active cards
  const activeCards = Array.from(cards).slice(currentIndex, currentIndex + 3);
  activeCards.forEach(card => card.classList.add('active'));
  
  // Update dot navigation
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Initialize carousel by displaying the first set of 3 cards
updateCarousel();

// Function to move to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % (cards.length - 2);
  updateCarousel();
}

// Function to move to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + (cards.length - 2)) % (cards.length - 2);
  updateCarousel();
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Example navigation arrows (optional)
document.querySelector('.nav-arrow.right').addEventListener('click', nextSlide);
document.querySelector('.nav-arrow.left').addEventListener('click', prevSlide);

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // We removed the Intersection Observer code that was hiding elements
    
    // Car image hover effect with headlights
    const carImage = document.querySelector('.car-image');
    
    if (carImage) {
        carImage.addEventListener('mouseover', function() {
            this.style.filter = `drop-shadow(0 0 30px var(--car-white-light))`;
        });
        
        carImage.addEventListener('mouseout', function() {
            this.style.filter = `drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))`;
        });
    }
    
    // Favorite button effect
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            
            // Add a little heart animation
            if (this.classList.contains('active')) {
                const heart = document.createElement('span');
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.fontSize = '16px';
                heart.style.top = '0';
                heart.style.left = '50%';
                heart.style.transform = 'translateX(-50%)';
                heart.style.pointerEvents = 'none';
                heart.style.animation = 'floatUp 1s forwards';
                this.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 1000);
            }
        });
    });
    
    // Create keyframes for heart animation
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes floatUp {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    }`;
    document.head.appendChild(style);
    
    // Add parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPos = window.scrollY;
            const parallaxFactor = 0.4;
            
            // Apply parallax to the hero section
            heroSection.style.backgroundPositionY = scrollPos * parallaxFactor + 'px';
            
            // If there's a car image in the hero, make it move at a different rate
            if (carImage) {
                carImage.style.transform = `translateY(${scrollPos * 0.1}px)`;
            }
        });
    }
    
    // Add staggered animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1 + 0.1}s`;
    });
    
    // Add staggered animation to deal cards
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1 + 0.1}s`;
    });
});

 // Dropdown functionality
 document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});