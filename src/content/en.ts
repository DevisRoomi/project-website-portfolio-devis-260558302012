import { PortfolioContent } from './types';

export const enContent: PortfolioContent = {
  meta: {
    studentName: 'Abu Devis Jalaluddin Rumi',
    brandName: 'DEVIS®',
    studentId: '260558302012',
    program: 'Software Engineering Technology (TRPL)',
    institution: 'Politeknik IDN Bogor',
    cohort: 'Cohort 5',
    status: 'Active Software Engineering Student',
  },
  nav: {
    hero: 'Home',
    about: 'About',
    works: 'Works',
    leadership: 'Leadership',
    credentials: 'Credentials',
    contact: 'Contact',
  },
  hero: {
    badge: 'TRPL // POLITEKNIK IDN BOGOR',
    headlinePart1: 'ARCHITECTURAL',
    headlinePart2: 'ENGINEERING',
    subheadline:
      'Software Engineering student at Politeknik IDN Bogor. Architecting precision web interfaces, performant 3D interactions, and robust code systems.',
    ctaWorks: 'Explore Works',
    ctaContact: 'Start Conversation',
    coordinates: 'BOGOR // 6°35\'S 106°47\'E',
  },
  about: {
    sectionTag: '01 // PROFILE & PHILOSOPHY',
    title: 'Precision Software Engineering with Character and Impact.',
    leadBio:
      'I am Abu Devis Jalaluddin Rumi (DEVIS®), an active undergraduate student in Software Engineering Technology (TRPL) at Politeknik IDN Bogor. I unite analytical system engineering rigor with articulate public speaking and leadership experience.',
    detailedBio:
      'My engineering focus centers on high-performance web graphics (GPU-accelerated CSS 3D), strict TypeScript modular architectures, and resilient full-stack systems with Bun and Laravel runtimes. Clean architecture is not merely about functionality—it is about endurance, clarity, and operational elegance.',
    triadHeading: 'Character Triad & Comparative Advantage',
    triad: [
      {
        title: 'Technical Rigor',
        subtitle: 'Engineering Depth',
        description:
          'Deep fluency in React 19, strict TypeScript, Bun runtime, RESTful API design, CSS 3D Transforms, and aggressive Core Web Vitals optimization.',
      },
      {
        title: 'Articulate Delivery',
        subtitle: 'Public Speaking',
        description:
          'Proven track record as a live radio broadcaster on Fajri 99.3 FM and master of ceremonies, translating complex engineering into compelling communication.',
      },
      {
        title: 'Ethical Leadership',
        subtitle: 'Organizational Stewardship',
        description:
          'Tested in leading massive social initiatives (Manaahel Charity Bazaar) and executing administrative & financial governance as OSIS General Secretary & Treasurer.',
      },
    ],
  },
  works: {
    sectionTag: '02 // ENGINEERING WORKS',
    title: 'Selected Architectures & Concrete Implementations.',
    subtitle:
      'Four software engineering case studies validating rigorous systems design, interactive 3D physics, and data reliability.',
    toggleOrbital: 'ORBITAL 3D',
    toggleGrid: 'EDITORIAL GRID',
    viewDetails: 'Case Study',
    liveDemo: 'Live App',
    sourceCode: 'Source Code',
    projects: [
      {
        id: 'p1',
        slug: 'devis-portfolio',
        title: 'DEVIS® Interactive 3D Portfolio',
        category: 'Experimental SPA // 3D Architecture',
        year: '2026',
        tagline: 'Client-side static architectural SPA powered by CSS 3D radial carousel at 60 FPS.',
        description:
          'A personal architectural portfolio website rendered in Deep Architectural Charcoal (#121316) and Electric Crimson (#e63946). Features parametric 3D arc mathematics, two-way bottom rotary dial, bilingual state, and semantic noscript fallback with zero runtime database dependencies.',
        architectureDetails: [
          'Pure CSS 3D preserve-3d engine with hardware-accelerated GPU transforms',
          'Inertial swipe angle math with total arc Omega = 140 degrees for N=4',
          'Bidirectional reactive synchronization between rotary needle dial and 3D orbital cards',
          'LCP defense via local WOFF2 font and critical asset preloading',
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
        tagline: 'High-performance gamified productivity system with local-first architecture.',
        description:
          'A quest-driven daily habit and task manager engineered on Bun runtime and ultra-lean Hono server. Features sub-millisecond local database persistence via bun:sqlite and reactive React interface.',
        architectureDetails: [
          'Local-first architecture achieving sub-2ms query response times via bun:sqlite',
          'Type-safe route handlers powered by Hono RPC client schemas',
          'Deterministic XP progression state engine and modular quest lifecycle',
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
        tagline: 'Commercial point-of-sale operational system with multi-outlet inventory calculations.',
        description:
          'Comprehensive POS engineering solution automating counter transactions, real-time raw material inventory deductions, normalized relational ERD architecture, and automated margin reporting.',
        architectureDetails: [
          'Relational MySQL schema with strict foreign key constraints and index optimization',
          'Livewire reactive state components for zero-refresh cashier cart operations',
          'Immutable financial audit logging and automated gross profit margins',
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
        tagline: 'Integrated cloud-based Quran memorization tracking and monitoring system.',
        description:
          'Real-time student progress tracking platform allowing mentors to monitor memorization cadence, daily review consistency, and comprehensive cohort metrics through an intuitive interface.',
        architectureDetails: [
          'Structured data pipeline logging juz, surah, ayah, and fluency scoring',
          'Cohort-level analytics dashboard visualizing retention benchmarks',
          'Low-latency cloud deployment and real-time state synchronization',
        ],
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable Cloud Engine'],
        metrics: 'Live Production // Multi-Halaqah Dashboard',
        liveUrl: 'https://setoran-companion.lovable.app/',
        image: '/assets/projects/setoran-companion.svg',
      },
    ],
  },
  leadership: {
    sectionTag: '03 // TRACK RECORD & LEADERSHIP',
    title: 'Public Integrity, Broadcasting, and Governance.',
    subtitle:
      'Proven student leadership and public speaking mastery across live broadcast stages and organizations.',
    items: [
      {
        id: 'l1',
        role: 'Radio Broadcaster & Santri Mengudara Host',
        organization: 'Radio Fajri FM 99.3 MHz',
        period: '2024 — 2025',
        description:
          'Served as weekly radio host for "Santri Mengudara", delivering educational programming, guest interviews, and live broadcast moderation with clear articulation and composure.',
        highlights: [
          'Broadcast live across the Greater Jakarta (Jabodetabek) metropolitan listener base',
          'Moderated dynamic and unscripted talk-show discussions with poise',
          'Developed mental resilience, voice modulation, and rapid editorial agility',
        ],
        image: '/assets/images/mc-santri-mengudara.jpg',
      },
      {
        id: 'l2',
        role: 'Chairperson of Manaahel Charity Bazaar',
        organization: 'Student Social Enterprise Committee',
        period: '2024',
        description:
          'Led end-to-end execution of the Manaahel Charity Bazaar, orchestrating logistics, commercial booths, student volunteer corps, and transparent fundraising for community causes.',
        highlights: [
          'Directed 40+ committee members across logistics, finance, and security',
          'Accounted for enterprise booth cashflow and published audited reports',
          'Bridged relations between student cohorts and neighboring residential communities',
        ],
        image: '/assets/images/bazaar-amal.jpg',
      },
      {
        id: 'l3',
        role: 'OSIS General Secretary & Treasurer',
        organization: 'IDN Student Government Organization',
        period: '2023 — 2024',
        description:
          'Exercised dual governance over official institutional communications, organizational archives, and division budget approvals for a full annual leadership term.',
        highlights: [
          'Standardized digital administrative archives and minute-taking guidelines',
          'Audited division spending with strict accountability safeguards',
          'Acted as primary liaison between the student body and faculty directors',
        ],
        image: '/assets/images/osis-leadership.jpg',
      },
    ],
  },
  credentials: {
    sectionTag: '04 // CREDENTIALS & CERTIFICATIONS',
    title: 'Continuous Competency Verification.',
    subtitle:
      'Verified professional certifications in software engineering, intelligent systems, and core foundations.',
    filters: {
      all: 'All Credentials',
      engineering: 'Software Engineering',
      ai_systems: 'AI & Systems',
      foundations: 'Foundations & Language',
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
        title: 'Basic JavaScript Programming Certification',
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
        title: '30 Juz Quran Memorization & Recitation Verification',
        issuer: 'Markaz Tahfidz Al-Qur\'an Santri',
        year: '2023',
        category: 'foundations',
        credentialId: 'ST-30J-MUTQIN-23',
      },
    ],
  },
  contact: {
    sectionTag: '05 // INITIATE COLLABORATION',
    title: 'Let Us Engineer Exceptional Solutions Together.',
    headline: 'Open For Engineering Collaborations & Software Opportunities.',
    subheadline:
      'Whether you require high-precision web architectures, performant 3D graphics, or resilient full-stack systems, feel free to reach out.',
    emailLabel: 'OFFICIAL EMAIL',
    copyButton: 'Copy Email Address',
    copiedNotice: 'Copied to Clipboard!',
    socialHeading: 'PROFESSIONAL NETWORKS',
    rights: 'All Rights Reserved © 2026 Abu Devis Jalaluddin Rumi (DEVIS®).',
    colophon:
      'Engineered with Bun, Vite, React 19, TypeScript, Tailwind CSS v3, GSAP Core. Hosted on GitHub Pages.',
  },
};
