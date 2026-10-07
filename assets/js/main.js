/**
 * main.js — Entry point. Imports all JS modules and initialises them on DOMContentLoaded.
 *
 * Dynamic rendering approach:
 *   - Skills, Projects, and Experience sections are rendered from data files.
 *   - This means adding/updating content only requires editing the data file.
 *   - The HTML file contains the section shells; JS fills them in.
 */

import { initNav } from "./nav.js";
import { initScroll } from "./scroll.js";
import { skillCategories } from "../data/skills.js";
import { projects } from "../data/projects.js";
import { experiences } from "../data/experience.js";

// Devicons CDN base URL
const DEVICONS_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// ── Helper: create a DOM element with attributes and content ────────────────
function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") element.className = v;
    else if (k === "html") element.innerHTML = v;
    else element.setAttribute(k, v);
  });
  children.forEach((child) => {
    if (typeof child === "string")
      element.appendChild(document.createTextNode(child));
    else if (child) element.appendChild(child);
  });
  return element;
}

// ── SVG icon helper (inline SVGs for category headers) ─────────────────────
function getCategoryIcon(iconName) {
  const icons = {
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>`,
    monitor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    "bar-chart": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    tool: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  };
  return icons[iconName] || icons.tool;
}

// ── Render Skills ───────────────────────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  skillCategories.forEach((category, catIndex) => {
    const card = el("div", {
      class: "skill-category reveal",
      "data-delay": String(catIndex * 80),
    });

    // Category header
    const header = el("div", { class: "skill-category-header" });
    const iconBox = el("div", {
      class: "skill-category-icon",
      html: getCategoryIcon(category.categoryIcon),
    });
    const nameEl = el("span", { class: "skill-category-name" }, category.name);
    header.append(iconBox, nameEl);

    // Skill items
    const itemsGrid = el("div", { class: "skill-items" });
    category.items.forEach((skill) => {
      const item = el("div", { class: "skill-item" });
      const displayName = skill.label || skill.name;

      if (skill.icon) {
        const img = el("img", {
          src: `${DEVICONS_BASE}/${skill.icon}/${skill.icon}-${skill.iconVariant}.svg`,
          alt: `${skill.name} logo`,
          width: "36",
          height: "36",
          loading: "lazy",
          onerror: `this.style.display='none'; this.nextElementSibling && (this.nextElementSibling.style.display='flex')`,
        });
        // Fallback in case icon fails to load
        const fallback = el(
          "span",
          { class: "skill-icon-fallback", style: "display:none" },
          displayName.slice(0, 3),
        );
        item.append(img, fallback);
      } else if (skill.svg) {
        const customIcon = el("div", {
          class: "skill-custom-icon",
          html: skill.svg,
        });
        item.append(customIcon);
      } else {
        const fallback = el(
          "span",
          { class: "skill-icon-fallback" },
          displayName.slice(0, 3),
        );
        item.append(fallback);
      }

      const label = el("span", { class: "skill-item-name" }, displayName);
      item.append(label);
      itemsGrid.append(item);
    });

    card.append(header, itemsGrid);
    container.append(card);
  });
}

// ── Render Projects ─────────────────────────────────────────────────────────
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const imageIcon = `<svg class="placeholder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>`;
  const externalIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  projects.forEach((project, i) => {
    const card = el("article", {
      class: "project-card reveal",
      "data-delay": String(i * 100),
      "aria-label": project.title,
    });

    // ── Image area
    const imageArea = el("div", { class: "project-image" });
    if (project.imageUrl) {
      const img = el("img", {
        src: project.imageUrl,
        alt: project.imageAlt,
        loading: "lazy",
      });
      imageArea.append(img);
    } else {
      const placeholder = el("div", {
        class: "project-image-placeholder",
        "aria-hidden": "true",
      });
      placeholder.innerHTML = imageIcon + "<span>Screenshot coming soon</span>";
      imageArea.append(placeholder);
    }

    // ── Card body
    const body = el("div", { class: "project-body" });
    const title = el("h3", { class: "project-title" }, project.title);

    const tagGroup = el("div", { class: "tag-group" });
    project.tags.forEach((tag) => {
      tagGroup.append(el("span", { class: "tag" }, tag));
    });

    const desc = el("p", { class: "project-description" }, project.description);

    // ── Buttons
    const links = el("div", { class: "project-links" });

    const ghBtn = el("a", {
      class:
        "btn btn-outline btn-sm" + (project.githubUrl ? "" : " btn-disabled"),
      ...(project.githubUrl
        ? {
            href: project.githubUrl,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : { "aria-disabled": "true", role: "button", tabindex: "-1" }),
      id: `${project.id}-github`,
    });
    ghBtn.innerHTML =
      githubIcon + (project.githubUrl ? " GitHub" : " GitHub (add later)");

    const demoBtn = el("a", {
      class:
        "btn btn-primary btn-sm" + (project.demoUrl ? "" : " btn-disabled"),
      ...(project.demoUrl
        ? {
            href: project.demoUrl,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : { "aria-disabled": "true", role: "button", tabindex: "-1" }),
      id: `${project.id}-demo`,
    });
    demoBtn.innerHTML =
      (project.demoUrl ? "Live Demo " : "Live Demo (add later) ") +
      externalIcon;

    links.append(ghBtn, demoBtn);
    body.append(title, tagGroup, desc, links);
    card.append(imageArea, body);
    container.append(card);
  });
}

// ── Render Experience ───────────────────────────────────────────────────────
function renderExperience() {
  const container = document.getElementById("timeline");
  if (!container) return;

  experiences.forEach((exp, i) => {
    const item = el("div", {
      class: "timeline-item reveal",
      "data-delay": String(i * 100),
    });
    const dot = el("div", { class: "timeline-dot", "aria-hidden": "true" });

    const card = el("div", { class: "timeline-card" });

    const header = el("div", { class: "timeline-header" });
    const role = el("h3", { class: "timeline-role" }, exp.role);
    header.append(role);

    if (exp.period) {
      const periodEl = el(
        "span",
        {
          class:
            "timeline-period" + (exp.isPeriodPending ? " badge-pending" : ""),
        },
        exp.isPeriodPending ? `⏳ ${exp.periodNote}` : exp.period,
      );
      header.append(periodEl);
    }

    const company = el("div", { class: "timeline-company" });
    company.innerHTML = `${exp.company} <span class="timeline-company-type">· ${exp.type}</span>`;

    const descEl = el("div", { class: "timeline-description" });
    if (exp.isDescriptionPending || !exp.description) {
      const badge = el(
        "span",
        { class: "badge-pending" },
        "⏳ Description pending — to be added by Asifa",
      );
      descEl.append(badge);
    } else {
      descEl.textContent = exp.description;
    }

    card.append(header, company, descEl);
    item.append(dot, card);
    container.append(item);
  });
}

// ── Contact Form Handler ─────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusEl = document.getElementById("contact-form-status");
  const submitBtn = document.getElementById("contact-submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName =
      document.getElementById("contact-first-name")?.value.trim() || "";
    const lastName =
      document.getElementById("contact-last-name")?.value.trim() || "";
    const email =
      document.getElementById("contact-email-input")?.value.trim() || "";
    const message =
      document.getElementById("contact-message-input")?.value.trim() || "";

    if (!firstName || !email || !message) {
      if (statusEl) {
        statusEl.className = "contact-form-status is-error";
        statusEl.textContent = "Please fill in all required fields.";
      }
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "SENDING...";
    }

    const subject = encodeURIComponent(
      `Project Inquiry from ${firstName} ${lastName}`.trim(),
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    const mailtoUrl = `mailto:asifaafzal39@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;

      if (statusEl) {
        statusEl.className = "contact-form-status is-success";
        statusEl.textContent = `Thank you, ${firstName}! Opening your email client to send the message. I will get back to you promptly.`;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "SEND MESSAGE";
      }

      form.reset();
    }, 500);
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
function initApp() {
  renderSkills();
  renderProjects();
  renderExperience();
  initContactForm();
  initNav();
  initScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
