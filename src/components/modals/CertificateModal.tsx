import React, { useEffect } from 'react';
import { CertificateItem } from '../../content/types';
import { X, Award, ShieldCheck, Check } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-surface border border-border-subtle rounded-sm p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          aria-label="Tutup jendela sertifikat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-sm bg-canvas-bg border border-border-subtle text-crimson">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-crimson block">
              OFFICIAL CREDENTIAL VERIFICATION
            </span>
            <span className="font-mono text-xs text-text-muted">
              {certificate.year} // {certificate.category.toUpperCase()}
            </span>
          </div>
        </div>

        <h3
          id="cert-title"
          className="font-display font-extrabold text-2xl text-text-primary leading-snug"
        >
          {certificate.title}
        </h3>

        <div className="mt-6 space-y-3 font-sans text-sm text-text-secondary border-t border-border-subtle pt-6">
          <div className="flex justify-between items-center py-2 border-b border-border-subtle/50">
            <span className="font-mono text-xs text-text-muted">ISSUING BODY</span>
            <span className="font-medium text-text-primary">{certificate.issuer}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border-subtle/50">
            <span className="font-mono text-xs text-text-muted">CREDENTIAL ID</span>
            <span className="font-mono text-xs text-crimson bg-canvas-bg px-2 py-0.5 rounded-[2px] border border-border-subtle">
              {certificate.credentialId || 'VERIFIED-BY-RECORD'}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-mono text-xs text-text-muted">STATUS</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>AUTHENTIC // ARCHIVED</span>
            </span>
          </div>
        </div>

        <div className="mt-8 pt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-surface-elevated hover:bg-canvas-bg border border-border-subtle hover:border-crimson text-text-primary font-mono text-xs uppercase tracking-wider transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
