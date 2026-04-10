// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// COUNTDOWN TIMER
const countdown = document.getElementById("countdown");
let time = 60;

setInterval(() => {
  time--;
  countdown.textContent = "Offer ends in: " + time + "s";
}, 1000);

// BUTTON INTERACTION
document.getElementById("buy-btn").addEventListener("click", () => {
  alert("Redirecting to purchase...");
});