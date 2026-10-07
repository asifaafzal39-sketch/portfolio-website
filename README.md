# Asifa Afzal — Portfolio Website

Personal portfolio website for **Asifa Afzal**, Software Engineer & Backend Developer based in Faisalabad, Pakistan.

Live URL: _(add Netlify URL after deployment)_

---

## Tech Stack

| Layer               | Technology                                                         |
| ------------------- | ------------------------------------------------------------------ |
| **Structure**       | HTML5 (semantic markup)                                            |
| **Styling**         | CSS3 (custom properties, grid, flexbox, responsive)                |
| **Interactions**    | Vanilla JavaScript (ES6 modules)                                   |
| **Package manager** | npm (dev tooling only — zero runtime dependencies)                 |
| **Hosting**         | [Netlify](https://netlify.com) — continuous deployment from GitHub |

> **No frameworks.** No React, Vue, Next.js, or Tailwind. The entire site is plain HTML + CSS + JS.

---

## npm Dev Dependencies

| Package       | Version | Why it's here                                                                           |
| ------------- | ------- | --------------------------------------------------------------------------------------- |
| `http-server` | ^14.1.1 | Zero-config local dev server — mirrors a static file server like Netlify in development |
| `prettier`    | ^3.3.3  | Consistent code formatting across HTML, CSS, JS, and JSON                               |

---

## Project Structure

```
portfolio_website/
│
├── index.html              # Single page — all sections
├── package.json            # Dev tooling only
├── netlify.toml            # Netlify build + header config
├── README.md               # This file
│
├── assets/
│   ├── css/
│   │   ├── main.css        # Imports all CSS partials
│   │   ├── _variables.css  # Design tokens (colors, fonts, spacing)
│   │   ├── _reset.css      # CSS reset / normalize
│   │   ├── _layout.css     # Global layout, containers, breakpoints
│   │   ├── _navbar.css     # Navigation bar
│   │   ├── _hero.css       # Hero section
│   │   ├── _about.css      # About Me section
│   │   ├── _skills.css     # Skills grid
│   │   ├── _projects.css   # Project cards
│   │   ├── _experience.css # Experience timeline
│   │   ├── _education.css  # Education section
│   │   ├── _contact.css    # Contact section
│   │   ├── _footer.css     # Footer
│   │   └── _utilities.css  # Buttons, tags, back-to-top, shared
│   │
│   ├── js/
│   │   ├── main.js         # Entry point — imports all modules
│   │   ├── nav.js          # Hamburger menu + active-link scroll spy
│   │   └── scroll.js       # Smooth scroll + back-to-top button
│   │
│   ├── data/
│   │   ├── projects.js     # Project content (title, tags, desc, links)
│   │   ├── skills.js       # Skill categories + icon identifiers
│   │   └── experience.js   # Experience timeline data
│   │
│   ├── images/
│   │   ├── profile.jpg     # PENDING — profile photo
│   │   ├── favicon.png     # Site favicon
│   │   └── og-image.jpg    # PENDING — social share image
│   │
│   └── cv/
│       └── asifa-afzal-cv.pdf  # PENDING — CV/Resume PDF
```

---

## Local Development

```bash
# Install dev tools
npm install

# Start local dev server at http://localhost:3000
npm run dev

# Format code
npm run format
```

---

## Deployment

This site deploys automatically to Netlify on every push to `main`.

**Netlify settings:**

- Build command: _(none)_
- Publish directory: `.` (repo root)
- Branch: `main`

Every pull request gets a **deploy preview URL** automatically.

---

## Adding Content Later (Maintenance)

### Add a project GitHub link

1. Open `assets/data/projects.js`
2. Find the project object and change `githubUrl: null` to the real URL
3. Push → Netlify auto-deploys in ~30 seconds

### Add a project screenshot

1. Drop the image in `assets/images/projects/`
2. Update `imageUrl` in the project object in `projects.js`
3. Push

### Add profile photo

1. Replace `assets/images/profile.jpg`
2. Push

### Add CV

1. Drop PDF in `assets/cv/asifa-afzal-cv.pdf`
2. Remove the `disabled` attribute from the Download CV button in `index.html`
3. Push

---

## License

MIT © 2026 Asifa Afzal
