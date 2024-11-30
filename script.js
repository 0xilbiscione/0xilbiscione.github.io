document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", currentTheme);
    themeToggle.checked = currentTheme === "dark";
  
    // Toggle theme on switch
    themeToggle.addEventListener("change", () => {
      const newTheme = themeToggle.checked ? "dark" : "light";
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
  
