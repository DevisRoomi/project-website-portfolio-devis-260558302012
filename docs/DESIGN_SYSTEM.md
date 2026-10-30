# DESIGN SYSTEM & VISUAL LANGUAGE SPECIFICATION
**Project:** DEVIS® Personal Portfolio  
**Stage:** 05 - Design System & Token Architecture  
**Kandidat:** Abu Devis Jalaluddin Rumi (`DEVIS®`)  
**Status:** Architecture Ready & Documented  

---

## 1. Prinsip Desain (Design Principles)

1. **Architectural Rigor (Presisi Rekayasa)**  
   Setiap spasi, garis grid, dan elemen tipografi dirancang dengan rasio terukur. Mencerminkan pola pikir seorang mahasiswa Rekayasa Perangkat Lunak (TRPL) yang mengutamakan kerapian struktural.
2. **Honest Material & Authenticity (Kejujuran Visual)**  
   Tidak menggunakan foto sintetis AI atau mockup 3D buatan tanpa kode. Menggunakan foto portrait autentik Sony Alpha ILCE-6000 milik Devis, kode nyata proyek, serta arsip dokumentasi kepemimpinan riil.
3. **Restrained Boldness (Keberanian yang Terkendali)**  
   Didominasi oleh 90% monokrom obsidian gelap dan abu-abu perak. Warna aksen *Electric Crimson* (`#e63946`) digunakan secara hemat dan disiplin—hanya untuk jarum penunjuk interaksi primer dan indikator status aktif.
4. **Performance as an Aesthetic (Performa adalah Estetika)**  
   Animasi dan efek 3D dikalkulasi dengan CSS 3D Transforms terakselerasi perangkat keras (GPU). Tidak ada efek visual berat yang mengorbankan fluiditas 60 FPS atau menghabiskan baterai laptop penilai.

---

## 2. Color System

### Alternatif 1: "Obsidian & Electric Crimson" (Rekomendasi Utama - Disepakati 90:10)
Fondasi monokrom berkarakter arsitektural dengan aksen merah tajam terkalibrasi untuk interaksi:

| Token Name | Nilai HEX | Peran & Penggunaan | Kontras Rasio (ke BG) |
|---|---|---|---|
| `bg-primary` | `#121316` | Background canvas utama (Architectural Charcoal - ramah mata) | Dasar |
| `surface-card` | `#1a1b20` | Background kartu proyek dan kontainer | 1.15:1 |
| `surface-elevated`| `#22242b` | Modal drawer, dropdown, sticky navbar | 1.35:1 |
| `border-subtle` | `#2b2d36` | Hairline border pembatas komponen (1px) | 1.6:1 |
| `border-strong` | `#3f424e` | Border kartu aktif atau state hover | 2.5:1 |
| `text-primary` | `#f1f1f4` | Heading utama, nama DEVIS®, data kunci | **14.5:1 (WCAG AAA)** |
| `text-secondary`| `#9da1b0` | Paragraf narasi, deskripsi proyek | **5.8:1 (WCAG AA)** |
| `text-muted` | `#636778` | Label teknis, tanggal, nomor indeks babak | **3.1:1 (Sub-info)** |
| `accent-crimson` | `#e63946` | Jarum dial rotary, dot status live, CTA primer | **4.6:1 (WCAG AA)** |
| `accent-hover` | `#ff4d5a` | State hover tombol primer | 5.3:1 |
| `accent-subtle`| `rgba(230, 57, 70, 0.12)` | Glow lembut di belakang jarum penunjuk aktif | Dekoratif |

---

### Alternatif 2: "Graphite Matrix & Monochromatic Silver" (Opsi Pembanding)
Pendekatan 100% monokrom tanpa aksen warna apa pun:
- `bg-primary`: `#0d0d0f`
- `surface-card`: `#16161a`
- `text-primary`: `#ffffff`
- `text-secondary`: `#a1a1aa`
- `accent-silver`: `#e4e4e7` (Aksen aktif berupa putih perak berkilau)
- *Evaluasi:* Sangat elegan dan tenang, namun umpan balik interaksi pada jarum rotary dial dan tombol kontak terasa kurang menonjol dibanding Alternatif 1.

---

## 3. Typography System

Menggunakan kombinasi font legal Google Fonts berkarakter kuat yang mendukung penuh aksara Latin dan dioptimalkan untuk web.

### Pasangan Tipografi Resmi:
1. **Display & Brand Font:** `Syne` (Google Fonts)  
   *Karakter:* Geometris ekspresif, sudut tajam, berani. Digunakan untuk wordmark `DEVIS®`, judul hero, dan angka babak raksasa `(01, 02)`.
2. **Heading & Body Font:** `Plus Jakarta Sans` (Google Fonts)  
   *Karakter:* Modern neo-grotesque, legibilitas sangat tinggi di layar retina maupun ponsel, bentuk netral dan berkelas.
3. **Technical & Metadata Font:** `JetBrains Mono` (Google Fonts)  
   *Karakter:* Monospaced teknis engineer, tanda kurung siku `[TRPL-05]`, derajat busur dial `(120° / 360°)`, serta data tanggal.

---

### Skala Hierarki Tipografi (Type Scale)

| Level Hierarki | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| **Display / Hero** | `Syne` | `clamp(3.5rem, 8vw, 7.5rem)` | `3.25rem` | 800 (ExtraBold) | 0.95 | `-0.04em` |
| **Heading 1 (H1)** | `Syne` | `clamp(2.5rem, 5vw, 4rem)` | `2.25rem` | 700 (Bold) | 1.1 | `-0.03em` |
| **Heading 2 (H2)** | `Plus Jakarta Sans` | `clamp(1.75rem, 3vw, 2.5rem)` | `1.5rem` | 600 (SemiBold) | 1.2 | `-0.02em` |
| **Heading 3 (H3)** | `Plus Jakarta Sans` | `1.25rem (20px)` | `1.125rem` | 600 (SemiBold) | 1.3 | `-0.01em` |
| **Body Large** | `Plus Jakarta Sans` | `1.125rem (18px)` | `1.0rem` | 400 (Regular) | 1.6 | `0em` |
| **Body Regular** | `Plus Jakarta Sans` | `1.0rem (16px)` | `0.9375rem` | 400 (Regular) | 1.65 | `0em` |
| **Technical Code**| `JetBrains Mono` | `0.875rem (14px)` | `0.8125rem` | 500 (Medium) | 1.5 | `+0.02em` |
| **Micro Caption** | `JetBrains Mono` | `0.75rem (12px)` | `0.6875rem` | 400 (Regular) | 1.4 | `+0.06em` (All-Caps) |

---

## 4. Layout, Grid, & Spacing System

### Grid System Spesifikasi:
- **Max Content Width:** `1440px` (terpusat dengan margin otomatis).
- **Container Margins (Padding Samping):**
  - Desktop (≥1280px): `80px` (`px-20`)
  - Tablet (768px - 1023px): `48px` (`px-12`)
  - Mobile (<768px): `24px` (`px-6`)
- **Column Grid:** 12-kolom dinamis dengan gutter `24px` (`gap-6`) di desktop, 6-kolom di tablet, 4-kolom di mobile.
- **Komposisi Asimetris:** Rasio pembagian editorial 5 : 7 (Hero teks vs portrait) dan 4 : 8 (Heading babak vs konten carousel/matrix).

---

### Spacing Scale (Kelipatan 4px / 8px)
- `space-1`: `4px`
- `space-2`: `8px`
- `space-3`: `12px`
- `space-4`: `16px`
- `space-6`: `24px`
- `space-8`: `32px`
- `space-12`: `48px`
- `space-16`: `64px`
- `space-24`: `96px` (Jarak section mobile)
- `space-32`: `128px` (Jarak section desktop)

---

## 5. Visual Language Komponen Inti

### 1. Logo / Wordmark
- **Tampilan:** `DEVIS®` diketik dengan font `Syne` 800 all-caps, diikuti badge monospaced `[TRPL-05]` berwarna abu-abu perak.
- **Interaksi:** Hover memicu pergeseran subtle tracking spasi huruf (+0.02em) dengan transisi 300ms.

### 2. Floating Navbar (Minimalist Glass Pill)
- **Bentuk:** Kapsul melayang (*pill floating*) dengan tinggi `52px`, background `rgba(18, 18, 22, 0.75)`, efek `backdrop-blur-md`, border hairline 1px `#23232c`.
- **Elemen:** Quick navigation link `[01 Work] [02 About] [03 Leadership] [04 Credentials] [05 Contact]`.
- **Indikator Aktif:** Capsule highlight abu-abu halus yang meluncur mengikuti posisi scroll seksi aktif.

### 3. Tombol (Buttons & CTA)
- **Primary Button (Magnetic CTA):**
  - Background: `#f4f4f6` (putih kontras), teks `#0a0a0c` tebal.
  - Border radius: `9999px` (kapsul penuh). Padding: `14px 28px`.
  - Hover: Easing magnetik mengikuti kursor (radius 30px); background berubah menjadi Electric Crimson `#e63946` dengan teks putih.
- **Secondary Button (Hairline Outline):**
  - Background: transparan, border 1px `#3e3e4f`, teks `#f4f4f6`.
  - Hover: Border berubah menjadi `#f4f4f6`, background `rgba(255,255,255,0.05)`.

### 4. Kartu Proyek 3D (Radial Arc Cards)
- **Bentuk:** Persegi panjang vertikal rasio 16:10, border radius `16px`.
- **Border & Surface:** Background `#121216`, border 1px `#23232c`, bayangan halus `0 20px 40px -15px rgba(0,0,0,0.7)`.
- **Struktur Kartu:** Mockup visual di bagian atas, label kategori monospaced di tengah, judul proyek tebal, dan deretan tag teknologi pill di bawah.
- **Transformasi 3D:** Dikendalikan oleh properti CSS `rotateY()`, `translateZ()`, dan `scale()` sesuai kalkulasi orbital sudut dial.

### 5. Bottom Rotary Dial Controller
- **Bentuk:** Busur setengah lingkaran radial berdiameter `280px` di desktop (`220px` di mobile).
- **Elemen:** Garis radial ticks derajat berwarna abu-abu redup `#3e3e4f`, jarum penunjuk aktif bertinta **Electric Crimson** `#e63946`.
- **Interaksi:** Dapat digeser dengan drag kursor mouse, diputar dengan roda scroll, atau disentuh swipe pada layar sentuh.

### 6. Badges & Tags
- **Bentuk:** Kapsul mini `px-2.5 py-1`, background `rgba(255,255,255,0.04)`, border 1px `#23232c`.
- **Tipografi:** `JetBrains Mono` 11px uppercase dengan tracking lebar (`+0.05em`).

---

## 6. Elemen Geometris & Aksentuasi Arsitektural

1. **Crosshair Coordinates (`+`):**  
   Diletakkan pada sudut luar pembingkaian seksi dan pojok kartu proyek untuk menegaskan karakter rekayasa teknis sistemik.
2. **Hairline Dividers (1px Lines):**  
   Garis pemisah antar-babak dengan gradasi dari transparan → `#23232c` → transparan.
3. **Technical Coordinate Stamps:**  
   Koordinat geografis Lumajang `[08°08'S 113°13'E]` dan kampus IDN Bogor `[06°35'S 106°47'E]` disematkan sebagai micro-caption di header dan footer.
4. **Indeks Babak Format Besar:**  
   Angka `01`, `02`, `03`, `04` dengan opacity 15% berukuran 120px melayang di sudut belakang heading seksi.

---

## 7. Image Direction & Photo Treatment

1. **Foto Portrait Sony Alpha (`DSC04315.JPG`):**
   - **Grading:** Monokrom kontras tinggi dengan bayangan dalam (*deep rich blacks*) dan tekstur wajah natural yang dipertahankan.
   - **Masking:** Dipotong bersih dengan rasio aspek editorial 4:5, berpadu mulus dengan background `#0a0a0c`.
   - **Keaslian:** Tidak ada manipulasi fitur wajah atau penyuntingan sintetis AI.
2. **Foto Dokumentasi Lapangan (Radio Santri & Bazaar):**
   - Disajikan dalam bingkai berbingkai border hairline 1px `#23232c`.
   - Pada posisi idle: Saturasi 0% (monokrom elegan) dengan butiran film halus (*subtle grain*).
   - Saat di-hover: Bertransisi halus (400ms) menjadi warna autentik aslinya (full color saturation 100%).
3. **Dokumen Sertifikat:**
   - Ditampilkan dalam kartu grid dengan preview rasio A4 (1:1.414).

---

## 8. Arsitektur Design Tokens (CSS Variables)

Token berikut siap diimpor langsung ke dalam konfigurasi Tailwind CSS dan stylesheet aplikasi:

```css
:root {
  /* Colors - Deep Architectural Charcoal & Electric Crimson */
  --color-bg-primary: #121316;
  --color-surface-card: #1a1b20;
  --color-surface-elevated: #22242b;
  --color-border-subtle: #2b2d36;
  --color-border-strong: #3f424e;
  --color-text-primary: #f1f1f4;
  --color-text-secondary: #9da1b0;
  --color-text-muted: #636778;
  --color-accent-crimson: #e63946;
  --color-accent-hover: #ff4d5a;
  --color-accent-subtle: rgba(230, 57, 70, 0.12);

  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
}
```

---

## 9. Aksesibilitas & Standar WCAG

1. **Kontras Warna:** Seluruh teks teks utama mencapai rasio kontras minimal `17.8:1` terhadap background `#0a0a0c` (jauh melampaui batas standar WCAG AAA `7:1`).
2. **Keyboard Focus Ring:** Setiap elemen tombol, tautan, dan dial memiliki outline fokus keyboard yang jelas: `2px solid #e63946` dengan offset `2px`.
3. **Touch Targets (Mobile):** Semua tombol dan target ketukan di layar sentuh berukuran minimal `44px x 44px`.
4. **Prefers-Reduced-Motion:** Menyediakan fallbacks otomatis via CSS `@media (prefers-reduced-motion: reduce)` yang mematikan parallax dan transisi rotasi 3D bagi pengunjung yang sensitif terhadap gerakan.

---

## 10. Status Keputusan Checkpoint

- [x] Rasio Palet Disepakati: 90% Obsidian Monokrom + 10% Electric Crimson.
- [x] Pasangan Font Dipilih: `Syne` (Display/Hero) + `Plus Jakarta Sans` (Body) + `JetBrains Mono` (Data Teknis).
- [x] Kontroler 3D Cuong Nguyen: Rotary dial busur bawah dengan needle pointer merah crimson.
- [x] Treatment Foto: Foto Sony Alpha natural tanpa distorsi AI, dokumentasi lapangan monokrom-to-color on hover.
