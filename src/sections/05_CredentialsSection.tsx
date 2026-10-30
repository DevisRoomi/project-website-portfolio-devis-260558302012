import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CertificateItem } from '../content/types';
import { CertificateModal } from '../components/modals/CertificateModal';
import { Award, CheckCircle2, Filter } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const { content } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'ai_systems' | 'foundations'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredItems = content.credentials.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="credentials"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle"
      aria-label="Credentials Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-subtle">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-crimson">
              {content.credentials.sectionTag}
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary">
              {content.credentials.title}
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-text-secondary">
              {content.credentials.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2 font-mono text-xs"
            role="tablist"
            aria-label="Filter kategori kredensial"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-sm transition-colors border ${
                activeFilter === 'all'
                  ? 'bg-crimson border-crimson text-white font-bold'
                  : 'bg-surface border-border-subtle text-text-muted hover:text-text-primary'
              }`}
            >
              {content.credentials.filters.all}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'engineering'}
              onClick={() => setActiveFilter('engineering')}
              className={`px-3 py-1.5 rounded-sm transition-colors border ${
                activeFilter === 'engineering'
                  ? 'bg-crimson border-crimson text-white font-bold'
                  : 'bg-surface border-border-subtle text-text-muted hover:text-text-primary'
              }`}
            >
              {content.credentials.filters.engineering}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'ai_systems'}
              onClick={() => setActiveFilter('ai_systems')}
              className={`px-3 py-1.5 rounded-sm transition-colors border ${
                activeFilter === 'ai_systems'
                  ? 'bg-crimson border-crimson text-white font-bold'
                  : 'bg-surface border-border-subtle text-text-muted hover:text-text-primary'
              }`}
            >
              {content.credentials.filters.ai_systems}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'foundations'}
              onClick={() => setActiveFilter('foundations')}
              className={`px-3 py-1.5 rounded-sm transition-colors border ${
                activeFilter === 'foundations'
                  ? 'bg-crimson border-crimson text-white font-bold'
                  : 'bg-surface border-border-subtle text-text-muted hover:text-text-primary'
              }`}
            >
              {content.credentials.filters.foundations}
            </button>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="group cursor-pointer p-6 rounded-sm bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              aria-label={`Lihat detail sertifikasi: ${cert.title}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-sm bg-canvas-bg border border-border-subtle text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">
                    {cert.year}
                  </span>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-crimson block mb-1">
                  {cert.category.replace('_', ' ')}
                </span>
                <h3 className="font-display font-bold text-base text-text-primary group-hover:text-crimson transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-text-secondary">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[11px] text-text-muted">
                <span>ID: {cert.credentialId ? cert.credentialId.slice(0, 10) + '...' : 'VERIFIED'}</span>
                <span className="text-crimson group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
