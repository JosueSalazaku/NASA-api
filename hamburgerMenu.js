document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navLinks = document.querySelector(".nav ul");

  hamburgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
