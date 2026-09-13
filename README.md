# Velvorn — Sportswear Ecommerce Landing Page

A responsive landing page for **Velvorn**, a sportswear and activewear brand. Built with React and Tailwind CSS, featuring a full-bleed hero, featured deals, a sportswear collection banner, a latest drops grid, and a call-to-action section.

## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Lucide React** — UI icons (nav, cart, search)
- **React Icons** — social/brand icons (footer)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/9940-pg/velvorn-ecommerce-site.git
cd velvorn-ecommerce-site
npm install
```

### Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/              # Product and banner images
├── components/
│   ├── NavBar.jsx
│   ├── Hero.jsx
│   ├── HotStyleSteals.jsx
│   ├── CollectionBanner.jsx
│   ├── LatestDrops.jsx
│   ├── CTABanner.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

| Section | Description |
|---|---|
| **Nav Bar** | Logo, primary nav links, search/account/wishlist/bag icons |
| **Hero** | Full-bleed banner image with brand statement and CTA |
| **Hot Style Steals** | Featured discounted products in a 3-column grid |
| **Sportswear Collection** | Full-width lifestyle banner promoting the core collection |
| **Latest Drops** | Newest arrivals in a 4-column grid with quick-add buttons |
| **CTA Banner** | Closing call-to-action before the footer |
| **Footer** | Brand info, social links, site links, and newsletter signup |

## Fonts

Loaded via Google Fonts in `index.css`:

- **Archivo** — headings and display text
- **Inter** — body copy and UI text

## Notes

- Product and banner images are stored locally in `src/assets/` and imported directly into components.
- Icons: `lucide-react` is used for UI icons; `react-icons` (`fa6` set) is used for social/brand logos, since `lucide-react` no longer ships brand icons.
- This is a front-end landing page only — no backend, cart logic, or payment integration is wired up yet.

## License

This project is for personal/portfolio use.
