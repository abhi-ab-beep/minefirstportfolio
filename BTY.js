// Smooth scroll active nav highlight & reveal animations

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Intersection Observer for fade-in on scroll
  const observerOptions = {
    threshold: 0.2
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Change active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if(window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});
