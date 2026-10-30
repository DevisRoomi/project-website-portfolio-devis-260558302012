import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section id="hero" className="py-20 text-center">
            <h1 className="text-4xl font-display font-black text-text-primary">
              DEVIS<span className="text-crimson">®</span> CORE FOUNDATION READY
            </h1>
            <p className="mt-4 text-text-muted font-mono text-sm">
              Phase 1 layout, navigation, typography, and bilingual dictionaries verified.
            </p>
          </section>
        </div>
      </MainLayout>
    </LanguageProvider>
  );
}
