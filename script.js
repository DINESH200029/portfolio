function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    window.scrollTo({ top: document.getElementById(id).offsetTop - 60, behavior: 'smooth' });
  }

  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  
    const toggleBtn = document.getElementById('toggleMode');
  
    const updateToggleLabel = () => {
      const isDark = document.body.classList.contains('dark');
      toggleBtn.textContent = isDark ? 'Light Mode 🌞' : 'Dark Mode 🌚';
    };
  
    updateToggleLabel();
  
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      updateToggleLabel();
    });
  });
  