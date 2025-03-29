// Dark Mode Toggle
const darkModeBtn = document.querySelector(".dark-mode");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode-active");

  // Change icon
  if (body.classList.contains("dark-mode-active")) {
    darkModeBtn.textContent = "☀️";
  } else {
    darkModeBtn.textContent = "🌙";
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
