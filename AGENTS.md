# AGENTS.md - Panduan Kolaborasi Multi-AI Agent
**Project:** DEVIS® Personal Portfolio  
**Kandidat:** Abu Devis Jalaluddin Rumi (`DEVIS®`)  
**Repository Convention:** `project-nama-nim` (Menunggu NIM resmi)  

---

## 1. Ikhtisar & Karakter Proyek
DEVIS® Personal Portfolio adalah situs portofolio rekayasa perangkat lunak arsitektural mahasiswa TRPL Politeknik IDN Bogor.
- **Karakter Visual:** Monokromatik arsitektural Deep Architectural Charcoal (`#121316`) 90% dengan aksen fungsional Electric Crimson (`#e63946`) 10%.
- **Arsitektur:** Client-side SPA statis tanpa backend/database, berbasis React 19 + TypeScript + Bun + Tailwind CSS v3 + CSS 3D + GSAP Core.

---

## 2. Aturan Emas Kolaborasi AI (Golden Rules)

1. **Single Source of Truth:** Seluruh keputusan desain, konten, dan gerak mengacu mutlak pada berkas di direktori `docs/` (`PROJECT_BRIEF.md`, `PERSONAL_CONTENT.md`, `ASSET_INVENTORY.md`, `DESIGN_SYSTEM.md`, `MOTION_SPEC.md`, `TECHNICAL_ARCHITECTURE.md`).
2. **Single Active Writer Rule:** Satu file hanya boleh diedit oleh satu agen dalam satu waktu. Dilarang melakukan modifikasi simultan pada file yang sama.
3. **No Code / Dependency Before Permission:** Dilarang menginstal library baru atau membuat berkas aplikasi tanpa instruksi langsung dari pengguna.
4. **Zero Dummy Information:** Dilarang keras mengarang data pengalaman, nilai, prestasi, sertifikat, atau riwayat pribadi. Semua konten wajib berasal dari `docs/PERSONAL_CONTENT.md`.
5. **Verifiable Real Output:** Setiap klaim keberhasilan tugas harus dibuktikan dengan hasil eksekusi terminal nyata (build lulus, lint lulus, file tercipta). Dilarang menyajikan luaran palsu (*hallucinated output*).

---

## 3. Pembagian Peran AI Agent

- **Hermes:** 
  - Peran: Koordinator utama, pengelola task, eksekutor terminal (build, test, audit), penjaga dokumentasi dan git hygiene.
- **Antigravity:**
  - Peran: Implementasi antarmuka frontend, penulisan komponen di `src/components/`, styling Tailwind CSS v3, dan tuning visual interaktif.
- **GPT:**
  - Peran: Review kode kritis, optimalisasi matematika sudut 3D orbital, audit keamanan tipe TypeScript, verifikasi error build.
- **Gemini:**
  - Peran: Riset estetika editorial majalah, auditing rasio kontras visual, dan alternatif layout asimetris.
- **Kiro:**
  - Peran: Validasi acceptance criteria roadmap 12 tahap, verifikasi data konten pribadi terhadap fakta terverifikasi.

---

## 4. Konvensi Koding & Struktur Arsitektur

- **Bahasa:** TypeScript ketat (`strict: true` di `tsconfig.json`). Dilarang menggunakan tipe `any`.
- **Komponen:** Functional components React murni dengan props ber-interface jelas.
- **Folder Convention:**
  - `src/components/ui/`: Komponen atomik (Button, Badge, Drawer).
  - `src/components/3d/`: Komponen orbital 3D dan Rotary Dial.
  - `src/sections/`: 7 babak section narasi (`01_Preloader.tsx` s.d. `07_ContactSection.tsx`).
  - `src/content/`: Dictionaries bilingual statis (`id.ts`, `en.ts`, `types.ts`).
  - `src/animations/`: Helper matematika 3D (`orbitalMath.ts`) dan kurva motion (`motionTokens.ts`).
- **Styling Convention:**
  - Gunakan class utilitas Tailwind CSS v3 semantik (`bg-canvas-bg`, `text-text-primary`, `border-border-subtle`, `text-crimson`).
  - Untuk 3D preserve-3d, gunakan definisi CSS native di `src/styles/3d-orbital.css`. Dilarang menggunakan `contain: paint` pada kontainer carousel 3D.
- **Aksesibilitas (A11y):**
  - Setiap tombol interaktif memiliki `aria-label` jelas.
  - Dukungan navigasi keyboard penuh (`Tab`, `ArrowLeft`, `ArrowRight`, `Escape`).
  - Kepatuhan mutlak `@media (prefers-reduced-motion: reduce)`.
- **Performa Guard:**
  - `will-change: transform` hanya disuntikkan secara dinamis saat drag/swipe aktif, dan dicabut saat pointer release.
  - Target performa: LCP ≤ 2.5s (Internal ≤ 1.8s), INP ≤ 200ms (Internal ≤ 80ms), CLS ≤ 0.10 (Internal = 0.00).

---

## 5. Protokol Sebelum Mengubah Kode
Setiap agent yang menerima instruksi pengerjaan wajib:
1. Membaca `docs/TECHNICAL_ARCHITECTURE.md` dan `AGENTS.md`.
2. Memeriksa status branch kerja (`git status`).
3. Memastikan tidak melanggar batasan tahapan roadmap aktif.
4. Menjalankan verifikasi lokal sebelum melaporkan penyelesaian.
