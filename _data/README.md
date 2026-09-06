# Data Files Guide

This folder contains all the content for your portfolio in YAML format. Edit these files to update your website—no HTML needed!

## Files Overview

### `site.yml`
**Main site configuration and personal info**

- `name` — Your full name
- `title` — Professional title / tagline
- `description` — Site description (for SEO)
- `about` — Your bio paragraph
- `contact` — Email, phone, GitHub, LinkedIn, resume link
- `social` — Social media links (for footer)
- `accent_color` — Theme color (hex code)

**When to edit:** Update contact info, about section, or change theme color

---

### `education.yml`
**Your educational background**

Each entry has:
- `degree` — Degree name
- `institution` — School/college name
- `dates` — When you studied
- `cgpa` — GPA (optional)
- `percentage` — Grade percentage (optional)
- `highlights` — Key achievements as list

**Current entries:**
- B.Tech in CSE (Data Science) — DJSCE
- 12th Grade — Sathaye College
- 10th Grade — Parle Tilak Vidyalaya

**When to edit:** If you complete new degrees or want to highlight different achievements

---

### `experience.yml`
**Work experience and positions of responsibility**

Each entry has:
- `role` — Your job title
- `company` — Company/organization name
- `dates` — Duration (e.g., "07/2024 – Present")
- `description` — Brief role description
- `highlights` — Key responsibilities/achievements as bullet list

**Current entries:**
- ML Engineer — Unity Bank (current)
- Research Intern — IIT Jodhpur
- Tech (AI) Head — DJS NOVA
- Mechanical Head — DJS ARYA
- Publicity Co — DJS NSS

**When to edit:** Add new job, internship, or update current role highlights

---

### `projects.yml`
**Your project portfolio**

Each entry has:
- `title` — Project name
- `description` — What it does
- `technologies` — Tech stack (list)
- `highlights` — Key features/achievements
- `github` — GitHub repository link (optional)
- `demo` — Live demo link (optional)
- `status` — Project status like "In Writing" (optional)

**Current entries:** 11 projects including:
- Post Stroke Recovery Analysis
- CyberSecure (Network Intrusion Detection)
- Cynt (AI Startup Due Diligence)
- ELK Stack Logging
- Aerial Vision (Computer Vision)
- Fashion Recommender
- Research Paper Classification
- Protein Structure Prediction (SSRGNet)
- And more...

**When to edit:**
- Add new projects
- Update GitHub links
- Add demo links for deployed projects
- Mark projects as "completed" or "in progress"

---

### `skills.yml`
**Skills organized by category**

Structure:
- `category` — Skill category name
- `skills` — List of individual skills

**Current categories:**
- Programming Languages
- Backend & APIs
- Frontend
- Databases
- Cloud & DevOps
- ML & Data Science
- ML Specializations
- Infrastructure & Security
- Operating Systems
- Other Tools

**When to edit:**
- Add new skills
- Create new categories if needed
- Remove or rename skills

---

### `achievements.yml`
**Awards, certifications, and recognitions**

Each entry has:
- `title` — Achievement name
- `description` — What it recognizes
- `date` — When achieved
- `category` — Type (Competition, Certification, Research, etc.)

**Current entries:**
- National Champions — CanSat India 2025
- International CanSat Competition (15th globally)
- Road to Atomquest (Top 100)
- AWS Academy Graduate
- Cisco CCNA
- MERN Stack Training
- LingualSafety @ ICON 2026

**When to edit:**
- Add new awards or certifications
- Update dates when you receive them
- Add competition placements

---

## YAML Format Rules

### Lists
```yaml
skills:
  - Python
  - JavaScript
  - React
```

### Key-Value Pairs
```yaml
name: "Mihir Mashruwala"
email: "mihirmashruwala@gmail.com"
```

### Nested Objects
```yaml
contact:
  email: "email@example.com"
  phone: "+91 1234567890"
  github: "https://github.com/username"
```

### Multiline Text
```yaml
about: |
  First paragraph.
  
  Second paragraph.
```

## Common Editing Tasks

### Add a New Project

```yaml
- title: "My Awesome Project"
  description: "Built a system that does X using Y"
  technologies: ["Python", "FastAPI", "React"]
  highlights:
    - "Achieved 95% accuracy"
    - "Deployed on GCP"
    - "Handles 1000+ requests/sec"
  github: "https://github.com/user/project"
  demo: "https://demo.example.com"
```

### Add a New Skill

```yaml
- category: "Cloud Platforms"
  skills: ["AWS", "GCP", "Azure"]
```

### Update Contact

Edit `contact:` in `site.yml`:
```yaml
contact:
  email: "newemail@example.com"
  phone: "+91 XXXXXXXXXX"
  github: "https://github.com/newusername"
  linkedin: "https://linkedin.com/in/newprofile"
  resume: "/assets/resume.pdf"
```

### Change Theme Color

Edit `accent_color` in `site.yml`:
```yaml
accent_color: "#d62828"  # Changes to red
```

## Tips & Best Practices

✅ **Do:**
- Use clear, concise descriptions
- Keep lists to 3-5 items when possible
- Use consistent date formats (MM/YYYY or MM/YYYY – MM/YYYY)
- Include links (GitHub, demos) for projects
- Group skills by meaningful categories

❌ **Don't:**
- Add HTML or markdown formatting
- Forget quotes around strings with special characters
- Use inconsistent indentation (YAML is whitespace-sensitive)
- Leave blank required fields

## Validation

Check your YAML syntax:
- No red squiggly lines in VS Code?
- All indentation uses spaces (not tabs)
- Quote strings that contain colons
- Each `-` starts a new list item

## Need Help?

- YAML syntax: [yaml.org](https://yaml.org)
- Jekyll data files: [jekyllrb.com/docs/datafiles](https://jekyllrb.com/docs/datafiles)
- Your portfolio: Check `../index.md` to see how data is displayed

---

**Happy editing! Your portfolio updates automatically when you save these files.**
