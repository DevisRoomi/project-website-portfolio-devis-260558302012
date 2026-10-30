import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Mic, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { content } = useLanguage();

  const triadIcons = [
    <Cpu className="w-5 h-5 text-crimson" />,
    <Mic className="w-5 h-5 text-crimson" />,
    <ShieldCheck className="w-5 h-5 text-crimson" />,
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle"
      aria-label="About Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-crimson">
            {content.about.sectionTag}
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary leading-tight">
            {content.about.title}
          </h2>
        </div>

        {/* Narrative Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="font-sans text-base sm:text-lg text-text-primary font-medium leading-relaxed border-l-2 border-crimson pl-6">
            {content.about.leadBio}
          </div>
          <div className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed space-y-4">
            <p>{content.about.detailedBio}</p>
            <div className="p-4 rounded-sm bg-surface border border-border-subtle font-mono text-xs text-text-muted">
              <span className="text-crimson font-bold">FOCUS AREAS:</span> React 19 • Bun Architecture • CSS 3D Transforms • RESTful Systems • Audio Broadcasting • Organizational Governance
            </div>
          </div>
        </div>

        {/* Triad Cards */}
        <div className="mt-16">
          <div className="border-t border-border-subtle pt-8 mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              {content.about.triadHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.about.triad.map((item, idx) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-sm bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-crimson/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-sm bg-canvas-bg border border-border-subtle">
                    {triadIcons[idx] || <Cpu className="w-5 h-5 text-crimson" />}
                  </div>
                  <span className="font-mono text-xs text-text-muted">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-text-primary group-hover:text-crimson transition-colors">
                  {item.title}
                </h4>
                <p className="font-mono text-xs text-crimson mt-0.5">
                  {item.subtitle}
                </p>

                <p className="mt-3 font-sans text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
