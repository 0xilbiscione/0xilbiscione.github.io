// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.className = savedTheme;

  // Update switch position
  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', () => {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});
