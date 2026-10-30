import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const FloatingNavbar: React.FC = () => {
  const { content } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, scrolledRatio)));
      setScrolled(winScroll > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#works', label: content.nav.works },
    { href: '#leadership', label: content.nav.leadership },
    { href: '#credentials', label: content.nav.credentials },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas-bg/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          aria-label="DEVIS® Home"
        >
          <span className="font-display font-extrabold text-xl tracking-tight text-text-primary group-hover:text-crimson transition-colors">
            DEVIS<span className="text-crimson text-sm align-super">®</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-text-muted border-l border-border-subtle pl-2">
            TRPL IDN
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-text-secondary hover:text-text-primary transition-colors hover:text-crimson focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm bg-surface hover:bg-surface-elevated border border-border-subtle text-text-primary hover:border-crimson transition-colors"
          >
            <span>{content.nav.contact}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-crimson" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-sm text-text-secondary hover:text-text-primary hover:bg-surface border border-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {mobileOpen ? <X className="w-5 h-5 text-crimson" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/98 border-b border-border-subtle px-4 pt-4 pb-6 transition-all duration-200 shadow-2xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-sans font-medium text-text-secondary hover:text-crimson py-2 border-b border-border-subtle/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex justify-between items-center text-xs font-mono text-text-muted">
              <span>NIM: 260558302012</span>
              <span>TRPL IDN BOGOR</span>
            </div>
          </nav>
        </div>
      )}

      {/* Hairline Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-crimson transition-all duration-100 ease-out"
          style={{ width: `${scrollPercent}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progress scroll halaman"
        />
      </div>
    </header>
  );
};
