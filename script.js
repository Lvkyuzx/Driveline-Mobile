const menuButton = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}

const quoteForm = document.querySelector(".quote-form");
const formNote = document.querySelector(".form-note");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formNote) {
    formNote.textContent = "Opening the Driveline Mobile Google Business profile to finish the request.";
  }
  window.open("https://share.google/SQnkKYOPZ4p6LmSwM", "_blank", "noopener,noreferrer");
});
