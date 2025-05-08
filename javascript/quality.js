document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const revealElements = document.querySelectorAll('.quality-item, .step, .cert-logo');
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
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

    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transitionDelay = `${index * 0.1}s`;
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealOnScroll.observe(element);
    });

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
