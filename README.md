# श्री लीळाचरित्र – Digital Granth (installable app)

Static site + PWA. Works offline after the first visit.

## Run locally
    python3 -m http.server 8080      # then open http://localhost:8080
(Service workers need http://localhost or https — not file://)

## Publish (GitHub Pages)
Upload the *contents* of this folder to the repo root, then Settings → Pages → Deploy from branch → main / (root).

## Install
- Android/Chrome & desktop Chrome/Edge: open the site → "Install App" button (or browser menu → Install).
- iPhone/iPad Safari: Share → Add to Home Screen.

## Make an Android APK / Play Store build
Deploy to HTTPS first, then either:
- https://www.pwabuilder.com → paste your URL → Android package, or
- `npm i -g @bubblewrap/cli && bubblewrap init --manifest https://YOUR-SITE/manifest.webmanifest && bubblewrap build`

## Notes
- sw.js pre-caches the EPUB reader, Amhi.epub and the library home; other pages/JSON are cached as you open them. Bump VERSION in sw.js after content changes.
- main/ uses jQuery Mobile from code.jquery.com; it is cached on first online visit.
- Publish only material you have permission to share.
