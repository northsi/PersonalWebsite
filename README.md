# Luyao Zhong — Personal Website

A responsive, bilingual academic website based on the supplied CV. Built with React and Vite, with locally hosted fonts and an original SVG orbital illustration. No API keys, backend, or external font services are required.

## Development

Requires Node.js 20.19+ or 22.12+ (the cloud environment uses Node.js 24).

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static host. Vite uses relative asset paths so the site also works under a repository subdirectory, including GitHub Pages. The commands above build and serve locally.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds the site with Node.js 24 and deploys `dist/` on every push to `main`. It can also be run manually from the repository's Actions tab.

One-time repository setting: open **Settings → Pages → Build and deployment**, and select **GitHub Actions** as the source. If the initial workflow ran before Pages was enabled, rerun **Deploy website to GitHub Pages** from the Actions tab after changing the setting.

The default site address after a successful deployment is:

https://northsi.github.io/PersonalWebsite/

The site is publicly visible when published, including the contact email and downloadable CV. The workflow uses GitHub's built-in deployment token; no personal access token or third-party hosting account is required.

## Content

- English and Chinese text, publication metadata, and profile links: `src/main.jsx`
- Styles, responsive layouts, and reduced-motion behavior: `src/styles.css`
- Downloadable original CV: `public/CV.pdf`
- Favicon: `public/favicon.svg`

Publication titles, authors, dates, and DOI links follow the supplied CV. Formal publication titles stay in English in both language views. The hero illustration is conceptual, not calculated research data. Language choice is stored locally when browser storage is available. Citation and email copy buttons use the browser Clipboard API; production hosting should use HTTPS.
