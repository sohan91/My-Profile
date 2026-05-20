# Sohan Prasad — Developer Portfolio

Premium personal portfolio for **Adisharlapalli Sohan Prasad** — Java Backend Developer, Microservices & Cloud-Native Engineer.

Built with **HTML**, **CSS**, and **JavaScript** (no framework required).

## Features

- Dark glassmorphism UI with gradient accents
- Animated hero with role rotator & particle background
- Skills, projects, timeline, education, certifications
- Contact form (mailto or Formspree)
- Custom cursor, scroll progress, loading screen
- Fully responsive
- SEO meta tags

## Project Structure

```
portfolio/
├── index.html          # Main page
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── data.js         # Portfolio content
│   ├── main.js         # Interactions & rendering
│   └── config.js       # Optional Formspree ID
├── assets/
│   └── resume.pdf      # Replace with your resume
├── vercel.json         # Vercel deployment config
├── env.example         # Environment variable reference
└── README.md
```

## Quick Start

### Option 1: Open directly

Double-click `index.html` or open it in your browser.

### Option 2: Local server (recommended)

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code Live Server extension
```

Visit `http://localhost:8080`

## Customization

1. **Profile photo** — Save your image as `assets/photo.jpg` (or set path in `js/config.js`):
   ```javascript
   window.PROFILE_PHOTO = "assets/photo.jpg";
   ```
2. **Resume** — Replace `assets/resume.pdf` with your actual PDF.
3. **GitHub / LinkedIn** — Update URLs in `index.html` and `js/data.js`.
4. **Projects** — Edit `PORTFOLIO.projects` in `js/data.js` with real repo links.
5. **Contact form** — Uncomment and set `FORMSPREE_ID` in `js/config.js`:

```html
<script src="js/config.js"></script>
```

## Deployment

### Vercel (recommended)

1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo.
3. Framework preset: **Other** (static site).
4. Root directory: `.` — Deploy.

Or use CLI:

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Push to GitHub.
2. Settings → Pages → Source: `main` branch, folder `/ (root)`.
3. Site URL: `https://<username>.github.io/<repo>/`

### Netlify

Drag and drop the project folder at [netlify.com/drop](https://app.netlify.com/drop).

## Tech Stack

| Layer      | Technology        |
|-----------|-------------------|
| Markup    | HTML5             |
| Styling   | CSS3              |
| Scripting | Vanilla JavaScript|

No build step required.

## Contact

- **Email:** sohanprasad2003@gmail.com
- **Phone:** +91-7569842133

---

© Adisharlapalli Sohan Prasad
