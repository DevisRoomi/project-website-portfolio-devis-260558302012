# DEVIS® — Architectural Software Engineering Portfolio

> Client-Side Experimental Editorial Single-Page Application (SPA) with 3D Radial Arc Carousel & Rotary Dial.

[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb?logo=react)](https://react.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.4.2-black?logo=bun)](https://bun.sh/)
[![Tailwind CSS v3](https://img.shields.io/badge/TailwindCSS-v3.4.17-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP Core](https://img.shields.io/badge/GSAP-v3.12.5-88ce02?logo=greensock)](https://greensock.com/)

---

## 1. Project Identity & Author

- **Candidate / Author:** Abu Devis Jalaluddin Rumi (`DEVIS®`)
- **Student ID (NIM):** `260558302012`
- **Program of Study:** Teknologi Rekayasa Perangkat Lunak (TRPL) / Software Engineering
- **Institution:** Politeknik IDN Bogor
- **Target Release:** 05 November 2026
- **Repository Convention:** `project-website-portfolio-devis-260558302012`
- **Repository URL:** `https://github.com/DevisRoomi/project-website-portfolio-devis-260558302012`

---

## 2. Design System & Visual Identity

The portfolio implements a **Creative Experimental Editorial** visual design:
- **Canvas / Charcoal:** `#121316` (90% dominant deep architectural space)
- **Surface Elevation:** `#1a1b20` / `#22242a`
- **Structural Borders:** `#2b2d36` / `#3f424e`
- **Functional Accent:** `#e63946` (Electric Crimson 10%)
- **Typography:**
  - Display / Hero: `Syne` (Bold / Extrabold)
  - UI / Body: `Plus Jakarta Sans`
  - Tech / Code: `JetBrains Mono`
  - *All fonts are self-hosted WOFF2 files located in `public/assets/fonts/` for zero external runtime latency.*

---

## 3. Key Architecture & Features

1. **3D Radial Arc Card Carousel (`src/components/3d/OrbitalCarousel.tsx`):**
   - Pure CSS 3D hardware-accelerated transforms (`translate3d`, `rotateY`, `scale`).
   - Dynamic trigonometry calculations based on radius $R = 520\text{px}$ and arc $\Omega = 140^\circ$.
   - Inertial pointer dragging with pointer-capture and GPU layer isolation (`will-change` attached only during active drag).
2. **Two-Way Reactive Rotary Dial (`src/components/3d/RotaryDial.tsx`):**
   - Semicircular physical-inspired dial controller.
   - Needle indicator synchronized with active carousel item; dial rotation updates the 3D stage and vice-versa.
   - Full keyboard controls (`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`).
3. **Dual View Mode Switcher:**
   - Seamless toggle between 3D Orbital Carousel and Editorial 2-Column Responsive Grid.
4. **Bilingual Reactive Dictionary (`id` / `en`):**
   - Context-driven state synchronized with `localStorage` and HTML `lang` attribute.
5. **Technical Project Case Study Drawer:**
   - Slide-in side drawer featuring complete architectural overview, challenges, solutions, and tech stack tags.
6. **Credential & Certificate Modal:**
   - Category filtering (`all`, `engineering`, `ai_systems`, `foundations`) with high-resolution visual previews and verification links.
7. **Accessibility & Graceful Degradation:**
   - Strict `@media (prefers-reduced-motion: reduce)` support.
   - Comprehensive editorial `<noscript>` fallback ensuring zero data loss for non-JavaScript users.

---

## 4. Tech Stack

- **Runtime & Package Manager:** Bun `1.4.2`
- **Build Tool:** Vite `6.1.0`
- **UI Framework:** React `19.0.0`
- **Type System:** TypeScript `5.7.3` (`strict: true`, zero `any`)
- **Styling Engine:** Tailwind CSS `3.4.17` + Autoprefixer
- **Motion & Easing:** GSAP Core `3.12.5` + Native CSS 3D GPU Transforms
- **Icons:** Lucide React `0.475.0`

---

## 5. Getting Started (Local Development)

### Prerequisites
- [Bun](https://bun.sh/) (v1.2+ recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/DevisRoomi/project-website-portfolio-devis-260558302012.git
cd project-website-portfolio-devis-260558302012

# Install dependencies
bun install
```

### Development Server
```bash
bun run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Typecheck
```bash
# Audits TypeScript strict types and produces optimized production build
bun run build

# Preview production build locally
bun run preview
```

---

## 6. Directory Structure

```
devis-portfolio/
├── docs/                     # Specifications & Architecture documentation
│   ├── PROJECT_BRIEF.md
│   ├── PERSONAL_CONTENT.md
│   ├── ASSET_INVENTORY.md
│   ├── DESIGN_SYSTEM.md
│   ├── MOTION_SPEC.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   ├── TASK_BREAKDOWN.md
│   └── IMPLEMENTATION_LOG.md
├── public/
│   └── assets/
│       ├── fonts/            # Self-hosted WOFF2 fonts
│       ├── images/           # Authentic portrait & leadership media
│       └── projects/         # Architectural SVG project covers
├── src/
│   ├── animations/           # Parametric orbital math & GSAP triggers
│   ├── components/
│   │   ├── 3d/               # OrbitalCarousel, RotaryDial
│   │   ├── cards/            # ProjectCard
│   │   ├── modals/           # ProjectDrawer, CertificateModal
│   │   ├── navigation/       # FloatingNavbar, LanguageSwitcher
│   │   └── ui/               # Preloader, Footer
│   ├── content/              # Bilingual dictionaries (id.ts, en.ts, types.ts)
│   ├── context/              # LanguageContext
│   ├── layouts/              # MainLayout
│   ├── sections/             # 6 Narrative sections (Hero, About, Works, etc.)
│   ├── styles/               # globals.css & Tailwind layers
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 7. License

Built for academic assessment at Politeknik IDN Bogor. © 2026 Abu Devis Jalaluddin Rumi. All rights reserved.
