/**
 * skills.js — Skill categories and items
 *
 * icon: Devicons CDN identifier (https://devicons.github.io/devicon/devicon.git)
 *       Format: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/<id>/<id>-original.svg
 *       If no Devicons icon exists, set icon to null → renders text fallback
 *
 * ⚠️  Only skills explicitly listed in Asifa_Afzal_Portfolio_Outline_Final.pdf
 *     are included here. No additions allowed without updating the source PDF.
 */

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    categoryIcon: "code", // used for the category header icon
    items: [
      { name: "Python", icon: "python", iconVariant: "original" },
      { name: "C++", icon: "cplusplus", iconVariant: "original" },
      { name: "PHP", icon: "php", iconVariant: "original" },
      { name: "JavaScript", icon: "javascript", iconVariant: "original" },
      { name: "HTML5", icon: "html5", iconVariant: "original" },
      { name: "CSS3", icon: "css3", iconVariant: "original" },
    ],
  },
  {
    id: "backend-apis",
    name: "Backend & APIs",
    categoryIcon: "server",
    items: [
      { name: "Django", icon: "django", iconVariant: "plain" },
      {
        name: "DRF",
        icon: "django",
        iconVariant: "plain",
        label: "Django REST",
      },
      { name: "FastAPI", icon: "fastapi", iconVariant: "original" },
      { name: "REST API", icon: null, label: "REST API" },
      { name: "JWT Auth", icon: null, label: "JWT" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    categoryIcon: "monitor",
    items: [
      { name: "TailwindCSS", icon: "tailwindcss", iconVariant: "original" },
      { name: "Bootstrap", icon: "bootstrap", iconVariant: "original" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    categoryIcon: "database",
    items: [
      { name: "PostgreSQL", icon: "postgresql", iconVariant: "original" },
      { name: "MySQL", icon: "mysql", iconVariant: "original" },
      { name: "SQLite", icon: "sqlite", iconVariant: "original" },
      { name: "Redis", icon: "redis", iconVariant: "original" },
    ],
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    categoryIcon: "bar-chart",
    items: [
      { name: "Pandas", icon: "pandas", iconVariant: "original" },
      { name: "NumPy", icon: "numpy", iconVariant: "original" },
      {
        name: "Matplotlib",
        icon: null,
        label: "Matplotlib",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>',
      },
      {
        name: "Seaborn",
        icon: null,
        label: "Seaborn",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 7.5 0"/><path d="M2 17c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 7.5 0"/></svg>',
      },
      { name: "Jupyter", icon: "jupyter", iconVariant: "original" },
      {
        name: "Google Colab",
        icon: null,
        label: "Colab",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm-12 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4z"/><path d="M6 12h12"/></svg>',
      },
      { name: "TensorFlow", icon: "tensorflow", iconVariant: "original" },
      { name: "PyTorch", icon: "pytorch", iconVariant: "original" },
      { name: "Scikit-Learn", icon: "scikitlearn", iconVariant: "original" },
      {
        name: "Supervised Learning",
        icon: null,
        label: "Supervised",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
      },
      {
        name: "Unsupervised Learning",
        icon: null,
        label: "Unsupervised",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="8" r="2.5"/><circle cx="17" cy="8" r="2.5"/><circle cx="12" cy="16" r="2.5"/><path d="M9.5 9h5M8.5 10.5l2.5 3.5M15.5 10.5l-2.5 3.5" stroke-dasharray="2 2"/></svg>',
      },
      {
        name: "Regression",
        icon: null,
        label: "Regression",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M4 17l16-12"/><circle cx="7" cy="16" r="1.5" fill="currentColor"/><circle cx="11" cy="11" r="1.5" fill="currentColor"/><circle cx="15.5" cy="8" r="1.5" fill="currentColor"/><circle cx="18" cy="5" r="1.5" fill="currentColor"/></svg>',
      },
      {
        name: "Classification",
        icon: null,
        label: "Classification",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21L21 3"/><circle cx="6" cy="14" r="2" fill="currentColor"/><circle cx="11" cy="18" r="2" fill="currentColor"/><rect x="13" y="6" width="3.5" height="3.5" rx="0.5" fill="currentColor"/><rect x="17" y="11" width="3.5" height="3.5" rx="0.5" fill="currentColor"/></svg>',
      },
      {
        name: "Decision Trees",
        icon: null,
        label: "Decision Trees",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M12 7.5v3.5M12 11l-6 5.5M12 11l6 5.5"/></svg>',
      },
      {
        name: "Random Forest",
        icon: null,
        label: "Random Forest",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.5 5.5h-2.5l2.5 4.5h-7l2.5-4.5H8.5L12 2z"/><path d="M12 12v6"/><path d="M5.5 8l2.5 4H6.5l2 3.5h-5l2-3.5H4L5.5 8z"/><path d="M5.5 15.5v4"/><path d="M18.5 8l2.5 4h-1.5l2 3.5h-5l2-3.5H17l1.5-4z"/><path d="M18.5 15.5v4"/></svg>',
      },
      {
        name: "Google Sheets",
        icon: null,
        label: "Sheets",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
      },
      {
        name: "Power BI",
        icon: null,
        label: "Power BI",
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="14" width="3.5" height="7" rx="1" fill="currentColor"/><rect x="10.25" y="9" width="3.5" height="12" rx="1" fill="currentColor"/><rect x="16.5" y="4" width="3.5" height="17" rx="1" fill="currentColor"/></svg>',
      },
    ],
  },
  {
    id: "tools-workflow",
    name: "Tools & Workflow",
    categoryIcon: "tool",
    items: [
      { name: "Git", icon: "git", iconVariant: "original" },
      { name: "GitHub", icon: "github", iconVariant: "original" },
      {
        name: "GitHub Actions",
        icon: "github",
        iconVariant: "original",
        label: "GH Actions",
      },
      { name: "VS Code", icon: "vscode", iconVariant: "plain" },
      { name: "PyCharm", icon: "pycharm", iconVariant: "original" },
      { name: "Kaggle", icon: "kaggle", iconVariant: "original" },
    ],
  },
];
