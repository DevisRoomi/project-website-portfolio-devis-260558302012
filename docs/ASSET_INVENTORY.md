# ASSET INVENTORY & ASSET MANAGEMENT SYSTEM
**Project:** DEVIS® Personal Portfolio
**Stage:** 02 - Content & Asset Collection
**Pemilik:** Abu Devis Jalaluddin Rumi

---

## 1. Sistem Pengelolaan Aset (Target Struktur Folder)

Aset akan disimpan dan diorganisir di dalam repositori:

```text
public/
└── assets/
    ├── images/
    │   ├── profile/          # Foto portrait hero & foto profil alternatif
    │   ├── projects/         # Mockup, thumbnail, dan tangkapan layar proyek
    │   ├── activities/       # Dokumentasi public speaking & organisasi
    │   ├── certificates/     # Thumbnail / preview dokumen sertifikasi
    │   └── branding/         # Monogram DEVIS®, favicon, watermark
    └── docs/
        ├── cv/               # Resume / Curriculum Vitae format PDF
        └── certificates/     # File PDF sertifikat terverifikasi
```

---

## 2. Inventaris Aset Teridentifikasi

### A. Foto Profil & Hero Portrait
| Nama Aset | Kegunaan | Format Asal | Format Target | Resolusi / Rasio | Lokasi Sumber Saat Ini | Status |
|---|---|---|---|---|---|---|
| `hero-portrait-devis` | Foto utama hero section (efek depth/duotone) | JPEG | WebP / AVIF | 6000x3376 (Rasio 3:4 atau 16:9 crop) | `Downloads/DSC04315.JPG` (Sony Alpha) | Siap Dioptimasi |
| `portrait-alt-01` | Foto cadangan / angle sekunder | JPEG | WebP | 6000x3376 | `Downloads/DSC04316.JPG` | Siap |
| `portrait-alt-02` | Foto cadangan ekspresi alternatif | JPEG | WebP | 6000x3376 | `Downloads/DSC04317.JPG` | Siap |
| `id-formal-portrait` | Foto formal kartu / identitas TRPL | PNG | WebP | 2000x1414 | `Downloads/497_Abu_Devis_Jalaluddin_Rumi.png` | Siap |

### B. Aset Visual Proyek (Showcase 3D Carousel)
| Nama Aset | Proyek Terkait | Format Target | Rasio Disarankan | Lokasi Sumber Saat Ini | Status |
|---|---|---|---|---|---|
| `capyquest-thumb` | CapyQuest RPG Habit | JPG / WebP | 1048x700 (16:10) | `Desktop/bun hono react.santricode/thumbnail_1048x700.jpg` | Lengkap & Siap |
| `basoku-architecture` | BASOKU F&B System | JPG / WebP | 16:9 Landscape | `Desktop/BASOKU/dbdiagram-devis_page-0001.jpg` | Lengkap & Siap |
| `tahfidz-preview` | Setoran Tahfidz Cloud | WebP / PNG | 16:10 Card | Tangkapan layar dari `setoran-companion.lovable.app` | Perlu Screenshot |
| `portfolio-3d-mock` | DEVIS® 3D Portfolio | WebP / SVG | 16:10 Card | Dynamic orbital canvas render | Dibuat saat coding |

### C. Dokumentasi Public Speaking & Organisasi
| Nama Aset | Kegiatan | Rasio | Lokasi Sumber Saat Ini | Status |
|---|---|---|---|---|
| `speaking-mc-radio` | MC Acara Santri Mengudara | 4:3 | `Pictures/Foto/MC acara Santri Mengudara.jpeg` | Tersedia |
| `speaking-radio-broadcaster` | Siaran Radio Santri Mengudara | 4:3 | `Pictures/Foto/Acara Siaran Radio.jpeg` | Tersedia |
| `speaking-pidato-pekan-ukhuwwah` | Lomba Pidato Pekan Ukhuwwah | 4:3 | `Pictures/Foto/Lomba Pidato Pekan Ukhuwwah.jpeg` | Tersedia |
| `speaking-hayya-fest` | Pesan & Kesan Hayya Fest | 4:3 | `Pictures/Foto/Pemberian pesan dan kesan lomba hayya fest 1.jpeg` | Tersedia |
| `org-osis-presidium` | Foto Pengurus / BPH OSIS | 16:9 | `Pictures/Foto/Foto Bersama Para Ketua Divisi Osis.jpeg` | Tersedia |
| `org-bazaar-manaahel` | Bazaar Amal Manaahel | 4:3 | `Pictures/Foto/Bazaar Amal Manaahel.jpeg` | Tersedia |

### D. Dokumen Sertifikasi (25+ Rekam Jejak Terverifikasi)
| Dokumen Sertifikat | Penerbit / Lembaga | Lokasi File Asli | Format | Status |
|---|---|---|---|---|
| Bun, Hono & React | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Bun, Hono & Vue | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Golang & React | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Golang & Vue | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Rust & Vue | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Next.js Modern Architecture | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| React Mastery (React Rush) | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Express.js & React | SantriKoding | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Responsive Web Design | FreeCodeCamp | `Documents/sertifikat kuliah/serti verif/` | PDF | Tersedia |
| Masterclass Laravel | Bisa.AI | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| Artificial Intelligence | Bisa.AI | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| Open Source Development | The Linux Foundation | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| Computer Science | The Linux Foundation | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| Software Engineering Prep | RevoU Tech Academy | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| AI Foundations Microsoft Fabric | Microsoft / METC | `Documents/sertifikat kuliah/` | PDF | Tersedia |
| Syahadah Tahfidz Al-Qur'an | Pesantren | `narzo 50A/storage/Download/pdf_split_per_halaman/` | PDF | Tersedia |
| Dauroh Bahasa Arab | Lembaga Bahasa | `narzo 50A/storage/Download/pdf_split_per_halaman/` | PDF | Tersedia |
| Kompilasi Sertifikat Lengkap (13MB) | Bundel Arsip | `Downloads/semua sertifikat Devis 18-07-2026 14.10.pdf` | PDF | Tersedia |

---

## 3. Rencana Optimasi Aset Sebelum Digunakan di Web
1. **Kompresi Gambar Otomatis:**
   - Foto Sony 6000x3376 (~4.6MB) akan dikonversi ke WebP responsif (lebar 1600px untuk desktop retina, bobot < 200KB).
2. **Pemberian Lazy-Loading & Async Decoding:**
   - Semua gambar non-hero dimuat dengan atribut `loading="lazy"` dan `decoding="async"` agar tidak menahan FID/LCP.
3. **Penyajian Dokumen:**
   - File PDF sertifikat dan CV disiapkan di direktori publik untuk preview di dalam modal drawer interaktif.
