document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const achievementSection = document.querySelector('.achievement-section');
    const ctaSection = document.querySelector('.cta-section');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });
    
    timelineItems.forEach(item => {
        revealOnScroll.observe(item);
    });
    
    revealOnScroll.observe(achievementSection);
    revealOnScroll.observe(ctaSection);
    
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    
    const animateCounter = (element, target) => {
        const number = parseInt(target.replace(/,/g, '').replace(/\+/g, ''));
        const duration = 2000;
        const step = number / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < number) {
                element.textContent = Math.floor(current).toLocaleString() + (target.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.textContent;
                entry.target.textContent = '0';
                setTimeout(() => {
                    animateCounter(entry.target, target);
                }, 300);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    achievementNumbers.forEach(number => {
        counterObserver.observe(number);
    });
});
