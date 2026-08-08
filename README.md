# Morgan Gregory — Personal Website

A personal website built with [Jekyll](https://jekyllrb.com) for GitHub Pages.

## Pages

- **Bio** (`index.md`) — Artist statement
- **Work** (`work.md`) — Residencies, tours, premieres, education
- **Gallery** (`gallery.md`) — Photo gallery with lightbox
- **Contact** (`contact.md`) — Instagram + email

## 📦 Requirements (for local preview only)

You do **not** need any of this to publish — GitHub Pages builds the site for free. You only need these tools if you want to preview and edit the site on your own computer first.

1. **Homebrew** (if not already installed):
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Ruby**:
   ```
   brew install ruby
   ```
3. **Bundler** (installed with Ruby):
   ```
   gem install bundler
   ```

Then, inside this folder, install the GitHub Pages gem:
```
bundle install
```

Preview the site locally:
```
bundle exec jekyll serve
```
Open **http://localhost:4000** in your browser.

## 🚀 Publishing to GitHub Pages

### Step 1 — Create a GitHub account
Go to **https://github.com** and sign up (free). Remember your username — it becomes part of your site's URL.

### Step 2 — Create the repository
1. After logging in, click the **+** in the top-right corner → **New repository**.
2. **Repository name** must be exactly: `<your-username>.github.io`
   (e.g., `themorgangregory.github.io` — using the same username as your GitHub account).
3. Leave it **Public**.
4. Click **Create repository**.
5. Do **not** check "Add a README" (this folder already has one).

### Step 3 — Push this folder to GitHub
**Option A — GitHub Desktop (easiest):**
1. Download and install from **https://desktop.github.com** and sign in.
2. In GitHub Desktop: **File → Add Local Repository**.
3. Select this folder: `Desktop/themorgangregory.github.io`
4. Click **Publish repository** → choose the `username.github.io` repo if prompted.

**Option B — Terminal:**
```
cd ~/Desktop/themorgangregory.github.io
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
3. Click **Save**.

Your site will be live within a few minutes at: **https://<your-username>.github.io**

## ✏️ Updating your site

### Add new gallery photos
1. Copy the photo into `assets/images/` (use lowercase filenames, e.g. `my-photo.jpg`).
2. Open `_data/gallery.yml` and add an entry:
   ```yaml
   - filename: my-photo.jpg
     caption: "Optional caption"
     alt: "Describe the photo for screen readers"
   ```
3. Commit and push — GitHub Pages rebuilds automatically.

### Change the email on the Contact page
Open `_config.yml` and replace `email: ""` with your email address.

### Edit text
The page content lives in:
- `index.md` (bio)
- `work.md` (work credits)
- `contact.md` (contact)

Edit the Markdown and push. GitHub Pages rebuilds automatically.

## 🎨 Design

- **Palette:** Deep charcoal/indigo `#0d0f14`, warm text `#e8e6e1`, amber accent `#d4a24e`
- **Typography:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif) + [Inter](https://fonts.google.com/specimen/Inter) (body sans)
- Styles: `assets/css/main.css`
- Lightbox + footer year: `assets/js/main.js`

## 📄 License

All content © Morgan Gregory. All rights reserved.