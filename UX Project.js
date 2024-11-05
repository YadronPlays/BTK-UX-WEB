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
  
  /* Responsive design */
@media (max-width: 768px) {
    header {
      padding: 15px 30px;
    }
    
    .nav-links {
      display: none;
      flex-direction: column;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .hero h1 {
      font-size: 36px;
    }
  
    .hero p {
      font-size: 16px;
    }
  
    .cta-button {
      padding: 10px 20px;
    }
  }
  