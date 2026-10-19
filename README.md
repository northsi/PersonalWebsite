# Luyao Zhong — Academic Website

A plain English academic homepage for sharing education, research experience, and publications. All information follows the supplied CV.

## Edit

- `public/index.html`: all website content
- `public/styles.css`: readable, responsive styles, including print styles
- `public/CV.pdf`: original CV

This is a static HTML/CSS website. There is no JavaScript, package installation, or build step. Open `public/index.html` directly in a browser, or preview it locally:

```sh
python3 -m http.server 8000 --directory public
```

## Hosting

GitHub Pages: https://northsi.github.io/PersonalWebsite/

The workflow in `.github/workflows/deploy-pages.yml` publishes only `public/` whenever changes are pushed to `main`. It can also be run manually from the Actions tab. The repository's Pages source must be set to **GitHub Actions** once in **Settings → Pages**.
