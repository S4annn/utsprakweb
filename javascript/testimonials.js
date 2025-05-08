document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInsideMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    if (dropdownToggle && dropdownContent) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault(); 
            dropdownContent.classList.toggle('show');
            dropdownToggle.querySelector('i').classList.toggle('fa-caret-down');
            dropdownToggle.querySelector('i').classList.toggle('fa-caret-up');
        });

        document.addEventListener('click', function(event) {
            if (!dropdownContent.contains(event.target) && !dropdownToggle.contains(event.target) && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropdownToggle.querySelector('i').classList.remove('fa-caret-up');
                dropdownToggle.querySelector('i').classList.add('fa-caret-down');
            }
        });
    }
});