// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle menu for smaller screens
  const nav = document.querySelector('nav');
  const toggleMenu = document.querySelector('.toggle-menu');
  
  toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  