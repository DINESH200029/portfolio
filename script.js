function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(id);
  section.style.display = 'block';
  
  // Close mobile menu if open
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('is-active');
  }

  // Scroll to section with offset for header
  const headerHeight = document.querySelector('.main-header').offsetHeight;
  window.scrollTo({
    top: section.offsetTop - headerHeight,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('home');

  // Dark mode toggle
  const toggleBtn = document.getElementById('toggleMode');
  const body = document.body;

  const updateToggleLabel = () => {
    const isDark = body.classList.contains('dark');
    toggleBtn.textContent = isDark ? 'Light Mode 🌞' : 'Dark Mode 🌚';
  };

  updateToggleLabel();

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateToggleLabel();
    
    // Store preference in localStorage
    const isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
  });

  // Check for saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
    updateToggleLabel();
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-header') && navMenu.classList.contains('active')) {
      hamburger.classList.remove('is-active');
      navMenu.classList.remove('active');
    }
  });

  // Prevent scroll when menu is open
  navMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      hamburger.classList.remove('is-active');
      navMenu.classList.remove('active');
    }
  });
});
