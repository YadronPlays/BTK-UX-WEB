# BTK Gym — Website

A multi-page static website for a fictional gym, built as a UX/UI-focused coursework project — designing a clean, conversion-oriented layout from scratch using HTML and CSS.

**Live site:** https://yadronplays.github.io/BTK-UX-WEB/

---

## Overview

This project was built for a university UX module, with the brief focused on user-centred design rather than backend functionality. The goal was to design and build a small business website — in this case a gym — that clearly communicates value to a visitor and guides them toward a single action (joining), using layout, hierarchy, and navigation rather than any dynamic features.

## Pages

- **Home** — hero section with a clear value proposition, key selling points (no contract, 24/7 access, expert trainers), and calls to action
- **Trainers** — introduces the gym's staff
- **About** — gym background and information
- **Classes** — overview of available classes/exercise offerings
- **Contact** — location (with embedded map), phone number, and opening hours
- **Join** — sign-up / membership call to action

## Design Focus

- Clear visual hierarchy — hero section leads with the strongest selling points before any secondary content
- Consistent navigation across all pages
- Feature cards (Modern Equipment, Expert Trainers, 24/7 Access) to break down "why choose us" into scannable chunks
- Embedded Google Map on the contact page for real-world usability
- Fully static — no backend, no JavaScript logic — deliberately scoped to focus on layout, structure, and UI/UX decisions

## Tech Stack

- **HTML** — page structure and content
- **CSS** — styling, layout, responsive design
- **GitHub Pages** — hosting/deployment

## Project Structure

```
BTK-UX-WEB/
├── index.html
├── about.html
├── trainer.html
├── exercise.html
├── contact.html
├── join.html
├── images/
└── styles/ (or equivalent CSS files)
```

## Running It Locally

No build step required — it's a static site.

```bash
git clone https://github.com/YadronPlays/BTK-UX-WEB.git
cd BTK-UX-WEB
open index.html   # or just open the file in your browser
```

## What I'd Improve Next

- Make the layout fully responsive across all pages (mobile-first breakpoints)
- Add basic accessibility improvements (alt text audit, ARIA labels, contrast checks)
- Extract shared elements (nav, footer) into reusable partials if this were rebuilt with a templating approach

---

*Built as part of a UX/UI coursework module at Goldsmiths, University of London.*
