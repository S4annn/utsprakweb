   const menuToggle = document.getElementById('menu-toggle');
   const navMenu = document.getElementById('nav-menu');
   
   menuToggle.addEventListener('click', () => {
       navMenu.classList.toggle('active');
   });
   
   const dropdownToggle = document.getElementById('dropdown-toggle');
   const dropdown = document.querySelector('.dropdown');
   
   dropdownToggle.addEventListener('click', (e) => {
       if (window.innerWidth <= 768) {
           e.preventDefault();
           dropdown.classList.toggle('active');
       }
   });
   
   window.addEventListener('scroll', () => {
       const header = document.querySelector('header');
       if (window.scrollY > 50) {
           header.classList.add('scrolled');
       } else {
           header.classList.remove('scrolled');
       }
   });

   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
           }
       });
   }, { threshold: 0.1 });
   
   document.querySelectorAll('.content-section').forEach(section => {
       observer.observe(section);
   });