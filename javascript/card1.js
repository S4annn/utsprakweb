window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    }
});

const contentSections = document.querySelectorAll('.content-section');

function checkVisibility() {
    contentSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

checkVisibility();

window.addEventListener('scroll', checkVisibility);
