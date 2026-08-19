# Morgan Gregory — Personal Website

A personal website built with [Jekyll](https://jekyllrb.com) for GitHub Pages.

## Pages

- **Home** (`index.md`) — Name and title, plus the photo carousel
- **Biography** (`biography.md`) — Short bio
- **Statement** (`statement.md`) — Artist statement
- **CV** (`cv.md`) — Downloadable curriculum vitae (Word doc in `assets/docs/`)
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
3. Commit and push — GitHub Pages rebuilds automatically. New photos appear in the home-page carousel.

### Change the email on the Contact page
Open `_config.yml` and replace `email: ""` with your email address.

### Edit text
The page content lives in:
- `index.md` (name + title, carousel markup)
- `contact.md` (contact)

Edit the Markdown and push. GitHub Pages rebuilds automatically.

## 🎨 Design

- **Palette:** Pure white background `#ffffff`, near-black text `#191919`, muted warm gray, and a restrained terracotta accent `#a33d28`
- **Typography:** Self-hosted [AUTHENTIC Sans](https://authentic.website/sans) (free WTFPL webfont) — no Google Fonts or external requests
- **Layout:** Cohesive left navigation that is fixed and persists while you scroll, sitting on the same (white) page background with no divider or box separation; the main content fills the window fluidly (padding `clamp(20px, 4vw, 64px)`, nothing hardcoded to a fixed width) and always begins below the name in the nav. On smaller screens the nav becomes a sticky top bar. The name appears at the top of the nav in capital letters at the same size as the other links and is never underlined.
- **Home:** Only the auto-advancing photo slideshow, vertically centered on the page (the name lives in the left nav). The slideshow is about 45% of the page height — full, uncropped images rotating every ~3 seconds, non-interactive, and paused for users who prefer reduced motion.
- **Biography:** Plain artist statement — the role line ("Choreographer · Dance Artist · Afrofuturist Researcher") is not shown.
- **Contact:** Vertically centered intro + links, all in plain black text.
- Styles: `assets/css/main.css`
- Carousel: `assets/js/main.js`

### AUTHENTIC Sans license note

The webfonts in `assets/fonts/` are AUTHENTIC Sans, distributed under the [WTFPL](https://www.wtfpl.net/) (see `assets/fonts/LICENSE-wtfpl.txt`). WTFPL covers personal and non-commercial use. If the site ever becomes commercial, license AUTHENTIC Sans Pro from [authentic.website](https://authentic.website).

## 📄 License

All content © Morgan Gregory. All rights reserved.