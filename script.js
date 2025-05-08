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
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.classList.toggle('active');
        const heartIcon = this.querySelector('i');
        
        if (this.classList.contains('active')) {
          heartIcon.className = 'fas fa-heart';
        
          const heart = document.createElement('span');
          heart.innerHTML = '❤️';
          heart.className = 'floating-heart';
          this.appendChild(heart);
          
          setTimeout(() => heart.remove(), 1000);
        } else {
          heartIcon.className = 'far fa-heart';
        }
      });
    });


    const style = document.createElement('style');
    style.textContent = `
      .floating-heart {
        position: absolute;
        font-size: 16px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
        animation: floatUp 1s forwards;
      }

      @keyframes floatUp {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
      }

      .favorite-button.active {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
      }

      .favorite-button.active i {
        color: #ff4757;
      }
      
      /* Fix for z-index issue */
      .favorite-button {
        z-index: 10;
        position: absolute;
        top: 20px;
        right: 20px;
      }
      
      /* Ensure the deal card image stays below the button */
      .deal-card img {
        position: relative;
        z-index: 1;
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

      dropdown.addEventListener('mouseenter', () => {
        content.style.display = 'block';
      });

      dropdown.addEventListener('mouseleave', () => {
        content.style.display = 'none';
      });

      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
        content.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
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

    const slides = document.querySelectorAll('.services-slide');
    const dots = document.querySelectorAll('.indicators .dot');
    const nextButton = document.querySelector('.nav-arrow.right');
    const prevButton = document.querySelector('.nav-arrow.left');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    

    function showSlide(slideIndex) {
      slides[currentSlide].classList.add('fade-out');
      
      setTimeout(() => {
        // Hide all slides
        slides.forEach(slide => {
          slide.classList.remove('active');
          slide.classList.remove('fade-out');
        });

        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        currentSlide = slideIndex;
      }, 300); 
    }
    
    
    function nextSlide() {
      let newIndex = currentSlide + 1;
      if (newIndex >= totalSlides) {
        newIndex = 0; 
      }
      showSlide(newIndex);
    }
    
    function prevSlide() {
      let newIndex = currentSlide - 1;
      if (newIndex < 0) {
        newIndex = totalSlides - 1;
      }
      showSlide(newIndex);
    }
    
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    
    // Add click events to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (currentSlide !== index) {
          showSlide(index);
        }
      });
    });
    
  
    if (slides.length > 0) {
      slides[0].classList.add('active');
      if (dots.length > 0) dots[0].classList.add('active');
    }
    
    setInterval(() => {
      nextSlide();
    }, 10000);
  });