import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const duration = 650; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const ratio = Math.min(1, elapsed / duration);
      // Easing out cubic
      const eased = 1 - Math.pow(1 - ratio, 3);
      const currentVal = Math.round(eased * 100);
      setProgress(currentVal);

      if (ratio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-12 bg-canvas-bg text-text-primary transition-all duration-500 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading portfolio experience"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-crimson animate-ping" />
          <span>SYSTEM_INIT // TRPL IDN BOGOR</span>
        </div>
        <div>NIM: 260558302012</div>
      </div>

      {/* Center Typographic Brand */}
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-crimson block mb-2">
          CLIENT-SIDE ARCHITECTURE
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight">
          DEVIS<span className="text-crimson">®</span>
        </h1>
        <p className="mt-2 font-mono text-xs sm:text-sm text-text-muted">
          PREPARING 3D ORBITAL STAGE &amp; EDITORIAL ENGINE
        </p>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div>
        <div className="flex items-baseline justify-between mb-3 font-mono">
          <span className="text-xs text-text-muted">BUILD 2026.10</span>
          <span className="font-display font-black text-5xl sm:text-7xl text-text-primary">
            {progress.toString().padStart(2, '0')}<span className="text-crimson text-2xl">%</span>
          </span>
        </div>
        <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-crimson transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
