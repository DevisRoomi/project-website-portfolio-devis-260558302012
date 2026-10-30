import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Copy, Check, Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { content } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = 'abudevis5@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const socials = [
    {
      name: 'GitHub',
      handle: 'github.com/DevisRoomi',
      url: 'https://github.com/DevisRoomi',
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/devis-roomi',
      url: 'https://www.linkedin.com/in/devis-roomi/',
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: 'Instagram',
      handle: '@adevss_',
      url: 'https://instagram.com/adevss_',
      icon: <Instagram className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-sm bg-surface border border-border-subtle p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <p className="font-mono text-xs uppercase tracking-widest text-crimson">
              {content.contact.sectionTag}
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary leading-[1.05]">
              {content.contact.headline}
            </h2>
            <p className="mt-6 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {content.contact.subheadline}
            </p>

            {/* Email Copy Box */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-sm bg-canvas-bg border border-border-subtle font-mono text-sm sm:text-base text-text-primary select-all">
                <Mail className="w-4 h-4 text-crimson shrink-0" />
                <span>{email}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-crimson hover:bg-crimson-hover text-white shadow-lg shadow-crimson/20'
                }`}
                aria-label={content.contact.copyButton}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{content.contact.copiedNotice}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{content.contact.copyButton}</span>
                  </>
                )}
              </button>
            </div>

            {/* Socials & Networks */}
            <div className="mt-12 pt-8 border-t border-border-subtle">
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
                {content.contact.socialHeading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-sm bg-canvas-bg hover:bg-surface-elevated border border-border-subtle hover:border-crimson/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-text-muted group-hover:text-crimson transition-colors">
                        {soc.icon}
                      </span>
                      <div>
                        <div className="font-mono text-xs text-text-primary group-hover:text-crimson transition-colors">
                          {soc.name}
                        </div>
                        <div className="font-mono text-[11px] text-text-muted">
                          {soc.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
