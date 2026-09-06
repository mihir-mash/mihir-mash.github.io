# Deployment Guide for GitHub Pages

## Prerequisites

- GitHub account
- Git installed locally

## Step-by-Step Deployment

### 1. Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`username.github.io`** (replace `username` with your GitHub username)
3. Make it **Public**
4. Click "Create repository"

### 2. Update Site Configuration

Edit `_config.yml` and change:

```yml
url: "https://username.github.io"  # Replace username
baseurl: ""
```

### 3. Initialize Git & Push

```bash
cd path/to/zzprofile

# Initialize git (if not already done)
git init

# Add GitHub as remote
git remote add origin https://github.com/username/username.github.io.git

# Create main branch
git branch -M main

# Add all files
git add .

# Initial commit
git commit -m "Initial portfolio commit"

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click Save

### 5. Verify Deployment

- Wait 1-2 minutes for GitHub Actions to build and deploy
- Visit `https://username.github.io` in your browser
- Check Actions tab to see build status

## Making Updates

After deployment, updates are automatic:

```bash
# Edit files locally
vim _data/projects.yml  # or any file

# Commit and push
git add .
git commit -m "Update projects section"
git push
```

Your site updates within 1-2 minutes.

## Troubleshooting

### Site not appearing after push?

1. Check Actions tab for build errors
2. Verify repository is public
3. Ensure repository name is exactly `username.github.io`
4. Check Pages settings (Settings → Pages)

### Need custom domain?

In Settings → Pages → Custom domain:
- Enter your domain (e.g., `yourname.com`)
- Update your DNS records at your registrar

### Local testing before deploy?

```bash
bundle exec jekyll serve
# View at http://localhost:4000
```

## Common Git Commands

```bash
# See status
git status

# See changes
git diff

# Add specific files
git add file.yml

# Undo changes (before commit)
git checkout file.yml

# See commit history
git log --oneline
```

## Contact & Support

If you encounter issues:
1. Check GitHub Actions logs (Actions tab)
2. Verify Jekyll runs locally: `bundle exec jekyll serve`
3. Common issues: Ruby version mismatch, missing gems (run `bundle install`)
