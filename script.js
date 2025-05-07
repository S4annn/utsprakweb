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

let currentIndex = 0;
const cards = document.querySelectorAll('.service-card');
const dots = document.querySelectorAll('.dot');
const carouselWrapper = document.querySelector('.carousel-wrapper');

function updateCarousel() {
  cards.forEach(card => card.classList.remove('active'));
  
  const activeCards = Array.from(cards).slice(currentIndex, currentIndex + 3);
  activeCards.forEach(card => card.classList.add('active'));
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

updateCarousel();

function nextSlide() {
  currentIndex = (currentIndex + 1) % (cards.length - 2);
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + (cards.length - 2)) % (cards.length - 2);
  updateCarousel();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

document.querySelector('.nav-arrow.right').addEventListener('click', nextSlide);
document.querySelector('.nav-arrow.left').addEventListener('click', prevSlide);

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    const carImage = document.querySelector('.car-image');
    
    if (carImage) {
        carImage.addEventListener('mouseover', function() {
            this.style.filter = `drop-shadow(0 0 30px var(--car-white-light))`;
        });
        
        carImage.addEventListener('mouseout', function() {
            this.style.filter = `drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))`;
        });
    }
    
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            
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
    
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes floatUp {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    }`;
    document.head.appendChild(style);
    
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPos = window.scrollY;
            const parallaxFactor = 0.4;
            
            heroSection.style.backgroundPositionY = scrollPos * parallaxFactor + 'px';
            
            if (carImage) {
                carImage.style.transform = `translateY(${scrollPos * 0.1}px)`;
            }
        });
    }
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1 + 0.1}s`;
    });
    
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

document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  });
  
  // Add scroll class to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Intersection Observer for revealing elements on scroll
  document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.services-section, .popular-deals, .contact-section, .service-card, .deal-card');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      revealOnScroll.observe(element);
    });
  });
