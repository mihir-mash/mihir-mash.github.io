# Quick Start Guide

## What's Been Built

Your Jekyll portfolio is ready to deploy! It includes:

✅ Clean, minimal design with academic styling
✅ Fully responsive (mobile, tablet, desktop)
✅ All content in YAML data files (easy updates)
✅ GitHub Pages automation included
✅ SEO optimized

## Files to Know

**For Content Updates** (edit these files):
- `_data/site.yml` — Your name, title, contact, about section
- `_data/education.yml` — Education details
- `_data/experience.yml` — Jobs, internships, positions
- `_data/projects.yml` — Your projects (with tech, highlights, links)
- `_data/skills.yml` — Skills organized by category
- `_data/achievements.yml` — Awards, certifications, competitions

**For Design** (don't usually need to touch):
- `assets/css/style.css` — All styling
- `assets/js/main.js` — Navigation, smooth scroll
- `_layouts/default.html` — HTML structure
- `index.md` — Homepage template

## Before First Deploy

### 1. Add Your Resume (Optional)

```
1. Save your resume as `resume.pdf`
2. Place in the `assets/` folder
3. Update the link in `_data/site.yml`
```

### 2. Verify Your Info

All your data has been imported from `mimi_all_info.txt`:

- ✅ Education (B.Tech at DJSCE)
- ✅ Experience (Unity Bank + IIT Jodhpur + college positions)
- ✅ 11 Projects with descriptions, tech stacks, and links
- ✅ Skills organized by category
- ✅ Achievements and competitions

**Review and customize in the `_data/` files as needed.**

### 3. Customize Colors (Optional)

Edit `assets/css/style.css`, line 7:

```css
--accent-color: #0066cc;  /* Change to any color you prefer */
```

Popular choices:
- `#0066cc` (Blue) — Professional, current default
- `#d62828` (Red) — Bold, energetic
- `#2a9d8f` (Teal) — Modern, tech-friendly
- `#6a4c93` (Purple) — Creative, distinctive

## Deploy to GitHub Pages

### First Time Only

```bash
# Navigate to your project folder
cd c:\Mihir\Degree\hm\zzprofile

# Create GitHub repo (online at github.com)
# Then:

git init
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git branch -M main
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username.**

### After Deploy

1. Wait 1-2 minutes
2. Visit `https://YOUR-USERNAME.github.io`
3. Your portfolio is live!

### Making Updates

```bash
# Edit any files in _data/ or elsewhere
# Then:

git add .
git commit -m "Update projects section"
git push
```

Changes appear within 1-2 minutes.

## Local Testing (Before Deploy)

To see your site locally before publishing:

```bash
# Install dependencies (one time)
bundle install

# Run local server
bundle exec jekyll serve

# Open browser to http://localhost:4000
```

## Structure Overview

```
zzprofile/
├── _data/              ← All your content (edit here!)
│   ├── site.yml
│   ├── education.yml
│   ├── experience.yml
│   ├── projects.yml
│   ├── skills.yml
│   └── achievements.yml
├── assets/
│   ├── css/style.css   ← Styling (colors, layout)
│   └── js/main.js      ← Navigation, interactions
├── _layouts/
│   └── default.html    ← HTML template
├── index.md            ← Homepage
├── _config.yml         ← Jekyll config
├── Gemfile             ← Dependencies
└── README.md           ← Documentation
```

## Common Tasks

### Add a New Project

Edit `_data/projects.yml`:

```yaml
- title: "My New Project"
  description: "Short description"
  technologies: ["Python", "FastAPI"]
  highlights:
    - "Achievement 1"
    - "Achievement 2"
  github: "https://github.com/you/repo"
  demo: "https://live-demo.com"
```

### Add a New Skill

Edit `_data/skills.yml`:

```yaml
- category: "New Category"
  skills: ["Skill1", "Skill2", "Skill3"]
```

### Update Contact Info

Edit `_data/site.yml`:

```yaml
contact:
  email: "newemail@example.com"
  phone: "+91 1234567890"
  github: "https://github.com/newusername"
  linkedin: "https://linkedin.com/in/newprofile"
```

## Need Help?

### Build Error?

```bash
# Reinstall dependencies
bundle install --redownload

# Try building again
bundle exec jekyll serve
```

### Site Not Showing?

1. Check Actions tab on GitHub for errors
2. Verify repository name is `username.github.io`
3. Check Settings → Pages (ensure main branch selected)
4. Verify repository is public

### Want Custom Domain?

See `DEPLOYMENT.md` for custom domain setup.

## Next Steps

1. ✅ Review all `_data/*.yml` files
2. ✅ Customize colors in `assets/css/style.css` if desired
3. ✅ Add resume PDF to `assets/`
4. ✅ Deploy to GitHub Pages (follow DEPLOYMENT.md)
5. ✅ Share your portfolio link!

---

**Your portfolio is complete and ready. Deploy today!**

Questions? Check README.md or DEPLOYMENT.md for detailed guides.
