import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../../content/types';
import { calculateOrbitalTransform, clamp } from '../../animations/orbitalMath';
import { getAssetUrl } from '../../utils/assets';
import { RotaryDial } from './RotaryDial';
import { Layers, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface OrbitalCarouselProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
  viewDetailsLabel: string;
}

export const OrbitalCarousel: React.FC<OrbitalCarouselProps> = ({
  projects,
  onOpenDetails,
  viewDetailsLabel,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const currentOffsetRef = useRef(0);

  const count = projects.length;
  const totalArcDeg = 140;
  const stepDeg = count > 1 ? totalArcDeg / (count - 1) : 0;

  // Responsive radius
  const [radius, setRadius] = useState(480);

  useEffect(() => {
    const checkMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    };

    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(320);
      else if (w < 1024) setRadius(400);
      else setRadius(520);
    };

    checkMotion();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute base current angle from active index
  // When activeIndex = 0, currentAngle centers item 0
  const targetAngle = -(activeIndex * stepDeg - totalArcDeg / 2);
  const effectiveAngle = targetAngle + dragOffset;

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentOffsetRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    // Scale deltaX to degrees
    const degDelta = (deltaX / 10);
    currentOffsetRef.current = degDelta;
    setDragOffset(degDelta);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }

    // Determine if drag crossed threshold to switch index
    const threshold = stepDeg * 0.3;
    const delta = currentOffsetRef.current;
    if (delta > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (delta < -threshold && activeIndex < count - 1) {
      setActiveIndex(activeIndex + 1);
    }
    setDragOffset(0);
  };

  const handleIndexSelect = (index: number) => {
    setActiveIndex(index);
    setDragOffset(0);
  };

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* 3D Stage Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-full h-[480px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible perspective-stage"
        style={{
          perspective: '1200px',
        }}
        aria-label="3D Orbital Card Carousel"
      >
        {/* Orbital Center Cards */}
        <div className="relative w-[300px] sm:w-[380px] h-[380px] sm:h-[440px] preserve-3d">
          {projects.map((project, idx) => {
            const transform = calculateOrbitalTransform(
              idx,
              effectiveAngle,
              { radius, totalArcDeg, count, activeAngle: 0 },
              prefersReducedMotion
            );

            const isCurrent = idx === activeIndex;

            return (
              <div
                key={project.id}
                onClick={(e) => {
                  if (Math.abs(currentOffsetRef.current) > 2) return;
                  if (!isCurrent) {
                    e.stopPropagation();
                    handleIndexSelect(idx);
                  }
                }}
                className={`absolute inset-0 rounded-sm bg-surface border transition-all duration-300 ${
                  isCurrent
                    ? 'border-crimson shadow-2xl shadow-crimson/10 ring-1 ring-crimson/30'
                    : 'border-border-subtle hover:border-border-strong opacity-60'
                }`}
                style={{
                  transform: `translate3d(${transform.x}px, ${transform.y}px, ${transform.z}px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                  willChange: isDragging ? 'transform, opacity' : 'auto',
                }}
              >
                <div className="p-5 flex flex-col justify-between h-full bg-gradient-to-b from-surface to-canvas-bg rounded-[2px]">
                  {/* Card Header & Preview */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-canvas-bg border border-border-subtle mb-4">
                      <img
                        src={getAssetUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-[2px] bg-canvas-bg/90 font-mono text-[10px] text-crimson">
                        {project.year}
                      </div>
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-wider text-crimson">
                      {project.category}
                    </p>
                    <h3 className="mt-1 font-display font-bold text-lg sm:text-xl text-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs text-text-secondary line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetails(project);
                      }}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary hover:text-crimson transition-colors"
                      aria-label={`${viewDetailsLabel}: ${project.title}`}
                    >
                      <Layers className="w-3.5 h-3.5 text-crimson" />
                      <span>{viewDetailsLabel}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 text-text-muted hover:text-text-primary"
                          aria-label={`GitHub Repository: ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 text-text-muted hover:text-crimson"
                          aria-label={`Live Demo: ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-Way Rotary Dial Controller */}
      <div className="mt-4 w-full flex justify-center">
        <RotaryDial
          totalItems={count}
          activeIndex={activeIndex}
          onSelectIndex={handleIndexSelect}
        />
      </div>
    </div>
  );
};
