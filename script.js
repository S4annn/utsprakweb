document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.car-image');
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    const serviceCards = document.querySelectorAll('.service-card');
    const dealCards = document.querySelectorAll('.deal-card');
    const dropdowns = document.querySelectorAll('.dropdown');
    const revealElements = document.querySelectorAll('.services-section, .popular-deals, .contact-section, .service-card, .deal-card');
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    function animateCarGlow() {
      if (!car) return;
      car.style.transition = 'filter 3s ease-in-out';
      car.style.filter = `
        drop-shadow(0 0 25px rgba(255, 255, 255, 0.6))
        brightness(1.1)
      `;
  
      setTimeout(() => {
        car.style.transition = 'filter 2.5s ease-in-out';
        car.style.filter = `
          drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))
          brightness(0.95)
        `;
      }, 3000);
    }
  
    animateCarGlow();
    setInterval(animateCarGlow, 8000);
  
    if (car) {
      car.addEventListener('mouseenter', () => {
        car.style.transition = 'filter 0.5s ease';
        car.style.filter = `
          drop-shadow(0 0 35px rgba(255, 255, 255, 0.9))
          brightness(1.15)
        `;
      });
  
      car.addEventListener('mouseleave', () => {
        car.style.transition = 'filter 1s ease';
        car.style.filter = `
          drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))
          brightness(1)
        `;
      });
    }
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
  
      if (heroSection) {
        const scrollPos = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrollPos * 0.4}px`;
        if (car) car.style.transform = `translateY(${scrollPos * 0.1}px)`;
      }
    });
  
    favoriteButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
  
        if (this.classList.contains('active')) {
          const heart = document.createElement('span');
          heart.innerHTML = '❤️';
          Object.assign(heart.style, {
            position: 'absolute',
            fontSize: '16px',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            animation: 'floatUp 1s forwards'
          });
          this.appendChild(heart);
          setTimeout(() => heart.remove(), 1000);
        }
      });
    });
  
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatUp {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  
    serviceCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1 + 0.1}s`;
    });
  
    dealCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1 + 0.1}s`;
    });
  
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const content = dropdown.querySelector('.dropdown-content');
  
      // Hover (desktop)
      dropdown.addEventListener('mouseenter', () => {
        content.style.display = 'block';
      });
      dropdown.addEventListener('mouseleave', () => {
        content.style.display = 'none';
      });
  
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
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
  
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });
  
  document.querySelector('.nav-arrow.right')?.addEventListener('click', nextSlide);
  document.querySelector('.nav-arrow.left')?.addEventListener('click', prevSlide);
  
  function nextSlide() {
    console.log("Next slide triggered");
  }
  function prevSlide() {
    console.log("Previous slide triggered");
  }
  