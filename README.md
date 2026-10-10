# Shri Leela Charitra – Digital Granth

This repository contains the existing React/Vite application and the original book and glossary files provided with the project.

## Included materials

- Existing application source in `src/`
- Original EPUB/PDF reading materials in the project root (preserved)
- Public copies of EPUB/PDF materials in `public/library/` for static hosting
- `FILE_INVENTORY.md` listing the public library files

## Run locally

Requirements: Node.js 22.12+ (recommended for the Vite version in this project) and npm.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The Vite base path is configured for the repository `Lilacharitra2` at `/Lilacharitra2/`.

1. Upload the extracted contents of this project to the root of your existing `Lilacharitra2` GitHub repository (not the ZIP itself and not an extra nested folder).
2. Commit the changes to the `main` branch.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source.
4. The workflow at `.github/workflows/deploy.yml` builds and deploys the app.
5. Open `https://dhuriviraj00.github.io/Lilacharitra2/` after the workflow succeeds.

## Important notes

- The password-protected StatiCrypt `index.html` has been replaced with the Vite application entry point.
- Do not commit secrets or private documents. Confirm you have permission to publish all book materials publicly.
- A source ZIP being prepared does not mean that the live GitHub Pages deployment has already been completed or verified.
