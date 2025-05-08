document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const content = dropdown.querySelector('.dropdown-content');

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
    }

    if (window.innerWidth > 768) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                const content = dropdown.querySelector('.dropdown-content');
                
                dropdown.removeEventListener('mouseenter');
                dropdown.removeEventListener('mouseleave');
                
                if (!toggle.hasAttribute('data-click-listener')) {
                    toggle.addEventListener('click', (e) => {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                        if (dropdown.classList.contains('active')) {
                            content.style.display = 'block';
                        } else {
                            content.style.display = 'none';
                        }
                    });
                    toggle.setAttribute('data-click-listener', 'true');
                }
            });
        } else {
            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                const content = dropdown.querySelector('.dropdown-content');
                
                toggle.removeEventListener('click');
                toggle.removeAttribute('data-click-listener');
                
                dropdown.addEventListener('mouseenter', () => {
                    content.style.display = 'block';
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    content.style.display = 'none';
                });
            });
        }
    });
});