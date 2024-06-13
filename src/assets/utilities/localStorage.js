// Get stored theme from localStorage
const storedTheme = localStorage.getItem('theme');

// Check stored theme
if (storedTheme) {
  // Apply stored theme
  document.documentElement.setAttribute('data-theme', storedTheme);
}

// toggle themes
function toggleTheme() {
  // Get theme
  const currentTheme = document.documentElement.getAttribute('data-theme');
  // Toggle theme
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  // Apply theme 
  document.documentElement.setAttribute('data-theme', newTheme);
  // Store theme 
  localStorage.setItem('theme', newTheme);
}

export default toggleTheme;