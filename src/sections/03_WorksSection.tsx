import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../content/types';
import { ProjectCard } from '../components/cards/ProjectCard';
import { ProjectDrawer } from '../components/modals/ProjectDrawer';
import { OrbitalCarousel } from '../components/3d/OrbitalCarousel';
import { Grid, Orbit } from 'lucide-react';

export const WorksSection: React.FC = () => {
  const { content } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'orbital' | 'grid'>('orbital');

  return (
    <section
      id="works"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle overflow-hidden"
      aria-label="Works Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-subtle">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-crimson">
              {content.works.sectionTag}
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary">
              {content.works.title}
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-text-secondary">
              {content.works.subtitle}
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div
            className="inline-flex items-center rounded-sm border border-border-subtle bg-surface p-1 text-xs font-mono self-start md:self-auto"
            role="radiogroup"
            aria-label="Tampilan Proyek"
          >
            <button
              type="button"
              role="radio"
              aria-checked={viewMode === 'orbital'}
              onClick={() => setViewMode('orbital')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-[2px] transition-colors ${
                viewMode === 'orbital'
                  ? 'bg-crimson text-white font-bold'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>{content.works.toggleOrbital}</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={viewMode === 'grid'}
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-[2px] transition-colors ${
                viewMode === 'grid'
                  ? 'bg-crimson text-white font-bold'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{content.works.toggleGrid}</span>
            </button>
          </div>
        </div>

        {/* View Mode Content */}
        <div className="mt-12">
          {viewMode === 'orbital' ? (
            <OrbitalCarousel
              projects={content.works.projects}
              onOpenDetails={(p) => setSelectedProject(p)}
              viewDetailsLabel={content.works.viewDetails}
            />
          ) : (
            /* Editorial Grid (Standard & Fallback) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.works.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                  viewDetailsLabel={content.works.viewDetails}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Case Study Details Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        labels={{
          liveDemo: content.works.liveDemo,
          sourceCode: content.works.sourceCode,
        }}
      />
    </section>
  );
};
