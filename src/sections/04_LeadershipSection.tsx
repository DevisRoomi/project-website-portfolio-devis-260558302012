import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Radio, Award } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const LeadershipSection: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle"
      aria-label="Leadership Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-crimson">
            {content.leadership.sectionTag}
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary">
            {content.leadership.title}
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base text-text-secondary">
            {content.leadership.subtitle}
          </p>
        </div>

        {/* Leadership Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.leadership.items.map((item, idx) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-sm bg-surface border border-border-subtle hover:border-crimson/50 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-canvas-bg">
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.role}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-[2px] bg-canvas-bg/90 backdrop-blur-sm border border-border-subtle font-mono text-[11px] text-crimson flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block">
                      {item.organization}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-crimson transition-colors">
                    {item.role}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-3">
                      IMPACT HIGHLIGHTS
                    </span>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs font-sans text-text-secondary"
                        >
                          <span className="text-crimson font-mono font-bold mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted border-t border-border-subtle pt-3">
                  <span>LEADERSHIP RECORD</span>
                  <span className="text-crimson">0{idx + 1} // VERIFIED</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
