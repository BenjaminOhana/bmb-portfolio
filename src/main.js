import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Fade In Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Header Scroll Effect
  const header = document.getElementById('header');
  const logoImg = document.querySelector('.logo img');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      header.style.padding = '0.5rem 0';
      logoImg.style.height = '80px'; // Shrink logo on scroll
      logoImg.style.top = '5px';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
      header.style.padding = '1rem 0';
      logoImg.style.height = '120px'; // Restore large size
      logoImg.style.top = '10px';
    }
  });
});
