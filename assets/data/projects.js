/**
 * projects.js — Project data (single source of truth for project content)
 *
 * To add a GitHub link later:
 *   1. Change githubUrl: null  →  githubUrl: "https://github.com/..."
 *   2. Save the file and push to GitHub.
 *   3. Netlify auto-deploys in ~30 seconds.
 *
 * To add a screenshot later:
 *   1. Drop the image in assets/images/projects/<filename>
 *   2. Change imageUrl: null  →  imageUrl: "assets/images/projects/<filename>"
 *   3. Push.
 */

export const projects = [
  {
    id: "secure-vault",
    title: "SecureVault — Role-Based Video Platform",
    tags: ["Python", "Django", "RBAC", "PostgreSQL"],
    description:
      "A Django-based video access and approval management platform. Features a 4-tier role hierarchy (CEO, Manager, Admin, Viewer), request-unlock workflows, and a full admin dashboard.",
    githubUrl: "https://github.com/asifaafzal39-sketch/SecureVault",
    demoUrl: null,
    imageUrl: "assets/images/projects/securevault.jpg",
    imageAlt: "Screenshot of SecureVault — Role-Based Video Platform",
  },
  {
    id: "student-performance-predictor",
    title: "Student Performance Predictor",
    tags: ["Python", "Machine Learning", "Random Forest", "Streamlit"],
    description:
      "An end-to-end ML web app using Random Forest Regressor to forecast student academic scores and discover key factors influencing academic success.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Students_Performance_predictor",
    demoUrl: null,
    imageUrl: "assets/images/projects/student-performance-predictor.jpg",
    imageAlt: "Screenshot of Student Performance Predictor",
  },
  {
    id: "website-traffic-analysis",
    title: "Website Traffic Analysis",
    tags: ["Python", "Streamlit", "Plotly", "Data Analytics"],
    description:
      "An interactive traffic intelligence dashboard visualizing session patterns, traffic acquisition channels, bounce rates, and visitor conversion rates.",
    githubUrl: "https://github.com/asifaafzal39-sketch/website_traffic_analysis",
    demoUrl: null,
    imageUrl: "assets/images/projects/website-traffic-analysis.jpg",
    imageAlt: "Screenshot of Website Traffic Analysis",
  },
  {
    id: "web-scraper-project",
    title: "Web Scraper Project",
    tags: ["Python", "BeautifulSoup", "Requests", "Automation"],
    description:
      "An automated headlines and content scraper adhering to robots.txt guidelines, custom rate limits, robust error handling, and structured export to JSON and CSV.",
    githubUrl: "https://github.com/asifaafzal39-sketch/web_scraper_project",
    demoUrl: null,
    imageUrl: "assets/images/projects/web-scraper-project.jpg",
    imageAlt: "Screenshot of Web Scraper Project",
  },
];
