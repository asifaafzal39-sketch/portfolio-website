/**
 * nav.js — Hamburger menu toggle + active link scroll spy
 */

export function initNav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("nav-hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (!navbar || !hamburger || !mobileMenu) return;

  // ── Navbar shadow on scroll ─────────────────────────────────────────────
  const scrollObserver = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", scrollObserver, { passive: true });
  scrollObserver(); // run once on load

  // ── Hamburger toggle ────────────────────────────────────────────────────
  const toggleMenu = (open) => {
    const isOpen =
      open !== undefined
        ? open
        : hamburger.getAttribute("aria-expanded") !== "true";
    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.classList.toggle("open", isOpen);

    // Trap focus inside mobile menu when open
    if (isOpen) {
      mobileMenu.querySelector("a")?.focus();
    }
  };

  hamburger.addEventListener("click", () => toggleMenu());

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      hamburger.getAttribute("aria-expanded") === "true"
    ) {
      toggleMenu(false);
      hamburger.focus();
    }
  });

  // Close when a mobile link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (
      hamburger.getAttribute("aria-expanded") === "true" &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });

  // ── Active link scroll spy (Intersection Observer) ──────────────────────
  const setActive = (id) => {
    [...navLinks, ...mobileLinks].forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${id}`);
    });
  };

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue("--navbar-height").trim()} 0px -55% 0px`,
      },
    );
    sections.forEach((section) => observer.observe(section));
  }
}
