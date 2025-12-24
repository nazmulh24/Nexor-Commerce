# NEXOR — Nexor Commerce LLC Website

A fast, static corporate website for supplier verification and business credibility.

- Framework: Next.js (static export)
- Styling: CSS (no heavy UI frameworks)
- Backend/DB: None
- Domain: `nexorcommerce.com` (future: `getnexor.com`)
- Contact: `sales@nexorcommerce.com`

## Quick Start

```bash
# macOS / zsh
cd "$(dirname "$0")"

# install deps
npm install

# run dev server
npm run dev

# build + static export to ./out
npm run build

# preview exported static site
npx serve out
# or using Python if you prefer
(cd out && python3 -m http.server 8080)
```

Open http://localhost:3000 for dev, or http://localhost:8080 for static preview.

## Deployment

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3+CloudFront):

- Build command: `npm run build`
- Publish directory: `out`
- SSL: Enable on your host (Vercel/Netlify auto-provision Let’s Encrypt)
- Custom domain: point `nexorcommerce.com` and `www.nexorcommerce.com` to your host; canonical is set in `pages/_document.jsx`. When you switch to `getnexor.com`, update the canonical there.

## Pages

- `/` Home — Headline, subtext, CTA.
- `/about` — Company overview & mission.
- `/what-we-do` — Bullet list of services.
- `/contact` — Email and a simple mailto-based form.

## Performance Choices

- Zero third‑party scripts; no analytics by default.
- System font stack for fastest text rendering (you can switch to Inter/Montserrat later).
- Static export (`next export`) for CDN‑friendly hosting.
- Minimal CSS, no client-side JS beyond what Next.js needs.

## Customizing

- Brand colors: edit CSS variables in `styles/globals.css`.
- Title/description/JSON‑LD: edit `pages/_document.jsx`.
- Navigation/Header/Footer: `components/Layout.jsx`.

## Notes

- The contact form uses `mailto:` (no backend). If you later want a form service or API, we can wire it without redesign.
- Avoid product listings, pricing, carts, logins, and blog per your requirements.

## License

Proprietary — Nexor Commerce LLC.
# Nexor-Commerce
