# PROJECT BRIEF: DEVIS® Personal Portfolio
**Dokumen Perencanaan Produk & Spesifikasi Awal**
**Status:** Menunggu Persetujuan (Tahap 01)
**Tanggal Target Rilis:** 5 November 2026

---

## 1. Gambaran Umum Project
Website personal portfolio interaktif berstandar tinggi untuk merepresentasikan **Devis** sebagai mahasiswa Teknologi Rekayasa Perangkat Lunak (TRPL), calon Software Engineer, komunikator, dan calon Tech Entrepreneur. Website menggabungkan estetika *editorial experimental* dengan standar performa dan rekayasa web modern.

---

## 2. Visi dan Tujuan
- **Tujuan Utama (v1):** Memenuhi standar penilaian dan rubrik akademik TRPL secara ekselen sekaligus memikat evaluator/praktisi industri.
- **Tujuan Jangka Menengah:** Aset reputasi profesional jangka panjang untuk melamar magang/pekerjaan Software Engineer dan personal branding sebagai tech leader/speaker.
- **Ukuran Keberhasilan:** 
  1. Nilai akademik maksimal (evaluasi rubrik TRPL terpenuhi utuh).
  2. Performa teknis prima (skor Lighthouse tinggi: performa, aksesibilitas, SEO, best practices).
  3. Daya pikat visual editorial yang membedakan profil Devis dari portfolio template standar.

---

## 3. Arah Personal Branding & Persona
- **Persona Inti:** *Engineer Teknis Berorientasi Dampak (Technologist, Speaker, Leader).*
- **Hierarki Citra:**
  1. **Fondasi Utama:** Kapabilitas software engineering yang solid, teruji, dan paham arsitektur.
  2. **Nilai Pembeda (Diferensiasi):** Kemampuan public speaking, komunikasi artikulatif, dan rekam jejak kepemimpinan organisasi.
- **Kesan Pengunjung:** "Mahasiswa rekayasa perangkat lunak yang tidak hanya jago ngoding dan problem-solving, tetapi juga komunikatif, berwawasan produk, dan siap memimpin."

---

## 4. Target Pengunjung
1. **Dosen & Asesor Akademik TRPL:** Mencari bukti kedalaman teknis, arsitektur kode bersih, struktur data/proyek yang rapi, dan kelengkapan rubrik.
2. **Reviewer Industri / HR / Engineering Lead:** Menilai kepraktisan, estetika UI/UX profesional, kebersihan kode, kecepatan load web, dan relevansi studi kasus.

---

## 5. Pengalaman Pengunjung (User Experience)
- **Karakter Alur:** Naratif-editorial dengan pengalaman visual imersif.
- **Strategi Perangkat (Device Split):**
  - **Desktop / Laptop (Prioritas Utama):** Pengalaman *hybrid scroll* (navigasi horizontal di bagian showcase terpilih, kinetic typography, efek parallax halus, interaksi kursor/hover foto portrait).
  - **Mobile / Layar Sentuh:** Fallback vertikal editorial elegan yang ringan, bebas lag gesture, dan tetap mempertahankan hierarki tipografi besar.

---

## 6. Arah Kreatif & Estetika Visual
- **Gaya Desain:** *Editorial Experimental Creative*.
- **Palet Warna:** Fondasi monokrom elegan (High-contrast Black, Deep Charcoal, Pure White) dengan aksen kontras minimalis untuk status/interaksi.
- **Tipografi:** Tipografi ekspresif dan berskala besar (editorial serif/sans modern berpasangan dengan mono font teknis).
- **Hero Section:** Foto portrait interaktif berkualitas tinggi sebagai *anchor point* visual pertama.
- **Elemen Grafis & Showcase Khusus:** 
  - **3D Radial Card Carousel (Cuong Nguyen Orbital Concept):** Kartu proyek melengkung di jalur orbital (*radial arc*), dynamic depth (`rotateY`, `translateZ`, scale, z-index), navigasi drag/wheel/touch swipe.
  - **Bottom Rotary Dial Controller:** Dial busur lingkaran bawah dengan radial ticks & pointer aktif (▲ ME / project title), sinkronisasi 2 arah kartu-dial.
  - Geometri terstruktur, floating technology badges/symbols, grid asimetris presisi.

---

## 7. Arsitektur Konten & Alur Cerita
1. **Hero Section:** Editorial portrait, nama & peran identitas, value proposition ringkas, status ketersediaan.
2. **About & Philosophy:** Pernyataan identitas (TRPL, engineering mindset, communication & leadership).
3. **Engineering Showcase (Porsi Terbesar):**
   - Proyek software pilihan (problem statement, arsitektur, teknologi, repositori, live demo).
   - Penekanan pada proses rekayasa dan pemecahan masalah, bukan sekadar screenshot.
4. **Leadership & Public Speaking Track:**
   - Riwayat kegiatan berbicara, workshop, edukasi teknologi.
   - Pengalaman kepemimpinan organisasi dan dampak nyata.
5. **Technical Skillset & Stack Matrix:** Klasifikasi keahlian teknis secara jujur dan terorganisir.
6. **Footer / Contact Section:** Direct call-to-action (email, GitHub, LinkedIn, CV download).

---

## 8. Kebutuhan Fungsional & Kriteria Teknis
- **Bahasa:** Bahasa Indonesia untuk peluncuran v1 (arsitektur kode disiapkan modular/i18n ready untuk ekspansi Bahasa Inggris v2).
- **Performa & Optimasi:**
  - Zero bloat: hindari library berat yang tidak esensial.
  - Aset gambar terkompresi modern (WebP/AVIF), responsive picture tags.
  - Animasi memanfaatkan GPU-accelerated CSS transforms / lightweight canvas terisolasi.
- **Aksesibilitas & Responsiveness:** Tetap lolos standar navigasi keyboard, semantic HTML5, dan kontras warna terbaca.

---

## 9. Batasan & Skala Waktu Project
- **Deadline Keras:** 5 November 2026 (Waktu pengerjaan efektif: ~6 hari).
- **Batasan Teknologi:** Bebas (disarankan stack modern ringan dan cepat dideploy seperti Bun/Vite + React/Vanilla/Tailwind atau Astro/Next.js statis tanpa overhead server rumit).
- **Deployment:** Hosting statis performa tinggi (Vercel / Cloudflare Pages / GitHub Pages).

---

## 10. Ringkasan Status Keputusan

### Keputusan yang Disepakati (Locked)
- [x] Tujuan rilis v1: Penilaian akademik TRPL & evaluator industri.
- [x] Persona: Engineer teknis utama, didukung skill komunikasi & kepemimpinan.
- [x] Konten: Proyek software sebagai menu utama + porsi speaking & organisasi.
- [x] Showcase Interaktif: 3D Radial Card Carousel (Cuong Nguyen orbital style) + Bottom Rotary Dial controller (two-way sync).
- [x] Visual: Editorial monokrom eksperimental, tipografi besar, portrait hero.
- [x] Navigasi: Horizontal scroll eksperimental di Desktop; vertikal rapi di Mobile.
- [x] Bahasa rilis awal: Bahasa Indonesia (i18n ready).
- [x] Performa: Visual rich namun wajib lolos uji Lighthouse hijau (gabungan CSS/Canvas ringan teroptimasi).
- [x] Batasan waktu: Selesai siap tayang 5 November 2026.

### Hal yang Menunggu Input & Tindak Lanjut (Pending)
1. **Aset Materi Mentah:**
   - Foto portrait Devis untuk hero section.
   - Daftar 2–3 proyek software utama (nama proyek, deskripsi singkat, repo/link).
   - Catatan riwayat speaking & organisasi yang ingin disorot.
2. **Lokasi Workspace Project:** Direktori folder repositori yang akan digunakan di mesin lokal.
3. **Pilihan Final Tech Stack:** Ditentukan di Tahap 02 setelah brief ini disetujui.
