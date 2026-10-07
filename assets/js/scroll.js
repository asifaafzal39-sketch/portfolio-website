/**
 * scroll.js — Back-to-top button + scroll-reveal animation
 */

export function initScroll() {
  // ── Back-to-top button ──────────────────────────────────────────────────
  const btn = document.getElementById("back-to-top");

  if (btn) {
    const toggleVisibility = () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Scroll-reveal (Intersection Observer) ───────────────────────────────
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger child reveals within a parent container
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, Number(delay));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }
}
