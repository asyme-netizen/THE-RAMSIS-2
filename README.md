# THE RAMSIS — Professional News Website

A pixel-perfect recreation of The Chronicle design, renamed **The Ramsis**.
Built with clean, organized HTML/CSS/JS. No frameworks required. Ready for any hosting.

---

## 📁 Project Structure

```
the-ramsis/
│
├── index.html                  ← Homepage (main entry point)
│
├── css/
│   ├── variables.css           ← CSS custom properties, reset, fonts
│   ├── header.css              ← Top bar, navigation, mobile menu
│   ├── hero.css                ← Hero section, trending sidebar, newsletter widget
│   ├── cards.css               ← Article cards grid (Latest Analysis)
│   ├── longform.css            ← Dark long-form feature section
│   ├── footer.css              ← Site footer
│   └── utilities.css           ← Animations, toast, scroll-to-top, helpers
│
├── js/
│   └── main.js                 ← All interactivity (menu, newsletter, scroll, etc.)
│
├── pages/
│   ├── article.html            ← Single article page template
│   ├── world.html              ← (duplicate index for World section)
│   ├── politics.html           ← Create similar to index with filtered content
│   ├── culture.html
│   ├── tech.html
│   ├── science.html
│   ├── opinion.html
│   ├── archive.html
│   ├── subscribe.html
│   ├── newsletters.html
│   ├── masthead.html
│   ├── ethics.html
│   ├── privacy.html
│   ├── terms.html
│   ├── cookies.html
│   └── help.html
│
└── assets/
    └── images/
        ├── hero-globe.jpg        ← Replace with your own images
        ├── open-plan.jpg
        ├── vintage-radio.jpg
        └── rocket-launch.jpg

```

---

## 🚀 How to Use

### Local preview
Just open `index.html` in any browser — no build step needed.

### Deploy to hosting
Upload the entire `the-ramsis/` folder to any static host:
- **Netlify** — drag & drop the folder
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to repo, enable Pages
- **cPanel / FTP** — upload to `public_html/`

---

## 🖼️ Images

Replace placeholder images in `assets/images/` with your own.
Recommended sizes:
- Hero feature: 1200 × 750 px
- Article cards: 800 × 600 px
- Long form main: 900 × 600 px
- Article page hero: 1400 × 600 px

Use free images from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com).

---

## 🎨 Customization

### Change accent color (red)
In `css/variables.css`, update:
```css
--color-accent-red:  #c0392b;   /* Change to any color */
--color-accent-dark: #8b1e14;   /* Darker version for hover */
```

### Change fonts
In `css/variables.css`, update the Google Fonts `@import` and the font variables:
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-serif:   'Source Serif 4', Georgia, serif;
--font-sans:    'DM Sans', Helvetica, sans-serif;
```

### Add new articles
Copy the card pattern from `index.html` and duplicate with new content.

---

## 🌐 SEO & Google AdSense Ready

- Semantic HTML5 (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- All images have `alt` attributes
- Meta description in every `<head>`
- `aria-label` on all interactive elements
- Fast-loading: no JavaScript frameworks, no heavy dependencies
- Add your AdSense `<script>` tag in any `<head>` to monetize

---

## 📄 Pages to Build

To create section pages (World, Politics, etc.):
1. Copy `index.html`
2. Change the `<title>` and active nav item
3. Replace article cards with section-specific content

To create more article pages:
1. Copy `pages/article.html`
2. Change title, content, and hero image

---

Built with ❤️ — Clean HTML · Organized CSS · Vanilla JS
