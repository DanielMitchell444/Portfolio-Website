// JavaScript to toggle the menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu when the menu button is clicked
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show"); // Toggle the 'show' class
});

// Close the menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show"); // Remove the 'show' class to close the menu
  });
});