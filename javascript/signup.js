document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

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

    // Password toggle functionality
    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Form validation
    const form = document.querySelector('.signup-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        // Show success message
        alert('Account created successfully! Welcome to S4annn Motors!');
        // In a real application, you would submit the form to a server here
    });
});
