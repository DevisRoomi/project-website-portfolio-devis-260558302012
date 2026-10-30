import React from 'react';
import { Project } from '../../content/types';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  viewDetailsLabel: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  viewDetailsLabel,
}) => {
  return (
    <article className="group relative flex flex-col justify-between rounded-sm bg-surface border border-border-subtle hover:border-crimson/50 transition-all duration-300 p-6">
      {/* Visual Header */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-canvas-bg border border-border-subtle mb-5">
          <img
            src={getAssetUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-[2px] bg-canvas-bg/90 backdrop-blur-sm border border-border-subtle font-mono text-[11px] text-crimson">
            {project.year}
          </div>
        </div>

        {/* Category & Title */}
        <p className="font-mono text-[11px] uppercase tracking-wider text-crimson">
          {project.category}
        </p>
        <h3 className="mt-1 font-display font-bold text-xl text-text-primary group-hover:text-crimson transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 font-sans text-sm text-text-secondary leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-[2px] bg-surface-elevated border border-border-subtle font-mono text-[11px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary hover:text-crimson transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          aria-label={`${viewDetailsLabel}: ${project.title}`}
        >
          <Layers className="w-3.5 h-3.5 text-crimson" />
          <span>{viewDetailsLabel}</span>
        </button>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-muted hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              aria-label={`Source code on GitHub for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-text-muted hover:text-crimson transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
