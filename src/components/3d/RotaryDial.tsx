import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface RotaryDialProps {
  totalItems: number;
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onAngleChange?: (angle: number) => void;
}

export const RotaryDial: React.FC<RotaryDialProps> = ({
  totalItems,
  activeIndex,
  onSelectIndex,
}) => {
  const dialRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startIndexRef = useRef(activeIndex);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startIndexRef.current = activeIndex;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    const threshold = 60; // px to switch item
    const indexDelta = Math.round(-deltaX / threshold);
    const nextIndex = Math.max(0, Math.min(totalItems - 1, startIndexRef.current + indexDelta));
    if (nextIndex !== activeIndex) {
      onSelectIndex(nextIndex);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onSelectIndex(Math.min(totalItems - 1, activeIndex + 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onSelectIndex(Math.max(0, activeIndex - 1));
    }
  };

  // Needle angle: -45 deg (item 0) to +45 deg (item N-1)
  const anglePerStep = totalItems > 1 ? 90 / (totalItems - 1) : 0;
  const needleAngle = -45 + activeIndex * anglePerStep;

  return (
    <div
      className="flex flex-col items-center select-none"
      aria-label="Rotary Dial Controller"
      role="slider"
      aria-valuemin={0}
      aria-valuemax={totalItems - 1}
      aria-valuenow={activeIndex}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Dial Controls Bar */}
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => onSelectIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="p-2 rounded-sm bg-surface border border-border-subtle hover:border-crimson text-text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          aria-label="Proyek sebelumnya"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Circular Semi-Arc Dial */}
        <div
          ref={dialRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`relative w-44 h-24 overflow-hidden rounded-t-full bg-surface border-t-2 border-x-2 border-border-subtle cursor-grab active:cursor-grabbing flex items-end justify-center transition-shadow ${
            isDragging ? 'border-crimson shadow-lg shadow-crimson/10' : ''
          }`}
        >
          {/* Tick markers */}
          {Array.from({ length: totalItems }).map((_, i) => {
            const tickAngle = -45 + i * anglePerStep;
            return (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectIndex(i);
                }}
                className="absolute top-1 p-2 -m-2 min-w-[28px] min-h-[28px] flex items-center justify-center focus:outline-none"
                style={{
                  transformOrigin: '50% 84px',
                  transform: `rotate(${tickAngle}deg)`,
                }}
                aria-label={`Pilih proyek 0${i + 1}`}
              >
                <span
                  className="w-1.5 h-3 rounded-full transition-all"
                  style={{
                    backgroundColor: i === activeIndex ? '#e63946' : '#636778',
                  }}
                />
              </button>
            );
          })}

          {/* Needle pivot */}
          <div
            className="w-1 h-14 bg-crimson rounded-full origin-bottom transition-transform duration-300 ease-out shadow-sm shadow-crimson/50"
            style={{
              transform: `rotate(${needleAngle}deg)`,
            }}
          />
          {/* Pivot cap */}
          <div className="absolute bottom-0 w-6 h-3 bg-surface-elevated border-t border-x border-border-subtle rounded-t-full" />
        </div>

        <button
          type="button"
          onClick={() => onSelectIndex(Math.min(totalItems - 1, activeIndex + 1))}
          disabled={activeIndex === totalItems - 1}
          className="p-2 rounded-sm bg-surface border border-border-subtle hover:border-crimson text-text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          aria-label="Proyek selanjutnya"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Numerical Step Indicator */}
      <div className="mt-3 font-mono text-xs text-text-muted flex items-center gap-3">
        <span className="text-crimson font-bold">0{activeIndex + 1}</span>
        <span>/</span>
        <span>0{totalItems}</span>
        <span className="text-border-strong">•</span>
        <span className="text-[11px] uppercase tracking-wider">ROTARY DIAL</span>
      </div>
    </div>
  );
};
