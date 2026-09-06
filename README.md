# Mihir Mashruwala's Portfolio

A clean, minimal, fully responsive portfolio website built with Jekyll.

## Features

- **Data-driven content**: All content stored in YAML files in `_data/` for easy updates
- **Responsive design**: Mobile-friendly with graceful scaling
- **Fast & minimal**: Plain HTML/CSS/JS, no heavy frameworks
- **GitHub Pages ready**: Deploy directly to your GitHub Pages repository
- **SEO optimized**: Built-in meta tags and structured data
- **Academic style**: Clean, whitespace-heavy design inspired by academic personal sites

## Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── _data/
│   ├── site.yml            # Site metadata and contact info
│   ├── education.yml       # Education details
│   ├── experience.yml      # Work experience and positions
│   ├── projects.yml        # Project portfolio
│   ├── skills.yml          # Skills by category
│   └── achievements.yml    # Awards and certifications
├── _layouts/
│   └── default.html        # Main layout template
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (no build needed)
│   ├── js/
│   │   └── main.js         # Lightweight JavaScript
│   └── favicon.ico         # Site favicon
├── index.md                # Homepage
└── Gemfile                 # Ruby dependencies
```

## Setup & Deployment

### Local Development

1. Install Ruby (3.0+ recommended)
2. Install Jekyll and dependencies:
   ```bash
   bundle install
   ```
3. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```
   View at `http://localhost:4000`

### Deploy to GitHub Pages

1. Create a repository named `username.github.io` on GitHub
2. Replace `username` with your actual GitHub username
3. Update `_config.yml`:
   ```yml
   url: "https://username.github.io"
   baseurl: ""
   ```
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
5. Your site will be live at `https://username.github.io`

## Updating Content

All content is stored in `_data/` YAML files. Edit these files to update:

- **About section**: Edit `_data/site.yml`
- **Education**: Edit `_data/education.yml`
- **Experience**: Edit `_data/experience.yml`
- **Projects**: Edit `_data/projects.yml`
- **Skills**: Edit `_data/skills.yml`
- **Achievements**: Edit `_data/achievements.yml`

No HTML editing required!

## Customization

### Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --accent-color: #0066cc;  /* Change to your preferred color */
    --text-primary: #333333;
    --bg-light: #ffffff;
    /* ... more variables ... */
}
```

### Adding a Resume

Place your resume PDF in `assets/resume.pdf` and update the link in `_data/site.yml`.

### Adding a Favicon

Replace `assets/favicon.ico` with your own favicon.

## Performance

- **Zero JavaScript dependencies**: Pure vanilla JS
- **Minimal CSS**: Single stylesheet (~15KB uncompressed)
- **Fast build**: Jekyll builds in milliseconds
- **Optimized images**: Use compressed images in projects section

## SEO

Automatically includes:
- Meta description
- Open Graph tags
- Twitter Card tags
- Structured JSON-LD data (via jekyll-seo-tag)

Edit site description in `_config.yml` and `_data/site.yml` for best SEO.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio template is open source. Customize it for your own use.

---

**Built with Jekyll • Deployed on GitHub Pages**
