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
    imageUrl: null,
    imageAlt: "Screenshot of SecureVault — Role-Based Video Platform",
  },
  {
    id: "job-writer",
    title: "Job Writer Project",
    tags: ["Python", "Streamlit", "NLP", "AI Engine"],
    description:
      "An AI-powered job description generator and ATS optimizer that creates targeted job postings, evaluates keyword match scores, and detects bias.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Job_Writer_Project",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of Job Writer Project",
  },
  {
    id: "resume-analyzer-ai",
    title: "Resume Analyzer AI",
    tags: ["Python", "AI", "NLP", "Machine Learning"],
    description:
      "An intelligent resume screening tool designed to parse resumes, assess candidate qualifications against job roles, and provide ATS match scores.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Resume_Analyzer_AI",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of Resume Analyzer AI",
  },
  {
    id: "ai-freelancer-assistant",
    title: "AI Freelancer Assistant",
    tags: ["Python", "Streamlit", "SQLite", "AI Service"],
    description:
      "An all-in-one assistant for freelancers to automate proposal writing, client cover letters, and gig descriptions with built-in authentication and PDF exports.",
    githubUrl: "https://github.com/asifaafzal39-sketch/AI_Freelancer_Assistant",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of AI Freelancer Assistant",
  },
  {
    id: "student-performance-predictor",
    title: "Student Performance Predictor",
    tags: ["Python", "Machine Learning", "Random Forest", "Streamlit"],
    description:
      "An end-to-end ML web app using Random Forest Regressor to forecast student academic scores and discover key factors influencing academic success.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Students_Performance_predictor",
    demoUrl: null,
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
    imageAlt: "Screenshot of Web Scraper Project",
  },
  {
    id: "bi-growth-suite",
    title: "BI Growth Suite",
    tags: ["Business Intelligence", "Analytics", "Python", "Dashboard"],
    description:
      "A comprehensive business intelligence tool for tracking organizational KPIs, evaluating growth metrics, and delivering automated visual reports.",
    githubUrl: "https://github.com/asifaafzal39-sketch/BI_Growth_Suit",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of BI Growth Suite",
  },
  {
    id: "business-intelligence-project",
    title: "Business Intelligence Project",
    tags: ["Python", "Jupyter", "BI Reporting", "Pandas"],
    description:
      "An in-depth corporate BI analysis and reporting project featuring executive performance decks, revenue driver evaluations, and operational metrics.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Business_Intelligence_Project",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of Business Intelligence Project",
  },
  {
    id: "advanced-portfolio-insight",
    title: "Advanced Portfolio Insight",
    tags: ["Python", "Jupyter", "Data Science", "Visualization"],
    description:
      "A data-driven analytics pipeline tracking portfolio metrics, developer tech stacks, and modern technology distribution trends with rich charts.",
    githubUrl: "https://github.com/asifaafzal39-sketch/Advanced_Portfolio_Insight",
    demoUrl: null,
    imageUrl: null,
    imageAlt: "Screenshot of Advanced Portfolio Insight",
  },
];
