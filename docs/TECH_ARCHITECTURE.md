# TECHNICAL ARCHITECTURE & INFORMATION SPECIFICATION
**Project:** DEVIS® Personal Portfolio
**Stage:** 02 - Information Architecture & Technical Stack
**Target Date:** 5 November 2026

---

## 1. Final Tech Stack Specification

- **Core Framework:** React (via Vite)
- **Runtime & Package Manager:** Bun (fast build & install)
- **Styling:** Tailwind CSS (utility-first, custom editorial typography scale, zero runtime overhead)
- **Animation & Physics:** 
  - GSAP (GreenSock) for precision orbital transforms, inertia, and rotary dial easing.
  - Native CSS 3D transforms (`preserve-3d`, `rotateY`, `translateZ`) for GPU-accelerated carousel rendering.
- **Iconography:** `lucide-react` (clean, tree-shakeable stroke icons)
- **State Management:** React lightweight state / Context (carousel active index, rotary angle, modal detail drawer, audio/sound toggle if any).
- **Deployment Target:** Static bundle deployed to Vercel / Cloudflare Pages.

---

## 2. Information Architecture & Section Hierarchy

### Global Header / Top Bar
- Brand Identity: `DEVIS®` [TRPL-01]
- Live Status Beacon: `● AVAILABLE FOR HIRE / COLLABORATION`
- Direct Nav Links: `01. IDENTITAS` | `02. ENGINEERING` | `03. LEADERSHIP` | `04. STACK` | `05. KONTAK`
- Action: `[RESUME / CV]` download button.

### Section 01: Hero & Identity
- Editorial headline: High impact typography (`DEVIS / SOFTWARE ENGINEER / TECH LEADER`).
- Interactive Hero Visual: Duotone portrait with depth-hover/glitch interactive cursor tracking.
- Value Proposition: Statement menghubungkan rekayasa perangkat lunak, komunikasi, dan eksekusi produk.
- Quick Specs: TRPL Student, Fullstack & Systems, Public Speaker.

### Section 02: 3D Radial Orbital Showcase (Cuong Nguyen Concept)
- **Visual Mechanics:**
  - 3D Radial Arc: Kartu proyek ditata dalam busur melengkung virtual 3D.
  - Kartu aktif berada di depan (center scale 1.0, z-index max, full opacity).
  - Kartu non-aktif melengkung ke belakang (`rotateY: +/- deg`, `translateZ: -px`, opacity fade).
  - Dukungan interaksi: Drag mouse horizontal, trackpad horizontal wheel, touch swipe, dan rotary dial sync.
- **Bottom Rotary Dial Controller:**
  - Busur dial di bawah carousel dengan garis ticks presisi.
  - Pointer jarum aktif (`▲ ME / TITLE`).
  - Putar dial -> kartu bergerak; geser kartu -> dial berputar presisi.
- **Project Case Study Drawer / Modal:**
  - Klik kartu aktif membuka detail lengkap:
    - Problem statement & arsitektur sistem.
    - Tech stack badges & technical highlights.
    - Link GitHub repository & live demo link.

### Section 03: Leadership, Public Speaking & Education
- Asymmetric Editorial Layout:
  - Track record public speaking (nama event, topik, instansi, tanggal, foto panggung).
  - Organisasi & kepemimpinan (posisi, peran strategis, capaian terukur).

### Section 04: Technical Matrix & Competency
- Arsitektur klasifikasi keahlian:
  - **Languages:** JavaScript/TypeScript, PHP, Python, C/C++, SQL.
  - **Frameworks & Ecosystem:** React, Next.js, Laravel, Tailwind CSS, Node.js/Bun.
  - **Databases & Infra:** MySQL, PostgreSQL, Docker, Git/GitHub, Linux/Terminal.
  - **Core Disciplines:** Software Architecture, Clean Code, Public Speaking, Agile/Scrum.

### Section 05: Colophon & Contact Footer
- Large statement: `MARI MEMBANGUN SESUATU YANG BERDAMPAK.`
- Fast actions:
  - One-click copy email button (`devis@...`).
  - Direct links: GitHub (`@DevisRoomi`), LinkedIn, Instagram/X.
- Colophon note: "Dirancang & direkayasa dengan standar performa TRPL 2026."

---

## 3. Data Structure (Clean Schema)

Semua data portofolio diisolasi dalam file `src/data/portfolioData.ts` agar mudah diganti/ditambah tanpa menyentuh komponen UI:

```typescript
export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Fullstack' | 'Web Architecture' | 'Open Source' | 'AI / Systems';
  year: string;
  coverImage: string;
  accentColor?: string;
  metrics?: string;
  summary: string;
  problem: string;
  architecture: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SpeakingItem {
  id: string;
  topic: string;
  event: string;
  role: string;
  date: string;
  audience: string;
  image?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  achievements: string[];
}
```

---

## 4. Directory Structure

```text
devis-portfolio/
├── docs/
│   ├── PROJECT_BRIEF.md
│   └── TECH_ARCHITECTURE.md
├── public/
│   ├── assets/
│   │   ├── portrait/
│   │   ├── projects/
│   │   └── speaking/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── showcase/
│   │   │   ├── OrbitalCarousel.tsx
│   │   │   ├── ProjectCard3D.tsx
│   │   │   ├── RotaryDial.tsx
│   │   │   └── ProjectDetailDrawer.tsx
│   │   ├── leadership/
│   │   │   └── LeadershipSection.tsx
│   │   └── skills/
│   │       └── TechMatrix.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── hooks/
│   │   ├── useOrbitalPhysics.ts
│   │   └── useWindowSize.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 5. Performance & Quality Benchmarks
- **Lighthouse Targets:**
  - Performance: ≥ 90
  - Accessibility: ≥ 95
  - Best Practices: ≥ 95
  - SEO: ≥ 95
- **Render Budget:**
  - Zero heavy 3D GLTF loaders for default view.
  - Orbit dihitung murni dengan CSS 3D transforms (`rotateY` + `translateZ`) dengan GSAP tween easing.
  - Images lazy-loaded & WebP/AVIF formatted.
