import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDownRight, Compass, Terminal } from 'lucide-react';
import { initSectionReveal } from '../animations/gsapTimeline';

export const HeroSection: React.FC = () => {
  const { content } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSectionReveal(heroRef.current, 0.2);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-border-subtle"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto w-full py-12 lg:py-20">
        {/* Top Meta Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border-subtle font-mono text-xs text-crimson">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            <span>{content.hero.badge}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Compass className="w-3.5 h-3.5 text-text-muted" />
            <span>{content.hero.coordinates}</span>
          </div>
        </div>

        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="overflow-hidden">
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-text-primary leading-[0.95]">
                {content.hero.headlinePart1}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-secondary to-text-muted">
                  {content.hero.headlinePart2}
                </span>
              </h1>
            </div>

            <p className="mt-8 font-sans text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              {content.hero.subheadline}
            </p>

            {/* Micro Specs */}
            <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-text-muted border-t border-border-subtle pt-4">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-crimson" />
                <span>NIM: {content.meta.studentId}</span>
              </div>
              <span className="text-border-strong">•</span>
              <div>{content.meta.cohort}</div>
              <span className="text-border-strong">•</span>
              <div className="text-text-secondary">{content.meta.studentName}</div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-crimson hover:bg-crimson-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-crimson/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              >
                <span>{content.hero.ctaWorks}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-crimson text-text-primary font-mono text-xs uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              >
                <span>{content.hero.ctaContact}</span>
              </a>
            </div>
          </div>

          {/* Hero Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-sm p-3 bg-surface border border-border-subtle shadow-2xl">
              {/* Corner crosshairs */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-crimson" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-crimson" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-crimson" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-crimson" />

              <div className="w-full h-full overflow-hidden rounded-[2px] bg-canvas-bg relative group">
                <img
                  src="/assets/images/devis-portrait.png"
                  alt={`Potret profesional ${content.meta.studentName}`}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-bg via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-surface/90 backdrop-blur-sm border border-border-subtle rounded-sm">
                  <div className="font-mono text-xs font-bold text-text-primary">
                    {content.meta.studentName}
                  </div>
                  <div className="font-mono text-[11px] text-crimson">
                    {content.meta.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
