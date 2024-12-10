// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Default theme is light
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.className = savedTheme;

  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', () => {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});
