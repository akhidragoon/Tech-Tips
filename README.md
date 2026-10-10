# Kernel & Craft — Newsmag-inspired static blog

A responsive technology magazine-style website inspired by classic Newsmag/Blogspot layouts. It is a standalone static site suitable for free GitHub Pages hosting.

## Features

- Magazine-style trending strip, masthead, promotional banner, and dark navigation bar
- Large featured story with supporting feature cards
- Article grid and sidebar with search, category filters, and popular posts
- Light/dark mode toggle (preference saved in the browser)
- Responsive desktop, tablet, and mobile layouts
- Six sample article pages in `posts/`
- No build step, framework, backend, or paid service required

## Publish on GitHub Pages

1. Create a **public** GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. After GitHub finishes deploying, open `https://YOUR-USERNAME.github.io/`.

You can alternatively use any repository name and configure Pages to publish from the root, but the URL will include the repository name.

## Customize

- Edit `index.html` to change the logo text, featured stories, category labels, article cards, and sidebar.
- Edit `assets/magazine.css` to adjust colors, typography, spacing, and responsive behavior. The green accent is controlled by `--green` near the top of the file.
- Edit `assets/magazine.js` to change search/filter behavior or theme behavior.
- Article pages are in `posts/`. Keep their relative links intact when renaming files.

## Notes and limitations

- This is a **static website**, not the Blogger CMS. There is no admin dashboard for writing posts; new articles are added by editing HTML and pushing the changes to GitHub.
- The homepage uses images from Unsplash's image CDN, so those images require an internet connection. Replace the image URLs with locally hosted files if you want the site to be fully self-contained.
- Search and category filters work on the six sample cards currently shown on the homepage. Category counts are illustrative design text, not a live article database.
- The contact address is a placeholder (`hello@example.com`). Update it before publishing.
- No newsletter signup or comment backend is connected.

## License

See `LICENSE.txt`.
