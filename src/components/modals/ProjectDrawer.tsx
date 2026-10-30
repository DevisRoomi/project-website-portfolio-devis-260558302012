import React, { useEffect, useRef } from 'react';
import { Project } from '../../content/types';
import { X, ExternalLink, Github, CheckCircle2, Cpu } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
  labels: {
    liveDemo: string;
    sourceCode: string;
  };
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({
  project,
  onClose,
  labels,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface border-l border-border-subtle h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
            <div className="font-mono text-xs uppercase tracking-wider text-crimson">
              {project.category} // {project.year}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-sm text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              aria-label="Tutup jendela detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Preview */}
          <div className="mt-6 aspect-[16/9] overflow-hidden rounded-sm bg-canvas-bg border border-border-subtle">
            <img
              src={getAssetUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3
            id="drawer-title"
            className="mt-6 font-display font-extrabold text-2xl sm:text-3xl text-text-primary"
          >
            {project.title}
          </h3>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-elevated border border-border-subtle font-mono text-xs text-crimson">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.metrics}</span>
          </div>

          <p className="mt-6 font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Details */}
          <div className="mt-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              ARCHITECTURAL SPECIFICATIONS
            </h4>
            <ul className="space-y-3 font-sans text-sm text-text-secondary">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mt-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-sm bg-canvas-bg border border-border-subtle font-mono text-xs text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-crimson hover:bg-crimson-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              <span>{labels.liveDemo}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-surface-elevated hover:bg-canvas-bg border border-border-subtle hover:border-crimson text-text-primary font-mono text-xs uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              <span>{labels.sourceCode}</span>
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
