// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Skills / Tools toggle =====
function iconFallback(el, text) {
  const card = el.parentElement;
  el.remove();
  card.classList.add("skill-card--fallback");
  card.textContent = text;
}

const skillsToggleBtns = document.querySelectorAll(".skills-toggle__btn");
skillsToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    skillsToggleBtns.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    document.querySelectorAll(".skills-grid").forEach((grid) => {
      grid.hidden = grid.id !== btn.dataset.target;
    });
  });
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Contact form =====
// NOTE: this only shows a confirmation message locally — it does not actually
// send an email yet. To make it work for real, connect it to a service like
// Formspree (https://formspree.io) or your own backend endpoint later.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks! This form isn't connected to email yet — see script.js for how to wire it up.";
  contactForm.reset();
});