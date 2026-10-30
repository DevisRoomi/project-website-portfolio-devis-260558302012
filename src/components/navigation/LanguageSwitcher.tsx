import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-sm border border-border-subtle bg-surface p-0.5 text-xs font-mono font-medium"
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('id')}
        className={`px-2 py-1 rounded-[2px] transition-colors duration-150 ${
          language === 'id'
            ? 'bg-crimson text-text-primary font-bold shadow-sm'
            : 'text-text-muted hover:text-text-primary'
        }`}
        aria-pressed={language === 'id'}
        aria-label="Beralih ke Bahasa Indonesia"
      >
        ID
      </button>
      <span className="text-border-strong px-0.5">/</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-[2px] transition-colors duration-150 ${
          language === 'en'
            ? 'bg-crimson text-text-primary font-bold shadow-sm'
            : 'text-text-muted hover:text-text-primary'
        }`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
