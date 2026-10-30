# VISUAL DESIGN REFERENCES & CREATIVE EXPLORATION
**Project:** DEVIS® Personal Portfolio  
**Stage:** 03 - Visual Research & Creative Direction  
**Kandidat:** Abu Devis Jalaluddin Rumi (`DEVIS®`)  
**Target Rilis:** 5 November 2026  

---

## 1. Ringkasan Hasil Riset & Benchmark Visual

Riset ini mengeksplorasi referensi dari platform desain global (**Awwwards, Godly.website, Behance, Dribbble**) dan portofolio desainer/developer pemenang penghargaan kelas dunia. 

Karakter inti yang dicari:
- **Bukan template biasa:** Menolak layout kartu generik Bootstrap/Tailwind standard.
- **Editorial Eksperimental:** Komposisi asimetris, tipografi display skala besar, margin dinamis, dan grid majalah arsitektur kontemporer.
- **Teknologi Berwibawa:** Memadukan estetika *dark monochrome* dengan kedalaman ruang interaktif (3D Radial Orbital) tanpa memperlambat performa browser.

---

## 2. Analisis Komprehensif Referensi Desain Global

### Referensi 01: Cuong Nguyen – 3D Radial Arc Carousel & Rotary Dial
- **Tautan Live:** `https://codepen.io/cuongnguyen/` / Creative Technologist Showcase
- **Analisis 10 Parameter:**
  1. *Struktur Layout:* Komposisi terpusat dengan bidang busur orbital (*curved track*) di sepertiga bawah layar.
  2. *Tipografi:* Minimalis monospaced dan sans-serif teknis berukuran kecil (`11px - 14px`) sebagai label koordinat/parameter.
  3. *Warna:* Fondasi monokrom gelap (`#0d0d0d`) dengan aksen kartu kontras tinggi.
  4. *Foto & Gambar:* Mockup proyek dibingkai dalam kartu melengkung berbayang lembut (*soft ambient drop shadow*).
  5. *Elemen Geometris:* Busur lingkaran, garis ticks derajat radial, dan pointer segitiga (`▲`).
  6. *Animasi:* Rotasi mulus berbasis inersia kalkulasi matematis trigonometri (`Math.cos`, `Math.sin`).
  7. *Interaksi Pengguna:* Drag mouse, swipe sentuh ponsel, scroll wheel, dan putaran dial dua arah.
  8. *Pengalaman Scrolling:* Virtual scroll horizontal terkunci saat kursor berada di atas carousel.
  9. *Keunikan Visual:* Efek kedalaman 3D nyata menggunakan native CSS 3D (`transform: rotateY() translateZ() scale()`) tanpa WebGL berat.
  10. *Adaptasi vs Hindari:*
      - **Adaptasi:** Struktur kalkulasi orbital, sinkronisasi dua arah kartu dan rotary dial bawah.
      - **Hindari:** Menaruh terlalu banyak teks di dalam kartu kecil karena merusak keterbacaan.

---

### Referensi 02: Dennis Snellenberg – Creative Developer Portfolio
- **Tautan Live:** `https://dennissnellenberg.com/` (Awwwards Site of the Year Nominee)
- **Analisis 10 Parameter:**
  1. *Struktur Layout:* Single page vertikal editorial dengan ritme padding lapang (*generous whitespace*).
  2. *Tipografi:* Sans-serif display ultra-besar (*Neue Montreal / PP Neue Montreal*), kontras ekstrem antara heading raksasa dan body teks ringkas.
  3. *Warna:* Hitam elegan (`#141517`), putih lembut (`#ffffff`), dan abu-abu arsitektural (`#8c8c8c`).
  4. *Foto:* Portrait studio berkarakter kuat dengan ekspresi tenang dan mask reveal saat scroll.
  5. *Elemen Geometris:* Garis horizontal tipis (*hairline divider*) 1px untuk memisahkan babak cerita.
  6. *Animasi:* Magnetic button (tombol tertarik ke arah kursor), parabolic curve image hover, dan skew text saat scroll cepat.
  7. *Interaksi:* Smooth custom cursor yang bertransformasi menjadi label "VIEW" atau "EXPLORE".
  8. *Pengalaman Scrolling:* Inertia smooth scroll yang stabil dan tidak membebani kartu grafis laptop.
  9. *Keunikan Visual:* Transisi antar-elemen terasa cair dan organik tanpa terkesan norak.
  10. *Adaptasi vs Hindari:*
      - **Adaptasi:** Magnetic CTA buttons, tipografi display skala besar, mask reveal foto hero.
      - **Hindari:** Custom cursor yang mengaburkan kursor asli sistem pada perangkat layar sentuh/tablet.

---

### Referensi 03: Basement Studio – Neo-Brutalism & High-Density Editorial
- **Tautan Live:** `https://basement.studio/` (Agency of the Year)
- **Analisis 10 Parameter:**
  1. *Struktur Layout:* Grid modular berbasis kolom asimetris dengan density informasi terukur.
  2. *Tipografi:* Kombinasi Serif editorial klasik dan Sans-serif geometris tegas.
  3. *Warna:* Monokrom hitam pekat (`#000000`) dan putih gading (`#f5f5f7`), aksen merah cadmium tajam (`#ff3333`) untuk status dan micro-badge.
  4. *Foto:* Foto berbutir halus (*film grain / halftone overlay*) yang memberi tekstur analog autentik.
  5. *Elemen Geometris:* Grid box berbingkai border tajam, badge monospaced berlabel kode, ikon koordinat teknis.
  6. *Animasi:* Snappy micro-interactions, split-text ticker, dan transisi seksi presisi.
  7. *Interaksi:* Hover state bergradien monokrom dengan umpan balik visual instan.
  8. *Pengalaman Scrolling:* Scroll snapping pada babak kunci editorial.
  9. *Keunikan Visual:* Perpaduan estetika cetak majalah arsitektur dan terminal antarmuka masa depan.
  10. *Adaptasi vs Hindari:*
      - **Adaptasi:** Micro-badge aksen merah, border garis presisi, tipografi hibrida serif + sans.
      - **Hindari:** Elemen dekoratif berlebihan yang mengalihkan perhatian penilai dari substansi teknis proyek.

---

### Referensi 04: Jesper Landberg – Experimental Technologist Portfolio
- **Tautan Live:** `https://jesperlandberg.dev/`
- **Analisis 10 Parameter:**
  1. *Struktur Layout:* Eksperimental horizontal & multi-layered depth.
  2. *Tipografi:* All-caps display serif berjarak rapat dengan tracking huruf tegas.
  3. *Warna:* Skema monokrom bernuansa graphite / charcoal.
  4. *Foto:* Foto portrait bergeser lambat mengikuti parallax sumbu Y berlawanan dengan arah scroll.
  5. *Elemen Geometris:* Simbol tipografi khusus (`(01)`, `[TRPL]`, `—>`).
  6. *Animasi:* Kinetic typography berkecepatan dinamis tergantung kecepatan scroll pengguna.
  7. *Interaksi:* Klik drag navigasi horizontal yang responsif.
  8. *Pengalaman Scrolling:* Parallax multi-layer memberi ilusi kedalaman 3 dimensi tanpa WebGL berat.
  9. *Keunikan Visual:* Ritme scroll yang membuat pengunjung penasaran membuka seksi berikutnya.
  10. *Adaptasi vs Hindari:*
      - **Adaptasi:** Parallax layered hero portrait dan tipografi kinetik horizontal.
      - **Hindari:** Navigasi horizontal kaku yang membingungkan pengunjung saat menggunakan trackpad laptop.

---

## 3. Tiga Alternatif Konsep Visual

### Konsep A: "Neo-Editorial Brutalism" (Karakter Kuat & Struktur Tajam)
- **Prinsip Utama:** Menggabungkan estetika cetak majalah high-end dengan presisi sistem engineering.
- **Tipografi:** Display serif kontemporer (*Playfair Display / Fraunces*) untuk heading nama personal, dipadukan Sans-serif geometris monospaced (*JetBrains Mono / Space Grotesk*) untuk data teknis TRPL.
- **Palet Warna:** Obsidian Black (`#0a0a0a`), Crisp White (`#ffffff`), Stone Gray (`#262626`), dengan aksen Electric Crimson (`#e63946`) untuk pointer dial dan live badge.
- **Komposisi:** Grid asimetris modular, border hairline 1px, angka babak format besar `(01, 02, 03)`.
- **Kelebihan:** Sangat berkarakter, menyampaikan kesan mahasiswa TRPL yang disiplin, teliti, dan berorientasi arsitektur.
- **Kekurangan:** Jika terlalu kaku, dapat terasa dingin atau terlalu teknis bagi audiens non-developer.

### Konsep B: "Orbital Technologist 3D" (Interaktif, Futuristik, & Imersif)
- **Prinsip Utama:** Menjadikan 3D Radial Arc Carousel dan Rotary Dial Controller sebagai pusat gravitasi pengalaman website.
- **Tipografi:** Sans-serif modern berbobot ekstra (*Cabinet Grotesk / Syne*) dipadukan font monospace minimalis.
- **Palet Warna:** Deep Charcoal (`#0f0f11`), Polar Silver (`#e2e8f0`), aksen Cobalt / Cyan pudar untuk indikator koordinat 3D.
- **Komposisi:** Dynamic viewport canvas. Bagian hero langsung memperkenalkan depth 3D kartu sebelum masuk ke eksplorasi proyek.
- **Kelebihan:** Menghadirkan faktor "WOW" instan yang membedakan portofolio Devis dari seluruh mahasiswa seangkatannya.
- **Kekurangan:** Memerlukan optimasi matematika transform yang sangat disiplin agar tidak terjadi frame-drop di laptop spesifikasi standar.

### Konsep C: "Minimalist Humanist Storyteller" (Elegansi Foto Portrait & Narasi)
- **Prinsip Utama:** Mengedepankan foto portrait Sony Alpha resolusi tinggi dan narasi perjalanan kepemimpinan/speaking.
- **Tipografi:** Clean grotesque sans-serif (*Inter / Plus Jakarta Sans*) dengan hierarki baca editorial yang sangat santai dan lapang.
- **Palet Warna:** Monokrom hangat (*Warm Ivory* `#fdfbf7` dengan *Deep Carbon* `#121212`).
- **Komposisi:** Tata letak editorial majalah fashion/biografi, single column terfokus dengan foto portrait berskala penuh (*full-bleed*).
- **Kelebihan:** Tingkat kenyamanan membaca artikel/prestasi sangat tinggi dan ramah perangkat seluler.
- **Kekurangan:** Kurang menonjolkan aspek "rekayasa teknis perangkat lunak" mutakhir yang menjadi syarat utama rubrik TRPL.

---

## 4. Rekomendasi Arah Visual Terpilih: "Hybrid Kinetic Neo-Editorial"
Menggabungkan keunggulan **Konsep A (Karakter Disiplin & Grid Presisi)** dengan **Konsep B (Showcase Orbital 3D Cuong Nguyen)**:
1. **Hero Section:** Foto portrait Sony Alpha beresolusi tinggi dengan efek duotone monokrom elegan, mask reveal saat load, didampingi tipografi besar "DEVIS®" dan label status akademik TRPL Politeknik IDN.
2. **Project Showcase:** 3D Radial Arc Carousel interaktif dengan Bottom Rotary Dial berputar dua arah, menampilkan 4 karya unggulan (DEVIS 3D Portfolio, CapyQuest, BASOKU, Setoran Companion Tahfidz).
3. **Leadership & Speaking Section:** Layout majalah editorial asimetris dengan dokumentasi foto siaran radio Santri Mengudara dan kepanitiaan Bazaar Manaahel.
4. **Certificates & Matrix Section:** Drawer grid interaktif 25+ sertifikat terverifikasi dilengkapi filter kategori (Frontend, Backend, System/AI, Islamic Character).

---

## 5. Analisis Matriks Efek Motion & Interaksi

| Efek Visual | Cara Kerja Teknis | Bagian Website | Tujuan Pengalaman Pengguna (UX) | Kompleksitas | Dampak Performa | Kategori |
|---|---|---|---|---|---|---|
| **Split-Text Reveal** | Teks dipecah per-huruf/kata, dianimasikan naik dari masking `overflow:hidden` dengan staggered delay | Header Hero & Section Title | Memberikan kesan situs dibuat secara presisi dan dramatis saat pertama dibuka | Rendah-Sedang | Sangat Ringan (<2ms paint) | **Esensial** |
| **Hero Parallax & Depth** | Posisi foto portrait bergeser 15-20% lebih lambat dibanding kecepatan scroll pengguna via GSAP ScrollTrigger | Hero Section | Menciptakan ilusi dimensi ruang arsitektural | Sedang | Ringan (menggunakan `transform: translate3d`) | **Esensial** |
| **3D Radial Arc Carousel** | Posisi kartu dihitung lewat persamaan trigonometri dengan `rotateY`, `translateZ`, dan `scale` sesuai sudut offset | Showcase Proyek Unggulan | Pengalaman interaktif tak terlupakan saat mengeksplorasi proyek rekayasa Devis | Tinggi | Terkontrol (CSS 3D HW-accelerated, tanpa beban WebGL) | **Esensial (Core Feature)** |
| **Two-Way Rotary Dial** | Putaran dial bawah menggeser indeks kartu carousel; sebaliknya drag kartu memutar jarum penunjuk radial ticks | Bawah Carousel Proyek | Kontrol taktil analog yang memuaskan dan intuitif | Tinggi | Ringan (state sync numerik murni) | **Esensial (Core Feature)** |
| **Magnetic CTA Buttons** | Elemen tombol mengikuti kursor dalam radius 40px menggunakan easing lerp | Tombol Kontak & Lihat Demo | Memberikan responsivitas mikro yang menyenangkan saat kursor mendekat | Sedang | Sangat Ringan | **Direkomendasikan** |
| **Kinetic Text Marquee** | Baris teks teknis monospaced bergerak horizontal berkesinambungan dengan kecepatan dinamis saat scroll | Pembatas Babak / Divider | Mengisi ritme transisi antar-seksi dengan identitas kata kunci keahlian | Rendah | Nol (CSS `transform` infinite loop) | **Direkomendasikan** |
| **Certificate Modal Drawer** | Lembaran detail sertifikasi meluncur halus dari bawah/samping saat kartu sertifikat diklik | Seksi Sertifikasi | Pengunjung dapat membaca detail sertifikat tanpa meninggalkan halaman utama | Sedang | Nol | **Esensial** |
| **WebGL Distortion Filter** | Efek gelombang air / distorsi piksel berat pada foto saat kursor lewat | Hero Photo | Efek visual futuristik | Sangat Tinggi | Berat (membebani GPU laptop, rawan lag) | **Dihindari (Eliminasi)** |

---

## 6. Analisis Teknis Visual Awal (Persiapan Tahap 07)

1. **Efisiensi Mesin Animasi:**
   - Animasi diatur sepenuhnya oleh kombinasi **CSS 3D Transforms** dan **GSAP (GreenSock)** dengan `will-change: transform`.
   - Menghindari penggunaan library 3D berat seperti Three.js / Babylon.js murni untuk mempertahankan skor Google Lighthouse ≥ 90.
2. **Optimasi Aset Visual:**
   - Seluruh foto portrait kamera Sony Alpha (asal 6000x3376, ~4.6MB) dikonversi menjadi format WebP modern dengan varian resolusi responsif (`1600px`, `1080px`, `720px`).
   - Rasio aspek gambar dilindungi dengan properti CSS `aspect-ratio` guna mencegah *Cumulative Layout Shift (CLS)* bernilai 0.
3. **Aksesibilitas & Standar Aksesibilitas Web:**
   - Menyediakan kueri media `@media (prefers-reduced-motion: reduce)`: jika pengunjung mengaktifkan mode hemat gerak di sistem operasi mereka, putaran 3D otomatis beralih menjadi slider kartu horizontal linear yang statis dan nyaman.

---

## 7. Hal yang Wajib Dihindari (Anti-Patterns)
- ❌ **Jangan gunakan WebGL canvas penuh:** Menghindari overheat baterai laptop dan fan bising saat penilai membuka website.
- ❌ **Jangan gunakan font display dekoratif yang sulit dibaca:** Tipografi ekspresif hanya untuk nama "DEVIS®"; judul proyek dan teks penjelasan wajib menggunakan sans-serif dengan legibilitas prima.
- ❌ **Jangan biarkan layout berantakan di layar smartphone:** Di layar mobile (<768px), sistem 3D radial orbital otomatis beradaptasi menjadi kartu swipe sentuh horizontal vertikal yang ergonomis untuk jempol.
- ❌ **Jangan buat navigasi rumit tanpa penunjuk:** Setiap elemen interaktif (dial, kartu) wajib memiliki label visual yang jelas (*"Drag or scroll to rotate"*, *"Click to inspect"*).

---

## 8. Status Keputusan & Checkpoint

### Keputusan yang Sudah Disepakati:
1. Mengadopsi arah visual **Hybrid Kinetic Neo-Editorial** (Perpaduan Kontras Monokrom Arsitektural + 3D Radial Arc Carousel Cuong Nguyen).
2. Mempertahankan skor performa dengan CSS 3D Transforms terakselerasi perangkat keras (GPU).
3. Menggunakan foto portrait Sony Alpha beresolusi tinggi dengan styling monokrom/duotone presisi di Hero section.
4. Akun Instagram resmi dikunci: `@adevss_`.
5. Kurasi sertifikat keagamaan difokuskan pada prestasi unggulan (Syahadah Tahfidz Al-Qur'an & Bahasa Arab).

### Hal Menunggu Persetujuan Pengguna:
- Pemilihan palet aksen mikro: apakah memilih **Electric Crimson** (`#e63946` / aksen merah tajam) atau **Pure Monochrome High-Contrast** (hanya hitam, putih, dan abu-abu perak tanpa warna aksen)?
