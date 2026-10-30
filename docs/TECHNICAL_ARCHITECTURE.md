# TECHNICAL ARCHITECTURE & AI DEVELOPMENT SPECIFICATION (FINAL VERIFIED)
**Project:** DEVIS® Personal Portfolio  
**Stage:** 07 - Technical Architecture & AI Workflow  
**Kandidat:** Abu Devis Jalaluddin Rumi (`DEVIS®`)  
**Status:** Approved & Ready for Scaffolding (Zero-Code Stage)  

---

## 1. Final Technology Stack

Ditetapkan secara tegas tumpukan teknologi minimalis, performan, dan ramah evaluasi akademik:

- **Runtime & Tooling:** `Bun (v1.4.2)` sebagai package manager dan script runner instan.
- **Build Engine & Framework:** `Vite (v6.x)` + `React 19` + `TypeScript (v5.x)` dalam arsitektur Client-Side Static Single Page Application (SPA).
- **Styling Engine:** `Tailwind CSS v3 (v3.4.17)` dengan custom design tokens charcoal `#121316` dan electric crimson `#e63946`. Dipadukan CSS Variables native untuk transformasi 3D dinamis.
- **Motion & Interactivity:** 
  - CSS 3D Native Transforms (`perspective`, `rotateY`, `translateZ`, `scale`) dieksekusi chip GPU.
  - `gsap (v3.12.x)` Core (tree-shaken, zero paid plugins) untuk preloader timeline, inersia momentum carousel, dan drawer transition.
- **Iconography:** `lucide-react` (impor modular pohon goyang / tree-shakeable).
- **Internationalization (i18n):** Zero-dependency React Context + Static Type-Safe TypeScript Dictionaries (`id.ts` & `en.ts`).
- **Target Hosting:**
  - **Hosting Utama:** **GitHub Pages** (sesuai standar penilaian akademik mahasiswa TRPL Politeknik IDN).
  - **Hosting Alternatif:** **Vercel** (fallback preview deployment instan).

---

## 2. Rencana Dependensi (Zero Installed Yet)

Belum ada berkas dependensi yang dipasang (`node_modules` kosong). Rencana dependensi minimalis:

### Dependencies (Produksi):
- `react` (^19.0.0) & `react-dom` (^19.0.0): Core rendering antarmuka.
- `gsap` (^3.12.5): Timeline sequencing preloader dan matematika inersia rotasi.
- `lucide-react` (^0.475.0): Ikon antarmuka minimalis bertinta hairline.

### DevDependencies (Pengembangan & Build):
- `typescript` (^5.7.0): Type-safety seluruh data personal dan prop komponen.
- `vite` (^6.1.0): Tooling bundler ultra-cepat dengan Bun HMR.
- `@vitejs/plugin-react` (^4.3.4): Dukungan Fast Refresh React pada Vite.
- `tailwindcss` (^3.4.17), `postcss` (^8.5.0), `autoprefixer` (^10.4.20): Utilitas CSS dan purger otomatis.
- `@types/react` (^19.0.0), `@types/react-dom` (^19.0.0), `@types/node` (^22.0.0): Definisi tipe standar.

---

## 3. Konfigurasi Tailwind CSS v3

File: `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: '#121316',        // Deep Architectural Charcoal
          surface: '#1a1b20',   // Card Surface
          elevated: '#22242b',  // Elevated Drawer & Sticky Navbar
        },
        border: {
          subtle: '#2b2d36',    // Hairline border
          strong: '#3f424e',
        },
        text: {
          primary: '#f1f1f4',   // WCAG AAA (Contrast ratio 14.8:1)
          secondary: '#9da1b0', // WCAG AA
          muted: '#636778',
        },
        crimson: {
          DEFAULT: '#e63946',   // Functional Electric Crimson (10% ratio)
          hover: '#ff4d5a',
          subtle: 'rgba(230, 57, 70, 0.12)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 4. Evaluasi CSS Containment & 3D Orbital

1. **Penghapusan `contain: paint`:**
   - Properti `contain: paint` **dilarang keras** pada kontainer carousel 3D. `contain: paint` memicu pembatasan kanvas render (*overflow clipping*), merusak konteks z-index spasial, dan memotong kartu 3D yang berputar ke arah luar sumbu Z.
2. **Containment Aman:**
   - Gunakan `contain: layout style` pada wrapper carousel.
   - Panggung 3D orbital wajib menggunakan `overflow: visible` dengan `transform-style: preserve-3d`.
   - Masing-masing kartu individual menerapkan `backface-visibility: hidden` dan `isolation: isolate` agar layer compositing GPU tetap optimal tanpa kebocoran memori VRAM.

---

## 5. Strategi LCP: Font Loading & Image Optimization

1. **Font Loading (Zero FOIT / Layout Shift):**
   - Font Syne, Plus Jakarta Sans, dan JetBrains Mono di-host secara lokal di `public/assets/fonts/` (format `.woff2`).
   - Preload di `index.html`:
     ```html
     <link rel="preload" href="/assets/fonts/syne-bold.woff2" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="/assets/fonts/plus-jakarta-sans-regular.woff2" as="font" type="font/woff2" crossorigin>
     ```
   - `@font-face` menerapkan aturan `font-display: swap` dengan font fallback sistem (`system-ui`, `sans-serif`) yang memiliki metriks ukuran terkalibrasi.
2. **Image Optimization & Preload:**
   - Foto hero portrait Sony Alpha dikonversi ke WebP tajam terkompresi (<90KB) dan di-preload:
     ```html
     <link rel="preload" as="image" href="/assets/images/hero-portrait.webp" type="image/webp" fetchpriority="high">
     ```
   - Semua gambar di bawah viewport (thumbnail proyek, sertifikat, dokumentasi organisasi) menggunakan native `loading="lazy"`, `decoding="async"`, serta atribut eksplisit `aspect-ratio: 16/10` untuk menjamin `CLS = 0.00`.

---

## 6. Realistis JavaScript Failure Fallback (Testable <noscript>)

Sebagai SPA berbasis Vite + React, React tidak dapat merender virtual DOM tanpa JavaScript. Untuk membuktikan prinsip *Graceful Degradation* secara nyata tanpa mengklaim SSG palsu:

1. **Implementasi Semantic `<noscript>`:**
   Di dalam `index.html`, tepat setelah `<div id="root"></div>`, disematkan struktur HTML semantik murni:
   ```html
   <noscript>
     <div style="background-color: #121316; color: #f1f1f4; padding: 40px 24px; font-family: sans-serif; max-width: 800px; margin: 0 auto; line-height: 1.6;">
       <h1 style="color: #e63946; font-size: 28px; margin-bottom: 8px;">ABU DEVIS JALALUDDIN RUMI (DEVIS®)</h1>
       <p style="color: #9da1b0; font-size: 16px; margin-bottom: 24px;">Mahasiswa Teknologi Rekayasa Perangkat Lunak (TRPL) • Politeknik IDN Bogor</p>
       <div style="border-left: 3px solid #e63946; padding-left: 16px; margin-bottom: 32px; color: #f1f1f4;">
         <em>Mode Statis: JavaScript dinonaktifkan pada peramban Anda. Ringkasan portofolio esensial disajikan secara langsung.</em>
       </div>
       
       <h2 style="font-size: 20px; border-bottom: 1px solid #2b2d36; padding-bottom: 8px;">Karya Terpilih (Featured Works)</h2>
       <ul>
         <li><strong>DEVIS® Interactive 3D Portfolio</strong> - React 19, CSS 3D Transforms, Bun, Tailwind CSS.</li>
         <li><strong>CapyQuest</strong> - Bun, Hono API, React 19, bun:sqlite RPG Habit Tracker.</li>
         <li><strong>BASOKU</strong> - Laravel, Livewire, MySQL Enterprise Retail & POS Architecture.</li>
         <li><strong>Setoran Companion</strong> - Cloud Tahfidz Recording System (Lovable Web App).</li>
       </ul>

       <h2 style="font-size: 20px; border-bottom: 1px solid #2b2d36; padding-bottom: 8px; margin-top: 32px;">Kepemimpinan & Publik</h2>
       <p>Broadcaster & MC Acara "Santri Mengudara", Sekretaris & Bendahara Umum Organisasi Santri/OSIS, Ketua Panitia Bazaar Amal Manaahel.</p>

       <h2 style="font-size: 20px; border-bottom: 1px solid #2b2d36; padding-bottom: 8px; margin-top: 32px;">Kontak Resmi</h2>
       <p>Email: <a href="mailto:abudevis5@gmail.com" style="color: #e63946;">abudevis5@gmail.com</a> | GitHub: <a href="https://github.com/DevisRoomi" style="color: #e63946;">DevisRoomi</a></p>
     </div>
   </noscript>
   ```
2. **Verifikasi Pengujian:**
   Dapat diuji 100% dengan mematikan JavaScript di pengaturan browser (`Settings > Site Settings > JavaScript > Don't allow`). Konten profil, daftar proyek, kepemimpinan, dan kontak tampil seketika dengan kontras tinggi tanpa layar kosong (*white screen*).

---

## 7. Pemetaan 7 Babak Struktur SITEMAP.md & PERSONAL_CONTENT.md

Arsitektur aplikasi merangkum persis struktur yang disetujui di `docs/SITEMAP.md`:

```text
src/sections/
├── 01_Preloader.tsx        # Event-driven critical asset counter + Hard Timeout 1400ms + Skip button
├── 02_HeroSection.tsx      # Identitas TRPL, portrait Sony Alpha, status pulse crimson
├── 03_AboutSection.tsx     # Filosofi rekayasa, Triad Karakter: Technical, Speech, Leadership
├── 04_WorksSection.tsx     # 4 Proyek Unggulan: 3D Radial Arc Carousel + Toggle Editorial Grid
├── 05_LeadershipSection.tsx# MC Santri Mengudara, Bazaar Amal Manaahel, Sekretaris/Bendahara OSIS
├── 06_CredentialsSection.tsx# Filter kategori & grid 25+ sertifikat (SantriKoding, Bisa.AI, Linux, dll)
└── 07_ContactSection.tsx   # Direct email, one-click copy feedback, GitHub DevisRoomi, LinkedIn, IG @adevss_
```
Didukung oleh:
- `src/components/navigation/FloatingNavbar.tsx` (Sticky glass navbar + scroll progress bar)
- `src/components/ui/Footer.tsx` (Colophon & smooth back to top)
- `src/components/modals/ProjectDrawer.tsx` (Sub-drawer spesifikasi teknis proyek)
- `src/components/modals/CertificateModal.tsx` (Sub-drawer pratinjau lembar PDF sertifikat)

---

## 8. Data 100% Nyata & Bebas Dummy

Seluruh data diisolasi ke dalam `src/content/id.ts` dan `src/content/en.ts` berbasis `docs/PERSONAL_CONTENT.md`:

1. **Identitas:** Abu Devis Jalaluddin Rumi (`DEVIS®`), TRPL Politeknik IDN Bogor Angkatan 5.
2. **4 Proyek Unggulan:**
   - `DEVIS® Interactive 3D Portfolio` (React + Vite + GSAP + CSS 3D)
   - `CapyQuest` (Bun + Hono + React 19 + `bun:sqlite`)
   - `BASOKU` (Laravel + Livewire + MySQL POS & ERD)
   - `Setoran Companion` (`https://setoran-companion.lovable.app/`)
3. **Kepemimpinan Terverifikasi:** MC Siaran Radio Santri Mengudara, Ketua Panitia Bazaar Amal Manaahel, Sekretaris & Bendahara Umum Organisasi Santri.
4. **25+ Sertifikat:** SantriKoding (Fullstack Laravel/Vue), Bisa.AI (AI/Python), Linux Foundation, Dicoding, Microsoft, dan tahfidz keagamaan pilihan.
5. **Kontak Resmi:** `abudevis5@gmail.com`, GitHub `DevisRoomi`, Instagram `@adevss_`.

---

## 9. Konfigurasi Deployment GitHub Pages & Vercel

### A. Pengaturan Base Path Dinamis (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Mendukung root path pada Vercel/Local dan sub-path pada GitHub Pages
  base: process.env.GITHUB_PAGES === 'true' ? '/project-nama-nim/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react_core: ['react', 'react-dom'],
          animation_engine: ['gsap'],
          ui_icons: ['lucide-react'],
        },
      },
    },
  },
});
```

### B. Otomasi GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy DEVIS Portfolio to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Bun Runtime
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: 1.4.2

      - name: Install Dependencies
        run: bun install --frozen-lockfile

      - name: Build Static Distribution
        run: bun run build
        env:
          GITHUB_PAGES: 'true'

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 10. Sederhana Git Workflow

- **Branch Utama:**
  - `main`: Kode produksi teruji. Setiap merge wajib lolos uji build lokal (`bun run build`).
  - `feature/<nama-tahap>`: Branch pengerjaan terisolasi (contoh: `feature/scaffolding`, `feature/orbital-carousel`). Setelah selesai dan diverifikasi user, di-merge ke `main`.
- **Commit Convention:**
  - `feat:` penambahan fitur/komponen
  - `fix:` perbaikan bug/layout
  - `style:` penyesuaian estetika/CSS
  - `docs:` pembaruan spesifikasi/README
  - `perf:` optimasi memori/VRAM/LCP
- **Catatan Keamanan:** Tidak ada repositori yang dibuat dan tidak ada commit/push sebelum izin pengguna serta informasi NIM diberikan.

---

## 11. Target & Ambang Core Web Vitals

| Metrik | Ambang Batas Resmi Google (Pass) | Target Rekayasa Internal | Pengujian |
|---|---|---|---|
| **LCP** | **≤ 2.5 Detik** | **≤ 1.8 Detik** | WebPageTest & Lighthouse Throttled 4G |
| **INP** | **≤ 200 ms** | **≤ 80 ms** | Chrome DevTools Performance CPU 4x Throttling |
| **CLS** | **≤ 0.10** | **= 0.00** | Chrome DevTools Rendering Paint Shift |
| **Lighthouse** | **Target Optimasi ≥ 90** | **Target Optimasi ≥ 95** | Local Headless Audit CLI via Bun |
