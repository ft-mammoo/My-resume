/**
 * Dark Mode Toggle Functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-toggle i');
  
  // Check for saved theme preference or use system preference
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the saved theme or use system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('bi-sun');
    themeIcon.classList.add('bi-moon');
  }
  
  // Toggle theme on click
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.remove('bi-sun');
      themeIcon.classList.add('bi-moon');
    } else {
      localStorage.setItem('theme', 'light');
      themeIcon.classList.remove('bi-moon');
      themeIcon.classList.add('bi-sun');
    }
  });
});