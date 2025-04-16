function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(id);
  section.style.display = 'block';
  
  // Close mobile menu if open
  const navMenu = document.querySelector('.nav-menu');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  if (navMenu.classList.contains('active')) {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
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

  // Set dark mode as default
  body.classList.add('dark');
  localStorage.setItem('darkMode', 'true');
  
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

  // Check for saved preference (though we've already set dark as default)
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
    updateToggleLabel();
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-header') && navMenu.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu when selecting a menu item
  navMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
