# XKM AI Website

This is a static multi-page website converted from the XKM AI proposal deck.

## Files

- `index.html` - homepage
- `assets.html` - data asset evidence
- `why-now.html` - why now
- `strategy.html` - strategic direction
- `roadmap.html` - engagement roadmap
- `operating-model.html` - human and AI operating model
- `assets/` - CSS, JavaScript, and image files
- `.nojekyll` - tells GitHub Pages to serve the folder as a plain static site

## Run Locally

Open this folder in PowerShell and run:

```powershell
python -m http.server 8015 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8015/index.html
```

You can also double-click `index.html`, but a local server is closer to how GitHub Pages works.

## Deploy To GitHub Pages

1. Upload all files in this folder to the root of your GitHub repository.
2. Keep the `assets` folder in the same location as `index.html`.
3. Keep `.nojekyll` in the repository root.
4. In GitHub, go to `Settings -> Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Choose your branch, usually `main`, and folder `/root`.
7. Save, then wait for GitHub Pages to publish.

Your site URL will usually look like:

```text
https://YOUR-USER-NAME.github.io/YOUR-REPOSITORY-NAME/
```

## Important

Do not upload only the `.html` files. The visual style depends on:

```text
assets/styles.css
assets/site.js
assets/hero-dashboard.png
```

If the page appears without formatting after deployment, confirm those three files exist online under:

```text
https://YOUR-USER-NAME.github.io/YOUR-REPOSITORY-NAME/assets/styles.css
https://YOUR-USER-NAME.github.io/YOUR-REPOSITORY-NAME/assets/site.js
https://YOUR-USER-NAME.github.io/YOUR-REPOSITORY-NAME/assets/hero-dashboard.png
```

## Smoke Test

If Node.js is available, run this before uploading:

```powershell
node assets/deploy-check.js
```

Expected output:

```text
Deployment asset check passed for 6 HTML pages.
```
