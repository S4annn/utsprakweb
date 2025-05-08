document.addEventListener('DOMContentLoaded', () => {
    const awardCards = document.querySelectorAll('.award-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
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
    
    awardCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        revealOnScroll.observe(card);
    });
    
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        revealOnScroll.observe(item);
    });
    
    const trophy = document.querySelector('.trophy-icon');
    if (trophy) {
        const glowAnimation = () => {
            trophy.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
            setTimeout(() => {
                trophy.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.3)';
            }, 2000);
        };
        
        glowAnimation();
        setInterval(glowAnimation, 4000);
    }

    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        revealOnScroll.observe(logo);
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'translateY(-8px)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateY(0)';
        });
    });
});
