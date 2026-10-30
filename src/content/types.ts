export type Language = 'id' | 'en';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  architectureDetails: string[];
  stack: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'engineering' | 'ai_systems' | 'foundations';
  credentialId?: string;
  image?: string;
}

export interface PortfolioContent {
  meta: {
    studentName: string;
    brandName: string;
    studentId: string;
    program: string;
    institution: string;
    cohort: string;
    status: string;
  };
  nav: {
    hero: string;
    about: string;
    works: string;
    leadership: string;
    credentials: string;
    contact: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    ctaWorks: string;
    ctaContact: string;
    coordinates: string;
  };
  about: {
    sectionTag: string;
    title: string;
    leadBio: string;
    detailedBio: string;
    triadHeading: string;
    triad: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  works: {
    sectionTag: string;
    title: string;
    subtitle: string;
    toggleOrbital: string;
    toggleGrid: string;
    viewDetails: string;
    liveDemo: string;
    sourceCode: string;
    projects: Project[];
  };
  leadership: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: LeadershipItem[];
  };
  credentials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      engineering: string;
      ai_systems: string;
      foundations: string;
    };
    items: CertificateItem[];
  };
  contact: {
    sectionTag: string;
    title: string;
    headline: string;
    subheadline: string;
    emailLabel: string;
    copyButton: string;
    copiedNotice: string;
    socialHeading: string;
    rights: string;
    colophon: string;
  };
}
