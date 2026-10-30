import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { content } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-surface/40 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-xl text-text-primary tracking-tight">
              DEVIS<span className="text-crimson">®</span>
            </span>
            <span className="text-xs font-mono text-crimson px-2 py-0.5 rounded-sm bg-surface-elevated border border-border-subtle">
              NIM: {content.meta.studentId}
            </span>
          </div>
          <p className="mt-2 text-xs text-text-muted max-w-md font-sans">
            {content.contact.colophon}
          </p>
          <p className="mt-1 text-xs text-text-muted font-mono">
            {content.contact.rights}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-left sm:text-right font-mono text-xs text-text-muted">
            <p className="text-text-secondary">{content.meta.institution}</p>
            <p className="text-text-muted">{content.meta.program}</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-sm bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-crimson text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            aria-label="Kembali ke atas halaman"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-crimson" />
          </button>
        </div>
      </div>
    </footer>
  );
};
