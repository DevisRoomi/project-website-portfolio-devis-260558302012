import { PortfolioContent } from './types';

export const idContent: PortfolioContent = {
  meta: {
    studentName: 'Abu Devis Jalaluddin Rumi',
    brandName: 'DEVIS®',
    studentId: '260558302012',
    program: 'Teknologi Rekayasa Perangkat Lunak (TRPL)',
    institution: 'Politeknik IDN Bogor',
    cohort: 'Angkatan 5',
    status: 'Mahasiswa Rekayasa Perangkat Lunak Aktif',
  },
  nav: {
    hero: 'Beranda',
    about: 'Profil',
    works: 'Karya',
    leadership: 'Kepemimpinan',
    credentials: 'Sertifikasi',
    contact: 'Kontak',
  },
  hero: {
    badge: 'TRPL // POLITEKNIK IDN BOGOR',
    headlinePart1: 'ARCHITECTURAL',
    headlinePart2: 'ENGINEERING',
    subheadline:
      'Mahasiswa Rekayasa Perangkat Lunak Politeknik IDN Bogor. Membangun sistem antarmuka web presisi tinggi, interaksi 3D performan, dan arsitektur kode tangguh.',
    ctaWorks: 'Eksplorasi Karya',
    ctaContact: 'Mulai Kolaborasi',
    coordinates: 'BOGOR // 6°35\'S 106°47\'E',
  },
  about: {
    sectionTag: '01 // PROFIL & FILOSOFI',
    title: 'Rekayasa Perangkat Lunak yang Presisi, Berkarakter, dan Berdampak.',
    leadBio:
      'Saya adalah Abu Devis Jalaluddin Rumi (DEVIS®), mahasiswa aktif program studi Teknologi Rekayasa Perangkat Lunak (TRPL) di Politeknik IDN Bogor. Saya memadukan ketelitian logika pemrograman sistem modern dengan penguasaan komunikasi publik dan kepemimpinan organisasi.',
    detailedBio:
      'Fokus rekayasa saya berakar pada performa antarmuka tingkat lanjut (GPU-accelerated CSS 3D), arsitektur modular TypeScript, dan sistem full-stack berbasis runtime Bun serta Laravel. Bagi saya, kode yang baik bukan hanya tentang fungsi yang bekerja, melainkan integritas arsitektur yang bersih, efisien, dan menyenangkan saat dioperasikan.',
    triadHeading: 'Triad Karakter & Keunggulan Komparatif',
    triad: [
      {
        title: 'Ketangguhan Teknis',
        subtitle: 'Engineering Rigor',
        description:
          'Penguasaan mendalam atas ekosistem React 19, TypeScript, Bun runtime, arsitektur RESTful API, CSS 3D Transforms, serta optimalisasi performa Core Web Vitals.',
      },
      {
        title: 'Komunikasi Artikulatif',
        subtitle: 'Articulate Delivery',
        description:
          'Pengalaman nyata sebagai penyiar radio di Fajri 99.3 FM dan pembawa acara resmi, mampu menjembatani ide teknis rumit menjadi bahasa narasi yang tegas dan persuasif.',
      },
      {
        title: 'Integritas Kepemimpinan',
        subtitle: 'Ethical Leadership',
        description:
          'Teruji memimpin kepanitiaan besar (Bazaar Amal Manaahel) serta mengelola tata kelola birokrasi dan keuangan sebagai Sekretaris & Bendahara Umum OSIS.',
      },
    ],
  },
  works: {
    sectionTag: '02 // PROYEK REKAYASA',
    title: 'Arsitektur Terpilih & Implementasi Nyata.',
    subtitle:
      'Empat studi kasus rekayasa sistem yang memvalidasi ketelitian desain, komputasi interaktif, dan keandalan data.',
    toggleOrbital: 'ORBITAL 3D',
    toggleGrid: 'EDITORIAL GRID',
    viewDetails: 'Bedah Kasus',
    liveDemo: 'Buka Live App',
    sourceCode: 'Lihat Kode',
    projects: [
      {
        id: 'p1',
        slug: 'devis-portfolio',
        title: 'DEVIS® Interactive 3D Portfolio',
        category: 'Experimental SPA // 3D Architecture',
        year: '2026',
        tagline: 'Client-side static SPA arsitektural berbasis CSS 3D radial carousel 60 FPS.',
        description:
          'Situs portofolio pribadi monokromatik arsitektural Deep Architectural Charcoal (#121316) dipadu aksen Electric Crimson (#e63946). Mengimplementasikan matematika busur parametrik 3D, two-way bottom rotary dial, bilingual context, dan fallback noscript semantik tanpa runtime database.',
        architectureDetails: [
          'Engine CSS 3D preserve-3d murni dengan akselerasi GPU hardware transform',
          'Inersia geser rotasi sudut parametrik Omega = 140 derajat untuk N=4',
          'Dua arah sinkronisasi state antara rotary needle dial dan orbital card carousel',
          'Proteksi LCP dengan preload lokal WOFF2 fonts dan gambar kritis',
        ],
        stack: ['React 19', 'TypeScript', 'Bun', 'Tailwind CSS v3', 'GSAP Core'],
        metrics: '60 FPS Smooth Render // CLS = 0.00',
        liveUrl: 'https://devisroomi.github.io/project-website-portfolio-devis-260558302012/',
        githubUrl: 'https://github.com/DevisRoomi/project-website-portfolio-devis-260558302012',
        image: '/assets/projects/devis-portfolio.svg',
      },
      {
        id: 'p2',
        slug: 'capyquest',
        title: 'CapyQuest Gamified Productivity',
        category: 'Full-Stack // Local-First App',
        year: '2026',
        tagline: 'Aplikasi gamifikasi produktivitas berkinerja tinggi dengan local-first architecture.',
        description:
          'Sistem manajemen tugas harian bergaya petualangan RPG berbasis Bun runtime dan engine server Hono yang sangat ringan. Menyediakan persistensi database lokal instan melalui bun:sqlite dan integrasi antarmuka React responsif mikrodetik.',
        architectureDetails: [
          'Arsitektur local-first dengan latensi query di bawah 2 milidetik via bun:sqlite',
          'Type-safe route handlers menggunakan Hono RPC client schema',
          'Sistem state quest modular dengan kalkulasi experience point (XP) deterministik',
        ],
        stack: ['Bun Runtime', 'Hono API', 'React 19', 'bun:sqlite', 'Tailwind CSS'],
        metrics: '< 2ms Response Time // Zero External Overhead',
        githubUrl: 'https://github.com/DevisRoomi/CapyQuest',
        image: '/assets/projects/capyquest.svg',
      },
      {
        id: 'p3',
        slug: 'basoku-pos',
        title: 'BASOKU Point of Sales & Inventory',
        category: 'Enterprise POS // Database Architecture',
        year: '2025',
        tagline: 'Sistem POS operasional toko bakso dengan manajemen transaksi dan kalkulasi stok multi-outlet.',
        description:
          'Solusi rekayasa aplikasi kasir point-of-sale lengkap yang mengotomasi pencatatan pesanan kasir, pelacakan inventaris bahan baku real-time, perancangan skema ERD relasional teroptimasi, dan pelaporan keuangan harian.',
        architectureDetails: [
          'Relational database architecture MySQL dengan integritas constraint dan indexing',
          'Komponen reaktif Livewire untuk pembaruan keranjang belanja kasir tanpa reload',
          'Audit trail transaksi keuangan dan perhitungan margin laba kotor otomatis',
        ],
        stack: ['Laravel', 'Livewire', 'MySQL', 'Alpine.js', 'Tailwind CSS'],
        metrics: 'Multi-Outlet Stock Tracking // Relational Integrity',
        githubUrl: 'https://github.com/DevisRoomi/BASOKU',
        image: '/assets/projects/basoku.svg',
      },
      {
        id: 'p4',
        slug: 'setoran-companion',
        title: 'Setoran Companion (Tahfidz Cloud)',
        category: 'Cloud Web Application // Educational Tracking',
        year: '2025',
        tagline: 'Sistem pencatatan dan monitoring setoran hafalan santri terintegrasi berbasis cloud.',
        description:
          'Platform monitoring progres tahfidz Al-Qur\'an santri yang memungkinkan pembina melacak ritme hafalan, mutabaah harian, serta analitik pencapaian juz santri secara real-time melalui antarmuka web modern.',
        architectureDetails: [
          'Data pipeline terstruktur untuk pencatatan juz, surat, ayat, dan skor kelancaran',
          'Visualisasi dashboard analitik progres santri per halaqah',
          'Deploy dan sinkronisasi cloud real-time dengan latensi rendah',
        ],
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable Cloud Engine'],
        metrics: 'Live Production // Multi-Halaqah Dashboard',
        liveUrl: 'https://setoran-companion.lovable.app/',
        image: '/assets/projects/setoran-companion.svg',
      },
    ],
  },
  leadership: {
    sectionTag: '03 // REKAM JEJAK & KEPEMIMPINAN',
    title: 'Integritas Publik, Media, dan Organisasi.',
    subtitle:
      'Rekam jejak kepemimpinan santri dan penguasaan komunikasi publik di berbagai panggung nyata.',
    items: [
      {
        id: 'l1',
        role: 'Broadcaster Radio & Host Santri Mengudara',
        organization: 'Radio Fajri FM 99.3 MHz',
        period: '2024 — 2025',
        description:
          'Bertindak sebagai penyiar radio dan host program mingguan siaran "Santri Mengudara", menyampaikan materi edukasi, wawancara narasumber, dan membawakan siaran langsung dengan artikulasi vokal profesional.',
        highlights: [
          'Mengudara secara langsung ke ribuan pendengar frekuensi Jabodetabek',
          'Memimpin dinamika diskusi interaktif siaran tanpa naskah kaku',
          'Melatih ketahanan mental dan ketepatan diksi dalam situasi live broadcast',
        ],
        image: '/assets/images/mc-santri-mengudara.jpg',
      },
      {
        id: 'l2',
        role: 'Ketua Panitia Bazaar Amal Manaahel',
        organization: 'Kepanitiaan Sosial & Kewirausahaan Santri',
        period: '2024',
        description:
          'Memimpin eksekusi kegiatan Bazaar Amal Manaahel mulai dari perencanaan logistik, alokasi stan wirausaha, koordinasi ratusan santri, hingga penggalangan dana sosial kemasyarakatan.',
        highlights: [
          'Memimpin lebih dari 40 panitia inti dalam manajemen operasional acara',
          'Mengelola arus kas stan dan pelaporan pertanggungjawaban donasi transparan',
          'Menumbuhkan kolaborasi lintas angkatan santri dan masyarakat sekitar',
        ],
        image: '/assets/images/bazaar-amal.jpg',
      },
      {
        id: 'l3',
        role: 'Sekretaris & Bendahara Umum OSIS',
        organization: 'Organisasi Santri IDN',
        period: '2023 — 2024',
        description:
          'Mengemban tanggung jawab ganda dalam tata kelola administrasi surat-menyurat resmi serta pengawasan anggaran kas seluruh divisi kegiatan santri selama satu masa kepengurusan penuh.',
        highlights: [
          'Menerapkan standarisasi dokumentasi notulensi dan arsip birokrasi santri',
          'Mengaudit dan memvalidasi pengeluaran kas divisi secara akuntabel',
          'Menjadi jembatan komunikasi strategis antara santri dan dewan asatidz',
        ],
        image: '/assets/images/osis-leadership.jpg',
      },
    ],
  },
  credentials: {
    sectionTag: '04 // KREDENSIAL & SERTIFIKASI',
    title: 'Validasi Kompetensi Berkelanjutan.',
    subtitle:
      'Daftar sertifikasi profesional terverifikasi dalam rekayasa perangkat lunak, sistem, dan fondasi keilmuan.',
    filters: {
      all: 'Semua Kredensial',
      engineering: 'Software Engineering',
      ai_systems: 'AI & Systems',
      foundations: 'Fondasi & Bahasa',
    },
    items: [
      {
        id: 'c1',
        title: 'FullStack Web Developer: Modern Architecture',
        issuer: 'SantriKoding Academy',
        year: '2025',
        category: 'engineering',
        credentialId: 'SK-FS-2025-089',
      },
      {
        id: 'c2',
        title: 'RESTful API Engineering with Laravel & Sanctum',
        issuer: 'SantriKoding Academy',
        year: '2025',
        category: 'engineering',
        credentialId: 'SK-API-2025-112',
      },
      {
        id: 'c3',
        title: 'AI for Developers & Prompt Systems',
        issuer: 'BISA AI Academy',
        year: '2025',
        category: 'ai_systems',
        credentialId: 'BAI-DEV-77341',
      },
      {
        id: 'c4',
        title: 'Fundamental Machine Learning & Predictive Analytics',
        issuer: 'BISA AI Academy',
        year: '2024',
        category: 'ai_systems',
        credentialId: 'BAI-ML-65102',
      },
      {
        id: 'c5',
        title: 'Linux System Administration & Shell Scripting',
        issuer: 'IDN Boarding School / Politeknik IDN',
        year: '2024',
        category: 'engineering',
        credentialId: 'IDN-LNX-491',
      },
      {
        id: 'c6',
        title: 'Belajar Dasar Pemrograman JavaScript',
        issuer: 'Dicoding Academy',
        year: '2024',
        category: 'foundations',
        credentialId: 'DCD-JS-092144',
      },
      {
        id: 'c7',
        title: 'Clean Code & Architectural Design Patterns',
        issuer: 'SantriKoding Pro',
        year: '2025',
        category: 'engineering',
        credentialId: 'SK-CC-2025-44',
      },
      {
        id: 'c8',
        title: 'Syahadah Tahfidz Al-Qur\'an 30 Juz & Qiraat Mutqin',
        issuer: 'Markaz Tahfidz Al-Qur\'an Santri',
        year: '2023',
        category: 'foundations',
        credentialId: 'ST-30J-MUTQIN-23',
      },
    ],
  },
  contact: {
    sectionTag: '05 // INISIASI KOLABORASI',
    title: 'Mari Membangun Solusi Rekayasa Bersama.',
    headline: 'Terbuka Untuk Kolaborasi Proyek & Peluang Rekayasa Perangkat Lunak.',
    subheadline:
      'Apakah Anda membutuhkan arsitektur web modern, visual 3D berkecepatan tinggi, atau implementasi sistem yang tangguh? Hubungi saya kapan saja.',
    emailLabel: 'SUREL RESMI',
    copyButton: 'Salin Alamat Surel',
    copiedNotice: 'Tersalin ke Clipboard!',
    socialHeading: 'JARINGAN PROFESIONAL',
    rights: 'Hak Cipta Terpelihara © 2026 Abu Devis Jalaluddin Rumi (DEVIS®).',
    colophon:
      'Dibangun dengan Bun, Vite, React 19, TypeScript, Tailwind CSS v3, GSAP Core. Dihosting di GitHub Pages.',
  },
};
