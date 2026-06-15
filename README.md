# 🍞 Sweet Hearth Bakery — FUTURE_FS_03

<div align="center">

![Sweet Hearth Bakery](https://img.shields.io/badge/Sweet%20Hearth%20Bakery-Artisan%20Baked%20Goods-D4A853?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)

**A professional, production-ready website for Sweet Hearth Bakery**  
*Built as part of the Future Interns Full-Stack Development Program (FUTURE_FS_03)*

### 🌐 [View Live Website](https://harinii0107.github.io/FUTURE_FS_03/)

</div>

---

## 📋 Project Overview

**Sweet Hearth Bakery** is a fictional artisan bakery based in New York, representing the kind of neighbourhood bakery that deserves a premium digital presence. This project delivers a fully functional, responsive, and beautifully designed website to help the business:

- ✅ Look professional and credible online
- ✅ Attract new customers through a polished, discoverable web presence
- ✅ Showcase their menu with pricing and product imagery
- ✅ Enable customers to contact them or place orders via WhatsApp and phone
- ✅ Build trust with testimonials, an About page, and a visible location

---

## 🏪 The Business: Sweet Hearth Bakery

| Detail | Info |
|--------|------|
| **Business Name** | Sweet Hearth Bakery |
| **Type** | Artisan Bakery |
| **Tagline** | *Baked with love, served with joy* |
| **Location** | 42 Hearth Lane, Maple Grove, New York, NY 10001 |
| **Founded** | 2010 |
| **Specialities** | Sourdough bread, croissants, custom cakes, pastries |
| **Target Customers** | Local residents, food enthusiasts, event planners, corporate clients |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router DOM v7 (HashRouter for GitHub Pages) |
| **Styling** | Vanilla CSS with CSS Modules + CSS Custom Properties |
| **Animations** | CSS keyframes + Intersection Observer API |
| **Fonts** | Google Fonts: Playfair Display + Inter |
| **Deployment** | GitHub Pages via `gh-pages` |
| **Version Control** | Git + GitHub |

---

## 📁 Project Structure

```
FUTURE_FS_03/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/              # AI-generated bakery product photos
│   │       ├── hero.png         # Hero background
│   │       ├── sourdough.png    # Product image
│   │       ├── croissant.png    # Product image
│   │       ├── cake.png         # Product image
│   │       ├── cinnamon_roll.png
│   │       └── about.png        # Bakery interior
│   ├── components/
│   │   ├── Navbar/              # Sticky glassmorphism navbar
│   │   ├── Footer/              # Full 4-column footer
│   │   ├── ProductCard/         # Menu item card
│   │   ├── TestimonialCard/     # Customer review card
│   │   ├── ContactForm/         # Validated contact form
│   │   └── ScrollToTop/         # Route change scroll utility
│   ├── data/
│   │   ├── products.js          # 16 menu items across 4 categories
│   │   └── testimonials.js      # 4 customer reviews
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Intersection Observer hooks
│   ├── pages/
│   │   ├── Home/                # Landing page (7 sections)
│   │   ├── Menu/                # Filterable product grid
│   │   ├── About/               # Story, timeline, team, values
│   │   └── Contact/             # Form, map, contact info
│   ├── App.jsx                  # Router + layout
│   ├── App.css
│   ├── index.css                # Global design system
│   └── main.jsx
├── index.html                   # SEO-optimised entry point
├── vite.config.js               # GitHub Pages base path config
├── package.json
└── README.md
```

---

## 🎨 Design System

The website uses a cohesive warm, artisan colour palette:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#4A2C2A` | Espresso brown — headings, nav, footer |
| `--color-accent` | `#D4A853` | Warm gold — CTAs, badges, highlights |
| `--color-bg` | `#FDF6EC` | Warm cream — page background |
| `--color-text-muted` | `#7A5C52` | Body text |

**Typography:** Playfair Display (headings — elegant serif) + Inter (body — clean sans-serif)

---

## 📄 Pages & Features

### 🏠 Home Page
- Full-screen hero with parallax zoom animation + layered overlay
- Stats strip (14+ years, 2,000+ customers/month)
- Feature cards (why choose us)
- Bestseller product grid
- About preview with bakery interior photo
- Customer testimonials (4 reviews)
- Photo gallery mosaic (6 images)
- CTA banner

### 🍞 Menu Page
- Sticky category filter tabs (All / Breads / Pastries / Cakes / Beverages)
- 16 products across 4 categories with pricing and WhatsApp order links
- Custom Order CTA card

### 📖 About Page
- Founder story narrative
- Interactive milestone timeline (2010–2023)
- Team member cards (3 staff)
- Values section (4 core values)

### 📞 Contact Page
- Contact info cards (address, phone, email, WhatsApp)
- Opening hours table
- Validated contact form with subject selector
- Embedded Google Maps
- Quick-contact strip (Call / WhatsApp / Email)

### 🧭 Navigation
- Sticky navbar with glassmorphism scroll effect
- Mobile hamburger menu with slide-in animation
- Scroll-to-top on page change

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/harinii0107/FUTURE_FS_03.git
cd FUTURE_FS_03

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view locally.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 💼 Business Pitch

### The Problem
Sweet Hearth Bakery is a thriving local business with no web presence. Customers cannot find their menu, hours, or contact details online. When someone searches "best bakery near me," Sweet Hearth doesn't appear.

### The Solution
A professional, always-online website that:
- **Appears in Google searches** — SEO meta tags, semantic HTML, descriptive content
- **Shows the full menu** with photos and prices — customers know what to expect before visiting
- **Builds instant trust** — polished design, testimonials, and an authentic brand story
- **Drives orders** — WhatsApp and phone CTAs on every page
- **Works on mobile** — 100% responsive; 60%+ of customers search on their phones

### The Value
> A local bakery with a professional website can increase walk-in traffic by 30–50%, simply by appearing in local search results and making a strong first impression.

This website costs the business nothing to host (GitHub Pages is free), requires no technical knowledge to maintain, and remains online 24/7 — working as a salesperson even when the bakery is closed.

---

## 📝 Author

**Harini** — Future Interns Full-Stack Development Intern  
Project: `FUTURE_FS_03`  
Program: [Future Interns](https://www.linkedin.com/company/future-interns/)

---

## 📄 License

This project is built for educational purposes as part of the Future Interns internship program.
