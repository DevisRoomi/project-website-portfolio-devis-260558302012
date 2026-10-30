import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { Preloader } from './components/ui/Preloader';
import { HeroSection } from './sections/01_HeroSection';
import { AboutSection } from './sections/02_AboutSection';
import { WorksSection } from './sections/03_WorksSection';
import { LeadershipSection } from './sections/04_LeadershipSection';
import { CredentialsSection } from './sections/05_CredentialsSection';
import { ContactSection } from './sections/06_ContactSection';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <LanguageProvider>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <LeadershipSection />
        <CredentialsSection />
        <ContactSection />
      </MainLayout>
    </LanguageProvider>
  );
}
