export interface OrbitalPoint {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

export interface OrbitalConfig {
  radius: number;
  totalArcDeg: number;
  count: number;
  activeAngle: number;
}

export const calculateOrbitalTransform = (
  index: number,
  currentAngle: number,
  config: OrbitalConfig,
  prefersReducedMotion: boolean = false
): OrbitalPoint => {
  if (prefersReducedMotion) {
    return {
      x: 0,
      y: 0,
      z: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    };
  }

  const { radius, totalArcDeg, count } = config;
  const step = count > 1 ? totalArcDeg / (count - 1) : 0;
  // Position each card relative to current rotation angle
  // When currentAngle = index * step, card is at center (angle = 0)
  const baseCardAngle = index * step - (totalArcDeg / 2);
  const cardAngle = baseCardAngle + currentAngle;

  const rad = (cardAngle * Math.PI) / 180;
  const x = Math.sin(rad) * radius;
  // Z pushes back as angle moves away from center
  const z = -radius * (1 - Math.cos(rad));
  const rotateY = -cardAngle * 0.6;
  const absAngle = Math.abs(cardAngle);

  // Scale: 1.0 at center, fades down to 0.75
  const scale = Math.max(0.75, 1 - (absAngle / 120) * 0.35);
  // Opacity: 1.0 at center, drops to 0.35 at edges
  const opacity = Math.max(0.35, 1 - (absAngle / 90) * 0.65);
  // Z-index: highest at center
  const zIndex = Math.round(100 - absAngle);

  return {
    x,
    y: 0,
    z,
    rotateY,
    scale,
    opacity,
    zIndex,
  };
};

export const clamp = (val: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, val));
};
